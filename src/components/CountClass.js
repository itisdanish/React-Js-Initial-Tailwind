import React from "react";

class CountClass extends React.Component{
    constructor(){
        super()

        this.state={
            count: 0
        }
    }
        handleButtonClick = ()=>{
        const {count} = this.state;
        if(count === 5){
            this.setState({ count: 0})
        } else{
            this.setState({ count: count + 1 })
        }
        
    
}
    render(){
        const {count} = this.state;
        
        return(
            <div className="box">
                <h1>Counter : {count}</h1>
                <h2>Press Button</h2>
                <button onClick={this.handleButtonClick}>Count</button>
            </div>
        )
    }
}

export default CountClass;