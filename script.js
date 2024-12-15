function fetchdat(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>{
        data.forEach(per=>{
            console.log(`title is: ${per.title}`);
        })
    })
    .catch(error=>console.error(`error 000000`, error));
}
fetchdat();

function create(){
    const newk = {
        title: "l’amour unit les ames.",
        body: "fr",
        userId: 1
    }
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newk)
    })
        .then(response=>{
        if (response.status==201) return response.json()
            throw new Error(`daverordit ${response.status}`)
    })
        .then(data => console.log(`created`, data))
        .catch(error => console.error(`error`, error));
}
create()

function deletep(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: `DELETE`
    })
      .then(response=>{
        if (response.status == 200){
            console.log(`success`);
        } else if (response.status==400){
            console.log(`not found`);
        } else if (response.status==500){
            console.log(`server issue`);
        } else{
            throw new Error(`unexpected ${response.status}`)
        }
      })
      .catch(error=>console.error(`error`,error))
}
deletep(2);