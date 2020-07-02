import React from "react"

class Shifter extends React.Component{

    render(){
        
        return (<div className = "shifter">
            <button onClick = {this.props.shiftLeft}>Left</button>
            <button onClick = {this.props.shiftRight} style = {{marginLeft: "20px"}}>Right</button>
        </div>)
    }


}

export default Shifter
