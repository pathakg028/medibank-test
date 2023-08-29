import React, { useContext } from 'react';
import { contextCreation } from '../App';

const Male = () => {
    const data = useContext(contextCreation);
    return (<>
        <h1>{data.name}</h1>
        <h2>Female</h2>
    </>
    )
}
export default Male;