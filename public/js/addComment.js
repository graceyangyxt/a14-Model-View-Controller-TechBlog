const addCommentButton = document.querySelector('#addCommentButton');

// const addCommentForm= async (event)=>{
//     event.preventDefault();  
//     document.getElementById("#addNewComment").disabled = false;
// };

// addCommentButton.addEventListener('click',addCommentForm);


const submitComment= async (event)=>{
    event.preventDefault();
    
    const newComment = document.getElementById('comment').value.trim();
    

    if( newComment ) {
        const response = await fetch('/api/comment',{
            method: 'POST',
            body: JSON.stringify({
                text_comment: req.body.comment,
            }),
            headers: {'Content-Type': 'application/json'},
        });
    
        if(response.ok){
            console.log(`all created!`)
            document.location.replace('/homeviewblogs');
        }else {
            alert(response.statusText);
        }
    }
};



addCommentButton.addEventListener('click',submitComment);