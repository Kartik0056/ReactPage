import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Mdata from './Mdata';
import Myform from './form';
// import Myaap from './App';
import './index.css';
function Ncard(val){
  console.log(val)
  return(
    <Card 
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )
};
ReactDOM.render(
  
  <>
 {/* <Myaap/> */}
  <Myform />
   {Mdata.map(Ncard)}
   
  </>,document.getElementById('root')

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

