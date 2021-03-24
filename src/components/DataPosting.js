import axios from 'axios';
import { useEffect, useState } from 'react';

const DataPosting = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .post('https://examplebd.com/api/live-classes?user_id=10089', {
        csrf_token: 'T2Mekr9ZOYY72h9JczKNeiL7Nhc7XSbzT30QXwPq',
      })
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='flex justify-center items-center flex-col space-y-8 h-screen w-full'>
      {post.map((value, index) => (
        <>
          <div className='flex w-full px-20'>
            <div className='flex space-x-2 w-1/5'>
              <span className='font-semibold underline uppercase'>Id:</span>
              <span>{value.id}</span>
            </div>
            <div className='flex space-x-2 w-1/5'>
              <span className='font-semibold underline uppercase'>Type:</span>
              <span>{value.live_type}</span>
            </div>
            <div className='flex space-x-2 w-1/5'>
              <span className='font-semibold underline uppercase'>Title: </span>
              <span>{value.title}</span>
            </div>
            <div className='flex space-x-2 w-1/5'>
              <span className='font-semibold underline uppercase'>
                User Id:{' '}
              </span>
              <span>{value.user_id}</span>
            </div>
            <div className='flex space-x-2 w-1/5'>
              <span className='font-semibold underline uppercase'>Name: </span>
              <span>{value.user_name}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DataPosting;
