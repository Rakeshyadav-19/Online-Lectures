// JS has property called prototype, it is either nullor reference another object.
let a = {
    name2: "Rax",
    language: "JavaScript",
    run: () => {
        console.log("self run")
    }
}
console.log(a)


let p = {
    run: () => {
        console.log("run")
    }
}

p.__proto__ = {
    name: "RaxLord"
}

a.__proto__ = p
a.run()
console.log(a.name)