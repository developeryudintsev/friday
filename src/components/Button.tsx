import React from 'react';
import styles from './Button.module.css'

type ButtonType = {
    title: string
    filter?: string
    Callback?: () => void
}

export const Button = (props: ButtonType) => {
    return (
        <button className={props.filter === props.title ? styles.activeFilter : ''}
                onClick={props.Callback}>{props.title}</button>
    )
}