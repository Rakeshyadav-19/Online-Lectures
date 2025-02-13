// Write a javascript program to pretend to look like a hacker
// Try to emulate a terminal using javascript logic and it should look to others as if you are hacking a system
// Try to display messages like:
// Initializing Network
// Connecting to service...
// Retreiving username...
// Username found....
// Trying a combination of 4.5 Trillion passwords...
// Password found...
// Connecting to Facebook...

// Fool your friends into thinking that you are a hacker and have fun
// PROTIP: Try to use a green text on a black background



let initial = document.getElementById('terminal');
let Apps = document.getElementById('apps');
let Hack = document.getElementById('hack');

let Initializing = async (src) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            initial.innerHTML = src + '.';
        }, 2000);
        setTimeout(() => {
            initial.innerHTML = initial.innerHTML + '<br>' + src + '...';
        }, 3000);
        setTimeout(() => {
            initial.innerHTML = initial.innerHTML + '<br>' + src + '.....';
        }, 4000);
        setTimeout(() => {
            initial.innerHTML = initial.innerHTML + '<br>' + 'Task completed.';
            resolve(); // Resolves the promise after the last setTimeout completes
        }, 5000);
    });
}
let apps = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            Apps.innerHTML = 'Facebook not found';
        }, 2000);
        setTimeout(() => {
            Apps.innerHTML = Apps.innerHTML + '<br> Instagram found';
        }, 3000);
        setTimeout(() => {
            Apps.innerHTML = Apps.innerHTML + '<br> Snapchat found';
        }, 4000);
        setTimeout(() => {
            Apps.innerHTML = Apps.innerHTML + '<br> WhatsApp found';
            resolve(); // Resolves the promise after the last setTimeout completes
        }, 5000);
    });
}
let hacker = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            Hack.innerHTML = 'Retreiving Instagram username...';
        }, 2000);
        setTimeout(() => {
            Hack.innerHTML = Hack.innerHTML + '<br> Username found....';
        }, 4000);
        setTimeout(() => {
            Hack.innerHTML = Hack.innerHTML + '<br> Trying a combination of 4.5 Trillion passwords...';
        }, 6000);
        setTimeout(() => {
            Hack.innerHTML = Hack.innerHTML + '<br> Password found...';
        }, 10000);
        setTimeout(() => {
            Hack.innerHTML = Hack.innerHTML + '<br> Thank you four your patience...';
            resolve(); // Resolves the promise after the last setTimeout completes
        }, 12000);
    });
}





const hack = async () => {
    await Initializing('Connecting to service');
    await Initializing('Searching apps');
    await apps()
    await hacker()
    setTimeout(() => {
        let bd = document.getElementById('finish')
        bd.setAttribute("id", "second")
    }, 3000);
}

hack();

// async iife- imediatley invoked function expression
// Invoked automatiaclly

(async ()=>{
    console.log('Doomed')
})()