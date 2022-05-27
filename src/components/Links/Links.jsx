import React from 'react';
import './Links.scss';

function Links(props) {
  return (
    <div className='links__links__item'>
      <div className="links__links__item__padding"></div>
      <a href="/"><span>{props.name}</span></a>
    </div>
  )
}

export default Links