import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getQuotes } from './features/QuoteSlice'

function App() {
  const quotesState = useSelector((state) => state.quotes)
  const dispatch = useDispatch();

  function HandleButtonClick(){
    console.log(quotesState);
    
    dispatch(getQuotes());
    console.log(quotesState);
    
  }
  return(
<div>
  <button onClick={()=>HandleButtonClick()}>Click me</button>
   {quotesState.quotes.map((q) => {
    return<li key={q.id}>{q.quote}</li>;
   })

   }
  
</div>
  );
}

export default App
