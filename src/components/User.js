import { useState } from "react"

const User = (props)=>{
    const [count, setCount] = useState(0)
    const {name} = props
    return(
        <div className="userCard">
            <h1>Count = {count}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Lorem Ipsum</h2>
            <button
            onClick={()=>{
                let press = count+1
                if(count == 10){
                    setCount(0)
                }else setCount(press)
            }}
            >Count</button>
        </div>
    )
}
export default User