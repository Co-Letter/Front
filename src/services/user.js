const url = 'http://3.36.88.85:8080';

exports.getProfile = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');

    const response = await fetch(`${url}/api/member/profile`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`
      },
      mode: 'cors',
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error during fetch profile:', error);
  }
}