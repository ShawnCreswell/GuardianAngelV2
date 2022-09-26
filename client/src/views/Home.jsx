import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Home = () => {

    // useEffect(() => {
    //     const guardInfo = localStorage.getItem("guardInfo");
    
    //     if(guardInfo) {
    //       history.push("/dashboard")
    //     }
    //   }, [history])

    return(
        <div className='container d-flex justify-content-center align-items-center' style={{height:"800px"}}>
            <div className="row">
                <div className="col">
                    <h1>Guardian Angel</h1>
                    <Link to={`/register`}>
                        <p>Get started</p>
                    </Link>
                </div>
            </div>
        </div>
    )

}


export default Home;