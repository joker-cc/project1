import React, { useCallback, useEffect, useState } from 'react';
import store from '../../model/store';
import { addItemAction, deleteItemAction, getListAction } from '../../model/Demo/actionCreator.js';

const Demo = props => {
  const [ list, setList ] = useState(store.getState().list);
  const [ inputValue, setInputValue ] = useState('');
  
  /***************监控状态变化*****************/
  useEffect(() => {
    const updateList = () => {
      setList(store.getState().list);
    };
    store.subscribe(updateList);
  }, []);
  /*********************************************/

  useEffect(() => {
    store.dispatch(getListAction());
  }, []);

  const onInputChange = useCallback(
    ({ target: { value } }) => {
      setInputValue(value);
    },
    []
  );

  const onAddItem = useCallback(
    () => {
      if (!inputValue) {
        alert('内容不能为空');
        return;
      }
      store.dispatch(addItemAction(inputValue));
      setInputValue('');
    },
    [inputValue]
  );

  const onItemClick = useCallback(
    index => () => {
      store.dispatch(deleteItemAction(index));
    },
    []
  );

  return (
    <>
      <div>{props.match.params.title}</div>
      <ul>
        {
          list.map((item, index) => <li key={item} onClick={onItemClick(index)}>{item}</li>)
        }
      </ul>
      <input value={inputValue} onChange={onInputChange} />
      <button onClick={onAddItem}>添加</button>
    </>
  );
}

export default Demo;