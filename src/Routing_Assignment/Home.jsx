import React from 'react'
import {Link} from "react-router-dom";
import'./Home.css'

function Home() {
    return (
        <div className="home">
        <h1> REACT LIFECYCLE COMPONENTS </h1>

        <p> <strong> Mounting Phase : </strong> These methods are called when an instance of a component is being created and inserted into the DOM.  <a class="nav-link" href="#">  <Link to="/mount"> Read more </Link> </a> </p>

        <p> <strong> Updating Phase : </strong> An update can be caused by changes to props or state. These methods are called  when a component is being re-rendered. <a class="nav-link" href="#"> <Link to="/update"> Read more </Link> </a> </p>

        <p> <strong> Unmounting Phase : </strong> This method is called when a component is being removed from the DOM.  <a class="nav-link" href="#">  <Link to="/unmount"> Read more </Link> </a> </p>

        </div>
    )
}

export default Home
