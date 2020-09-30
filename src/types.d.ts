
type ClickFunction = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void

type InputChangeFunction = (e: ChangeEvent<HTMLInputElement>) => void

type SwapPairSideData = {
    value: number,
    atTop: boolean,
    token: string, //change this in future - may need custom object
}