import React, { useEffect, useState } from "react";
// import API from './api';
import axios from "axios";

const Dummy = () => {
  const [arr, setArr] = useState([]);

  useEffect(async function () {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(data.data);
    // typeof(data)
    setArr( data.data );
  }, []);

  return (
    <div>
      {arr.map((val,i) => (
       <div>{i}&nbsp;{val.email}</div>
      ))}
    </div>
  );
};

export default Dummy;
