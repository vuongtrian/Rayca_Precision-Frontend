"use client";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Setting from "./components/Setting/Setting";
import IndividualSharing from "./components/Inbox/IndividualSharing";
import { useState } from "react";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

export default function Home() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nick Sharp",
      email: "nick@attio.com",
      avatar: "N",
      accessLevel: "Full access",
    },
    {
      id: 2,
      name: "Alex Christie",
      email: "alex@attio.com",
      avatar: "A",
      accessLevel: "Metadata only",
    },
    {
      id: 3,
      name: "Jeremy Enderson",
      email: "jeremy@attio.com",
      avatar: "J",
      accessLevel: "Full access",
    },
  ]);

  const handleAccessChange = (id, newAccessLevel) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, accessLevel: newAccessLevel } : user
      )
    );
  };
  return (
    <div className={styles.container}>
      <Breadcrumb />
      <Header />
      <Setting />
      <IndividualSharing users={users} onAccessChange={handleAccessChange} />
    </div>
  );
}
