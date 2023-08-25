import { useState, useEffect } from 'react';

export const useDebounce = (inputVal, delay = 1000) => {
    const [deBouncedVal, setDebaouncedVal] = useState(inputVal)

    useEffect(() => {
        const timer = setTimeout(() => setDebaouncedVal(inputVal), delay)
        return () => clearTimeout(timer);
    }, [inputVal, delay])
    return deBouncedVal;
}