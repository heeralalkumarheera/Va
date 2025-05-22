function updatePreview() {
  document.getElementById('preview-name').textContent = document.querySelector('input[name="name"]').value;
  document.getElementById('preview-email').textContent = document.querySelector('input[name="email"]').value;
  document.getElementById('preview-phone').textContent = document.querySelector('input[name="phone"]').value;
  document.getElementById('preview-summary').textContent = document.querySelector('textarea[name="summary"]').value;

  const skills = document.getElementById('skills').value;
  document.getElementById('preview-skills').innerHTML = `<strong>Skills:</strong> ${skills}`;

  // Education
  const eduInputs = document.querySelectorAll('#education-section .edu-entry input');
  const eduPreview = document.getElementById('preview-education');
  eduPreview.innerHTML = "<strong>Education:</strong><ul>" +
    Array.from(eduInputs).map(i => `<li>${i.value}</li>`).join('') +
    "</ul>";

  // Experience
  const expInputs = document.querySelectorAll('#experience-section .exp-entry input');
  const expPreview = document.getElementById('preview-experience');
  expPreview.innerHTML = "<strong>Experience:</strong><ul>" +
    Array.from(expInputs).map(i => `<li>${i.value}</li>`).join('') +
    "</ul>";
}

function addEducation() {
  const newEdu = document.createElement('div');
  newEdu.classList.add('edu-entry');
  newEdu.innerHTML = `<input type="text" placeholder="Education Details" oninput="updatePreview()" />`;
  document.getElementById('education-section').insertBefore(newEdu, document.querySelector('#education-section button'));
}

function addExperience() {
  const newExp = document.createElement('div');
  newExp.classList.add('exp-entry');
  newExp.innerHTML = `<input type="text" placeholder="Experience Details" oninput="updatePreview()" />`;
  document.getElementById('experience-section').insertBefore(newExp, document.querySelector('#experience-section button'));
}

function clearForm() {
  document.getElementById('resume-form').reset();
  document.getElementById('preview-name').textContent = "";
  document.getElementById('preview-email').textContent = "";
  document.getElementById('preview-phone').textContent = "";
  document.getElementById('preview-summary').textContent = "";
  document.getElementById('preview-education').innerHTML = "";
  document.getElementById('preview-skills').innerHTML = "";
  document.getElementById('preview-experience').innerHTML = "";
}
function downloadPDF() {
  const element = document.getElementById('resume-preview');
  html2pdf().from(element).save('resume.pdf');
}
 
function updateProgressBar() {
  const inputs = document.querySelectorAll('#resume-form input, #resume-form textarea');
  const total = inputs.length;
  let filled = 0;

  inputs.forEach(input => {
    if (input.value.trim() !== '') filled++;
  });

  const percent = Math.round((filled / total) * 100);
  document.getElementById('progress-bar').style.width = percent + '%';
}
