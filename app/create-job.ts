const formJobs = document.getElementById("job-form");

const createJob = async (e) => {
    e.preventDefault()
    const formJ = e.target

    const job = {
        name: formJ.name.value, 
        description: formJ.description.value,
        location: formJ.location.value,
        category: formJ.category.value,
        seniority: formJ.seniority.value
    }

    await addJob(job)
    loadJobs()
    
}

formJobs.addEventListener('submit', createJob)





