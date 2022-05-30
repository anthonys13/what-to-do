import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import List from './List/List'
import { actionAxiosLists } from '../../Redux/Actions/ListsActions';

const Main = () => {

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.list)

  useEffect(() => {
    dispatch(actionAxiosLists());
  }, [lists]);

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

        <div id="modal2" className="modal">
          <div className="modal-content">
            <h4>CREATE CARD</h4>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat">Agree</button>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Main