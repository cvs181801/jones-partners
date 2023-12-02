const welcomeBtn = document.getElementById('welcome-btn');
const aboutBtn = document.getElementById('about-btn');
const testimonialsBtn = document.getElementById("testimonials-btn");
const searchEngagementsBtn = document.getElementById("search-engagements-btn");
const contactBtn = document.getElementById("contact-btn");

const abtQualityBtn = document.getElementById('abt-quality-btn');
const abtEthicsBtn = document.getElementById('abt-ethics-btn');
const abtBackgroundsBtn = document.getElementById('abt-backgrounds-btn');

const welcomeSection = document.getElementById("welcome-section");
const aboutSection = document.getElementById("about-section");
const testimonialsSection = document.getElementById("testimonials-section");
const searchEngagementsSection = document.getElementById("search-engagements-section");
const contactInformationSection = document.getElementById("contact-information-section");

const abtSectionDefault = document.getElementById('about-section-default');
const abtQualitySection = document.getElementById('abt-quality-section');
const abtEthicsSection = document.getElementById('abt-ethics-section');
const abtBackgroundsSection = document.getElementById('abt-backgrounds-section');

const sectionArray = [welcomeSection, aboutSection, testimonialsSection, searchEngagementsSection, contactInformationSection];
const abtSectionArray = [abtSectionDefault, abtQualitySection, abtEthicsSection, abtBackgroundsSection];
const mainNavBtnArray = [aboutBtn, testimonialsBtn, searchEngagementsBtn];

const navyBlue = '#112557';
const ltGrey = '#919AB1';

welcomeBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "welcome-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
    mainNavBtnArray.forEach(btn => {
            btn.style.color = navyBlue;  
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
    abtSectionArray.forEach(section => {
        if (section.id != "about-section-default") {
            section.style.display = "none"
        } else {
            section.style.display = "block"
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

contactBtn.addEventListener("click", function(e){
    e.preventDefault();
    sectionArray.forEach(element => {
        if (element.id != "contact-information-section") {
            element.style.display = "none"
        } else {
            element.style.display = "block"
        }
    });
    mainNavBtnArray.forEach(btn => {
        btn.style.color = navyBlue;  
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



