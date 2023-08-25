import { useState, useEffect } from 'react';
import axios from 'axios';

// import { useDebounce } from './customHook/useDebounce';

const App = () => {

  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const debouced = useDebounce();
  const url = 'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json';

  const getPets = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      const res = await response.data;
      console.log(res, 'API Result');

      const female = res.filter((female) => female.gender === 'Female')
      console.log(female, 'FEMALE Owner')
      const femaleArr = female.map((item) => item.pets.filter((pet) => pet.type === 'Cat'))
      let flatArrayFemale = [].concat.apply([], femaleArr);
      const resultFemale = flatArrayFemale.filter((ele) => ele.type === 'Cat')
      console.log(resultFemale, 'Female owner pets type Cat');

      const male = res.filter((male) => male.gender === 'Male')
      console.log(male, 'MALE Owner')
      const newArrMale = male.map((item) => item.pets).filter(Boolean)
      let flatArrayMale = [].concat.apply([], newArrMale);
      const result = flatArrayMale.filter((ele) => ele.type === 'Cat')
      console.log(result, 'Male Owner pets type Cat')

      setIsLoading(false);
      setPets();
    }
    catch (error) {
      // console.log(error)
    }
    finally {
    }
  }

  useEffect(() => {
    getPets()
  }, []);

  (isLoading) && <h1>Loading...</h1>;

  (!isLoading && !pets) && < h1 > Error</h1>
  return (
    (!isLoading) && <div className="App">

    </div>
  );
}
export default App;
