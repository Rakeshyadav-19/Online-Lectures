const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo), //coverts JS object into code.
        // We use JASON.parse to convert valid string to JS object 
    }
    // jsonplaceholder free api for devlopers to use for learning
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        title: 'Rax',
        body: 'Hello everyone',
        userId: 3049,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
}

mainFunc()