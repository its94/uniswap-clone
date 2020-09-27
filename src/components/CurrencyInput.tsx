import React from 'react'

// HELPER FUNCTIONS
// -----------------
// Count num of decimals in a number
const countDecimals = (value: string) => value.split(".")[1]?.length || 0
// -----------------

interface Props {
    value: number | undefined;
    updateValue: (value: string | undefined) => void;
}

const CurrencyInput: React.FC<Props> = ({value: valueFromProp, updateValue}) => {

    const [currentValue, setCurrentValue] = React.useState<string>(
        valueFromProp ? valueFromProp.toString() : ""
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event

        if (value === "" || value === ".") {
            setCurrentValue("0")
            return updateValue("0")
        }

        const rejectCriteria = (
            value.length > 22 || 
            value.replace(/[^\.]/g, "").length > 1 ||
            /[^0-9\.]/.test(value) ||
            countDecimals(value) > 18
        )

        // No changes to input if:
        if (rejectCriteria) {
            return currentValue
        }

        // const valueAsNumber = parseFloat(numeralCharsOnly(value))
        const valueAsNumber = parseFloat(value)

        setCurrentValue(value)
        return updateValue(value)
    }

    return (
        <input
            type="text"
            lang="en"
            value={currentValue}
            onChange={handleChange}
            placeholder="0.0"
        />
    )
}

export default CurrencyInput