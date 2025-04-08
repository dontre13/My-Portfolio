var tablinks = document.getElementsByClassName('links');
var tabcontents = document.getElementsByClassName('content');

var skills = document.getElementById('skills');
var experience = document.getElementById('experience');
var education = document.getElementById('education');

var tabName = document.getElementById('activeTab');


function myFunction(blah){
    for(tablink of tablinks){
        tablink.classList.remove('redLine')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('activeTab')
    }
    event.currentTarget.classList.add('redLine');
    blah.classList.add('activeTab')
    return blah;
};


skills.addEventListener("click", (event) => {     
    event.currentTarget.classList.add('redLine'); 
    myFunction(skills);   
});

experience.addEventListener("click", (event) => {     
    event.currentTarget.classList.add('redLine');
    myFunction(experience);   
});

education.addEventListener("click", (event) => {     
    event.currentTarget.classList.add('redLine');
    myFunction(education);    
});
