const createBlogButton = document.querySelector('#createBlogButton');

const createNewBlog= async (event)=>{
    event.preventDefault();

    const newBlogTitle = document.getElementById('title');
    const newBlogContent = document.getElementById('content');
    
    if( newBlogTitle && newBlogContent ) {
        const response = await fetch('/api/blog',{
            method: 'POST',
            body: JSON.stringify({
                title: newBlogTitle,
                content: newBlogContent,
            }),
            headers: {'Content-Type': 'application/json'},
        })
    
        if(response.ok){
            console.log(`all created!`)
            document.location.replace('/homeviewblogs');
        }else {
            alert(response.statusText);
        }
    }
};



createBlogButton.addEventListener('click',createNewBlog);