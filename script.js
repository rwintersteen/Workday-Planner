// When user opens daily planner, current day should be displayed at the top of the calendar
const currentDay = document.querySelector("#currentDay")
currentDay.textContent = moment().format("dddd, MMMM Do YYYY, h:mm A")

const currentTime = moment().hour();
const timeBlock = document.querySelector("textarea")
const savedText = localStorage.getItem("")
timeBlock.textContent = inputText;
console.log(inputText)

const saveButton = document.querySelector("#saveBtn")
const save = localStorage.getItem("save")


// Create function to show the color of the time block on display to indicate if timeblock is in the past (grey), current (red), or future (green)
function changeColor() {
    for (let i = 8; i <=17; i++){
        if (i === currentTime){
        timeBlock.classList.add("present");

        } else if (i < currentTime) {
        timeBlock.classList.add("past");

        } else {
        timeBlock.classList.add("future");
        }}
}
changeColor();


// Run function when the 'Save' button is clicked
saveButton.addEventListener("click", function(){
    timeBlock.textContent = inputText;
    localStorage.setItem(savedText, inputText);
});
