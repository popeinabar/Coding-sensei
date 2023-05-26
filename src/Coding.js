import React, { useEffect } from 'react'
import './Coding.css'
import save from './assets/save.svg'
import home from './assets/home.svg'
import search from './assets/search.svg'
import languageData from './component/languageData'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Coding = ({count}) => {


  useEffect(()=> {
    if(window.location.pathname === '/coding-arena') {
        document.querySelector('body').style.backgroundColor ='black';
    }
})

  const [dataCount, setDataCount] = useState(count)
  const[text, setText]=useState(languageData[dataCount].boilerplate)
  useEffect(()=>{
    setText(languageData[dataCount].boilerplate);
  },[dataCount])

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "myfile.txt";
    link.href = url;
    document.body.appendChild(link);
    link.click();
  
  };
  
  const [outputs, setOutputs]=useState('')
  const handleOutput=()=>{
    setOutputs(languageData[dataCount].output)
    
  }


  return (
    <>
  
    
  
  <div className='coding-areana'> 
    <div className='menu'>
      <div className='nav'>
        <Link to={'/'}>
          <div className='div-nav'>
            <img className='home' src={home} alt='home' />
            <p className='text-home'>Home</p>
          </div>
        </Link>
          <div className='div-nav'>  
            <img className='search' src={search} alt='search'></img>
            <p className='text-search'>Search</p>
          </div>
      </div>
      <div className='options'>
      {languageData.map ((language, index) =>{
        return(
          <>
          <div className='opt' onClick={()=>setDataCount(index)}>
          <img className='opt-py opt-img' src={language.imageSrc}  alt={language.name}></img>
          <p className='text'>{language.name}</p>
        </div>
        
      </>)
      })}

      </div>
    </div>


    <div className='coding'>
      <div className='tabs'>
        <div className='tab'>
          <p className='text' >{languageData[dataCount].name}</p>
          {/* <img className='add' src={add}></img> */}
        </div>
        <div>
          <button className='save' onClick={handleDownload}>
            <img className='save-img'  src={save} alt='save'/>
            <p className='save-text'>save</p>
          </button>          
      </div>
      </div>
      <div className='inputs'>
      <div className='input'>
        <textarea className='code-input' value={text} onChange={(e) => setText(e.target.value)} />
       
      </div>
      <div className='output'>
      <div className='run'>
      <textarea className='code-output' value={outputs}/>
       
      </div>
      <button className='btn-run' onClick={handleOutput}>RUN</button>

      </div>
      </div>
    
    </div>
  
  </div>  
  
    </>
  )
}

export default Coding