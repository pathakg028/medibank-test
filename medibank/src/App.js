import { useState, useEffect } from 'react';
import { getPets } from '../src/api/apiCall'

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
      {

        pageData.map((items) => {
          return (
            (items.pets && items.gender === 'Male') ? items.pets.map((i, idx, arr) => arr.sort((a, b) => (a.name).localeCompare(b.name)) && (i.type === 'Cat') ? (< ul key={idx}>
              <li key={idx}>{i.name}</li>
            </ul>) : null) : null
          )
        })
      }
      <h2>FEMALE</h2>
      {
        pageData.map((items) => {
          return (
            (items.pets && items.gender === 'Female') ? items.pets.map((i, idx, arr) => arr.sort((a, b) => (a.name).localeCompare(b.name)) && (i.type === 'Cat') ? (< ul key={idx}>
              <li key={idx}>{i.name}</li>
            </ul>) : null) : null
          )
        })

      }
    </div >}
    </>
  );
}
export default App;
