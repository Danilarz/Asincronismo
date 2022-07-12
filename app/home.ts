const filterForm = document.getElementById('filter-form');
// Se creo evento de formulario 
const createFilter = async (e) => {
    e.preventDefault()
    const formF = e.target

    const filter = {
        location: formF.location.value, 
        seniority: formF.seniority.value,
        category: formF.category.value
    }

    await addJob(filter)
    loadJobs()
    
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


//Cards de Jobs en home

const jobsContainer = document.getElementById('jobs-container');

const loadJobs =async () => {
    const jobs = await getJobs ()


const cardJobs = jobsContainer.querySelector('section')

    section.innerHTML = '';

    jobs.forEach(job => {

        const articleJob = document.createElement('article');
        articleJob.classList.add('col');
        const cardJob = document.createElement('div');
        cardJob.classList.add('card-body');
        const titleJob = document.createElement('h5');
        titleJob.classList.add('card-title');
        const txtTitle = document.createTextNode(job.name);
        const description = document.createElement('p');
        description.classList.add('card-text');
        const txtDescription = document.createTextNode(job.description);
        const filterLocation = document.createElement('span');
        filterLocation.className = 'badge text-bg-info';
        const txtLocation = document.createTextNode(job.location);
        const filterSeniority = document.createElement('span');
        filterSeniority.className = 'badge text-bg-info';
        const txtSeniority = document.createTextNode(job.seniority);
        const filterCategory = document.createElement('span');
        filterCategory.className = 'badge text-bg-info';
        const txtCategory = document.createTextNode(job.category);
        
        const btnDetails = document.createElement('button')
        const txtBtnDetails = document.createTextNode('See Details')
        btnDetails.className = 'btn btn-primary mt-3'

        const linkDetails = document.createElement('a');
        linkDetails.setAttribute('href', '#');
        linkDetails.classList.add('nav-link');

        titleJob.appendChild(txtTitle)
        description.appendChild(txtDescription)
        filterLocation.appendChild(txtLocation)
        filterSeniority.appendChild(txtSeniority)
        filterCategory.appendChild(txtCategory)
        btnDetails.appendChild(txtBtnDetails)
        btnDetails.appendChild(linkDetails)
        cardJob.appendChild(titleJob)
        cardJob.appendChild(description)
        cardJob.appendChild(filterLocation)
        cardJob.appendChild(filterSeniority)
        cardJob.appendChild(filterCategory)
        cardJob.appendChild(btnDetails)
        articleJob.appendChild(cardJob)
        section.appendChild(articleJob)

        btnDetails.addEventListener('click', getJob)

    })

}
loadJobs()
















