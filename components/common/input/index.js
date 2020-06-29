import React from 'react';
import { Input } from 'reactstrap';

export default function InputBox({ Type, Name, ...props }) {

    const onChangeValue = (e) => {
        console.log("Run2")
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        props.ChangeValue(name,value)
    }

    return (
        <Input
            type={Type}
            name={Name}
            id={props.Id}
           
            value={props.Value}
            className={props.Class}
            placeholder={props.PlaceHolder}
            onChange={onChangeValue}
        />
    )
}