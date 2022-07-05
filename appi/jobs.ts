const addJob =async (job) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    }
    await fetch ('https://tp--asincronismo-default-rtdb.firebaseio.com/jobs.json', options)
}

const getJobs =async () => {
    const response = await fetch ('https://tp--asincronismo-default-rtdb.firebaseio.com/jobs.json')
    const data =await response.json();
    return mapToArray (data)
    
}

const editJob =async (data) => {
    const param = new URLSearchParams(window.location.search);
    const id= param.get("id");
    await fetch (`https://tp--asincronismo-default-rtdb.firebaseio.com/${id}.json`,
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
    await fetch (`https://tp--asincronismo-default-rtdb.firebaseio.com/${id}.json`,
      {
        method: 'DELETE'
      }

      );
  };

  