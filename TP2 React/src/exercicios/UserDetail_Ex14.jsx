const UserDetail = ({ user }) => {
    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nome:</strong> {user.name.firstname} {user.name.lastname}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Endereço:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            <p><strong>Telefone:</strong> {user.phone}</p>
            <p><strong>Geolocalização:</strong> Latitude: {user.address.geolocation.lat}, Longitude: {user.address.geolocation.long}</p>
        </div>
    );
};

export default UserDetail;
