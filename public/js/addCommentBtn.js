const addCommentButton = document.querySelector('#addCommentButton');

const changePage= async (event)=>{
    event.preventDefault();
//    render('addComment');  
    document.location.replace('/createcomment');
};

addCommentButton.addEventListener('click',changePage);