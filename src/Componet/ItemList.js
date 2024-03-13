import React, { useState } from 'react'
import './ItemList.css'
import { MdDelete } from "react-icons/md";

function ItemList({itemName,index,setTextInput,setIteams}) {
    const[isCheck,setIsCheck]=useState(false)

    const deleteHandler=()=>{
        setIteams((prevState)=>{
            const data=[...prevState]
            data.splice(index, 1)
            return data
        })
    }
  return (
    <div className='iteam-Diva'>
        <div >
            <input type='checkBox' onChange={(e)=>{
                setIsCheck(prvValue=>!prvValue)
            }}></input>
        </div>
        <div>
            <p
                style={{
                  textDecoration:isCheck ? 'line-through':"none",
                }}
            >{itemName}</p>
        </div>
        <div className='delete-Btn'>
            <button onClick={deleteHandler}><MdDelete /></button>
        </div>
    </div>
  )
}

export default ItemList