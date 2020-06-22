import React from "react"

class Item extends React.Component{


    render(){
        return(
            <div className = "todo-item">
                <input onChange = { () => this.props.handleChange(this.props.id)} type="checkbox" id = {this.props.id} checked = {this.props.checked} />
                <label htmlFor= {this.props.id} style = {this.props.checked ? {textDecoration: "line-through"} : {textDecoration: "none"}} > {this.props.name} </label>
                <button style = {{marginLeft : 20}} name = "delete" onClick = {() => this.props.handleRemove(this.props.id)}>Delete</button><br/>
            </div>
        );

    }
}

export default Item
