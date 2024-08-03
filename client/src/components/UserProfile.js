// Example component to display user profile
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('http://localhost:8000/login', {
          email: 'user@example.com', // Replace with the logged-in user's email
          password: 'password', // Replace with the logged-in user's password
        });

        if (response.data.status === 'success') {
          setUserData(response.data.user);
        } else {
          console.log('Login failed');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <h3>Application History</h3>
        <ul>
          {userData.applications.map((app) => (
            <li key={app._id}>{app.pet} - {app.applicantName}</li>
          ))}
        </ul>
      </div>
      {/* Add other sections for donations, etc. */}
    </div>
  );
}

export default UserProfile;
