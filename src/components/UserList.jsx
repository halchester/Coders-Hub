import React from "react";
import data from "../data";
import User from "./User";

function UserList() {
  return (
    <div className="userlist">
      {data.map((user, i) => {
        return (
          <User
            name={user.name}
            website={user.website}
            github={user.github}
            emoji={user.emoji}
            info={user.info}
            phone={user.phone}
            laptop={user.laptop}
            tags={user.tags}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default UserList;
