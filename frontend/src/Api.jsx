import React, { useState } from 'react'
import axios from 'axios'
const Api = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/users');
      console.log(response.data);
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div>
       <h1>API Data</h1>
       <p>Check the console for API data</p>
       <button onClick={fetchData}>Fetch Data</button>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default Api