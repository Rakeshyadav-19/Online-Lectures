// It exists only within the current browser tab, another tab with same page will have different session storage.
// The data servives page referesh , but not closing and opening of page.
sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
sessionStorage.setItem("name", "Rax")
// sessionStorage.removeItem("name")

// We can listen the onstorage eventof windows, which is triggered when updates are made to a ame storage from other document.
window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}


// Storag event:
// When storage gets updated in localstorage or sessionstorage , storage event triggers with following properties:
// key
// Old Vlaue 
// New Vlaue
// url -> page url 
// StorageArea -> local or session