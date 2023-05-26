import './Land.css'
import React, { useEffect } from 'react'
import languageData from './component/languageData'
import { Link } from 'react-router-dom'




const Land = ({count, setCount}) => {
    
    useEffect(()=> {
        if(window.location.pathname === '/') {
            document.querySelector('body').style.backgroundColor =' rgb(36, 36, 36)';
        }
    })

  return (
    <>
    <h2 className='heading'>Coding sensai</h2>
    <h4 className='heading2'>code independently</h4>
    <div>
        <div className='cards'>
            {languageData.map((e, i)=>{
                return(
                    <>
                    <Link to={'/coding-arena'}>               
                         <div className=' card' onClick={()=>setCount(i)}>
                <div className='content'>
                    <img className='lang-logo python' src={e.imageSrc} alt={e.name}></img>
                    <h5 className='lang'>{e.name}</h5>
                </div>
            </div>
            </Link>

                    </>
                )
            })}
            
        </div>
    {/* <img className='arrow' src={arrow} alt='arrow'></img> */}
    </div>
    </>
  )
}

export default Land