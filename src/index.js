const mensajes = [
    "Magdiel",
    "Lezly",
    "Lendy",
    "Erika",
    "Esther",
    "Carolina",
    "Tania",
    "Anel",
    "Frida",
    "Cindy",
    "America",
    "Perla",
    "Lidia",
    "Raquel",
    "Susana",
    "Bethzaida"
]

const randomMgl = () =>{
    const mensaje = mensajes[Math.floor(Math.random()*mensajes.length)]
    console.log(mensaje)
}

module.exports = {randomMgl}