
const params = new URLSearchParams(window.location.search);
const detailsContainer = document.getElementById('see-details');
const idParam = params.get('id')



const seeDetail = () =>{
    const job =  getJob('idParam');

    detailsContainer.innerHTML = '';

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
            const btnEdit = document.createElement('a');
            const txtBtnEdit = document.createTextNode('Edit')
            btnEdit.setAttribute('href',  `edit.html?job-id=${job.id}`)
            btnEdit.className = 'nav-link btn btn-primary mt-3 text-white p-2';

        
            const btnDelete = document.createElement('button');
            const txtBtnDelete = document.createTextNode('Delete')
            btnDelete.className = 'nav-link btn btn-primary mt-3 text-white p-2';
            btnDelete.addEventListener('click', async () =>{
                await deleteJob(job.id)
                getJobs()
            })
            
        
            titleJob.appendChild(txtTitle)
            description.appendChild(txtDescription)
            filterLocation.appendChild(txtLocation)
            filterSeniority.appendChild(txtSeniority)
            filterCategory.appendChild(txtCategory)
            btnEdit.appendChild(txtBtnEdit)
            btnDelete.appendChild(txtBtnDelete)
            contBtn.appendChild(btnEdit)
            contBtn.appendChild(btnDelete)
            cardJob.appendChild(titleJob)
            cardJob.appendChild(description)
            cardJob.appendChild(filterLocation)
            cardJob.appendChild(filterSeniority)
            cardJob.appendChild(filterCategory)
            cardJob.appendChild(contBtn)
            contCard.appendChild(cardJob)
            articleJob.appendChild(contCard)
            detailsContainer.appendChild(articleJob)
            
            btnEdit.addEventListener('click', editJob)

}
seeDetail();

// const getJobInfo = async () => {
//     const job = await getJob(idParam);
//     name.value = job.name;
//     description.value = job.description;
//     location.value = job.location;
//     seniority.value = job.seniority;
//     category.value = job.category;
//     getjobInfo(); }
