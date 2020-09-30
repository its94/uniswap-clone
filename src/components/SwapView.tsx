import React, { useState } from 'react'

import { SwapPairSide } from './SwapPairSide'
import { SwapViewMainBtn } from './SwapViewMainBtn'


const initialPair = {
    value: 0,
    atTop: true,
    token: "ETH",
}


interface SwapViewProps {

}

export const SwapView: React.FC<SwapViewProps> = ({}) => {

    const [btnLabel, setBtnLabel] = useState("Connect Wallet")
    const [pairTop, setPairTop] = useState(initialPair)
    const [pairBottom, setPairBottom] = useState({...initialPair, ...{atTop: false, token: "DAI"}})

    console.log(pairTop, pairBottom);

    const swapFields = () => {
        // TODO - swap fields logic
        console.log("swap sides clicked");
    }

    const handleMainBtnClick: ClickFunction = (e) => {
        // TODO - connect wallet logic
        console.log("Handle Main Btn Click worked");
    }

    const handlePairSideInputChanged: InputChangeFunction = (e) => {
        
    }


    return (
        <div style={outerBoxStyle}>
            <SwapPairSide value={pairTop} handleValueChanged={handlePairSideInputChanged} />


            <button
                style={swapButtonStyle}
                onClick={swapFields}>
                🔄
            </button>

            <SwapPairSide value={pairTop} handleValueChanged={handlePairSideInputChanged} />

            <SwapViewMainBtn btnLabel={btnLabel} handleClick={handleMainBtnClick} />

        </div>
    )
}


export default SwapView

// STYLES

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