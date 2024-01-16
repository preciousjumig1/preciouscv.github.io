// script.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleSkillsButton = document.getElementById('toggleSkills');
    const skillsSection = document.getElementById('skills');

    toggleSkillsButton.addEventListener('click', function () {
        skillsSection.classList.toggle('hidden');
    });
});
