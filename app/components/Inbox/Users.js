import React from "react";
import User from "./User";
import styles from "./IndividualSharing.module.css";

function Users({ users, onAccessChange }) {
  return (
    <div className={styles.usersContainer}>
      <div className={styles.usersHeader}>
        <span className={styles.headerUser}>User</span>
        <span className={styles.headerAccess}>Access</span>
      </div>
      {users.map((user) => (
        <User
          key={user.id}
          avatar={user.avatar}
          username={user.name}
          email={user.email}
          accessLevel={user.accessLevel}
          onAccessChange={onAccessChange} // Pass the handler function down
          userId={user.id} // Pass the user id to identify which user is being changed
        />
      ))}
    </div>
  );
}

export default Users;
