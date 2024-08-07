// Q.1 Use a free api from internet and feed your app with live data
async function give() {
    let id = document.getElementById('val').value;
    let url = `https://api.restful-api.dev/objects/${id}`;

    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        let data = await res.json();

        // Check if data structure is as expected
        if (data && data.data) {
            document.querySelector('.ID').textContent = data.id || 'N/A';
            document.querySelector('.NAME').textContent = data.name || 'N/A';
            document.querySelector('.COLOR').textContent = data.data.color || 'N/A';
            document.querySelector('.PRICE').textContent = data.data.price || 'N/A';
        } else {
            throw new Error('Unexpected data structure');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);

        // Display error message in the HTML
        document.querySelector('.ID').textContent = 'Error';
        document.querySelector('.NAME').textContent = 'Error';
        document.querySelector('.COLOR').textContent = 'Error';
        document.querySelector('.PRICE').textContent = 'Error';
    }
}

// let url = "https://kontests.net/api/v1/all"
// let response = fetch(url)
// response.then((v) => {
//     return v.json()
// }).then((contests) => {
//     console.log(contests)
//     ihtml = ""
//     for (item in contests) {
//         console.log(contests[item])
//         ihtml += `
//                 <div class="card mx-2 my-2" style="width: 22rem;">
//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                         <h5 class="card-title">${contests[item].name}</h5>
//                                         <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
//                                         <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
//                                         <p>Starts at: ${contests[item].start_time}
//                                         <p>Starts at: ${contests[item].end_time}
//                                         <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
//                                 </div>
//                         </div>
//                 `
//     }
//     cardContainer.innerHTML = ihtml
// })


















// Q.2 Create note saving app which saves note in local storage.
function save() {
    let key = document.getElementById("key").value
    let value = document.getElementById("value").value

    localStorage.setItem(key, value)

}

// Repeate Q.2 and fetch the note which was saved
function show() {
    let key = document.getElementById("get-key").value;
    let doc = document.getElementById("show");
    let value = localStorage.getItem(key);

    if (value !== null) {
        doc.innerHTML = value;
    } else {
        doc.innerHTML = "No value found for the given key.";
    }
}


// Repeate Q.2 and delete the note which was saved
function del() {
    let key = document.getElementById("delete").value;
    let doc = document.getElementById("deleted");
    let value = localStorage.removeItem(key);

    if (value !== null) {
        doc.innerHTML = "Note deleted: " + key;
    } else {
        doc.innerHTML = "No value found for the given key.";
    }
}
