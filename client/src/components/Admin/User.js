import React from "react";

export default function User({ index, user, handleBlock, handleUnBlock }) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{user.fname + " " + user.lname}</td>
      <td style={{ textTransform: "none" }}>{user.email}</td>
      <td>
        {user.allow ? (
          <button
            className="block"
            style={{ color: "red" }}
            onClick={() => handleBlock(user.id)}
          >
            <i className="fa-solid fa-ban"></i>
          </button>
        ) : (
          <button
            className="unblock"
            style={{ color: "green" }}
            onClick={() => handleUnBlock(user.id)}
          >
            <i className="fa-solid fa-check"></i>
          </button>
        )}
      </td>
    </tr>
  );
}
