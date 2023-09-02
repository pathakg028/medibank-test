import React from 'react'
import PropTypes from 'prop-types';


const FemaleList = ({ pageData }) => {
    return (
        <>
            {pageData.map((item, idx) => {
                return (
                    < ul key={idx}>
                        <li key={idx}>{item}</li>
                    </ul>)
            })}</>
    )
}

FemaleList.propTypes = {
    pageData: PropTypes.array
};

export default FemaleList;