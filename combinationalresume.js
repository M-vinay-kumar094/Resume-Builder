document.addEventListener("DOMContentLoaded", function() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    if (!resumeData) {
        alert("No resume data found. Please fill out the form first.");
        window.location.href = "combinationalform.html"; // Redirect to the form if no data found
        return;
    }

    // Populate resume
    document.getElementById('profile-name').textContent = resumeData.name || 'N/A';
    document.getElementById('profile-job-title').textContent = resumeData.jobTitle || 'N/A';
    document.getElementById('profile-about').textContent = resumeData.about || 'N/A';
    document.getElementById('contact-address').textContent = resumeData.address || 'N/A';
    document.getElementById('contact-mail').textContent = resumeData.email || 'N/A';
    document.getElementById('contact-mobile').textContent = resumeData.phone || 'N/A';
    document.getElementById('contact-website').textContent = resumeData.website || 'N/A';
    document.getElementById('contact-linkedin').textContent = resumeData.linkedin || 'N/A';
    document.getElementById('contact-twitter').textContent = resumeData.twitter || 'N/A';

    // Populate skills
    const skillList = document.getElementById('skill-list');
    resumeData.skilllist.forEach(sk => {
        const skItem = document.createElement('div');
        skItem.className = 'skill-item';
        skItem.innerHTML = `
        <h3>${sk.skillname}</h3>
        <p>${sk.aboutskill}</p>
        `;
        skillList.appendChild(skItem);
    });

    // Populate projects
    const projectsList = document.getElementById('projects-list');
    resumeData.projectslist.forEach(pro => {
        const proItem = document.createElement('div');
        proItem.className = 'project-item';
        proItem.innerHTML = `<h3>${pro.projectname}(${pro.projectduration})</h3><p>${pro.aboutproject}</p>`;
        projectsList.appendChild(proItem);
    });

    // Populate work experience
    const workExperienceList = document.getElementById('work-experience-list');
    resumeData.experience.forEach(exp => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job';
        jobItem.innerHTML = `<h3>${exp.jobTitle}</h3><h4>${exp.company}(${exp.duration})</h4><p>${exp.description}</p>`;
        workExperienceList.appendChild(jobItem);
    });
});

function printCV() {
    const printButton = document.getElementById('printButton');
    printButton.style.display = 'none';
    setTimeout(() => {
        window.print();
        printButton.style.display = 'block';
    }, 0);
}
