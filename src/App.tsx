import { useEffect, useState } from "react";
import TipButton from "./components/TipButtons";
import { InputDiv, CalcDiv, GlobalStyle, NumberOfPeopleDiv, 
         PageDiv, PageTitle, TipButtonsWrapper, TipSelector, ResultsDiv, IndividualResultDiv } from "./styles";


function App() {
  const [selectedTip, setSelectedTip] = useState('');
  const [isCustomTip, setIsCustomTip] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [peopleAmount, setPeopleAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);


  function handleTipSelect ( value : string ) {
    setIsCustomTip(false);
    setSelectedTip(value);
  }

  function reset () {
    setIsCustomTip(false);
    setSelectedTip('');
    setPeopleAmount('');
    setSelectedValue('');    
  }

  const NumberOutputFormat = new Intl.NumberFormat('pt-BR',{
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  useEffect(()=>{
    if(peopleAmount!== '' && selectedTip !== '' && selectedValue !== ''){
      const selectedValueInNumber = Number(selectedValue)
      const selectedTipInNumber = Number(selectedTip)
      const peopleAmountInNumber = Number(peopleAmount)
      const tipCalculated = selectedValueInNumber*(selectedTipInNumber/100)/peopleAmountInNumber
      const totalCalculated = selectedValueInNumber/peopleAmountInNumber+tipCalculated
      setTipAmount(tipCalculated)
      setTotal(totalCalculated)
    }
    if (selectedTip === '' || peopleAmount==='' || selectedValue === '' ) {
      setTipAmount(0)
      setTotal(0)
    }
  },[peopleAmount, selectedTip, selectedValue])



  return (
    <>
      <GlobalStyle />
      <PageDiv>
          <PageTitle src="/images/logo.svg" alt="tip-calc logo" />
        <CalcDiv>
          <InputDiv>
            <h3>Bill</h3>
            <div>
              <img src="/images/icon-dollar.svg" alt="dollar-icon" />
              <input type='number' 
              required={true} 
              placeholder="0.00" 
              min="0.01" 
              step="0.01"
              onChange={event=>{setSelectedValue(event.target.value)}}
              onFocus={event=>{setSelectedValue(event.target.value)}}
              name="bill"
              value= {selectedValue}
              />
            </div>
          </InputDiv>
          <TipSelector>
            <h3>Select Tip %</h3>
            <TipButtonsWrapper>
              <TipButton value='5'  selectedValue={selectedTip} usingCustomValue={isCustomTip} handleTipSelect={handleTipSelect}/>
              <TipButton value='10' selectedValue={selectedTip} usingCustomValue={isCustomTip} handleTipSelect={handleTipSelect}/>
              <TipButton value='15' selectedValue={selectedTip} usingCustomValue={isCustomTip} handleTipSelect={handleTipSelect}/>
              <TipButton value='25' selectedValue={selectedTip} usingCustomValue={isCustomTip} handleTipSelect={handleTipSelect}/>
              <TipButton value='50' selectedValue={selectedTip} usingCustomValue={isCustomTip} handleTipSelect={handleTipSelect}/>
              <input 
              placeholder="Custom" 
              type="number"
              onFocus={event=>{
                setSelectedTip(event.target.value)
                setIsCustomTip(true)
              }}
              onChange={event=>{setSelectedTip(event.target.value)}}
              id='custom'
              value={(selectedTip !== '' && isCustomTip)  ? (selectedTip) : ('')}
            />
            </TipButtonsWrapper>
          </TipSelector>
          <NumberOfPeopleDiv>
            <InputDiv>
              <h3>Number of People</h3>
              <div>
                <img src="/images/icon-person.svg" alt="dollar-icon" />
                <input 
                type='number' 
                required={true} 
                placeholder="0"
                onChange={event=>{setPeopleAmount(event.target.value)}}
                value={peopleAmount}
                />
              </div>
            </InputDiv>
          </NumberOfPeopleDiv>
          <ResultsDiv>
            <IndividualResultDiv>
              <div>
                <h3>Tip Amount</h3>
                <p>/ person</p>
              </div>
              <h1>${NumberOutputFormat.format(tipAmount).replace(',', '.')}</h1>
            </IndividualResultDiv>
            <IndividualResultDiv>
              <div>
                <h3>Total</h3>
                <p>/ person</p>
              </div>
              <h1>${NumberOutputFormat.format(total).replace(',', '.')}</h1>
            </IndividualResultDiv>
            <button onClick={reset}>RESET</button>
          </ResultsDiv>
        </CalcDiv>
      </PageDiv>
      
    </>
  );
}

export default App;
