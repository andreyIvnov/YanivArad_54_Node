import { memo } from "react"

function Moovie({ moovieData, deleteCallback, updateCallback }) {

    return (
        <>
            <tr>
                <td>{moovieData.name}</td>
                <td>{moovieData.director}</td>
                <td>{moovieData.year}</td>
            </tr>
        </>
    )
}

export default memo(Moovie)