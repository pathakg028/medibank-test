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

  const femSortedList = () => {
    const female = pageData.filter((female) => female.gender === 'Female').map((item) => item.pets.filter((pet) => pet.type === 'Cat'))
    let flatArrayFemale = [].concat.apply([], female);
    const resultFemale = flatArrayFemale.filter((ele) => ele.type === 'Cat')
    const newArr = [];
    resultFemale.forEach((item) => {
      newArr.push(item.name)
    })
    return newArr.sort();
  }

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

      {femSortedList().map((item, idx) => {
        return (< ul key={idx}>
          <li key={idx}>{item}</li>
        </ul>)
      })}
    </div >}
    </>
  );
}
export default App;
