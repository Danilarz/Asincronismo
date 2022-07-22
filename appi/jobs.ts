type job = {
    id: string;
    name: string;
    description: string;
    location: string;
    seniority: string;
    category: string;

}

const addJob =async (job) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    }
    await fetch ('https://tp--asincronismo-default-rtdb.firebaseio.com/jobs.json', options)
    window.location.href = "index.html";
}


const getJobs =async () => {
    const response = await fetch ('https://tp--asincronismo-default-rtdb.firebaseio.com/jobs.json')
    const data =await response.json();
    return mapToArray (data)
    
}

const editJob =async (data:job) => {
    const param = new URLSearchParams(window.location.search);
    const id= param.get("id");
    await fetch (`https://tp--asincronismo-default-rtdb.firebaseio.com/jobs/${id}.json`,
    {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data }),
    }
    );
  
};

const deleteJob =  async (id:string) => {
    await fetch (`https://tp--asincronismo-default-rtdb.firebaseio.com/jobs/${id}.json`,
      {
        method: 'DELETE'
      }

      );
  };

const getJob =async (id:string) => {
    const jobRequest= await fetch (`https://tp--asincronismo-default-rtdb.firebaseio.com/jobs/${id}.json`
    );
    const job = await jobRequest.json();
    return job;
    
};

  