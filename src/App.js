import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://reqres.in/api/users?page=1');
            const data = await response.json();
            setUsers(data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <Navbar onGetUsers={getUsers} />
            {loading ? <div className="loader"></div> : <UserGrid users={users} />}
        </div>
    );
}

export default App;
