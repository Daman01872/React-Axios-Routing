import React from 'react'

function Updating() {
    return (
        <div>
            <h1> Updating Phase </h1>

           <p> It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy. The main aim of this phase is to ensure that the component is displaying the latest version of itself.This phase consists of the following methods:</p>

            <p> <strong> componentWillUpdate() </strong> </p>

<p> It is invoked just before the component updating occurs. Here, you can't change the component state by invoking <b>this.setState()</b> method. It will not be called, if <b>shouldComponentUpdate()</b> returns false.</p>

<p> <strong>render()</strong></p>

<p> It is invoked to examine<b> this.props </b>and <b> this.state</b> and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.</p>

<p> <strong> componentDidUpdate()</strong></p> 

<p> It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.</p>

        </div>
    )
}

export default Updating
