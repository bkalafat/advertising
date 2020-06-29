import React from 'react';
import { ChevronRight,Send,Plus } from 'react-feather';

export function Button(props) {
    return (
      <button
        a={`#` + props.href}
        className={props.Class}
        onClick={props.Clickble}
      >
        <span className={`title ${props.Title ? props.Title : ''}`}>
          {props.Name}
        </span>
        {props.BtnIcon && props.type == 'contact' ? (
          <span className={props.BtnIcon}>
            {!props.send ? <ChevronRight /> : <Send />}
          </span>
        ) : (
          <span className={props.BtnIcon}>{<Plus />}</span>
        )}
      </button>
    );
}



