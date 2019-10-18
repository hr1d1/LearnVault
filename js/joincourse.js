const join_form = document.querySelector('#joinForm');

join_form.addEventListener('submit',(e) =>{
  e.preventDefault();

  var ct="";
  const cc=join_form['coursecode'].value;
  var chr="";
  const umail = firebase.auth().currentUser.email;
  var j=false;
  for (var i = 0; i < cList.length; i++) {
    if(cList[i]==cc){
      ct=tList[i];
      chr=crList[i];
    j=true;
      break;
    }
  }

  if(j == true)
{
  db.collection('Courses').add({
    Code:cc,
    Title:ct,
    CreditHr:chr,
    Members:umail

  }).then(() => {
    joinForm.reset();
    window.location.reload();
	}).catch(err =>{
  	alert("There seems to be a problem. Please try again.");
  })

}
else{
  alert("Invalid Course Code.Please try again.");
  join_form.reset();
  //console.log(ct);
}
})


var tList = new Array();
var crList = new Array();
var cList = new Array();

db.collection('Courses').get().then(snapshot =>{
  var i=0;
   snapshot.forEach(doc =>{
     cList[i] = doc.data().Code;
     crList[i] = doc.data().CreditHr;
     tList[i] = doc.data().Title;
     i++;
   //  console.log(cc);
    let cc = doc.data().Code;
     db.collection('Courses').where('Code' , '==', cc).get().then(snapshotDoc =>{
       snapshotDoc.forEach(sdoc =>{
         if(doc.data().Title == "" && sdoc.data().Title > ""){
           doc.data().Title = sdoc.data().Title;
           doc.data().CreditHr = sdoc.data().CreditHr;
         }
        // clist[i] =  sdoc.data();
       })

    //   console.log(doc.data());


     })

   })

 })
 function AddCourseForm(){
   document.getElementById("addform").style.display = "block";
   document.getElementById("courelist").style.display = "none";
 }
 function courseForm(){
   document.getElementById("joinForm").style.display = "block";
   document.getElementById("courelist").style.display = "none";
 }
