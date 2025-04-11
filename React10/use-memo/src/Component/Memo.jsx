
import React, { useMemo } from 'react'

export const Memo = ({number}) => {
    const factorial = useMemo(()=>{
        let result = 1
        for(let i=1;i<=number;i++){
            result *= i
        }
        return result
    },[number])
  return (
    <h1>{factorial}</h1>
  )
}
 
export default Memo;