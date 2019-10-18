// Course Code Generator
function genCourseKey(){
  var cKey = Math.random().toString(36).slice(2);
  document.getElementById('courseCode').value = cKey;
  //console.log(document.getElementById('courseCode').value );
}


//Create a Course
const createCourse = document.querySelector('#addform');

createCourse.addEventListener('submit',(e) =>{
  e.preventDefault();

  const ct=createCourse['coursetitle'].value;
  const cc=createCourse['courseCode'].value;
  const chr=createCourse['credit-hr'].value;

  db.collection('Courses').add({
    Code:cc,
    Title:ct,
    CreditHr:chr,
    Members:eMail

  }).then(() => {
    createCourse.reset();
    /*document.getElementById("addform").style.display = "none";
    document.getElementById("courelist").style.display = "block";*/
    window.location.reload();
	}).catch(err =>{
  	alert("There seems to be a problem. Please try again.");
  })


})
