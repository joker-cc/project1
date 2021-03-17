/*
 * @Description: 3 核心层Card
 * @Date: 2021-01-28 17:30:24
 * @LastEditTime: 2021-02-03 10:07:19
 */
import React, { useRef } from 'react'
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { XYCoord } from 'dnd-core'
export const ItemTypes = {
  CARD: 'card',
}

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'green',
}

export const Card = ({ id, text, index, moveCard }) => {
  const ref1 = useRef(null)
  
  // 拖动组件 useDrag返回[collect方法返回的对象,引用]
  const [{ isDragging }, drag] = useDrag({
    // 指定拖动元素的类型（drop中的accept需要和这个一致），同时传递其他数据
    item: { type: ItemTypes.CARD, id, index },
    // canDrag: monitor => false,
    // collect函数获取isDragging
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })  
  
  // 接收组件
  const [, drop] = useDrop({
    // 指定接收组件接收的拖动元素类型
    accept: ItemTypes.CARD,
    drop: (item, monitor) => ({ type: ItemTypes.CARD, id: 'qweqew', index: 100 }),
    // 拖动元素在接收组件上方时触发
    hover: (item, monitor) => {

      // 判空？我还不明白，可能是空列表:<
      if (!ref1.current) {
        return
      }

      // 拖动元素的index
      const dragIndex = item.index
      // 悬浮元素的index
      const hoverIndex = index

      // 如果拖动元素的index  等于  悬浮元素的index，return
      if (dragIndex === hoverIndex) {
        return
      }

      // 确定屏幕上的矩形，ref.current是div元素，getBoundingClientRect用于获取某个元素相对于视窗的位置集合
      const hoverBoundingRect = ref1.current?.getBoundingClientRect()

      // 获取屏幕矩形的中点Y
      const hoverMiddleY =(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // 获取组件当前的偏移(变化)
      const clientOffset = monitor.getClientOffset()

      // 获取偏移后到顶部的距离
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      // 向下拖动但拖动的光标在中点之上，return
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // 向上拖动但拖动的光标在中点之下
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // 数组删除和插入操作(交换)
      moveCard(dragIndex, hoverIndex)
      
      // 交换后拖动元素的index是hoverIndex
      item.index = hoverIndex
    },
  })

  const opacity = isDragging ? 0 : 1
  
  // 1 让组件既可以被拖动也可以接收拖动元素
  drag(drop(ref1))

  // 2 将ref引用赋值给组件
  return (
    <div ref={ref1} style={{ ...style, opacity }}>
      {text}
    </div>
  )
}
