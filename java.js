function addpost() {
    // call and get data
    var head = document.getElementById("head").value;
    var head2 = document.getElementById("head2").value;
    var title = document.getElementById("des").value;
    var posts = document.getElementById("posts");

    // check data empty

    //trim -> delete space start and end text 
    if (head === '' || title === '' ||head2 === '') {
        alert("please enter data not data empty");
        return;
    }

    // create new element
    var newCard = document.createElement("div");
    

    // create card 
    newCard.innerHTML = `
         <div class="card border-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">${head}</div>
            <div class="card-body text-secondary">
                <h5 class="card-title" id="head">${head2}</h5>
                <p class="card-text" id="title">${title}</p>
            </div>
        </div>
    `;

    // add card
    posts.appendChild(newCard);

    // delete when click submet 
    document.getElementById("head").value = "";
    document.getElementById("head2").value = "";
    document.getElementById("des").value = "";
}