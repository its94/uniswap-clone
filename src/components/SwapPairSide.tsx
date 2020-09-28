import React, { useState } from 'react'

import CurrencyInput from 'components/CurrencyInput'

interface SwapPairSideProps {

}

export const SwapPairSide: React.FC<SwapPairSideProps> = ({ }) => {
    const [tokenAmount, setTokenAmount] = useState<number>(0)


    const SwapPairSideStyle = {
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

    const updateValue = (value: string | undefined) => {
        console.log(value);
    }

    return (
        <div style={SwapPairSideStyle}>
            <p style={InputLabelStyle}>From</p>

            <CurrencyInput value={0.0} updateValue={updateValue} />

            <select name="token" id="">
                {dropdownOptions}
            </select>
        </div>
    )
}