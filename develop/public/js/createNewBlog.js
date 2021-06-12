const createBlogButton = document.querySelector('#createBlogButton');


const createNewBlog= async function(){

    const newBlogTitle = document.getElementById('title');
    const newBlogContent = document.getElementById('content');

    const response = await fetch('/dashboards',{
        method: 'POST',
        body: JSON.stringify({
            title: newBlogTitle,
            content: newBlogContent,
        }),
        headers: {'Content-Type': 'application/json'},
    })

    if(response.ok){
        console.log(`all created!`)
    }else {
        alert(response.statusText);
    }


}

createBlogButton.addEventListener('click',createNewBlog);