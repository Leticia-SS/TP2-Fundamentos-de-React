const UserList = ({ users, onUserClick }) => {
    const listStyle = {
        listStyleType: 'none',
        padding: 0
    };

    return (
        <ul style={listStyle}>
            {users.map((user) => (
                <li key={user.id} onClick={() => onUserClick(user.id)} style={{ cursor: 'pointer' }}>
                    {user.username} --- {user.email}
                </li>
            ))}
        </ul>
    );
};

export default UserList;
