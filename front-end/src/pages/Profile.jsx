import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user data', err.response.data);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading... 
    1234
    <br />effort
  </div>;

  return (
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
  );
};

export default Profile;
