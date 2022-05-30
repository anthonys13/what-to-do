import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import List from './List/List'
import { actionAxiosLists } from '../../Redux/Actions/ListsActions';

const Main = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionAxiosLists());
  }, []);

  const lists = useSelector((state) => state.list)
  // console.log('lists = ', lists)

  return (
    <main className="container">
      <div className="section">
        <div className="row">
          {lists.map(list => (
            <List
              key={list.id}
              {...list}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main