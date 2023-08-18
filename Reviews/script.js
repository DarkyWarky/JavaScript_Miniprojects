const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const author = document.getElementById("author")
const image = document.getElementById("person-img")
const job = document.getElementById("job")
const info = document.getElementById("info")
const prev =document.getElementById("prev")
const next =document.getElementById("next")

let currentitem=0
window.addEventListener("DOMContentLoaded",function () {
    showname(currentitem)
})
function showname(person) {
    const item = reviews[person]
    image.src= item.img
    author.textContent= item.name
    job.textContent= item.job
    info.textContent= item.text
}
prev.addEventListener('click',function(){
    if (currentitem==0) {
        currentitem = reviews.length
    }
    currentitem--
    showname(currentitem)
})
next.addEventListener('click',function(){
    if (currentitem==reviews.length) {
        currentitem = -1
    }
    currentitem++
    showname(currentitem)
})