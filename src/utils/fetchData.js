export const characters = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'https://game-of-thrones1.p.rapidapi.com/Characters',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };