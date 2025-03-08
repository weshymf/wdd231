const courses = [
    { code: 'CSE 110', name: 'Intro to Programming', credits: 2, completed: true },
    { code: 'WDD 130', name: 'Web Fundamentals', credits: 2, completed: true },
    { code: 'CSE 111', name: 'Programming with Functions', credits: 2, completed: true },
    { code: 'CSE 210', name: 'Programming with Classes', credits: 2, completed: true },
    { code: 'WDD 131', name: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { code: 'WDD 231', name: 'Web Frontend Development I', credits: 2, completed: false }
];

function displayCourses(filter) {
    const container = document.getElementById('course-container');
    container.innerHTML = '';
    const filteredCourses = filter ? courses.filter(c => c.code.startsWith(filter)) : courses;
    filteredCourses.forEach(course => {
        const courseEl = document.createElement('div');
        courseEl.textContent = `${course.code}: ${course.name} (${course.credits} credits)`;
        courseEl.style.fontWeight = course.completed ? 'bold' : 'normal';
        container.appendChild(courseEl);
    });
}

document.getElementById('all-courses').addEventListener('click', () => displayCourses(''));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('CSE'));

displayCourses('');
