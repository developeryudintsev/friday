import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './Input.module.css'

type propsType = {
    Callback?: (title: string) => void
}

export const Input = (props: propsType) => {
    let [title, setTitle] = useState('');
    let [error,setError]=useState(true)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setTitle(event.currentTarget.value);
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode===13) {
            // props.Callback(title);
            setTitle('')
        }
    }

    const CallbackHandler = () => {
        // props.Callback(title);
        setTitle('')
        setError(true)
    }

    return (
        <div>
            <input value={title} className={error ? styles.error : ''}
                   onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
            <button onClick={CallbackHandler}>+</button>
            {error && <div className={styles.errorMessage}>The title is REQURED</div>}
        </div>
    )
}