import React from 'react'

const MaleList = ({ pageData }) => {
    return (
        <>
            {pageData.map((item, idx) => {
                return (< ul key={idx}>
                    <li key={idx}>{item}</li>
                </ul>)
            })}
        </>

    )
}
export default MaleList;
