import React from 'react'

const FormEmail = ({count,setCount}) => {
    const hi = ()=>{
       setCount(count + 1)
        console.log({count});
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={hi}>Show</button>
        </div>
    )
}

export default FormEmail
