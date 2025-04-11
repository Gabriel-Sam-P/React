import React, { useContext } from 'react';
import { TextContext } from '../Component/TMain';

const Tthree = () => {
    const theme = useContext(TextContext);

    const color = {
        background: theme
    };

    return (
        <div>
            <h1 style={{ backgroundColor: color.background }}>
                My name is {color.background}
            </h1>
        </div>
    );
}

export default Tthree;

