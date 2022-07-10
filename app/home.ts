const filterForm = document.getElementById('filter-form');
// Se creo evento de formulario 
const createFilter = async (e) => {
    e.preventDefault()
    const formF = e.target

    const filter = {
        location: formF.locations.value, 
        seniority: formF.seniorities.value,
        category: formF.categories.value
    }

    await addFilter(filter)
    loadFilters()
    
}

filterForm.addEventListener('submit', createFilter)

// Select de location

const locationsControl = document.getElementById('locations-control');

const loadLocations = async () => {
    const locations = await getLocations()

    locationsControl.innerHTML = '';

    locations.forEach(loc => {
        const optionName = document.createElement('option')
        const txtName = document.createTextNode(loc.name)
       
        optionName.appendChild(txtName)
        
        locationsControl.appendChild(optionName)
    })
    
}
loadLocations()

//Select seniority

const senioritiesControl = document.getElementById('seniorities-control');

const loadSeniorities = async () => {
    const seniorities = await getSeniorities()

    senioritiesControl.innerHTML = '';

    seniorities.forEach(sen => {
        const optionName = document.createElement('option')
        const txtName = document.createTextNode(sen.name)
       
        optionName.appendChild(txtName)
        
        senioritiesControl.appendChild(optionName)
    })
    
}
loadSeniorities()

//Select category

const categoriesControl = document.getElementById('categories-control');

const loadCategories = async () => {
    const categories = await getCategories()

    categoriesControl.innerHTML = '';

    categories.forEach(cat => {
        const optionName = document.createElement('option')
        const txtName = document.createTextNode(cat.name)
       
        optionName.appendChild(txtName)
        
        categoriesControl.appendChild(optionName)
    })
    
}
loadCategories()



const loadJobs =async () => {
    const jobs = await getJobs ()
}










