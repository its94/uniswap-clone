import React, { useState } from 'react'

import { SwapPairSide } from './SwapPairSide'
import { SwapViewMainBtn } from './SwapViewMainBtn'

const SwapView = () => {

    const outerBoxStyle = {
        "borderRadius": "30px",
        "border": "solid red 2px",
        'padding': '10px 5px',
        "width": "500px",
        "height": "fit-content",
        "display": "flex",
        "flexDirection": 'column' as 'column',
        "justifyContent": 'center'
    }

    const swapButtonStyle = {
        "width": "fit-content",
        "height": "fit-content",
        'padding': '0px',
        'fontSize': '24px',
        "alignSelf": 'center'
    }

    const swapFields = () => {
        // TODO - swap fields logic
    }

    const connectWallet = () => {
        // TODO - connect wallet logic
    }


    return (
        <div style={outerBoxStyle}>
            <SwapPairSide />


            <button
                style={swapButtonStyle}
                onClick={swapFields}>
                🔄
            </button>

            <SwapPairSide />

            <SwapViewMainBtn />

        </div>
    )
}


export default SwapView