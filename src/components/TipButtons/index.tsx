import { TipButtonStyled } from "./styles";

interface TipButtonProps {
    value:string;
    handleTipSelect: (value:string)=> void;
    selectedValue: string;
    usingCustomValue: boolean;
}

export default function TipButton ({value, selectedValue, handleTipSelect, usingCustomValue}:TipButtonProps) {
    return (
        <TipButtonStyled 
            selected= {selectedValue === value && !usingCustomValue ? 'selected':'notSelected'}
            onClick={() => {handleTipSelect(value)}}
        >
            {value}%
        </TipButtonStyled>
    )
}