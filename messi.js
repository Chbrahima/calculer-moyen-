document.addEventListener('DOMContentLoaded', function() {
    const modulesContainer = document.getElementById('modules');
    const addModuleButton = document.getElementById('addModule');
    const calculateButton = document.getElementById('calculateAverage');
    const resultElement = document.getElementById('result');
  
    addModuleButton.addEventListener('click', function() {
      const moduleDiv = document.createElement('div');
      moduleDiv.classList.add('module');
  
      const moduleNameInput = document.createElement('input');
      moduleNameInput.setAttribute('type', 'text');
      moduleNameInput.setAttribute('placeholder', 'Nom du module');
  
      const moduleCoursesDiv = document.createElement('div');
      moduleCoursesDiv.classList.add('module-courses');
  
      const addCourseButton = document.createElement('button');
      addCourseButton.textContent = 'Ajouter une matière';
      addCourseButton.addEventListener('click', function() {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
  
        const courseNameInput = document.createElement('input');
        courseNameInput.setAttribute('type', 'text');
        courseNameInput.setAttribute('placeholder', 'Nom de la matière');
  
        const creditInput = document.createElement('input');
        creditInput.setAttribute('type', 'number');
        creditInput.setAttribute('placeholder', 'Crédits');
  
        const assignmentInput = document.createElement('input');
        assignmentInput.setAttribute('type', 'number');
        assignmentInput.setAttribute('placeholder', 'Note de devoir');
  
        const examInput = document.createElement('input');
        examInput.setAttribute('type', 'number');
        examInput.setAttribute('placeholder', 'Note d\'examen');
  
        courseDiv.appendChild(courseNameInput);
        courseDiv.appendChild(creditInput);
        courseDiv.appendChild(assignmentInput);
        courseDiv.appendChild(examInput);
        moduleCoursesDiv.appendChild(courseDiv);
      });
  
      moduleDiv.appendChild(moduleNameInput);
      moduleDiv.appendChild(moduleCoursesDiv);
      moduleDiv.appendChild(addCourseButton);
      modulesContainer.appendChild(moduleDiv);
    });
  
    calculateButton.addEventListener('click', function() {
      let modules = document.querySelectorAll('.module');
      let totalCredits = 0;
      let totalExamPoints = 0;
      let totalAssignmentPoints = 0;
  
      modules.forEach(module => {
        let moduleCourses = module.querySelectorAll('.course');
  
        moduleCourses.forEach(course => {
          let creditInput = course.querySelector('input[type="number"]:nth-child(2)');
          let assignmentInput = course.querySelector('input[type="number"]:nth-child(3)');
          let examInput = course.querySelector('input[type="number"]:nth-child(4)');
          
          let credits = parseFloat(creditInput.value);
          let assignmentGrade = parseFloat(assignmentInput.value);
          let examGrade = parseFloat(examInput.value);
  
          if (!isNaN(credits) && !isNaN(assignmentGrade) && !isNaN(examGrade)) {
            totalCredits += credits;
            totalExamPoints += examGrade * credits;
            totalAssignmentPoints += assignmentGrade * credits;
          }
        });
      });
  
      let averageExam = totalExamPoints / totalCredits;
      let averageAssignment = totalAssignmentPoints / totalCredits;
      let overallAverage = (averageExam + averageAssignment) / 2;
  
      resultElement.textContent = `Votre moyenne est de : ${overallAverage.toFixed(2)}`;
    });
  });
  