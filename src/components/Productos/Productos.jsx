const productos = [
    {
        "nombre": "Iron Man",
			"descripcion": "El mas crack",
			"precio": 4500,
            "stock": 10,
			"imagen": "/iron_man.jpg",
    },
    {
        "nombre": "Spiderman",
        "": "El buen vecino",
        "precio": 5500,
        "stock": 10,
        "imagen": "/spiderman.jpg",
    },
    {
        "nombre": "Thor",
        "descripcion": "el fachero",
        "precio": 4200,
        "stock": 10,
        "imagen": "/thor.jpg",
    },
    {
        "nombre": "Hulk",
        "descripcion": "El verde",
        "precio": 3500,
        "stock": 10,
        "imagen": "/hulk.jpg",
    },
    {
        "nombre": "Wolverine",
        "descripcion": "El enojon",
        "precio": 5000,
        "stock": 10,
        "imagen": "/wolverine.jpg",
    },
    {
        "nombre": "C. América",
        "descripcion": "El buen capi",
        "precio": 4500,
        "stock": 10,
        "imagen": "/capitan_america.jpg",
    },
    {
        "nombre": "Black Widow",
        "descripcion": "Otra crack",
        "precio": 4700,
        "stock": 10,
        "imagen": "/black_widow.jpg",
    },
    {
        "nombre": "Ant-Man",
        "descripcion": "Pulguita",
        "precio": 4200,
        "stock": 10,
        "imagen": "/ant_man.jpg",
    },
    {
        "nombre": "C. Marvel",
        "descripcion": "La capi femenina",
        "precio": 4000,
        "stock": 10,
        "imagen": "/capitana_marvel.jpg",
    },
    {
        "nombre": "Hawkeye",
        "descripcion": "El arquero del team",
        "precio": 3000,
        "stock": 10,
        "imagen": "/arquero.jpg",
    },
];

export const traerProductos = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve (productos)
    }, 2000);
    
});