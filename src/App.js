import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import LoadingPersonsData from './components/LoadingPersonsData';
import MoneyTest from './components/MoneyTest';
import './App.css';

function App() {

  // const DataLoading =  LoadingPersonsData(MoneyTest);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [times, setTimes] = useState();

  const [appState, setAppState] = useState(
    {
      loading: false,
      currency: null
    }
  )

    useEffect(() => {
      setAppState({loading: true})
      const apiUrl = 'https://cdn.cur.su/api/cbr.json';
      axios.get(apiUrl).then((resp) => {
        const curr = resp.data.rates;
        setAppState({
        loading: false,
        currency: curr
        });
      });
    }, [setAppState]);

    function handlerFrom(e){
      setFrom(e.target.value);
    }

    function handlerTo(e){
      setTo(e.target.value);
    }


    let options;
    if(appState.currency){
      options = (Object.keys(appState.currency));
    }
    else{
      options = [];
    }

  return (
    <div className="app">
      <p>amount</p>
      <input className='times' placeholder='How much?' value={times} onChange={(e) => setTimes(e.target.value)}/>
      <div className='convert'>
        <p>from</p>
        <select value={from} className='from select' placeholder='from what' onChange={handlerFrom}>
          {
            options.map((e) => {
              return <option>{e}</option>;
            })
          }
        </select><br/>
        <p>to</p>
        <select value={to} className='to select' placeholder='to what' onChange={handlerTo}>
          {
            options.map((e) => {
              return <option>{e}</option>;
            })
          }
        </select>
      </div>
        <MoneyTest currency={appState.currency} times={times} from={from} to={to}/>
        {/* <DataLoading isLoading={appState.loading} persons={appState.persons} /> */}
    </div>
  );
}

export default App;