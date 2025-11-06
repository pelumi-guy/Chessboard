import React from 'react';
import styles from '../styles/Controls.module.css';
import { Theme, BoardStyle } from '@/types/common';
import ThemeIcon from './layout/ThemeIcon';

interface ControlsProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    boardStyle: string;
    setBoardStyle: React.Dispatch<React.SetStateAction<BoardStyle>>;
}

const Controls = ({ theme, setTheme, boardStyle, setBoardStyle }: ControlsProps) => {
    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    const toggleBoardStyle = () => setBoardStyle(prev => (prev === 'plain' ? 'hardwood' : 'plain'));

    return (
        <div className={styles.controlsContainer}>
            <button onClick={toggleBoardStyle} className={styles.button}>
                Board: {boardStyle.charAt(0).toUpperCase() + boardStyle.slice(1)}
            </button> &nbsp; &nbsp;
            <button onClick={toggleTheme} className={styles.button}>
                <ThemeIcon theme={theme} />
            </button>
        </div>
    );
};

export default Controls;