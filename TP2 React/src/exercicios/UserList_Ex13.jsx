const UserList = ({ users }) => {
    
    const listStyle = {
        listStyleType: 'none',
        padding: 0
    };
    
    return(
        <ul style={listStyle}>
            {users.map((user) => (
                <li key={user.id}>{user.username} --- {user.email}</li>
            ))}
        </ul>
    )
}

export default UserList