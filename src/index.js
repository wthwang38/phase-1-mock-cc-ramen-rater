// write your code here
/*
Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
*/


document.addEventListener("DOMContentLoaded", ()=> {
fetchData('http://localhost:3000/ramens')

})

const fetchData = (url) =>{
fetch(url)
  .then(response => response.json())
  .then((data) => {
        console.log(data) 
        imageAdder(data)
    })}

//add images to the ramen menu as div

const menuPictures = document.querySelector("#ramen-menu")
const name = document.querySelector('.name')
const details = document.querySelector('#ramen-detail')

const imageAdder = (data)=> { 
    for(item of data){
       let image = document.createElement('img')
       image.src = `${item.image}`
       menuPictures.append(image)
       image.addEventListener('click',()=>{
        //details.innerHTML = ""
        let details = document.createElement('div')
        details.id = 
        let BigImage = document.createElement('img')
        BigImage.className = "detail-image"
        BigImage.src = item.image
        let name = document.createElement('h2')
        BigImage.alt = item.name
        name.innerHTML = item.name
        name.className = "name"
       
        details.append(BigImage)
    })
    }
}


