import { useState } from "react";
import { users } from "../data/users";
import UserList from "./UserList";

function Site() {
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className="site">
      <h1>Users</h1>
      <UserList users={users.slice(0, visibleCount)} />
      {visibleCount < users.length && (
        <button type="button" onClick={() => setVisibleCount(users.length)}>
          Show more
        </button>
      )}
    </div>
  );
}

export default Site;
