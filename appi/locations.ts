const getLocations = async () => {
  const response = await fetch('https://tp--asincronismo-default-rtdb.firebaseio.com/locations.json')
  const data = await response.json();  

  return mapToArray(data)
}


