function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>{user.email}</p>
      <p>
        {user.location.city}, {user.location.country}
      </p>
      <p>Age: {user.dob.age}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default UserCard;
