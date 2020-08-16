import './button.styles.scss';
import React from 'react';

export const Button = (props) => {
    return (
        <button className={`button button--${props.size}`} onClick={props.onButtonClick} disabled={props.disabled}>{props.children}</button>
    )
}
