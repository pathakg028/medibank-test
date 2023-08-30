import { useState, useEffect, createContext } from 'react';
import { getPets } from '../api/apiCall';
import { femSortedList } from '../utility/petListsSorting';
import { maleSortedList } from '../utility/petListsSorting';
import Male from '../components/MaleHeading'
import Female from '../components/FemaleHeading'
import MaleList from '../components/MaleList';
import FemaleList from '../components/MaleList';

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
          <MaleList pageData={maleSortedList(pageData)} />
          <Female />
          <FemaleList pageData={femSortedList(pageData)} />
        </div >}
      </contextCreation.Provider>
    </>
  );
}
export default App;
