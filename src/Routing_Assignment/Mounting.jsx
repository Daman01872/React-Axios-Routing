import React from 'react'

function Mounting() {
    return (
        <div>
            <h1> Mounting Phase </h1>

            <p className="mount"> In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods. </p>


            <p className="mount"> <strong> componentWillMount()</strong> </p>

            <p className="mount"> This is invoked immediately before a component gets rendered into the DOM. In the case, when you call <strong> setState() </strong> inside this method, the component will not re-render. </p>

            <p> <strong> componentDidMount() </strong> </p>

            <p className="mount"> This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations. </p>

            <p> <strong> render() </strong> </p>

            <p className="mount"> This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value. </p>
        </div>
    )
}

export default Mounting
