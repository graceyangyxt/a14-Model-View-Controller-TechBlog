const addCommentButton = document.querySelector('#addCommentButton');

const changePage= async (event)=>{
    event.preventDefault();
//    render('addComment');  
console.log( event.target)
    const blog_id = event.target.dataset.blogid;
    document.location.replace(`/createcomment/${blog_id}`);
};

addCommentButton.addEventListener('click',changePage);