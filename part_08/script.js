// example 1;

document.getElementById('changeTextButton').addEventListener('click', function () {
    // console.log(this);
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph);
    paragraph.textContent = "the paragraph is changed."
    paragraph.style.fontStyle = "italic";
    paragraph.style.fontWeight = "Bold";
    paragraph.style.fontSize = "large";
    paragraph.style.backgroundColor = "red";
});

// example 2;
document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let citiesList = document.getElementById("citiesList").firstElementChild;
    citiesList.classList.add('highlight');    
});

// example 3;
document.getElementById("changeOrder").addEventListener('click', function () {
    let coffeeType = document.getElementById("coffeeType")
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.padding = "5px";
    coffeeType.style.fontStyle = "italic";
    coffeeType.style.fontWeight = "Bold";
    coffeeType.style.fontSize = "large";
});

// example 4;
document.getElementById("addNewItem").addEventListener('click', function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Butter";
    let addingInShoppingList = document.getElementById("shoppingList");
    addingInShoppingList.appendChild(newItem);
    newItem.classList.add("highlight");

})

// example 5;
document.getElementById("removeLastTask").addEventListener('click', function () {
    let taskList = document.getElementById("taskList");
    if(taskList.lastElementChild === null) {
        alert("Now not any task left to be remove.\n Don't Click Me!");
    }
    else taskList.lastElementChild.remove();
})

// example 6;
document.getElementById("clickMeButton").addEventListener("click", function() {
    alert("hey You click me!");
})

// example 7
document.getElementById("teaList").addEventListener("click", function (event) {
    this.style.cursor = "pointer";
    if(event.target && event.target.matches(".teaItem")) {
        alert("you Selected: " + event.target.textContent);
    }
});


// Example 8
document.getElementById("feedbackForm").addEventListener('submit', function(event) {
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput").value;
    // console.log(feedBack);
    const line = document.getElementById("feedbackDisplay")
    line.textContent = `FeedBack is: ${feedBack}`;
    line.classList.add("highlight");
})

// example 9
document.addEventListener('DOMContentLoaded', function () {
    alert("DOM Content Loaded");
    document.getElementById("domStatus").textContent = "DOM Fully Loaded";
})

// example 10;
document.getElementById("toggleHighlight").addEventListener('click', function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})