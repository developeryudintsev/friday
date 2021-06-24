import React from 'react';
import { Button } from '../../../components/Button';
import { CheckBox } from '../../../components/CheckBox';
import { Input } from '../../../components/Input';
export const ShowComponents=()=>{
    return(
        <div>
            <div>ShowComponents:</div>
            <div><Button title={'button'}/></div>
            <div><CheckBox checked={true}/></div>
            <div><Input /></div>
        </div>
    )
}