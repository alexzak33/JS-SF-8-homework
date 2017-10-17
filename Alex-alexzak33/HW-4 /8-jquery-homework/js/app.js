/*
Create a customizable survey form.

The index.html file includes a form, which contains 2 sample questions as illustrations.
A user should be able to type a survey question into the text box with the id "question", click the Submit button, and the question
should be added to the survey.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.

In addition to creating the functionality described above, your final code should also do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods

Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/


/*$("#surveyList li").each(function() {
    var $removeButton = $('<button>').html("Remove question");
    $(this).append($removeButton);
});
var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === " "){
        alert('You have to put something in!');
    } else {
        document.getElementById('surveyList').appendChild(li);      
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++){
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}
*/
$("#surveyList li").each(function() {
    var $removeButton = $('<button>').html("Remove question");
    $(this).append($removeButton);
});

function addToList($list, thing) {
    var $thingLi = $("<li>").html(thing).addClass("form-group padout");
    addCrossOffLink($thingLi);
    $list.append($thingLi);
}

function addCrossOffLink($li) {
    var $crossOffLink = $("<span>").html(" Remove question").addClass("cross-off");
    $li.append($crossOffLink);
}

$(document).ready(function() {
    var $thingList = $("#surveyList");
    var $things = $(".form-group padout");
    var $button = $("#addQuestion");
    var $newThingInput = $("#question");

    $things.toArray().forEach(function(li) {
        addCrossOffLink($(li));
    });
   
$button.on("click", function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === ' ') {
        alert("Put something in!");
    } else {
        addToList($thingList, newThing);
        $newThingInput.val('');
    }
});

$thingList.on("click", ".form-group padout .cross-off", function() {
    var $thingItem = $(this).parent();
    $thingItem.addClass("crossed-off");
    $(this).html(' ');
});
})
