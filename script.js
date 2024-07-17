function addExperience() {
    const experienceContainer = document.getElementById('experience');
    const newExperienceItem = `
        <div class="experience-item">
            <label for="jobTitle">Job Title:</label>
            <input type="text" name="jobTitle[]" required>
            <label for="company">Company:</label>
            <input type="text" name="company[]" required>
            <label for="duration">Duration:</label>
            <input type="text" name="duration[]" required>
            <label for="description">Description:</label>
            <textarea name="description[]" required></textarea>
        </div>
    `;
    experienceContainer.insertAdjacentHTML('beforeend', newExperienceItem);
}

function addEducation() {
    const educationContainer = document.getElementById('education');
    const newEducationItem = `
        <div class="education-item">
            <label for="degree">Degree:</label>
            <input type="text" name="degree[]" required>
            <label for="institution">Institution:</label>
            <input type="text" name="institution[]" required>
            <label for="edDuration">Duration:</label>
            <input type="text" name="edDuration[]" required>
        </div>
    `;
    educationContainer.insertAdjacentHTML('beforeend', newEducationItem);
}

function addSkill() {
    const skillsContainer = document.getElementById('skills');
    const newSkillItem = `
        <div class="skill-item">
            <label for="skill">Skill:</label>
            <input type="text" name="skill[]" required>
            <label for="skillLevel">Proficiency Level:</label>
            <input type="number" name="skillLevel[]" min="1" max="100" required>
        </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', newSkillItem);
}

document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const reader = new FileReader();
    const file = formData.get('profilePicture');
    reader.readAsDataURL(file);

    reader.onload = function() {
        const profilePictureBase64 = reader.result;

        const resumeData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            profilePicture: profilePictureBase64,
            experience: [],
            education: [],
            skills: []
        };

        formData.getAll('jobTitle[]').forEach((jobTitle, index) => {
            resumeData.experience.push({
                jobTitle,
                company: formData.getAll('company[]')[index],
                duration: formData.getAll('duration[]')[index],
                description: formData.getAll('description[]')[index]
            });
        });

        formData.getAll('degree[]').forEach((degree, index) => {
            resumeData.education.push({
                degree,
                institution: formData.getAll('institution[]')[index],
                edDuration: formData.getAll('edDuration[]')[index]
            });
        });

        formData.getAll('skill[]').forEach((skill, index) => {
            resumeData.skills.push({
                skill,
                level: formData.getAll('skillLevel[]')[index]
            });
        });

        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        window.location.href = 'resume.html';
    };
});
