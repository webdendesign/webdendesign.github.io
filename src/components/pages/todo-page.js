import React from 'react';

import './'

let todo = [
  {name: 'one', href: ''}
]

const TodoPage = () => {
  return (
    <div className>
      <h3>Todo</h3>
      <ul className='todo__list'>
        {todo.map((item) => {
          return (
            <li className='todo__item'>
              <a href={item.href}>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default TodoPage;
