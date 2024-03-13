import React, { useState } from 'react'
import './Inputfiled.css'
import ItemList from './ItemList'


const Inputfiled = () => {

    const[iteams,setIteams]=useState([])
    const[textInput,setTextInput]=useState('')

    const onClickHandler=()=>{
        setIteams((preData)=>{
            return [...preData,textInput]
        
            
        })
        setTextInput('');
        
    }
  return (
    <div className='main-sec'>
        <div className='box-div'>
            <h1>Grocery Bud</h1>
            <div className='inputF'>
                <input type='text' placeholder='Please Enter Iteams'onChange={(e)=>{
                    setTextInput(e.target.value)
                }}/>
                <button onClick={()=>{
                    onClickHandler()
                }}>Add Iteam</button>
            </div>
            <div>{iteams.map((elem,index)=><ItemList index={index} setIteams={setIteams} setTextInput={setTextInput} itemName={elem} key={index}/>)}</div>
        </div>

    </div>
  )
}

export default Inputfiled