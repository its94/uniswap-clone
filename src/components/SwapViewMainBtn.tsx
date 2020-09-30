import React, { MouseEvent } from 'react'

interface SwapViewMainBtnProps {
    btnLabel: string;
    handleClick: ClickFunction;
}

export const SwapViewMainBtn: React.FC<SwapViewMainBtnProps> = ({ btnLabel, handleClick }) => {



    return (
        <button
            style={style}
            onClick={handleClick}
            >
            {btnLabel}
        </button>
    );
}

const style = {
    "width": "85%",
    "height": "50px",
    "borderRadius": "15px",
    "border": "solid red 2px",
    'backgroundColor': '#FFCCCB',
    'color': 'black',
    'fontSize': '18px',
    'margin': '10px 10px',
    "alignSelf": 'center'
}