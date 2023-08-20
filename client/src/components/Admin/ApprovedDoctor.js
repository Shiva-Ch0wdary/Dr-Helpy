import React from "react";
export default function ApprovedDoctor({ index, doctor, handleDelete }) {
  return (
    <tr>
      <th scope="row" className="align-middle">
        {index + 1}
      </th>
      <td className="align-middle">
        <img src={`${doctor.url}`} width="100px" height="100px" alt="" />
      </td>

      <td className="align-middle">{doctor.name}</td>
      <td className="align-middle">{doctor.type}</td>

      <td className="align-middle">{`${new Date(doctor.DOR).getDate()}/${
        new Date(doctor.DOR).getMonth() + 1
      }/${new Date(doctor.DOR).getFullYear()}`}</td>
      <td className="align-middle">{doctor.registrationno}</td>
      <td className="align-middle">
        <button
          className="block"
          style={{ color: "red" }}
          onClick={() => handleDelete(doctor._id)}
        >
          <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}
