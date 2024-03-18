const button = document.getElementById("get-activity")
const title = document.getElementById("title")
const container = document.querySelector(".container")

button.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => { 
            document.getElementById("activity").textContent = data.activity
            title.textContent = "😀HappyBot😀"
            container.classList.add("fun")
        })
})