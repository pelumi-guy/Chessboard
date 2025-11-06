"use client";
import React, { useState } from 'react';
import Square from './Square';
import Piece from './Piece';
import styles from '../styles/Board.module.css';

const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'], ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];


interface BoardProps {
    boardStyle: 'plain' | 'hardwood';
}

const Board = ({ boardStyle }: BoardProps) => {
    // ... (state logic remains the same)
    const [board, setBoard] = useState(initialBoard);
    const [selectedPiece, setSelectedPiece] = useState<{ row: number; col: number } | null>(null);
    const [highlightedSquares, setHighlightedSquares] = useState<[number, number][]>([]);

    const handleSquareClick = (row: number, col: number) => {
        if (selectedPiece) {
            const newBoard = board.map(r => [...r]);
            const piece = newBoard[selectedPiece.row][selectedPiece.col];
            newBoard[selectedPiece.row][selectedPiece.col] = '';
            newBoard[row][col] = piece;
            setBoard(newBoard);
            setSelectedPiece(null);
            setHighlightedSquares([]);
        } else if (board[row][col]) {
            setSelectedPiece({ row, col });
            setHighlightedSquares([[row, col]]);
        }
    };


    const boardClasses = `${styles.board} ${boardStyle === 'hardwood' ? styles.hardwood : ''}`;
    // const boardClasses = styles.board;

    return (
        <div className={boardClasses} role="grid">
            {board.map((row, rowIndex) =>
                row.map((piece, colIndex) => {
                    const isHighlighted = highlightedSquares.some(([r, c]) => r === rowIndex && c === colIndex);
                    return (
                        <Square
                            key={`${rowIndex}-${colIndex}`}
                            isBlack={(rowIndex + colIndex) % 2 === 1}
                            isHighlighted={isHighlighted}
                            boardStyle={boardStyle}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        >
                            {piece && <Piece piece={piece} boardStyle={boardStyle} />}
                        </Square>
                    );
                })
            )}
        </div>
    );
};

export default Board;