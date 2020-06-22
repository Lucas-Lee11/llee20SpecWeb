import React from "react"

class AddItem extends React.Component{

    render(){
        return (<form id = "add-item" onSubmit = {this.props.handleSubmit}>
            <input id = "toadd"/>
            <input style = {{marginLeft : 20}} type = "submit"/>
        </form>)
    }
}

export default AddItem
