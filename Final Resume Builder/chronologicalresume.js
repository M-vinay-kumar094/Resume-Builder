document.addEventListener("DOMContentLoaded", function() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    if (!resumeData) {
        alert("No resume data found. Please fill out the form first.");
        window.location.href = "chronologicalform.html"; // Redirect to the form if no data found
        return;
    }

    document.getElementById('profile-name').textContent = resumeData.name;
    document.getElementById('profile-job-title').textContent = resumeData.jobTitle;
    document.getElementById('profile-about').textContent = resumeData.about;
    document.getElementById('contact-address').textContent = resumeData.address; // Updated to display address
    document.getElementById('contact-mail').textContent = resumeData.email;
    document.getElementById('contact-mobile').textContent = resumeData.phone;
    
    const expertiseList = document.getElementById('expertise-list');
    resumeData.expertiselist.forEach(ex => {
        const exItem = document.createElement('div');
        exItem.className = 'expertise-item';
        exItem.innerHTML = `
            <p class="eitem">${ex.expertisename}</p>
        `;
        expertiseList.appendChild(exItem);
    });


    const skillList = document.getElementById('skill-list');

    // Ensure skilllist is not undefined
    const skills = resumeData.skilllist || []; // Fallback to an empty array if undefined

    skills.forEach(sk => {
        const skItem = document.createElement('div');
        skItem.className = 'skill-item';
        skItem.innerHTML = `<li class="skitem">${sk.skillname}</li>`;
        skillList.appendChild(skItem);
    });

    const projectsList = document.getElementById('projects-list');
    resumeData.projectslist.forEach(pro => {
        const proItem = document.createElement('div');
        proItem.className = 'project-item';
        proItem.innerHTML = `
            <h3>${pro.projectname}</h3>
            <p>${pro.projectduration}</p>
            <p>${pro.aboutproject}</p>
        `;
        projectsList.appendChild(proItem);
    });

    const interestList = document.getElementById('interest-list');
    resumeData.interestlist.forEach(interest => {
        const interestItem = document.createElement('div');
        interestItem.className = 'interest-item';
        interestItem.innerHTML = `<li class="iitem">${interest.interestname}</li>`;
        interestList.appendChild(interestItem);
    });

    const educationList = document.getElementById('education-list');
    resumeData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education';
        eduItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <p>${edu.edDuration}</p>
            <p>${edu.institution}</p>
        `;
        educationList.appendChild(eduItem);
    });

    const workExperienceList = document.getElementById('work-experience-list');
    resumeData.experience.forEach(exp => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job';
        jobItem.innerHTML = `
            <h3>${exp.jobTitle}</h3>
            <p>${exp.company}</p>
            <p> ${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        workExperienceList.appendChild(jobItem);
    });
});
function printCV() {
    const printButton = document.getElementById('printButton');
    
    // Hide the button before printing
    printButton.style.display = 'none';
    
    // Use setTimeout to give the print dialog a moment to appear
    setTimeout(() => {
        window.print();
        // Show the button after printing is done
        printButton.style.display = 'block';
    }, 0);
}