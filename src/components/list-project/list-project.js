import React from 'react';

import './list-project.scss';

let list = [
  {name: 'todo', id: 1, href: '/todo'},
  {name: 'table', id: 2, href: '/table'},
  {name: 'site', id: 3, href: '/site'},
  {name: 'form', id: 4, href: '/form'}
];

const ListProject = () => {
  return (
    <ul className='list-project__wrapper'>
      {list.map((el) => {
        return (
          <li key={el.id} className='list-project__item'>
            <a href={el.href} className="btn btn-outline-primary">
              {el.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
};

export default ListProject;
