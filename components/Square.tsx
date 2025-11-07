import React from 'react';


interface SquareProps {
    isBlack: boolean;
    isHighlighted: boolean;
    children?: React.ReactNode;
    boardStyle: 'plain' | 'hardwood';
    onClick: () => void;
}

const Square = ({ isBlack, isHighlighted, boardStyle, children, onClick }: SquareProps) => {
    const plainColor = isBlack ? 'bg-[#b58863]' : 'bg-[#f0d9b5]';
    const transparent = 'bg-[#00000000]';
    const highlightColor = 'bg-yellow-400 opacity-60';

    const squareColor = boardStyle === "plain" ? plainColor : transparent;

    return (
        <div
            className={`w-10 h-10 md:w-20 md:h-20 flex items-center justify-center relative ${squareColor}`}
            onClick={onClick}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
            role="gridcell"
            tabIndex={0}
        >
            {isHighlighted && <div className={`absolute w-full h-full ${highlightColor}`} />}
            <div className="relative z-10 w-full h-full">{children}</div>
        </div>
    );
};

export default Square;