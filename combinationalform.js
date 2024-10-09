function addExperience() {
    const experienceContainer = document.getElementById('experience');
    const newExperienceItem = `
        <div class="experience-item">
            <label for="jobTitle">Job Title:<span class="star">*</span></label>
            <input type="text" id="jobTitle" name="jobTitle[]" required>
            <label for="company">Company:<span class="star">*</span></label>
            <input type="text" id="company" name="company[]" required>
            <label for="duration">Duration:<span class="star">*</span></label>
            <input type="text" id="duration" name="duration[]" required>
            <label for="description">Description:</label>
            <textarea id="description" name="description[]" ></textarea>
        </div>
    `;
    experienceContainer.insertAdjacentHTML('beforeend', newExperienceItem);
}

function addSkill() {
    const skillsContainer = document.getElementById('skilllist');
    const newSkillItem = `
        <div class="skill-item">
            <label for="skill-name">Skill:<span class="star">*</span></label>
            <input type="text" name="skillname[]" required>
            <label for="about-skill">Usage of Skill:<span class="star">*</span></label>
            <textarea name="aboutskill[]" required></textarea>
        </div> 
    `;
    skillsContainer.insertAdjacentHTML('beforeend', newSkillItem);
}

function addProject() {
    const projectContainer = document.getElementById('projectslist');
    const newProjectItem = `
        <div class="project-item">
            <label for="project-name">Project Name:<span class="star">*</span></label>
            <input type="text" id="projectname[]" name="projectname[]" required>
            <label for="project-duration">Project Duration:<span class="star">*</span></label>
            <input type="text" id="projectduration[]" name="projectduration[]" required>
            <label for="about-project">About Project:<span class="star">*</span></label>
            <textarea id="aboutproject" name="aboutproject[]" required></textarea>
        </div>
    `;
    projectContainer.insertAdjacentHTML('beforeend', newProjectItem);
}


document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const resumeData = {
        name: formData.get('name'),
        jobTitle: formData.get('jobtitle'),
        about: formData.get('about'), // Make sure 'about' is captured
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        website:formData.get('website'),
        linkedin:formData.get('linkedin'),
        twitter:formData.get('twitter'),
        skilllist: [],
        projectslist: [],
        experience: [],
    };

    

    // Collect all personal projects
    const projectNames = formData.getAll('projectname[]');
    const projectDurations = formData.getAll('projectduration[]');
    const aboutProjects = formData.getAll('aboutproject[]');

    for (let i = 0; i < projectNames.length; i++) {
        resumeData.projectslist.push({
            projectname: projectNames[i],
            projectduration: projectDurations[i],
            aboutproject: aboutProjects[i],
        });
    }

    // Collect all skill list
    const skillNames = formData.getAll('skillname[]');
    const aboutskills = formData.getAll('aboutskill[]');
    for (let i = 0; i < skillNames.length; i++) {
        resumeData.skilllist.push({
            skillname: skillNames[i],
            aboutskill:aboutskills[i],
        });
    }

    // Collect all work experience
    const jobTitles = formData.getAll('jobTitle[]');
    const companies = formData.getAll('company[]');
    const durations = formData.getAll('duration[]');
    const descriptions = formData.getAll('description[]');

    for (let i = 0; i < jobTitles.length; i++) {
        resumeData.experience.push({
            jobTitle: jobTitles[i],
            company: companies[i],
            duration: durations[i],
            description: descriptions[i],
        });
    }

    // Store resume data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    // Navigate to resume.html
    window.location.href = 'combinationalresume.html';
});
