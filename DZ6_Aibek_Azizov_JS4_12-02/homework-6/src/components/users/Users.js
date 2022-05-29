import React from "react";

function Users(props) {

    const {users} = props;

    if (users === null) {
        return <tr style={{fontWeight: "bolder", textAlign: "center"}}>No data</tr>
    }

    return (
        <>
            {users?.map(user => (

                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                </tr>

            ))}


        </>

    )
}

export default Users;