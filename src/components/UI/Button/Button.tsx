import React from 'react';
import classes from './Button.module.scss';
import clsx from 'clsx';

export interface IButton {
    name: string;
    title: string;
    wide?: boolean;
    primary?: boolean;
    clickHandler?: (buttonName: string) => void;
}

const Button: React.FC<IButton> = ({
    name,
    title = 'Button',
    wide = false,
    primary = false,
    clickHandler = (x) => x,
}) => {
    const className = clsx(classes['btn'], wide ? classes['wide'] : null, primary ? classes['primary'] : null);

    const onClickHandler = (): void => {
        clickHandler(name);
    };

    return (
        <button className={className} onClick={onClickHandler}>
            <span>{title}</span>
        </button>
    );
};

export default Button;
