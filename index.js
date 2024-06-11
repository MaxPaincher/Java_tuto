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

// const showText = () => 'hola mundo'
// const showNumber = () => 22;
// const showBoolean = () => true;
// const showArray = () => [1,2,3]
// const showObject = () => ({name: 'Ryan'})

// console.log(showText())
// console.log(showNumber())
// console.log(showBoolean())
// console.log(showArray())
// console.log(showObject())

// const button = document.createElement('button')
// button.innerText = 'click me'

// button.addEventListener('click', () => {
//     alert('clicked')
// })

// document.body.append(button)

// const background= 'yellow'
// const color = 'white'
// const isAuthorized = true;

// const button = document.createElement("button");
// button.innerText = "click me";
// button.style = 'background: ; color: white;'
// button.style = `background: ${isAuthorized ? background : 'red'}; color; ${color}`


// button.addEventListener('click', () => {

//     if (isAuthorized){
//      alert('esta autorizado');
//     }else{
//         alert('no esta autorizado');
// }
// })
// document.body.append(button)


// ARREGLOS






// const names = ['ryan', 'joe', 'maria']

// names.forEach(function (name){ //el .forEach espera como parametro una funciion al ejecutar va a retornar los valores que la funcion va a estar recibiendo
//     console.log(name)
// })

// const names = ['ryan', 'joe', 'maria']


// const newNames = names.map(function (name){ //Al momento de recorrer, retorna un nuevo arreglo, los convierte en objeto html y con los valores cambiados
//     return `Hola ${name}`
// })

// console.log(names)
// console.log(newNames)

// const names = ['ryan', 'joe', 'maria']

// const names = ['ryan', 'joe', 'maria']


// const nameFound = names.find(function (name){ //el find es para buscar un elemento, recorriendol, imponiendo una condicion 

//     if (name === 'joe'){
//     return name
//     }
// })

// console.log(nameFound)

// const names = ['ryan', 'joe', 'maria']
// const newNames = names.filter(function (name){ //el .filter devuelve los objetos que cumplen la condicion dada en la siguiente linea
//     if (name !== 'joe'){ //!== Diferente de
//     return name
//     }
// })
// console.log(names)
// console.log(newNames)

// const names = ['ryan', 'joe', 'maria']
// const newNames = ['josue', 'ya', 'o']

// console.log([...names , ...newNames])




//ECMASCRIPT MODULES


// import {add, multiply, title} from  './add.js'

// console.log(add(10,20), title)
// console.log(multiply(10,20))

// import addModule from './add.js'

// console.log(addModule())





// OPTIONAL CHAINING

// const person = {
//     name: 'yao',
//     addres: {
//         city: 'london'
//     },
//     location:  {}
    
// }

// console.log(person.location?.city) //"?" Para decirle si es que tiene el city





//ASYNC/AWAIT

// let data = fetch ('https://jsonplaceholder.typicode.com/posts') //el 'Fetch' sirve para solicitar datos de una direccion
//     .then(function(){ //Es como decir cuando acabe fetch voy a hacer funcionar la logica
//         console.log('finalizo la carga')
//     } )

// console.log ('linea 2')

// let data = fetch ('https://jsonplaceholder.typicode.com/posts') //el 'Fetch' sirve para solicitar datos de una direccion
//     .then(function(response){ //Es como decir cuando acabe fetch voy a hacer funcionar la logica
//         return response.json() //Convierte las respuestas en json para poder leerse en consolas
        
//     } ) .then(function(data){
//         console.log(data)
//     })

// console.log ('linea 2')

const ul = document.createElement('ul')
const li = document.createElement('li')

let data = fetch ('https://jsonplaceholder.typicode.com/posts') //el 'Fetch' sirve para solicitar datos de una direccion
    .then(function(response){ //Es como decir cuando acabe fetch voy a hacer funcionar la logica
        return response.json() //Convierte las respuestas en json para poder leerse en consolas
        
    } ) .then(function(data){
        console.log(data)
        data.forEach(function (post){
            const li = document.createElement('li')
            li.innerText = post.title
            ul.append(li)
        })
        document.body.append(ul);
    })

console.log ('linea 2')