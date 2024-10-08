document.addEventListener("DOMContentLoaded", function() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    if (!resumeData) {
        alert("No resume data found. Please fill out the form first.");
        window.location.href = "functionalform.html"; // Redirect to the form if no data found
        return;
    }

    document.getElementById('profile-name').textContent = resumeData.name;
    document.getElementById('profile-job-title').textContent = resumeData.jobTitle; // Updated to display job title
    document.getElementById('profile-location').textContent = resumeData.address; // Updated to display address
    document.getElementById('profile-email').textContent = resumeData.email;
    document.getElementById('profile-phone').textContent = resumeData.phone;

    // Display the profile image
    const profileImg = document.getElementById('profile-img');
    profileImg.src = resumeData.profilePicture;
    profileImg.alt = resumeData.name + "'s Profile Picture";

    const skillsList = document.getElementById('skills-list');
    resumeData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill';
        skillItem.innerHTML = `
            <p>${skill.skill}</p>
            <div class="progress">
                <div class="progress-bar" style="width: ${skill.level}%;"></div>
            </div>
        `;
        skillsList.appendChild(skillItem);
    });

    // Update the languages section to display user input
    const languagesList = document.getElementById('languages-list');
    resumeData.languages.forEach(lang => {
        const langItem = document.createElement('p');
        langItem.textContent = `${lang.language}: ${lang.proficiency}`; // Show language and proficiency
        languagesList.appendChild(langItem);
    });

    const workExperienceList = document.getElementById('work-experience-list');
    resumeData.experience.forEach(exp => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job';
        jobItem.innerHTML = `
            <h3>${exp.jobTitle}</h3>
            <p>${exp.company}</p>
            <p><i class="material-icons">date_range</i> ${exp.duration}</p>
            <p>${exp.description}</p>
        `;
        workExperienceList.appendChild(jobItem);
    });

    const educationList = document.getElementById('education-list');
    resumeData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        eduItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <p><i class="material-icons">date_range</i> ${edu.edDuration}</p>
            <p>${edu.institution}</p>
        `;
        educationList.appendChild(eduItem);
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