// import React from 'react'

// const Task01 = () => {
//   return (
//     <div>
//         <table>
//           <th style={{display:"flex"}}>
//             <tr>PostID</tr>
//             <tr>ID</tr>
//             <tr>Name</tr>
//             <tr>Email</tr>
//             <tr>Body</tr>
//           </th>
//           <tbody></tbody>
//         </table>
//     </div>
//   )
// }

// export default Task01;















import React, { useEffect, useState } from 'react';

export const Task01 = () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
          throw new Error('Data not found or error while receiving data');
        }
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setUser([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user.length > 0 && (
        <table border={2} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Album ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.albumId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>
                  <img src={data.url} alt={data.title} height="100" width="100" />
                </td>
                <td>
                  <img src={data.thumbnailUrl} alt={data.title} height="100" width="100" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};


export default Task01;