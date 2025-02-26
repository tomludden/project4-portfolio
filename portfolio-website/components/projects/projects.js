export function loadProjects() {
  const projectsSection = document.createElement('section')
  projectsSection.id = 'projects'

  const projectsHeader = document.createElement('h2')
  projectsHeader.textContent = 'Projects'
  projectsHeader.classList.add('projects-header')
  projectsSection.appendChild(projectsHeader)

  const projectsContent = document.createElement('div')
  projectsContent.classList.add('projects-content')

  // Project 1 with link
  const projectLink1 = document.createElement('a')
  projectLink1.href = 'https://example.com/project1' // URL for Project 1
  projectLink1.target = '_blank' // Opens in a new tab
  const projectImage1 = document.createElement('img')
  projectImage1.src =
    './projects/assets/Captura de Pantalla 2024-11-01 a las 22.13.20.png'
  projectImage1.alt = 'Project 1'
  projectImage1.classList.add('project-image')
  projectLink1.appendChild(projectImage1)
  projectsContent.appendChild(projectLink1)

  // Project 2 with link
  const projectLink2 = document.createElement('a')
  projectLink2.href = 'https://example.com/project2' // URL for Project 2
  projectLink2.target = '_blank' // Opens in a new tab
  const projectImage2 = document.createElement('img')
  projectImage2.src =
    './projects/assets/Captura de Pantalla 2024-11-01 a las 19.02.22.png'
  projectImage2.alt = 'Project 2'
  projectImage2.classList.add('project-image')
  projectLink2.appendChild(projectImage2)
  projectsContent.appendChild(projectLink2)

  // Project 3 with link
  const projectLink3 = document.createElement('a')
  projectLink3.href = 'https://example.com/project3' // URL for Project 3
  projectLink3.target = '_blank' // Opens in a new tab
  const projectImage3 = document.createElement('img')
  projectImage3.src =
    './projects/assets/Captura de Pantalla 2024-11-01 a las 19.01.08.png'
  projectImage3.alt = 'Project 3'
  projectImage3.classList.add('project-image')
  projectLink3.appendChild(projectImage3)
  projectsContent.appendChild(projectLink3)

  projectsSection.appendChild(projectsContent)

  document.getElementById('projects').appendChild(projectsSection)
}
