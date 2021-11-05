import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Main.css'
function Main() {

    const [state, setState] = useState([])

    const [input, setinput] = useState({
        name: " "
    })

    function handleChange(event) {
        setinput({
            ...input, [event.target.name]: event.target.value
        })

    }

    function addData() {
  console.log(input)
        
    }

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
            console.log(data.data) 
          
        setState([...data.data]);
        }).catch((err) => {

            console.log(err)
        })

    }, [])



    const url = "https://reqres.in/api/users?page=2"


    function getData() {

        // ===================== [ Axios ] =================

        axios.get(url).then((data) => {
            let data1 = data.data
            console.log(data1.data)

            setState(data1.data)

        }).catch((error) => {
            console.log("Error Occured", error)
        })
    }

    const payload = {name :'daman',role : 'developer'}

    function postData() {
        axios.post('https://jsonplaceholder.typicode.com/users',payload).then((data) => {

            console.log(data.data)

        }).catch((err) => {

            console.log(err)
        })

    }

   // console.log('This is a State', state)

    return (
        <>
        <div>
            <h1> Digikull Students </h1>
           
            </div>
            <div className="container-fluid py-4 mt-4 myInput">
            <h2> Hello User </h2>
<div className="Input container justify-content-center">
    <div class="mb-3">
       
        <input type="text" name="name" onChange={handleChange}  class="form-control" id="exampleFormControlInput1" placeholder=" Enter Student Name" />
        </div> 
    <button className="btn-btn-dark" onClick={addData}> Add </button>
    
    </div>



            

            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((ele, index) => (

                            <tr key={index}>

                                <td  scope="row">{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                <td>{ele.address.street}</td>
                            </tr>

                        ))

                    }


                </tbody>
            </table>

            <button className="btn btn-dark" onClick={postData}> Post Data </button>
            <div><button className="btn btn-dark" onClick={getData}> Get Data </button> </div>

            <div>
               <table class="table table-hover bg-light">
                    <thead className="bg-warning">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"> Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                           state.map((element,index)=>(
                                <tr>
                                <th scope="row">{index+1}</th>
                
                                <td>{element.name}</td>
                                
                            </tr>
                            ))
                           
                        }

                       

                    </tbody>

                </table>
        </div>
        </div>
        </>
    )
}

export default Main
