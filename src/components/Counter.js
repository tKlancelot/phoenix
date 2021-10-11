import React, { Component } from 'react'

export default class Counter extends Component {

    
    componentDidMount()
    {
        this.raiseCount();
    }

    raiseCount(){
        const counter = document.querySelector('#counter');
        fetch("https://api.countapi.xyz/update/tarik-louatah/portfolio/?amount=+1")
        .then(res => res.json())
        .then(res=>{
            counter.innerHTML = res.value;
        })
    }

    render() {
        return (
            <div className="compteur">
                <span>vues</span>&nbsp;
                <span id="counter"></span>
            </div>
        )
    }
}