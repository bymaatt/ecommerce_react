
const productos = [
    {
        "nombre": "Iron Man",
			"descripcion": "El mas crack",
			"precio": 4500,
            "stock": 10,
			"imagen": "../../assets/productos/iron_man.jpg",
    },
    {
        "nombre": "Spiderman",
        "": "El buen vecino",
        "precio": 5500,
        "stock": 10,
        "imagen": "../../assets/productos/spiderman.jpg",
    },
    {
        "nombre": "Thor",
        "descripcion": "el fachero",
        "precio": 4200,
        "stock": 10,
        "imagen": "../../assets/productos/thor.jpg",
    },
    {
        "nombre": "Hulk",
        "descripcion": "El verde",
        "precio": 3500,
        "stock": 10,
        "imagen": "../../assets/productos/hulk.jpg",
    },
    {
        "nombre": "Wolverine",
        "descripcion": "El enojon",
        "precio": 5000,
        "stock": 10,
        "imagen": "../../assets/productos/wolverine.jpg",
    },
    {
        "nombre": "Capitan América",
        "descripcion": "El buen capi",
        "precio": 4500,
        "stock": 10,
        "imagen": "../../assets/productos/capitan_america.jpg",
    },
    {
        "nombre": "Black Widow",
        "descripcion": "Otra crack",
        "precio": 4700,
        "stock": 10,
        "imagen": "../../assets/productos/black_widow.jpg",
    },
    {
        "nombre": "Ant-Man",
        "descripcion": "Pulguita",
        "precio": 4200,
        "stock": 10,
        "imagen": "../../assets/productos/ant_man.jpg",
    },
    {
        "nombre": "Capitana Marvel",
        "descripcion": "La capi femenina",
        "precio": 4000,
        "stock": 10,
        "imagen": "../../assets/productos/capitana_marvel.jpg",
    },
    {
        "nombre": "Hawkeye",
        "descripcion": "El arquero del team",
        "precio": 3000,
        "stock": 10,
        "imagen": "../../assets/productos/arquero.jpg",
    },
];

export const traerProductos = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve (productos)
    }, 2000);
    
});