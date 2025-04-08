let tablinks = document.getElementsByClassName('links');
let tabcontents = document.getElementsByClassName('content');
let skillsTab = document.getElementById('skills_tab');
let experienceTab = document.getElementById('experience_tab');
let educationTab = document.getElementById('education_tab');

let mySkills = document.getElementById('skills_content');
let myExperience = document.getElementById('experience_content');
let myEducation = document.getElementById('education_content');



function myFunction(blah){
    for(tablink of tablinks){
        tablink.classList.remove('blueLine')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('activeContent')
    }
    event.currentTarget.classList.add('blueLine');
    blah.classList.add('activeContent')
    return blah;
};


skillsTab.addEventListener("click", (event) => {     
    event.currentTarget.classList.add('blueLine'); 
    myFunction(mySkills);   
});

experienceTab.addEventListener("click", (event) => {     
    event.currentTarget.classList.add('blueLine');
    myFunction(myExperience);   
});

educationTab.addEventListener("click", (event) => {     
    event.currentTarget.classList.add('blueLine');
    myFunction(myEducation);    
});



let sidemenu = document.querySelector('#sidemenu');
let closemenu1 = document.getElementById('closemenu')
let openmenu1 = document.getElementById('openmenu')


function openmenu(){
    sidemenu.style.right = '0'
};

function closemenu(){
    sidemenu.style.right = '-200px'

};

openmenu1.addEventListener('click', openmenu)
closemenu1.addEventListener('click', closemenu)
