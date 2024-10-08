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

function addExpertise() {
    const expertiseContainer = document.getElementById('expertiselist');
    const newExpertiseItem = `
            <div class="expertise-item">
                <label for="expertise-name">Enter your area of expertise:<span class="star">*</span></label>
                <input type="text" id="expertisename[]" name="expertisename[]" required>
            </div>
    `;
    expertiseContainer.insertAdjacentHTML('beforeend', newExpertiseItem);
}

function addSkill() {
    const skillsContainer = document.getElementById('skilllist');
    const newSkillItem = `
        <div class="skill-item">
            <label for="skill-name">Skill:<span class="star">*</span></label>
            <input type="text" id="skillname[]" name="skillname[]" required>
        </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', newSkillItem);
}

function addInterest() {
    const interestContainer = document.getElementById('interestlist');
    const newinterestItem = `
        <div class="interest-item">
            <label for="interest-name">Interests:<span class="star">*</span></label>
            <input type="text" name="interestname[]" required>
        </div>
    `;
    interestContainer.insertAdjacentHTML('beforeend', newinterestItem);
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

function addEducation() {
    const educationContainer = document.getElementById('education');
    const newEducationItem = `
        <div class="education-item">
            <label for="degree">Degree:<span class="star">*</span></label>
            <input type="text" id="degree" name="degree[]" required>
            <label for="institution">Institution:<span class="star">*</span></label>
            <input type="text" id="institution" name="institution[]" required>
            <label for="edDuration">Duration:<span class="star">*</span></label>
            <input type="text" id="edDuration" name="edDuration[]" required>
        </div>
    `;
    educationContainer.insertAdjacentHTML('beforeend', newEducationItem);
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
        skilllist: [],
        interestlist: [],
        expertiselist: [],
        projectslist: [],
        experience: [],
        education: [],
    };
    

    //collect all expertise list
    const expertiseNames = formData.getAll('expertisename[]');
    for (let i = 0; i < expertiseNames.length; i++) {
        resumeData.expertiselist.push({
            expertisename: expertiseNames[i],
        });
    }

    // Collect all skill list
    const skillNames = formData.getAll('skillname[]');
    console.log("Collected Skills:", skillNames); // Add this line for debugging
    for (let i = 0; i < skillNames.length; i++) {
        resumeData.skilllist.push({
            skillname: skillNames[i],
        });
    }


    // Collect all interest list
    const interestNames = formData.getAll('interestname[]');
    console.log("Collected Interests:", interestNames); // For debugging
    for (let i = 0; i < interestNames.length; i++) {
        resumeData.interestlist.push({
            interestname: interestNames[i],
        });
    }



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

    // Collect all education details
    const degrees = formData.getAll('degree[]');
    const institutions = formData.getAll('institution[]');
    const edDurations = formData.getAll('edDuration[]');

    for (let i = 0; i < degrees.length; i++) {
        resumeData.education.push({
            degree: degrees[i],
            institution: institutions[i],
            edDuration: edDurations[i],
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
    window.location.href = 'chronologicalresume.html';
});
