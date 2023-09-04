const desenho  = document.querySelector('.desenho')
const btn = document.querySelector('#btn-create')


const svgNS = 'http://www.w3.org/2000/svg'
const myCircle = document.createElementNS(svgNS, "circle")


const createCircle = () => {

const circle = document.createElementNS(svgNS, "circle")

const cx = Math.floor(Math.random() *500)
const cy = Math.floor(Math.random() *500)

circle.setAttributeNS(null, 'height', 20)
circle.setAttributeNS(null, 'width', 30)
circle.setAttributeNS(null, 'r', 15)
circle.setAttributeNS(null, 'cx', cx)
circle.setAttributeNS(null, 'cy', cy)
circle.setAttributeNS(null, 'fill', 'red')
desenho.appendChild(circle)


}

btn.addEventListener('click', createCircle )

