import React from "react";

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const UserLIst = () => {
  const users = [
    { email: "paul@gmail.com", name: "폴" },
    { email: "edan@gmail.com", name: "에단" },
    { email: "bennett@gmail.com", name: "베넷" },
    { email: "neo@gmail.com", name: "네오" },
  ];

  return (
    <table>
      <thread>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thread>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserLIst;
