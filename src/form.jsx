import React from 'react';
import ReactDom from 'react-dom';
// const  check = document.querySelector('.check') 
// function Myfun(){
//   if(check.checked === true){
//    check.checked=false;
//   }
//   else{
//    check.checked=true
//   }
// }
function Myform(){
    return(
        <>
     <img src="https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0" className='heading' />
   
 
   <div className="form">
      <h2>Sign In</h2>
      <form action="">
         <input type="text" placeholder='Email or phone number' />
         <input type="password" placeholder='Password' />
         <input type='Submit' value="Sign In" className="btn1"/>
         
      </form>
      <input type='checkbox' className='check' /><label className='label1'>Remember me</label>
      <a href='netflix.html' className='need'>Need help?</a>
      <img src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark-thumbnail.png" class=" icon"/> <a href='#' className='fcbk'>Login With Facebook</a>
      <p className='p'>New to Netflix <span><a href="signup.html" className='signup'>Sign up now.</a></span></p>
      <p className='p1'>This page is protected by Google reCAPTCHA to<br></br> ensure you're not a bot. <span><a href="learn.html" className='learn'>Learn more.</a></span></p>
   </div>
 {/* <Myfun /> */}
     </>
    )

};


export default Myform;