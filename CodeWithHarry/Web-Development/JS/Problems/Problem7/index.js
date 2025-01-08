// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

let saveButton = document.getElementById("save");

function saveNote(title, text) {
  localStorage.setItem(title, text);
}
saveButton.addEventListener("click", () => {
  let title = document.getElementById("note-title").value;
  let text = document.getElementById("note-text").value;
  saveNote(title, text);

  console.log("Note saved:", title, text);
});
