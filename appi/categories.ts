const getCategories = async () => {
    const response = await fetch('https://tp--asincronismo-default-rtdb.firebaseio.com/categories.json')
    const data = await response.json();  
  
    return mapToArray(data)
  }
  
  
  