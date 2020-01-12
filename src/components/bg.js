import React from "react"
import * as THREE from 'three'
import FOG from '../assets/fog'


export default class Bg extends React.Component {

    constructor(props){
        super(props);
        this.elem = React.createRef();
    }

    componentDidMount() {
        this.vantaEffect = FOG({
            el: this.elem.current,
            highlightColor: 0x0,
            midtoneColor: 0xf2371d,
            baseColor: 0x8c14e1,
            blurFactor: 0.90,
            speed: 2.90,
            zoom: 1.30,
            THREE: THREE
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy()
        }
    }
    
    render (){
        return (
            <div id="background" ref={this.elem}></div>
        )
    }
}