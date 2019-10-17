import React, { Component, useState, useRef, useReducer } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chatbox.css';


const ChatBox = () => {

    
    
    localStorage.setItem('isNameEntered',true);

     if(localStorage.getItem('isNameEntered'))

  
     let[textInput,setTextInput] = useState("");
     let[showText,setShowText] = useState("");
     let[userName,setUserName] = useState("");

    

     
    
     const onSend = () =>{
          
          setShowText(textInput);
          setUserName = x;
          
           
     }
          
    return ( <React.Fragment><Card className="text-center">
    <Card.Header>Chat Box</Card.Header>
    <Card.Body>
    <span class='alert alert-primary'>Please type something to start the chat</span>
      <Card.Text className='chatBox'>
         
         {userName} <span>{showText}</span>
      </Card.Text>
         
    </Card.Body>
    <Card.Footer className="text-muted">
        <input className='inputBox'
         type='text' value={textInput} 
         onChange={(e) => {setTextInput(e.target.value)}}  
         />
         
        <Button variant="primary" onClick={onSend} >Send</Button>
        </Card.Footer>
  </Card>
  </React.Fragment>
   );
}
 
export default ChatBox;