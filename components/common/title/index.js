import React from 'react';

function Maintitle(props) {
    return (
        <div className="main-title-wrapper">
            <h3 className={props.Class}>{props.Name}</h3>
        </div>
    );
}

function Subtitle(props) {
    return (
        <div className="sub-title-wrapper">
            <h4 className={props.Class}>{props.Name}</h4>
        </div>
    );
}

function Description(props) {
    if (!props.Num) {
        return (
            <p className={props.Class}>{props.Name}</p>
        );
    } else {
           return( <p className={props.Class}>
                <a href={`tel:${props.Num}`}>{props.Name}</a>
            </p>);
    }
}

function phoneDescription(props) {
  return <p className={props.Class}>{props.Name}</p>;
}

function Title(props) {
    return (
        <h5 className={props.Class}>{props.Name}</h5>
    );
}

function Titlespan(props) {
    return (
        <h4 className={props.Class}> <span>{props.Label}</span> {props.Name} </h4>
    );
}

function Titlespan2(props) {
    return (
        <h4 className={props.Class}> {props.Name} <span>{props.Label}</span>  </h4>
    );
}

export {
  Maintitle,
  Subtitle,
  Description,
  Title,
  Titlespan,
  Titlespan2,
  phoneDescription,
};