import React, {useState} from "react";
import { Link, useNavigate} from 'react-router-dom'


const Add = ({members, setMembers, id, setId}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [role, setRole] = useState("regular")
    const [selected, setSelected] = useState('yes')

    const navigate = useNavigate()

    const addMember = () => {
        console.log("Inside the add member function")
        setMembers([...members, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            role: role,
            id: id,
        }])
        setId(id + 1)
        navigate("/")
    }
    

    return (
        <div className="add">
            <Link to='/'>
                <button> Cancel </button>
            </Link>
            <h1> Add a team member </h1>
            <h3> Set email location and role </h3>
            <h2> Info </h2>
            <label htmlFor='firstName'> First Name: </label>
            <input type="text" name="firstName" 
            onChange={(e) => {
                setFirstName(e.target.value)
            }}/>
            <br/>
            <label htmlFor='lastName'> Last Name: </label>
            <input type="text" name="lastName" 
            onChange={(e) => {
                setLastName(e.target.value)
            }}/>
            <br/>
            <label htmlFor='email'> Email: </label>
            <input type="text" name="email" 
            onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <br/>
            <label htmlFor='phoneNumber'> phoneNumber </label>
            <input type="text" name="phoneNumber" 
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
                addMember();

                }}> Save </button>
            
            
        </div>
    )

}

export default Add
