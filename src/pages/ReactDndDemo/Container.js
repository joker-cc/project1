import React, { useState, useCallback } from 'react'
import { produce } from 'immer';
import { Card } from './Card'

export const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text:
        'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
  ])

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      // 获取dragIndex对应的元素dragCard
      const dragCard = cards[dragIndex]

      setCards(
        produce(cards, draft => {
          draft.splice(dragIndex, 1)
          draft.splice(hoverIndex, 0, dragCard)
        })
      )
    },
    [cards],
  )

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    )
  }

  return (
    <>
      <div>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  )
}
