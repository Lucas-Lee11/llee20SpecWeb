import React from "react"

class Randomize extends React.Component{
    render(){
        return (<button onClick = {this.props.handleRandom}> Switch Up Order </button>)
    }

}

export default Randomize
