// function hello(name){
//     return 'hola ' + name
// }

// console.log(hello('ryan'))

// function add(x, y){
//     return x + y
// }

// console.log(add(10,20))

// function add(x=20, y=13){
//     return x + y
// }

// console.log(add())

// const user = {
//     name: 'ryan',
//     lastname: 'perez',
//     age: 30,
//     adress: {
//         country: 'venezuela',
//         city: 'anzoategui',
//         street: 'mainstreet'
//     },
//     friends: ['brandon', 'elena'],
//     active: true,
//     sendMail: function () {
//         return 'sending email...'
//     }
// }

// console.log (user.adress.city);
// console.log(user.friends);
// console.log(user.active);
// console.log(user.sendMail());

// const name = 'laptop'
// const price = 3000

// const newProduct = {
//     name: name,
//     price: price
// }

// console.log(newProduct)

// const title = document.createElement('h1')
// title.innerText = 'hola mundo js'

// const button = document.createElement('button')
// button.innerText = 'click'

// button.addEventListener('click', function(){
//     title.innerText = 'texto actualizado con js'
//     alert('se realizo un click')
//     console.log('hola mundo')
// })
// document.body.append(title)
// document.body.append(button)


// const user = {
//     name: 'Joe',
//     age: 30
// }

// function printInfo(user){
//     return '<h1>Hola ' + user.name + '</h1>'
// }

// console.log(printInfo(user))

// document.body.innerHTML = printInfo(user)

// const user = {
//     name: 'Joe',
//     age: 30
// };

// function printInfo(user){
//     const { name, age } = user;

//     console.log(name,age);
//     return '<h1>Hola '+ age +'</h1>';
// }

// console.log(printInfo(user))

// document.body.innerHTML = printInfo(user)

// const button = document.createElement('button')
// button.innerText = 'click me'

// button.addEventListener('click', function(){
//     alert('clicked')
// })

// document.body.append(button)

const showText = () => 'hola mundo'
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3]
const showObject = () => ({name: 'Ryan'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())

const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', () => {
    alert('clicked')
})

document.body.append(button)