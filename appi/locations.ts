const addLocation = async (locations) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(locations)
    }
    
    await fetch('https://tp--asincronismo-default-rtdb.firebaseio.com/locations/-N5Y77MVh0R5UNrYq5Lp.json', options)
    
    
}

const getLocations = async () => {
  const response = await fetch('https://tp--asincronismo-default-rtdb.firebaseio.com/locations/-N5Y77MVh0R5UNrYq5Lp.json')
  const data = await response.json();  

  return mapToArray(data)
}


