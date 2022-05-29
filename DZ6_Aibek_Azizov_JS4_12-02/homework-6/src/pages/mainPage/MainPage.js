import React, {useState} from "react";
import {Title} from "../../components/title/Title";
import Users from "../../components/users/Users";

const URL = 'https://jsonplaceholder.typicode.com/users/';

function MainPage() {

    const [users, setUsers] = useState(null);

    const getUser = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setUsers(data));

    };

    return (
        <div>
            <Title title="Main Page"/>

            <table border="1" style={{marginLeft: "20px", width: "900px"}}>
                <thead>
                    <tr style={{fontWeight: "bolder", textAlign: "center", background: "lightgray" }}>
                        <td>#</td>
                        <td>name</td>
                        <td>email</td>
                        <td>username</td>
                    </tr>
                </thead>

                <tbody>
                    <Users users={users}/>
                </tbody>
            </table>

            <button onClick={getUser}
                    style={{margin: "20px", padding: "10px", background: "lightgray", fontWeight: "bolder"}}>GET USERS
            </button>

        </div>
    )
}

export default MainPage;