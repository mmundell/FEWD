
var startCount = document.querySelector(".like-count");
 //grabing the content (number) not text name
var count = parseInt(startCount.textContent);
// grabing the number


//taget whole thing
var plusOne = document.querySelector(".like-link");
plusOne.addEventListener("click", add);

//a makes it refresh to top.. annoying
function add(event) {
  event.preventDefault();
  count= count + 1; //or count ++
  startCount.textContent= count;
}

//

var comment = document.querySelector("#new-comment-body")
var commentValue = comment.value;

//eventListener:
var form = document.querySelector("form");
form.addEventListener("submit", leaveComment);
function leaveComment(event){
  event.preventDefault();
  var temp = document.createElement("p");
  temp.textContent = submitComment.value;
  var parent = document.querySelector("#comments");
  parent.appendChild(temp);
  submitComment.value = "";
}
  //console.log("submit clicked");
  //create new element

var submitComment = document.querySelector("textarea");
