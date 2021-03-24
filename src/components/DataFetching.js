import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://examplebd.com/api/get-csrf-token')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className='flex flex-col space-y-16 justify-center items-center h-screen w-full'>
      <h1 className='text-green-700 font-bold text-2xl'>
        React Get Method Data Visualization
      </h1>
      <h1 className='text-xl font bold'>"{post.csrf_token}"</h1>
    </div>
  );
};

export default DataFetching;
