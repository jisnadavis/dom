const zapatillas = [
  {
    id: 1,
    nombre: 'Nike Air Blanco',
    precio: 79.99,
    img: './assets/NikeAirBlanca.png',
    estrellas: 4,
    modelo: 'Air',
    colores: ['black', 'white']
  },
  {
    id: 2,
    nombre: 'airforce',
    precio: 89.99,
    img: './assets/NikeAirForce1.png',
    estrellas: 4,
    modelo: 'Air Force 1',
    colores: ['black']
  },
  {
    id: 3,
    nombre: 'Nike Air Force 1 White',
    precio: 99.99,
    img: './assets/NikeAirForce1Blancas.png',
    estrellas: 3,
    modelo: 'Air Force 1',
    colores: ['grey', 'white']
  },
  {
    id: 4,
    nombre: 'Nike Air Force 1 Pastel',
    precio: 69.99,
    img: './assets/NikeAirForce1Pastel.jpg',
    estrellas: 5,
    modelo: 'Air Force 1',
    colores: ['#ede5cf', '#c5cadc', '#f6f6f6', '#d0b8b7', '#e9eaef']
  },
  {
    id: 5,
    nombre: 'Nike Air Max Dawn',
    precio: 74.99,
    img: './assets/NikeAirMaxDawn.png',
    estrellas: 2,
    modelo: 'Air Max',
    colores: ['white']
  },
  {
    id: 6,
    nombre: 'Nike Air Max Furyosa',
    precio: 109.99,
    img: './assets/NikeAirMaxFuryosa.png',
    estrellas: 1,
    modelo: 'Air Max',
    colores: ['grey', 'purple', 'yellow']
  },
  {
    id: 7,
    nombre: 'Nike Air Max Pulse',
    precio: 64.99,
    img: './assets/NikeAirMaxPulse.png',
    estrellas: 2,
    modelo: 'Air Max',
    colores: ['grey', 'white']
  },
  {
    id: 8,
    nombre: 'Nike Air Vapor Max Blue',
    precio: 119.99,
    img: './assets/NikeAirVaporMax.png',
    estrellas: 4,
    modelo: 'Air Vapor Max',
    colores: ['blue']
  },
  {
    id: 9,
    nombre: 'Nike Amarillo',
    precio: 84.99,
    img: './assets/NikeAmarillo.png',
    estrellas: 4,
    modelo: 'Amarillo',
    colores: ['yellow']
  },
  {
    id: 10,
    nombre: 'Nike Court Legacy',
    precio: 94.99,
    img: './assets/NikeCourtLegacy.png',
    estrellas: 4,
    modelo: 'Court Legacy',
    colores: ['white']
  },
  {
    id: 11,
    nombre: 'Nike Dunk Low',
    precio: 75.99,
    img: './assets/NikeDunkLow.png',
    estrellas: 4,
    modelo: 'Dunk Low',
    colores: ['black', 'white']
  },
  {
    id: 12,
    nombre: 'Nike Kiger 9',
    precio: 109.99,
    img: './assets/NikeKiger9.png',
    estrellas: 1,
    modelo: 'Kiger',
    colores: ['brown']
  },
  {
    id: 13,
    nombre: 'Nike Motiva Premium',
    precio: 89.99,
    img: './assets/NikeMotivaPremium.png',
    estrellas: 3,
    modelo: 'Motiva Premium',
    colores: ['pink', 'white']
  }
]
const modelos = []
let MODELO = ''
const filtrar = () => {
  const filterd = []
  for (const zapa of zapatillas) {
    if (MODELO === zapa.modelo) {
      filterd.push(zapa)
    }
  }
  printzapatilla(filterd)
}
const fillmodelos = () => {
  for (const zapa of zapatillas) {
    if (!modelos.includes(zapa.modelo)) {
      modelos.push(zapa.modelo)
    }
  }
}
fillmodelos(zapatillas)

const createselectmodel = () => {
  const divfiltros = document.querySelector('#filter')
  const selectmodel = document.createElement('select')
  for (const modelo of modelos) {
    const option = document.createElement('option')
    option.value = modelo
    option.textContent = modelo
    selectmodel.appendChild(option)
    divfiltros.appendChild(selectmodel)
    selectmodel.addEventListener('change', (e) => {
      MODELO = e.target.value
      filtrar()
    })
  }
}
const printzapatilla = (zapas) => {
  const divzapas = document.querySelector('#zapatillas')
  divzapas.innerHTML = ``
  let colorantorier = ''
  for (const zapa of zapas) {
    const divzpa = document.createElement('div')
    const divimg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const precio = document.createElement('p')
    const estrelladiv = document.createElement('div')
    const divcolor = document.createElement('div')
    for (let i = 0; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (zapa.estrellas >= i) {
        estrella.classList.add('rellena')
      }
      estrelladiv.appendChild(estrella)
    }
    for (const color of zapa.colores) {
      const colorhtml = document.createElement('div')
      divcolor.appendChild(colorhtml)
      colorhtml.className = 'clr'
      colorhtml.style.backgroundColor = color
    }
    divcolor.className = 'colores'
    divzapas.className = 'flex-container'
    divimg.classList.add('image-container')
    img.classList.add('color')
    estrelladiv.classList.add('flex-container', 'stars')
    img.src = zapa.img
    name.textContent = zapa.nombre
    precio.textContent = `${zapa.precio}€`
    let colornow = `var(--rtc-special-color-${
      Math.floor(Math.random() * 7) + 1
    })`
    while (colornow === colorantorier) {
      colornow = `var(--rtc-special-color-${Math.floor(Math.random() * 7) + 1})`
    }
    colorantorier = colornow
    img.style.backgroundColor = colornow

    divzpa.appendChild(divimg)
    divimg.appendChild(img)
    divimg.appendChild(name)
    divimg.appendChild(precio)
    divimg.appendChild(estrelladiv)
    divzapas.appendChild(divzpa)
    divzpa.appendChild(divcolor)
  }
}
printzapatilla(zapatillas)
createselectmodel()
