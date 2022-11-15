import React from "react";
import { Link} from 'react-router-dom'


function List({members}) {

    function displayName(member) {
        if(member.role === 'admin') {
            return member.firstName + ' ' + member.lastName + ' (admin)' 
        } else {
            return member.firstName + ' ' + member.lastName
        }
    }



    const memberList = members.map((member) => 
        <li>
            <Link className='memberList' to={{
                pathname: "/edit",
                search: "?id=" + member.id}}>
                <div>
                    <h4> {displayName(member)} </h4> <br/>
                    <p> {member.email} </p> 
                    <p> {member.phoneNumber}</p>
                </div>
            </Link > 
        </li>
    )

    
    return (
        <div className="list">
            <Link to='/add'>
                <button> Add member </button>
            </Link>
            <h1> Team Members </h1>
            <h2> You have {members.length} team members </h2>
            <ol>{memberList}</ol>

        </div>
    )


}

export default List