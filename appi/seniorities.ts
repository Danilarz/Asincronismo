const getSeniorities = async () => {
    const response = await fetch('https://tp--asincronismo-default-rtdb.firebaseio.com/seniorities.json')
    const data = await response.json();  
  
    return mapToArray(data)
  }
  