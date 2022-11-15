import { useState } from "react";
import { 
    BrowserRouter as Router,
    Route, Routes } from 'react-router-dom'
import List from '../components/List'
import Add from "./Add";
import Edit from "./Edit";

export default function Main() {

    const [members, setMembers] = useState([])
    const [id, setId] = useState(0)

    return (
        <Router>
        <div className="main">
            <Routes>
                <Route path="/" element={<List 
                            members={members}/>} />
                <Route path="/add" element={<Add 
                            members={members} 
                            setMembers={setMembers} 
                            id={id} 
                            setId={setId}/>}
                             />
                <Route path="/edit" element={<Edit 
                            members={members} 
                            setMembers={setMembers} />} /> 
            </Routes>
        </div>
        </Router>
    )

}