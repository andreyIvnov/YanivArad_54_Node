import { useState } from 'react'
import { getAllUsers } from '../../utils/usersRequestsManager'

function Customers() {
    const [customers, setCustomers] = useState([])

    const getAllUsersHere = async () => {
        try {
            const users = await getAllUsers();
            setCustomers(users);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>Customers</div>
            <button onClick={getAllUsersHere}>Get All users</button>
        </>
    )
}

export default Customers