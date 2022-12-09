import styled from "styled-components";
import { FormEvent, useEffect, useState } from "react";
import GlobalStyle from "./style/GlobalStyles";

export default function App() {
  const [ textUser, setTextUser ] = useState("");
  const [ textArr, setTextArr ] = useState([] as string[]);
  const [ color, setColor ] = useState("");

  function addToDo(event : FormEvent<HTMLFormElement>){
    event.preventDefault()
    if(textUser===" "){
      setTextUser('')
      return
    }
    setTextArr([...textArr,textUser])
    setTextUser('')

  }
  useEffect(()=>{
    setInterval(()=>{
      setColor( '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0'))
    }, 6000 )
    
  },[])
  
  return (
    <Body color={color}>
        <div className={"head"}>
        <span>To Doo</span>
        <form onSubmit={addToDo}> 
          <input type={"text"} required={true} value={textUser} onChange={(e)=>setTextUser(e.target.value)} placeholder={"Digite seu item aqui"}/>
          <button type={"submit"} >Colocar na lista</button>
        </form>
      </div>
      {textArr.length>0 ? textArr.map( (i,index) => {return <div className={"assignment"}>{i} <h1 className={"del"} onClick={()=>{textArr.splice(index,1);setTextArr([...textArr]);}}>apagar</h1></div>}) : ""}
     
    <GlobalStyle/>
    </Body>
  );
}

const Body = styled.div`
  background: ${props=> props.color} ;
  -webkit-transition: 0.8s ease-out;
  -moz-transition: 0.8s ease-out;
  -o-transition: 0.8s ease-out;
  transition: 0.8s ease-out;
  height: 100vh ;
`;