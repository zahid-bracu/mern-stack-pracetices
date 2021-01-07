import React from 'react';
import { Table } from 'reactstrap';
const VolunteerList = () => {
    return (
        <>
        <h4 className="text-center mt-5">Registered Volunteer List</h4>
        <Table style={{maxWidth:"700px"}} className="mx-auto mt-5">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Volunteer List</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </>
    );
};

export default VolunteerList;