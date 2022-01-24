const productos = [
    {
        "id": "1",
        "nombre": "Iron Man",
		"descripcion": "El mas crack",
		"precio": 4500,
        "stock": 10,
<<<<<<< HEAD
        "imagen": "/iron_man.jpg",
        "categoria": "vengador"
=======
		"imagen": "/iron_man.jpg",
        "categoria": "vengadores",
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "2",
        "nombre": "Spiderman",
        "descripcion": "El buen vecino",
        "precio": 5500,
        "stock": 10,
        "imagen": "/spiderman.jpg",
<<<<<<< HEAD
        "categoria": "independiente"
=======
        "categoria": "independientes",
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "3",
        "nombre": "Thor",
        "descripcion": "el fachero",
        "precio": 4200,
        "stock": 10,
        "imagen": "/thor.jpg",
<<<<<<< HEAD
        "categoria": "vengador"
=======
        "categoria": "vengadores",
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "4",
        "nombre": "Hulk",
        "descripcion": "El verde",
        "precio": 3500,
        "stock": 10,
        "imagen": "/hulk.jpg",
<<<<<<< HEAD
        "categoria": "vengador"
=======
        "categoria": "vengadores",
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "5",
        "nombre": "Wolverine",
        "descripcion": "El enojon",
        "precio": 5000,
        "stock": 10,
        "imagen": "/wolverine.jpg",
        "categoria": "mutante",
    },
    {
        "id": "6",
        "nombre": "C. América",
        "descripcion": "El buen capi",
        "precio": 4500,
        "stock": 10,
        "imagen": "/capitan_america.jpg",
<<<<<<< HEAD
        "categoria":"vengador",
=======
        "categoria": "vengadores,"
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "7",
        "nombre": "Black Widow",
        "descripcion": "Otra crack",
        "precio": 4700,
        "stock": 10,
        "imagen": "/black_widow.jpg",
<<<<<<< HEAD

=======
        "categoria": "vengadores"
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "8",
        "nombre": "Ant-Man",
        "descripcion": "Pulguita",
        "precio": 4200,
        "stock": 10,
        "imagen": "/ant_man.jpg",
<<<<<<< HEAD
        "categoria": "vengador",
=======
        "categoria": "vengadores",
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "9",
        "nombre": "C. Marvel",
        "descripcion": "La capi femenina",
        "precio": 4000,
        "stock": 10,
        "imagen": "/capitana_marvel.jpg",
<<<<<<< HEAD
        "categoria": "vengador"
=======
        "categoria": "vengadores",
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
    {
        "id": "10",
        "nombre": "Hawkeye",
        "descripcion": "El arquero del team",
        "precio": 3000,
        "stock": 10,
        "imagen": "/arquero.jpg",
<<<<<<< HEAD
        "categoria": "vengador"
=======
        "categoria": "vengadores",
>>>>>>> 15572a335caf9711a0ca89c89ca6663e749d4df8
    },
];

export const traerProductos = new Promise ((resolve, reject)=>{
    let condicion = true
    if (condicion){
        setTimeout(()=>{
            resolve (productos)
        }, 2000)
    }else {
        reject('error')
    }
});