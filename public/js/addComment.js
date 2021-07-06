const submitCommentButton = document.querySelector('#submitCommentButton');

const submitComment= async (event)=>{
    event.preventDefault();
    
    const newComment = document.getElementById('comment').value.trim();
    

    if(newComment) {
        const response = await fetch(`/api/comment`,{
            method: 'POST',
            body: JSON.stringify({
                text_comment: newComment,

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

submitCommentButton.addEventListener('click',submitComment);