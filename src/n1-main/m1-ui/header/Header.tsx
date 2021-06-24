import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <button className={styles.button}><NavLink className={styles.nav} to={'/login'}>login</NavLink></button>
            <button className={styles.button}><NavLink className={styles.nav} to={'/create'}>CreateAccount</NavLink></button>
            <button className={styles.button}><NavLink className={styles.nav} to={'/profile'}>Profile</NavLink></button>
            <button className={styles.button}><NavLink className={styles.nav} to={'/404'}>NotFound</NavLink></button>
            <button className={styles.button}><NavLink className={styles.nav} to={'/recovery'}>RecoveryPassword</NavLink></button>
            <button className={styles.button}><NavLink className={styles.nav} to={'/newPas'}>SetNewPassword</NavLink></button>
            <button className={styles.button}><NavLink className={styles.nav} to={'/showComp'}>ShowComponents</NavLink></button>
        </div>
    )
}
