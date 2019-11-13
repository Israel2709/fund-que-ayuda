import React, { Component } from 'react'

class Titlebar extends Component{
    render(){
        return(
            <div className="title-bar">
                <div className="contact-wrapper">
                    <span>buzon@fundacionideaqueayuda.org.mx</span>
                    <span>55 6811 4444</span>
                </div>
                <div className="btn btn-primary">Donar</div>
            </div>
        )
    }
}

export default Titlebar