import React from 'react'

interface SwapViewMainBtnProps {

}

export const SwapViewMainBtn: React.FC<SwapViewMainBtnProps> = ({}) => {


        return (
            <button style={style}>Connect Wallet</button>
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