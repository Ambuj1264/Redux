import React from 'react'
import {increment,decrement} from "../actions";
import { useDispatch, useSelector } from 'react-redux';

function Hello() {
   const dispatch=useDispatch()
   const st=useSelector((st)=>st.changeNumber)
  return (
    <>
        <button onClick={()=>dispatch(increment(5))}>+</button>
        {st}
        <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default Hello