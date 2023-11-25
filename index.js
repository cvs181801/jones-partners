const welcomeBtn = document.getElementById('welcome-btn');
const aboutBtn = document.getElementById('about-btn');
const testimonialsBtn = document.getElementById("testimonials-btn");
const searchEngagementsBtn = document.getElementById("search-engagements-btn");
const yearEndLetterBtn = document.getElementById("year-end-letter-btn");
const contactBtn = document.getElementById("contact-btn");

const abtQualityBtn = document.getElementById('abt-quality-btn');
const abtEthicsBtn = document.getElementById('abt-ethics-btn');
const abtBackgroundsBtn = document.getElementById('abt-backgrounds-btn');

const welcomeSection = document.getElementById("welcome-section");
const aboutSection = document.getElementById("about-section");
const testimonialsSection = document.getElementById("testimonials-section");
const searchEngagementsSection = document.getElementById("search-engagements-section");
const yearEndLetterSection = document.getElementById("year-end-letter-section");
const contactInformationSection = document.getElementById("contact-information-section");

const abtQualitySection = document.getElementById('abt-quality-section');
const abtEthicsSection = document.getElementById('abt-ethics-section');
const abtBackgroundsSection = document.getElementById('abt-backgrounds-section');

const sectionArray = [welcomeSection, aboutSection, testimonialsSection, searchEngagementsSection, yearEndLetterSection, contactInformationSection];
const abtSectionArray = [abtQualitySection, abtEthicsSection, abtBackgroundsSection];
const mainNavBtnArray = [aboutBtn, testimonialsBtn, searchEngagementsBtn, yearEndLetterBtn];

const navyBlue = '#112557';
const ltGrey = '#919AB1';

window.onload = function() {
    sectionArray.forEach(element => {
        if (element.id != "welcome-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block";
        }
    });
    abtSectionArray.forEach(element => {
        if (element.id != "abt-quality-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
};

welcomeBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "welcome-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
});

aboutBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "about-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
    mainNavBtnArray.forEach(btn => {
        if (btn.id == "about-btn"){
            btn.style.color = ltGrey;
        } else {
            btn.style.color = navyBlue;
        }
    });  
});

testimonialsBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "testimonials-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block";
        }
    });
    mainNavBtnArray.forEach(btn => {
        if (btn.id == "testimonials-btn"){
            btn.style.color = ltGrey;
        } else {
            btn.style.color = navyBlue;
        }
    });  
});

searchEngagementsBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "search-engagements-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block";
        }
    });
    mainNavBtnArray.forEach(btn => {
        if (btn.id == "search-engagements-btn"){
            btn.style.color = ltGrey;
        } else {
            btn.style.color = navyBlue;
        }
    });  
});

yearEndLetterBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "year-end-letter-section") {
            element.style.display = "none"
            
        } else {
            element.style.display = "block"
            yearEndLetterBtn.style.color = "#919AB1";
        }
    });
    mainNavBtnArray.forEach(btn => {
        if (btn.id == "year-end-letter-btn"){
            btn.style.color = ltGrey;
        } else {
            btn.style.color = navyBlue;
        }
    });  
});

contactBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "contact-information-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
});

abtQualityBtn.addEventListener("click", function(e){
    e.preventDefault();
    abtSectionArray.forEach(element => {
        if (element.id != "abt-quality-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
});

abtEthicsBtn.addEventListener("click", function(e){
    e.preventDefault();
    abtSectionArray.forEach(element => {
        if (element.id != "abt-ethics-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
});

abtBackgroundsBtn.addEventListener("click", function(e){
    e.preventDefault();
    abtSectionArray.forEach(element => {
        if (element.id != "abt-backgrounds-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
});


//add a little grey right and left linear-gradient to nav bar ??? 
//make the background one size / non responsive 
//style about nav and text sections.
//fix the position and size of text for copyright . 
//get better graph pictures ? ? ? 
//make JONES text a little darker