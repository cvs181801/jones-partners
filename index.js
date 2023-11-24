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

window.onload = function() {
    sectionArray.forEach(element => {
        if (element.id != "welcome-section") {
            element.style.display = "none"
            console.log(element.id);
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
            console.log(element.id);
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
            console.log(element.id);
        } else {
            element.style.display = "block"
        }
    });
});

testimonialsBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "testimonials-section") {
            element.style.display = "none"
            console.log(element.id);
        } else {
            element.style.display = "block"
        }
    });
});

searchEngagementsBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "search-engagements-section") {
            element.style.display = "none"
            console.log(element.id);
        } else {
            element.style.display = "block"
        }
    });
});

yearEndLetterBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "year-end-letter-section") {
            element.style.display = "none"
            console.log(element.id);
        } else {
            element.style.display = "block"
        }
    });
});

contactBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "contact-information-section") {
            element.style.display = "none"
            console.log(element.id);
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
            console.log(element.id);
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
            console.log(element.id);
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
            console.log(element.id);
        } else {
            element.style.display = "block"
        }
    });
});

//hover effect
//we're getting all the sections appearing on first load.
//image not tiling right.