import React from 'react';

const MoneyTest = (props) => {
  const RF = props.currency;
  
  let a = 0;
  let b = 0;

  if(props.from && props.to && RF){
    a = RF[props.from];
    b = RF[props.to];
  }

  return (
    <div><p className='result'>{(b / a) * props.times}</p></div>
  )
}

export default MoneyTest;