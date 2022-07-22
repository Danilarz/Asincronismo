var editForm = document.getElementById('edit-job-form');
// const editName = document.getElementById('edit-name');
// const editDescription= document.getElementById('edit-description');
// const editLocation= document.getElementById('edit-location');
// const editSeniority= document.getElementById('edit-seniority');
// const editCategory= document.getElementById('edit-category');
var params = new URLSearchParams(window.location.search);
var idParam = params.get("id");
var getJobInfo = function () {
    var job = getJob(idParam);
    editName.name.value = job.name;
    editDescription.description.value = job.description;
    editLocation.location.value = job.location;
    editSeniority.seniority.value = job.seniority;
    editCategory.category.value = job.category;
};
getJobInfo();
// formJobs.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     const job ={
//         name: e.target.name.value,
//         description: e.target.description.value,
//         location: e.target.location.value,
//         seniority: e.target.seniority.value,
//         category: e.target.category.value
//     }
//     await editJob(job);
// });
