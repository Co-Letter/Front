const url = 'http://43.200.4.132:8080';

exports.getTitle = async (accessToken, id) => {
  try {
    const response = await fetch(`${url}/api/mailbox/getmailboxtitle/${id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`
      },
      mode: 'cors',
    });

    const data = await response.json();
    return data.result.title;
  } catch (error) {
    console.error('Error during fetch title:', error);
  }
}

exports.patchTitle = async (accessToken, title) => {
  try {
    const response = await fetch(`${url}/api/mailbox`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`
      },
      mode: 'cors',
      body: JSON.stringify({title: title}),
    });

    const data = await response.json();
    return data.result.title;
  } catch (error) {
    console.error('Error during fetch title:', error);
  }
}

exports.countMail = async (accessToken, id) => {
    try {
      const response = await fetch(`${url}/api/mailbox/countmail/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        mode: 'cors',
      });
  
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error during fetch profile:', error);
    }
}

exports.getMail = async (accessToken, id) => {
    try {
      const response = await fetch(`${url}/api/mailbox/getallmail/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`
        },
        mode: 'cors',
      });
  
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error during fetch profile:', error);
    }
}

exports.sendMail = async (accessToken, id, content, secret, background) => {
  try {
    const response = await fetch(`${url}/api/letter/${id}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`
      },
      body: JSON.stringify({content: content, secret: secret, background: background}),
      mode: 'cors',
    });
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during fetch profile:', error);
  }
}
