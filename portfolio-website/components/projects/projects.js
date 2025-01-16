export function loadProjects() {
  const projectsSection = document.createElement('section')
  projectsSection.id = 'projects'

  const projectsHeader = document.createElement('h2')
  projectsHeader.textContent = 'Projects'
  projectsHeader.classList.add('projects-header')
  projectsSection.appendChild(projectsHeader)

  const projectsContent = document.createElement('div')
  projectsContent.classList.add('projects-content')

  const projectImage1 = document.createElement('img')
  projectImage1.src =
    './projects/assets/Captura de Pantalla 2024-11-01 a las 22.13.20.png'
  projectImage1.alt = 'Project 1'
  projectImage1.classList.add('project-image')
  projectsContent.appendChild(projectImage1)

  const projectImage2 = document.createElement('img')
  projectImage2.src =
    './projects/assets/Captura de Pantalla 2024-11-01 a las 19.02.22.png'
  projectImage2.alt = 'Project 2'
  projectImage2.classList.add('project-image')
  projectsContent.appendChild(projectImage2)

  const projectImage3 = document.createElement('img')
  projectImage3.src =
    './projects/assets/Captura de Pantalla 2024-11-01 a las 19.01.08.png'
  projectImage3.alt = 'Project 3'
  projectImage3.classList.add('project-image')
  projectsContent.appendChild(projectImage3)

  projectsSection.appendChild(projectsContent)

  document.getElementById('projects').appendChild(projectsSection)
}
