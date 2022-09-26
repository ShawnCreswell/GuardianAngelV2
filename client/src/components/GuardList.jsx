import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
    
const GuardList = (props) => {

    const { removeFromDom } = props;

    const deleteGuard = (guardId) => {
        axios.delete('http://localhost:8000/api/guards/' + guardId)
            .then(res => {
                removeFromDom(guardId)
            })
            .catch(err => console.error(err));
    }





    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        <h1>All Guards</h1>
                    </div>
                </div>
            </div>
            {props.guards &&
            props.guards.map( (guard, i) =>{
                return (
                    <div className="container">
                        <div className="card">
                            <div className="card-body text-center">
                                <div key={i}>
                                    <Link to={`/guards/${guard._id}`}><p>{guard.title}</p></Link>
                                    {/* <button onClick={(e)=> deleteGuard(guard._id)}>Delete</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
    
export default GuardList;