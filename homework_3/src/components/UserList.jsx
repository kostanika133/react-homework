import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default UserList;
