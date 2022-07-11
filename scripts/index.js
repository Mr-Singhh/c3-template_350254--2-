async function getdata() {

    let q = document.getElementById("query").value

    try {
        let url = ` https://masai-mock-api.herokuapp.com/hotels/search?city=${q}`

        let res = await fetch(url)

        let data = await res.json()

        var hotel = data.hotels

        // console.log(hotel)

        hotel.map(function(el, index) {

            let div = document.createElement("div")

            let img = document.createElement("img")

            img.src = el.Images.one

            let Title = document.createElement("h3")

            Title.innerText = el.Title

            let room = document.createElement("h3")

            room.innerText = `ROOMS : ${el.Rooms}`
            let rating = document.createElement("h3")

            rating.innerText = `RATING : ${el.Rating}`
            var Price = document.createElement("h3")

            Price.innerText = `PRICE : ${el.Price}`

            let btn = document.createElement("button")
            btn.innerText = "book-hotel"

            btn.setAttribute("class","btn")
            // btn.addEventListener("onclick",)

            div.append(img, Title, room, rating, Price, btn)
            console.log(el.Images)
            document.getElementById("hotels_list").append(div)
        })
    } catch (err) {
        console.log(err)
    }
}
console.log(data)

// let srt = document.querySelector("#sort").value;
// console.log(srt)

function sortLth(){
// if (srt == "sort-hl") {

console.log(res.price)

    el.sort(function(a, b) {
        console.log(el.rating)
        if (a.Price < b.Price) return 1;
        if (a.Price > b.Price) return -1;
        return 0;
    });
    console.log(movies)
    displayData(el)
}
// }