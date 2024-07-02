import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    debugger
    axios.get('http://108.181.215.219:816/api/admin/GetAll-Users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <table className="table text-nowrap">
      <thead>
        <tr>
          <th scope="col"><input className="form-check-input" type="checkbox" /></th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
          <th scope="col">Billing Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <th scope="row"><input className="form-check-input" type="checkbox" /></th>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.billingAddress}</td>
            <td>
              <div className="hstack gap-2 fs-15">
                <a href="#" className="btn btn-icon btn-sm btn-success" title="Verify">
                  <i className="ri-check-line"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-warning" title="Suspend">
                  <i className="ri-forbid-line"></i>
                </a>
                <a href="#" className="btn btn-icon btn-sm btn-danger" title="Delete">
                  <i className="ri-delete-bin-line"></i>
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default User;
