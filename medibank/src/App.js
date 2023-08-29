import { useState, useEffect } from 'react';
import { getPets } from '../src/api/apiCall';
import { femSortedList } from '../src/utility/petListsSorting';
import { maleSortedList } from '../src/utility/petListsSorting';

const App = () => {

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
    <>{isLoading ? (<h1>Loading...</h1>) : <div className="App">
      <h2>MALE</h2>
      {maleSortedList(pageData).map((item, idx) => {
        return (< ul key={idx}>
          <li key={idx}>{item}</li>
        </ul>)
      })}
      <h2>FEMALE</h2>
      {femSortedList(pageData).map((item, idx) => {
        return (< ul key={idx}>
          <li key={idx}>{item}</li>
        </ul>)
      })}
    </div >}
    </>
  );
}
export default App;
