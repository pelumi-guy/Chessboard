"use client";

import { useState, useEffect } from 'react';
import Board from '../components/Board';
import Controls from '../components/Controls';

import { BoardStyle, Theme } from '@/types/common';

export default function Home() {
  const [boardStyle, setBoardStyle] = useState<BoardStyle>('plain');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <main>
      <Controls
        theme={theme}
        setTheme={setTheme}
        boardStyle={boardStyle}
        setBoardStyle={setBoardStyle}
      />
      <div className="board-container">
        <Board boardStyle={boardStyle} />
      </div>
    </main>
  );
}