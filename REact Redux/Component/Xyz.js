import React from 'react'
import {useSelector} from "react-redux"
function Xyz() {
    const st=useSelector((st)=>st.changeNumber)
  return (
   <>
   <h1>Xyz call : {st}</h1>
   </>
  )
}

export default Xyz