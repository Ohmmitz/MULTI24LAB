document.addEventListener('DOMContentLoaded', () => {
    const projectData = [
        {
            category: 'website',
            img: 'dummy.jpeg',
            title: 'Project 1',
            description: 'Description of Project 1',
        },
        {
            category: 'application',
            img: 'dummy.jpeg',
            title: 'Project 2',
            description: 'Description of Project 2',
        },
        {
            category: 'animation',
            img: 'dummy.jpeg',
            title: 'Project 3',
            description: 'Description of Project 3',
        },
        {
            category: 'game',
            img: 'dummy.jpeg',
            title: 'Project 4',
            description: 'Description of Project 4',
        },
        {
            category: 'interactive',
            img: 'dummy.jpeg',
            title: 'Project 5',
            description: 'Description of Project 5',
        },
        {
            category: 'film',
            img: 'dummy.jpeg',
            title: 'Project 6',
            description: 'Description of Project 6',
        },
        // Add more projects as needed
    ];

    const projectSection = document.getElementById('project');

    function renderProjects(projects) {
        projectSection.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.setAttribute('data-category', project.category);

            const img = document.createElement('img');
            img.src = project.img;
            img.alt = project.title;

            const title = document.createElement('h2');
            title.textContent = project.title;

            const description = document.createElement('p');
            description.textContent = project.description;

            const button = document.createElement('button');
            button.textContent = 'More';

            projectCard.append(img, title, description, button);
            projectSection.appendChild(projectCard);
        });
    }

    renderProjects(projectData);

    const categoryIcons = document.querySelectorAll('.category-icon');
    const filterTagsSection = document.getElementById('filter-tags');
    const filterTag = document.getElementById('filter-tag');
    const clearFilterBtn = document.getElementById('clear-filter');

    categoryIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const category = icon.getAttribute('data-category');
            filterTag.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            filterTagsSection.classList.remove('hidden');
            const filteredProjects = projectData.filter(project => project.category === category);
            renderProjects(filteredProjects);
        });
    });

    clearFilterBtn.addEventListener('click', () => {
        filterTag.textContent = '';
        filterTagsSection.classList.add('hidden');
        renderProjects(projectData);
    });
});

// Directory data
const directoryData = [
    {
        topic: 'Main Zone',
        details: [
            { text: 'Center Stage', location: 'CEN' },
            { text: 'Workshop', location: 'WSP' },
            { text: 'Sponsor 01', location: 'S01' },
            { text: 'Sponsor 02', location: 'S02' },
            { text: 'Sponsor 03', location: 'S03' },
            { text: 'Sponsor 01', location: 'S04' },
            { text: 'Sponsor 01', location: 'S05' },
        ]
    },
    {
        topic: 'Booth zone',
        details: [
            { text: 'Booth 1', location: 'A01' },
            { text: 'Booth 2', location: 'A02' },
            { text: 'Booth 3', location: 'A03' },
            { text: 'Booth 2', location: 'A04' },
        ]
    },
    {
        topic: 'Computer zone',
        details: [
            { text: 'Workshop 1', location: 'S07' },
            { text: 'Workshop 2', location: 'S08' },
            { text: 'Workshop 3', location: 'S09' }
        ]
    }
];

// Add directory data to the directory section
const directoryList = document.getElementById('directory-list');
directoryData.forEach(zone => {
    const column = document.createElement('div');
    column.classList.add('directory-column');
    column.innerHTML = `
        <h3>${zone.topic}</h3>
        <ul>
            ${zone.details.map(detail => `
                <li>${detail.text} <button class="location-btn">${detail.location}</button></li>
            `).join('')}
        </ul>
    `;
    directoryList.appendChild(column);
});

document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Timeline data
    const timelineData = [
        {
            day: 'Day 1 | 22 May 2025',
            events: [
                '10:00 – 10:30 AM: Registration',
                '10:30 – 11:00 AM: Opening Ceremony',
                '11:00 – 11:15 AM: Showreel of Projects',
                '11:15 – 11:25 AM: Introduction of Activities and Popular Vote Project Announcement',
                '11:25 AM – 12:25 PM: Souvenir Making Workshop',
                '12:25 – 1:20 PM: Lunch Break',
                '1:20 – 1:30 PM: Afternoon Activities Announcement',
                '1:30 – 2:30 PM: Guest Speaker Discussion on Multimedia and Current Topics',
                '2:30 – 3:30 PM: Short Film Screening by Students (Groups 1-5)',
                '3:30 – 4:00 PM: Exhibition Tour of Each Group',
                '4:00 – 5:00 PM: Souvenir Making Workshop',
                '5:00 – 5:30 PM: Announcing of the Next Day\'s Activities',
                '5:30 PM: Closing of Day 1'
            ]
        },
        {
            day: 'Day 2 | 22 May 2025',
            events: [
                '10:00 – 11:00 AM: Registration and Exhibition Viewing',
                '11:00 – 11:15 AM: Introduction of Activities and Popular Vote Project Announcement',
                '11:15 AM – 12:45 PM: Short Film Screening by Students (Groups 6-10)',
                '12:45 – 1:00 PM: Activity Announcement',
                '1:00 – 2:00 PM: Lunch Break',
                '2:00 – 3:00 PM: Guest Speaker Discussion on Current Multimedia Topics (with 2 Guests)',
                '3:00 – 4:00 PM: Exhibition Tour of Each Group',
                '4:00 – 5:00 PM: Souvenir Making Workshop',
                '5:00 – 5:15 PM: Popular Vote Project Awards Ceremony',
                '5:15 PM: Group Photo and End of Event'
            ]
        }
    ];

    // Add timeline data to the timeline section
    const timelineContainer = document.getElementById('timeline-container');
    timelineData.forEach((dayInfo, index) => {
        const column = document.createElement('div');
        column.classList.add('timeline-column');
        column.innerHTML = `
            <div class="timeline-day">
                <h2>${dayInfo.day} <span class="arrow">&#9660;</span></h2>
                <div class="events">
                    ${dayInfo.events.map(event => `
                        <button class="timeline-event">${event}</button>
                    `).join('')}
                </div>
            </div>
        `;
        timelineContainer.appendChild(column);
    });

    // Add event listeners for dropdown functionality
    document.querySelectorAll('.timeline-day h2').forEach(dayHeader => {
        dayHeader.addEventListener('click', () => {
            dayHeader.parentElement.classList.toggle('open');
        });
    });
});