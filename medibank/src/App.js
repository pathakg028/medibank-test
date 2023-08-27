import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const url = 'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json';

  const getPets = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(url);
      const res = await response.data;
      setPageData(res)
      setIsLoading(false)

      console.log(res, 'API Result');
    }
    catch (error) {
    }
  }

  useEffect(() => {
    getPets()
  }, []);


  return (
    <>{isLoading ? (<h1>Loading...</h1>) : <div className="App">
      <h1>MALE</h1>
      {

        pageData.map((items) => {
          return (
            (items.pets && items.gender === 'Male') ? items.pets.map((i, idx, arr) => arr.sort((a, b) => a.name.localeCompare(b.name)) && (i.type === 'Cat') ? (< ul key={idx}>
              <li key={idx}>{i.name}</li>
            </ul>) : null) : null
          )
        })

      }
      <h1>FEMALE</h1>
      {
        pageData.map((items) => {

          return (
            (items.pets && items.gender === 'Female') ? items.pets.map((i, idx, arr) => arr.sort((a, b) => a.name.localeCompare(b.name)) && (i.type === 'Cat') ? (< ul key={idx}>
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
