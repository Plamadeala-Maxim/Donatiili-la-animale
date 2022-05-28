
const animalForm = document.querySelector("#animal-form")

animalForm.addEventListener("submit",(e) =>{
    e.preventDefault()
    // console.log(e.target)
    const animal ={
        name:e.target.name.value,
        imgUrl:e.target.img_url.value ,
    description:e.target.description.value ,
        donation:0
    }
    console.log(animal)
createAnimal(animal).then(newAnimal =>{
    console.log("succes",newAnimal)
})
})

