import React, { useEffect, useState } from 'react';
import Footer from '../componants/Footer';
import Header from '../componants/Header';
import Button from '../componants/Button';
import phoneArray from '../phoneArray.json';

const Gallery = () => {
  const [value, setValue] = useState('');
  const [choose, setChoose] = useState('price');
  const [filteredArr, setFilteredArr] = useState([]);
  const [currentArr, setCurrentArr] = useState([]);
  const [btnNumber, setBtnNumber] = useState(1);

  useEffect(() => {
    setFilteredArr(phoneArray);
    setCurrentArr(sliceTheArray(phoneArray, 1));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const newArr = filteredPhone(phoneArray, choose, value);
    setFilteredArr(newArr);
    setCurrentArr(sliceTheArray(newArr, 1));
    setBtnNumber(1);
  };

  const sliceTheArray = (arr, num) => {
    const start = (num - 1) * 3;
    return arr.slice(start, start + 3);
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
    return Array.from({ length: numOfButtons }, (_, i) => (
      <Button key={i} number={i + 1} func={() => handleButtonClick(i + 1)} page={btnNumber} />
    ));
  };

  const filteredPhone = (phones, criterion, value) => {
    if (!value) return phones;
    return phones.filter(phone => phone[criterion].toString().toLowerCase().includes(value.toLowerCase()));
  };

  return (
    <div className="text-center">
      <Header bgColor="purple-100" titleColor="gray-900" title="Gallery" />
      <form onSubmit={handleSearch} className="mt-8 mb-4 mx-auto max-w-lg">
        <div className="flex items-center justify-center">
          <input
            id="search"
            type="text"
            placeholder="Enter value to search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-10 m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:drop-shadow-lg"
          />
          <select
            value={choose}
            onChange={(e) => setChoose(e.target.value)}
            className="h-10 px-3 m-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="price">Price</option>
            <option value="model">Model</option>
          </select>
          <button
            type="submit"
            className="h-[40px] bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>

      <div className="w-[1200px] m-auto my-[50px] flex justify-between flex-wrap">
        {currentArr.map(phone => (
          <div key={phone.id} className="card p-4 m-4 border rounded shadow">
            <img src={phone.image} alt={phone.model} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{phone.model}</h2>
            <p className="text-gray-700">Price: ${phone.price}</p>
            <p className="text-gray-500">{phone.description}</p>
          </div>
        ))}
      </div>

      <div className="flex w-[800px] m-auto justify-around">
        <Button dis={btnNumber === 1} number="Back" name="Back" func={backBtn} />
        {buttonsGenerator(Math.ceil(filteredArr.length / 3))}
        <Button dis={btnNumber === Math.ceil(filteredArr.length / 3)} number="Next" name="Next" func={nextBtn} />
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
