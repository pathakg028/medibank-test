import React from 'react'
import PropTypes from 'prop-types';

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
MaleList.propTypes = {
    pageData: PropTypes.array
};

export default MaleList;