  import React, { useEffect, useState } from 'react'
  import Footer from '../componants/Footer'
  import Header from '../componants/Header'
  import fishArray from '../fishArray.json'
  import FishCard from '../componants/FishCard';
  import { fishGenerator, filteredFish } from '../Functions/funcs';
  import Button from '../componants/Button';



  const Gallery = () => {
    const [value, setValue] = useState('');
    const [choose, setChoose] = useState('area');
    const [filteredArr, setFilteredArr] = useState([]);
    const [currentArr, setCurrentArr] = useState([]);
    const [btnNumber, setBtnNumber] = useState(1);

    useEffect(() => {
      setFilteredArr(fishArray); // Initialize filteredArr with all fish on component mount
      setCurrentArr(sliceTheArray(fishArray, 1)); // Initialize currentArr with the first page of fish
    }, []);

    const handleSearch = (e) => {
      e.preventDefault();
      const newArr = filteredFish(fishArray, choose, value);
      setFilteredArr(newArr);
      setCurrentArr(sliceTheArray(newArr, 1));
      setBtnNumber(1);
    };

    const sliceTheArray = (arr, num) => {
      const start = (num - 1) * 3;
      const newArr = arr.slice(start, start + 3);
      return newArr;
    };

    const handleButtonClick = (pageNumber) => {
      setCurrentArr(sliceTheArray(filteredArr, pageNumber));
      setBtnNumber(pageNumber);
    };

    const nextBtn = () => {
      if (btnNumber < Math.ceil(filteredArr.length / 3)) {
        handleButtonClick(btnNumber + 1);
      }
    };

    const backBtn = () => {
      if (btnNumber > 1) {
        handleButtonClick(btnNumber - 1);
      }
    };

    const buttonsGenerator = (numOfButtons) => {
      const compsArr = [];
      for (let i = 0; i < numOfButtons; i++) {
        compsArr.push(
          <Button key={i} number={i + 1} func={() => handleButtonClick(i + 1)} page = {btnNumber}/>
        );
      }
      return compsArr;
    };

    return (
      <div className="text-center">
        <Header bgColor="purple-100" titleColor="gray-900" title="Gallery" />
        <form onSubmit={handleSearch} className="mt-8 mb-4 mx-auto max-w-lg">
          <div className="flex items-center justify-center">
            <input
              id="area"
              type="text"
              placeholder="Enter area to search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-10 m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:drop-shadow-lg "
            />

            <select
              value={choose}
              onChange={(e) => setChoose(e.target.value)}
              className="h-10 px-3 m-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option className="text-gray-700 m-3" value="area">
                Area
              </option>
              <option className="text-gray-700 m-3" value="waterType">
                Water Type
              </option>
              <option className="text-gray-700 m-3" value="name">
                Name
              </option>
            </select>

            <button
              type="submit"
              className="h-[40px] bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </form>

        <div className="w-[1200px] m-auto my-[50px] flex justify-between">
          <div className="m-8 flex justify-around">
            {fishGenerator(currentArr)}
          </div>
        </div>

        
        <div className="flex w-[800px] m-auto justify-around">
          <newBtn dis={btnNumber == 1} number="Back" key="12" name="Back" func={backBtn} />
          {buttonsGenerator(Math.ceil(filteredArr.length / 3))}
          <newBtn dis="{btnNumber == Math.ceil(filteredArr.length / 3)} "number="Next" key="11" name="Next" func={nextBtn} />
        </div>

        <Footer />
      </div>
    );
  };

  export default Gallery;
