import { Spoiler } from './Assets/spoiled/src';
import './Assets/spoiled/style.css';

function openProjectModal(event, projectId) {
    event.preventDefault();
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    currentProject = projectId;
    currentSlide = 0;

    // Set project content
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-description').textContent = project.description;

    // Set up carousel
    const track = modal.querySelector('.carousel-track');
    track.innerHTML = '';
    project.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        track.appendChild(img);
    });
    updateCarousel();

    // Show modal with zoom-in effect
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentProject = null;
}
