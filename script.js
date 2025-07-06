function updateEye(partId, color) {
  const svg = document.getElementById("eye-svg").contentDocument;
  const el = svg.getElementById(partId);
  if(el) el.setAttribute("fill", color);
}
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sclera-color")
    .addEventListener("input", e => updateEye("sclera", e.target.value));
  document.getElementById("iris-color")
    .addEventListener("input", e => updateEye("iris", e.target.value));
  document.getElementById("pupil-color")
    .addEventListener("input", e => updateEye("pupil", e.target.value));
});