const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    // Remplaçable par du contenu provenant d'une API
    header.innerHTML = '<img src="https://source.unsplash.com/random" alt="random image">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti, sapiente atque reprehenderit ipsa eaque.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/11.jpg" alt=""></img>'
    name.innerHTML = 'JB Lardet'
    date.innerHTML = '14 Mars 2023'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}