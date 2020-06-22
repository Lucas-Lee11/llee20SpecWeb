import React from "react"

class Procrastinate extends React.Component{

    render(){
        return <button onClick = {this.props.handleProcrastinate} style = {{marginLeft: "20px"}}>Procrastinate</button>
    }

}

export default Procrastinate
