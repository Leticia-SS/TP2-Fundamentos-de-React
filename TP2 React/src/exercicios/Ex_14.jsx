import { useState, useEffect } from "react";
import UserList from "./UserList_Ex14";
import UserDetail from "./UserDetail_Ex14";

const Ex14 = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                if (response.ok) {
                    const userData = await response.json();
                    setUsers(userData);
                } else {
                    console.error('Erro ao buscar usuários');
                }
            } catch (error) {
                console.error("Erro no fetch: ", error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = async (id) => {
        console.log(id);
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${id}`);
            if (response.ok) {
                const userData = await response.json();
                setSelectedUser(userData);
            } else {
                console.error('Erro ao buscar detalhes do usuário');
            }
        } catch (error) {
            console.error("Erro no fetch: ", error);
        }
    };

    return (
        <>
            <h1>Lista de Usuários</h1>
            <UserList users={users} onUserClick={handleUserClick} />  
            {selectedUser && <UserDetail user={selectedUser} />}
        </>
    );
};

export default Ex14;
