import React, {useState} from "react";
import { Link, useNavigate} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

function Edit({members, setMembers}) {

    
    const [searchParams, setSearchParams] = useSearchParams();
    const editMember = members.find(member => member.id === parseInt(searchParams.get("id")))
    console.log(editMember)

    const [firstName, setFirstName] = useState(editMember.firstName)
    const [lastName, setLastName] = useState(editMember.lastName)
    const [email, setEmail] = useState(editMember.email)
    const [phoneNumber, setPhoneNumber] = useState(editMember.phoneNumber)
    const [role, setRole] = useState(editMember.role)
    const [selected, setSelected] = useState('yes')

    const navigate = useNavigate()

    const deleteMember = () => {
        const index = members.indexOf(editMember)
        const newMembers = members.splice(index, 1)
        navigate("/")
    }

    const saveEdits = () => {
        const index = members.indexOf(editMember)
        const newMembers = members.splice(index, 1)
        setMembers([...members, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            role: role,
            id: parseInt(searchParams.get("id")),
        }])

        navigate("/")
    }
    

    return (
        <div className="edit">
            <Link to='/'>
                <button> Cancel </button>
            </Link>
            <h1> Edit team member </h1>
            <h3> Edit contact info, location and role </h3>
            <h2> Info </h2>
            <label htmlFor='firstName'> First Name: </label>
            <input type="text" name="firstName" value={firstName}
            onChange={(e) => {
                setFirstName(e.target.value)
            }}/>
            <br/>
            <label htmlFor='lastName'> Last Name: </label>
            <input type="text" name="lastName" value={lastName}
            onChange={(e) => {
                setLastName(e.target.value)
            }}/>
            <br/>
            <label htmlFor='email'> Email: </label>
            <input type="text" name="email" value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <br/>
            <label htmlFor='phoneNumber'> phoneNumber </label>
            <input type="text" name="phoneNumber" value={phoneNumber}
            onChange={(e) => {
                setPhoneNumber(e.target.value)
            }}/>
            
            <h2> Select a role </h2>
            <form>
                <label htmlFor='regular'> Regular - Can't Delete Members </label>
                <input type="radio" name='role' id="regular" checked={selected === 'yes'} onClick={() => {
                    setRole("regular")}
                    }/>
                <br/>
                <label htmlFor='admin'> Admin - Can delete members </label>
                <input type="radio" name='role' id="admin" onClick={() => {
                    setRole("admin")}
                    }/>
                <br/>
            </form>
        
            <button onClick={() => {
                deleteMember();
                }}> Delete </button>
            <button onClick={() => {
                saveEdits();
                }}> Save </button>
            
            
        </div>
    )

}

export default Edit