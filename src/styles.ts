import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin:0px;
    padding:0px;
    font-family: 'Space Mono', Helvetica, sans-serif;
    font-size: 16px;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  
        @media (max-width: 280px) {
          font-size: 15px;
        }
  
        @media (min-width: 768px) {
          font-size: 16px;
        }
  
        @media (min-width: 1024px) {
          font-size: 18px;
        }

    --white: hsl(0, 0%, 100%);
    --light-cyan-1: hsl(185, 41%, 84%);
    --light-cyan-2: hsl(189, 41%, 97%);
    --light-cyan-3: hsl(185, 41%, 94%);
    --dark-cyan-1: hsl(186, 14%, 43%);
    --dark-cyan-2: hsl(184, 14%, 56%);
    --very-dark-cyan: hsl(183, 100%, 15%);
    --strong-cyan: hsl(172, 67%, 45%);
    --strong-cyan-2: hsla(172, 67%, 45%, 0.3);
    --strong-cyan-hover: hsl(172, 67%, 75%);
    --orange: hsl(29, 56%, 52%);
  }
`

export const PageDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: var(--light-cyan-1);
    padding-top: 50px;
`

export const PageTitle = styled.img`
   margin-bottom: 40px;
`

export const CalcDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items:center;
    border-radius: 25px 25px 0px 0px;
    width: 100%;
    background-color: var(--white);
    padding: 30px 30px;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
        color: var(--dark-cyan-1);
    }

    div {
        display:flex;
        flex-direction: row;
        align-items:center;
        position: relative;
        width: 100%;
        margin-top: 10px;
    }

    input {
        border: 0px;
        border-radius: 8px;
        background-color: var(--light-cyan-2);
        font-size: 24px;
        text-align:right;
        padding: 15px 20px;
        width: 100%;
        outline-color: var(--strong-cyan);
        font-weight: bold;
        color: var(--very-dark-cyan);

        ::placeholder { 
            color: var(--dark-cyan-2);
            opacity: 1; 
        }
    }

    img {
        height: 20px;
        position: absolute;
        left:20px;
    }
`

export const TipSelector = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    h3 {
        color: var(--dark-cyan-1);
    }

    input {
        color: var(--dark-cyan-1);

        ::placeholder { 
            color: var(--dark-cyan-1);
            opacity: 1; 
        }
    }
`

export const TipButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    margin-top: 20px;

    button {
        width: 45%;
        height: 58px;
        
        :nth-child( n + 3 ) {
            margin-top: 20px;
        }


        :nth-child( 2n + 1 ) {
	        margin-right: 20px;
        }
    }

    input {
        border: 0px;
        border-radius: 5px;
        background-color: var(--light-cyan-2);
        font-size: 24px;
        text-align:right;
        width: 45%;
        outline-color: var(--strong-cyan);
        font-weight: bold;
        padding: 15px 20px;
        margin-top: 20px;
    }
`

export const NumberOfPeopleDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
`

export const ResultsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: var(--very-dark-cyan);
    padding: 35px 20px 20px 20px;
    border-radius: 15px;
    

    button {
        width: 100%;
        padding: 10px;
        background: var(--strong-cyan);
        border-radius: 5px;
        color: inherit;
        border: none;
        outline: inherit;
        font: inherit;
        cursor: pointer;
    }
`

export const IndividualResultDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    h1 {
        color: var(--strong-cyan);
        font-size: 24px;
    }

    div {
        display: flex;
        flex-direction: column;

        h3 {
            color: var(--white);
        }

        p {
            color: var(--dark-cyan-2);
        }
    }

    :nth-child( n + 2 ) {
	    margin-top: 30px;
        margin-bottom: 30px;
    }

`