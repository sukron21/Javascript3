import fetch from "node-fetch";


fetch('https://jsonplaceholder.typicode.com/users')


.then((res)=>{
    return res.json()    
})
.then((data)=>{
    // console.log(data);
    data.forEach((post) => {
    let output = `${post.name}`;
    console.log(output)
    })
    
})
.catch((err)=>{
    console.log(err.message);
});