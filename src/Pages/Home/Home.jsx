import React,{ useState, useEffect } from 'react'

const Home = () => {
    const[open, setOpen] = useState(false)
    const[users,setUsers] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))


    },[])
console.log(users)
  return (
    <div>
     

      
    </div>
  )
}

export default Home
