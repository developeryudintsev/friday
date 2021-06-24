import React, {ChangeEvent} from 'react';

type propsType={
    checked:boolean;
    CallBack?:(isDone:boolean)=>void
}

export const CheckBox=(props:propsType)=>{
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        // props.CallBack(event.currentTarget.checked)
    }
    return(
        <input type="checkbox" checked={props.checked} onChange={onChangeHandler}/>
    )
}