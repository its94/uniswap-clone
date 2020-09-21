
import React, { useState } from 'react'

// import * as CurrencyInput from 'react-currency-input';



import { isValidNumber } from 'utils/Utils'
import CurrencyInput from 'components/CurrencyInput'

// const CurrencyInput = require('react-currency-input');




// This is the whole curved square box for trading on Uniswap
// View Toggle at the top: Swap, Send, Pool
// From and To token boxes
// Each token box has:
// -number to trade
// -token dropdown with icon
// -max button
// -balance amount at top right
// Arrow to swap To and From boxes around
// price label for quote
// Connect Wallet button
// Do later: routing dropdown


const SwapView = () => {

    let st = "hello"
    st = "boi"


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

    const connectWalletButtonStyle = {
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

    const swapFields = () => {
        // TODO - swap fields logic
    }

    const connectWallet = () => {
        // TODO - connect wallet logic
    }


    return (
        <div style={outerBoxStyle}>
            <TokenField
                fieldPosition={'From'}
                initialValue={1.3}
            />

            <button
                style={swapButtonStyle}
                onClick={swapFields}>
                🔄
            </button>

            <TokenField
                fieldPosition={'To'}
                initialValue={0.0}
            />

            <button
                style={connectWalletButtonStyle}
                onClick={connectWallet}>
                Connect Wallet
            </button>

        </div>
    )
}

type TokenFieldProps = {
    fieldPosition: string,
    initialValue: number
}

const TokenField = ({ fieldPosition, initialValue }: TokenFieldProps) => {
    const [tokenAmount, setTokenAmount] = useState(initialValue)


    const TokenFieldStyle = {
        "borderRadius": "15px",
        "border": "solid red 2px",
        "width": "85%",
        "height": "100px",
        "alignSelf": 'center',
        'margin': '10px 10px',
    }

    const InputLabelStyle = {
        'fontSize': 16,
        // 'alignSelf': 'left'
    }

    const InputStyle = {

    }


    let dropdownOptions = [
        <option value="ETH">ETH</option>,
        <option value="DAI">DAI</option>,
    ]

    const tokenAmountChanged = (e: any) => {
        // formatTokenAmountNum(e.target.value)
        console.log("From swapview", e.target.value);

        if(isValidNumber(e.target.value)){
            setTokenAmount(parseFloat(e.target.value))
        } else {
            console.log("else: ", e.target.value, isValidNumber(e.target.value));
        }
        // setTokenAmount(formatTokenAmountNum(e.target.value))
        // setTokenAmount(e.target.value)
    }

    const updateValue = (value: string | undefined) => {
        console.log(value);
    }

    return (
        <div style={TokenFieldStyle}>
            <p style={InputLabelStyle}>{fieldPosition}</p>
            {/* <input
                style={InputStyle}
                type="text"
                value={tokenAmount}
                placeholder='0.0'
                onChange={e => tokenAmountChanged(e)}
                /> */}

                <CurrencyInput value={0.0} updateValue={updateValue}/>


            {/* <JsCurrencyInput value={tokenAmount} onChangeEvent={tokenAmountChanged}/> */}

            <select name="token" id="">
                {dropdownOptions}
            </select>
        </div>
    )
}


export default SwapView