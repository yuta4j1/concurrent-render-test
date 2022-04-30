import React from "react";
import { useUser } from "./fetcher/useData";

const UserList: React.FC<{}> = ({}) => {
  const userList = useUser();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {userList.map(v => (
        <div key={v.id}>名前: {v.nickname}</div>
      ))}
    </div>
  );
};

export default UserList;
