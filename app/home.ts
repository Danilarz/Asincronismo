const filterForm = document.getElementById('filter-form');
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

const loadJobs =async () => {
    const jobs = await getJobs ()
}