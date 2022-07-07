// 
// FILE SYSTEM
// 
const fs = require('fs')

// console.log(fs);

// fs.writeFileSync('test.txt', 'halo dunia')

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })


//
// RAED LINE
// 
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`what's your name? `, (name) => {
    rl.question(`what's your email? `, (email) => {
        rl.question(`type your phone number... `, (phone) => {
            console.log(
                `Name : ${name} || E-mail : ${email} || Phone : ${phone}`
            );
            rl.close()
        })
    })
})

// console.log(name);