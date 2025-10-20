import { useEffect, useState } from "react"

import { getAllMoovies } from "../../Helpers/dbRequestsUtils"
import Moovie from "./Moovie"

function Moovies() {
    const [moovies, setMoovies] = useState([
        { id: "", name: "", director: "", year: 1000 },
    ])

    useEffect(() => {
        const fetchMoovies = async () => {
            const response = await getAllMoovies();
            setMoovies(response);
        }
        // fetchMoovies();
    }, [])

    const deleteHandler = () => {

    }

    const updateHandler = () => {

    }


    return (
        <>
            <div>Moovies</div>
            <table border={3}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Director</th>
                        <th>Premered On</th>
                    </tr>
                </thead>
                <tbody>
                {moovies && moovies.map(moovie => {
                    <Moovie key={moovie.id} moovieData={moovie} deleteCallback={deleteHandler} updateCallback={updateHandler}/>
                })}
                </tbody>
            </table>
        </>
    )
}

export default Moovies