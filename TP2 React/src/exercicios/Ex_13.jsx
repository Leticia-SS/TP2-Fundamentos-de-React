import { useState, useEffect } from "react"
import UserList from "./UserList_Ex13"

const Ex13 = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/users')
                if (response.ok) {
                    const userData = await response.json()
                    setUsers(userData)
                } else {
                    console.error('Erro ao buscar usuários')
                }
            } catch(error) {
                console.error("Erro no fetch: ", error)
            }
        }

        fetchUsers()

    }, [])

    return(
        <>
            <h1>Lista de Usuários</h1>
            <UserList users={users} />  
        </>
    )
}

export default Ex13