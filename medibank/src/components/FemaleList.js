import React from 'react'

const FemaleList = ({ pageData }) => {
    return (
        <>
            {pageData(pageData).map((item, idx) => {
                return (< ul key={idx}>
                    <li key={idx}>{item}</li>
                </ul>)
            })}</>
    )
}

export default FemaleList;