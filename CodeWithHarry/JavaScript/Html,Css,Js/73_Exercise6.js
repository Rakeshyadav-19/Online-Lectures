// Create a TODO list app capable of storing your Todos in localStorage. Add an option to create, delete and access all the Todos. Try to make UI as good as possible.

// Smooth scrolling and highlighting for nav buttons
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove highlight from all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('highlight');
        });

        // Get the target section
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Highlight the target section
        targetSection.classList.add('highlight');
    });
});

// Handle click on NOTE TAKING to scroll to the new section
document.getElementById('nav-title').addEventListener('click', () => {
    // Remove highlight from all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('highlight');
    });

    // Scroll to the NOTE TAKING section
    const noteTakingSection = document.getElementById('note-taking');
    noteTakingSection.scrollIntoView({ behavior: 'smooth' });

    // Highlight the NOTE TAKING section
    noteTakingSection.classList.add('highlight');
});