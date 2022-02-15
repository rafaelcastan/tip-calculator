import styled from 'styled-components';

const backgroundColor = {
    selected: 'var(--strong-cyan)',
    notSelected: 'var(--very-dark-cyan)'
}

const fontColor = {
    selected: 'var(--very-dark-cyan)',
    notSelected: 'var(--white)'
}

interface TipButtonProps {
    selected: 'selected' | 'notSelected',
}

export const TipButtonStyled = styled.button<TipButtonProps>`
    background-color: ${props=>backgroundColor[props.selected]};
    padding: 10px;
    color: ${props=>fontColor[props.selected]};
    font-weight: bold;
    font-size: 24px;
	border: none;
    border-radius: 5px;
	cursor: pointer;
	outline: inherit;

    transition: background 0.25s;
`