import { useState, useEffect, createContext } from 'react';
import { getPets } from '../src/api/apiCall';
import { femSortedList } from '../src/utility/petListsSorting';
import { maleSortedList } from '../src/utility/petListsSorting';
import Male from './components/Male'
import Female from './components/Female'

export const contextCreation = createContext();
let user = {
  name: 'additional task Just to include context api in the app',
};

export const App = () => {

  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiData = async () => {
    setIsLoading(true)
    const petData = await getPets()
    if (petData) {
      setPageData(petData)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    apiData()
  }, []);

  return (
    <>
      <contextCreation.Provider value={user}>
        {isLoading ? (<h1>Loading...</h1>) : <div>
          <Male />
          {maleSortedList(pageData).map((item, idx) => {
            return (< ul key={idx}>
              <li key={idx}>{item}</li>
            </ul>)
          })}

          <Female />
          {femSortedList(pageData).map((item, idx) => {
            return (< ul key={idx}>
              <li key={idx}>{item}</li>
            </ul>)
          })}
        </div >}
      </contextCreation.Provider>
    </>
  );
}
export default App;
