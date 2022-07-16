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
    const jobs = await getJobs()

    jobsContainer.innerHTML = '';

    jobs.forEach(job => {

        const articleJob = document.createElement('article');
        articleJob.classList.add('col');
        const contCard = document.createElement('div');
        contCard.classList.add('card');
        const cardJob = document.createElement('div');
        cardJob.classList.add('card-body');
        const titleJob = document.createElement('h5');
        titleJob.classList.add('card-title');
        const txtTitle = document.createTextNode(job.name);
        const description = document.createElement('p');
        description.classList.add('card-text');
        const txtDescription = document.createTextNode(job.description);
        const filterLocation = document.createElement('span');
        filterLocation.className = 'badge text-bg-info m-1';
        const txtLocation = document.createTextNode(job.location);
        const filterSeniority = document.createElement('span');
        filterSeniority.className = 'badge text-bg-info m-1';
        const txtSeniority = document.createTextNode(job.seniority);
        const filterCategory = document.createElement('span');
        filterCategory.className = 'badge text-bg-info m-1';
        const txtCategory = document.createTextNode(job.category);
        
        const contBtn = document.createElement('div');
        contBtn.className = 'd-grid gap-2 d-md-flex justify-content-md-start'
        const btnDetails = document.createElement('a');
        const txtBtnDetails = document.createTextNode('See Details')
        btnDetails.setAttribute('href',  `detail.html?job-id=${job.id}`)
        btnDetails.className = 'nav-link btn btn-primary mt-3 text-white p-2';
        
       
        titleJob.appendChild(txtTitle)
        description.appendChild(txtDescription)
        filterLocation.appendChild(txtLocation)
        filterSeniority.appendChild(txtSeniority)
        filterCategory.appendChild(txtCategory)
        btnDetails.appendChild(txtBtnDetails)
        contBtn.appendChild(btnDetails)
        cardJob.appendChild(titleJob)
        cardJob.appendChild(description)
        cardJob.appendChild(filterLocation)
        cardJob.appendChild(filterSeniority)
        cardJob.appendChild(filterCategory)
        cardJob.appendChild(contBtn)
        contCard.appendChild(cardJob)
        articleJob.appendChild(contCard)
        jobsContainer.appendChild(articleJob)

        btnDetails.addEventListener('click', getJob)

    })

}
loadJobs()
















