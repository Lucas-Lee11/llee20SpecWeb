import React from "react"

class Image extends React.Component{


    render(){
        return(
            <div className = "image">
                <img src = {this.props.source} alt = "Great JS Thing"/>
            </div>
        );

    }
}

export default Image
