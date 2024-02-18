const url = 'https://cocooletter.shop';

exports.getProfile = async (accessToken) => {
  try {
    const response = await fetch(`${url}/api/member/profile`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`
      },
      mode: 'cors',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during fetch profile:', error);
  }
}
