import React from 'react';
import styles from '../styles/Piece.module.css';

import PlainBishop from './pieces/plain/Bishop';
import PlainKing from './pieces/plain/King';
import PlainKnight from './pieces/plain/Knight';
import PlainPawn from './pieces/plain/Pawn';
import PlainQueen from './pieces/plain/Queen';
import PlainRook from './pieces/plain/Rook';

import WhiteHardwoodBishop from './pieces/hardwood/WhiteBishop';
import WhiteHardwoodKing from './pieces/hardwood/WhiteKing';
import WhiteHardwoodKnight from './pieces/hardwood/WhiteKnight';
import WhiteHardwoodPawn from './pieces/hardwood/WhitePawn';
import WhiteHardwoodQueen from './pieces/hardwood/WhiteQueen';
import WhiteHardwoodRook from './pieces/hardwood/WhiteRook';

import BlackHardwoodBishop from './pieces/hardwood/BlackBishop';
import BlackHardwoodKing from './pieces/hardwood/BlackKing';
import BlackHardwoodKnight from './pieces/hardwood/BlackKnight';
import BlackHardwoodPawn from './pieces/hardwood/BlackPawn';
import BlackHardwoodQueen from './pieces/hardwood/BlackQueen';
import BlackHardwoodRook from './pieces/hardwood/BlackRook';

const plainComponents = {
    b: PlainBishop, k: PlainKing, n: PlainKnight, p: PlainPawn, q: PlainQueen, r: PlainRook
};
const hardwoodWhiteComponents = {
    b: WhiteHardwoodBishop, k: WhiteHardwoodKing, n: WhiteHardwoodKnight, p: WhiteHardwoodPawn, q: WhiteHardwoodQueen, r: WhiteHardwoodRook
};
const hardwoodBlackComponents = {
    b: BlackHardwoodBishop, k: BlackHardwoodKing, n: BlackHardwoodKnight, p: BlackHardwoodPawn, q: BlackHardwoodQueen, r: BlackHardwoodRook
};

interface PieceProps {
    piece: string;
    boardStyle: 'plain' | 'hardwood';
}

const Piece = ({ piece, boardStyle }: PieceProps) => {
    const isBlack = piece.toLowerCase() === piece;
    const pieceType = piece.toLowerCase() as keyof typeof plainComponents;

    let PieceComponent;
    let pieceClasses = styles.piece;

    if (boardStyle === 'hardwood') {
        PieceComponent = isBlack ? hardwoodBlackComponents[pieceType] : hardwoodWhiteComponents[pieceType];

        pieceClasses += ` ${styles.hardwoodPiece}`;
    } else {

        PieceComponent = plainComponents[pieceType];
        pieceClasses += ` ${isBlack ? styles.black : styles.white}`;
    }

    if (!PieceComponent) {
        return null;
    }

    return (
        <div className={pieceClasses} aria-label={`${boardStyle} ${isBlack ? 'Black' : 'White'} ${pieceType}`}>
            <PieceComponent />
        </div>
    );
};

export default Piece;