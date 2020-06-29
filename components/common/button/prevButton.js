import React from 'react';
import { ChevronLeft, Send, Plus } from 'react-feather';

export function PrevButton(props) {
  return (
    <button className={props.Class} onClick={props.Clickble}>
      
          <span >
          <ChevronLeft/>
        </span>
     
      <span className={`title ${props.Title ? props.Title : ''}`}>
        {props.Name}
      </span>
      
    </button>
  );
}
