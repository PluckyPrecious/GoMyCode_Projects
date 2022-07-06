import React from 'react'

const UserList = ({listOfUser}) => {

    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Street</th>
                        <th scope='col'>City</th>
                        <th scope='col'>Zipcode</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Website</th>
                        <th scope='col'>Company Name</th>
                    </tr>
                </thead>
                {listOfUser.map((user) => 
                    <tbody>
                        <tr>
                        <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    </tbody>)}
            </table>
        </div>
    )
}

export default UserList;