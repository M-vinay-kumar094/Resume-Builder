document.addEventListener("DOMContentLoaded", function() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));

    if (!resumeData) {
        alert("No resume data found. Please fill out the form first.");
        window.location.href = "form.html";
        return;
    }

    document.getElementById('profile-name').textContent = resumeData.name;
    document.getElementById('profile-job-title').textContent = "Designer"; // Adjust as needed
    document.getElementById('profile-location').textContent = "London, UK"; // Adjust as needed
    document.getElementById('profile-email').textContent = resumeData.email;
    document.getElementById('profile-phone').textContent = resumeData.phone;

    // Display the profile image
    const profileImg = document.getElementById('profile-img');
    profileImg.src = resumeData.profilePicture;
    profileImg.alt = resumeData.name + "'s Profile Picture";

    const skillsList = document.getElementById('skills-list');
    resumeData.skills.forEach((skill, index) => {
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

    const languagesList = document.getElementById('languages-list');
    ["English", "Spanish", "German"].forEach(language => { // Adjust as needed
        const langItem = document.createElement('p');
        langItem.textContent = language;
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