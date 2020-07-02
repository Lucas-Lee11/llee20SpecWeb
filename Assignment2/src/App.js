import React from 'react'
import Image from "./Image"
import Header from "./Header"
import Shifter from "./Shifter"
import Randomize from "./Randomize"
import images from "./images"


class App extends React.Component{

    constructor(){
        super()
        this.state = {
            imgs : images,
            cur : 1
        }
        this.shiftLeft = this.shiftLeft.bind(this)
        this.shiftRight = this.shiftRight.bind(this)
        this.handleRandom = this.handleRandom.bind(this)
    }

    shiftLeft = () =>{
        if (this.state.cur === 1) return
        this.setState(pre =>{
            return{
                imgs : pre.imgs,
                cur : pre.cur - 1
            }
        })
    }

    shiftRight = () =>{
        if (this.state.cur === this.state.imgs.length) return
        this.setState(pre =>{
            return{
                imgs : pre.imgs,
                cur : pre.cur + 1
            }
        })
    }

    handleRandom = () => {
        let array = this.state.imgs
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState(pre =>{
            return{
                imgs: array,
                cur : 1
            }
        })
    }


    render(){

        return (
            <div>
                <Header/>
                <Image source = {this.state.imgs[this.state.cur - 1].img}/>
                <Shifter shiftLeft = {this.shiftLeft} shiftRight = {this.shiftRight}/>
                <Randomize handleRandom = {this.handleRandom}/>
            </div>

        );

    }
}

export default App;
