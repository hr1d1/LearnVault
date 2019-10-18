const join_form = document.querySelector('#joinform');

join_form.addEventListener('submit',(e) =>{
  e.preventDefault();

  var ct="";
  var cc=join_form['course_code'].value;
  var chr="";
  const umail = firebase.auth().currentUser.email;
  var j=0;
  for (var i = 0; i < cList.length; i++) {
    if(cList[i]==cc){
      ct=tList[i];
      chr=crList[i];
    j=i;
      break;
    }
  }



  db.collection('Courses').add({
    Code:cc,
    Title:tList[j],
    CreditHr:crList[j],
    Members:umail

  }).then(() => {
    join_form.reset();
    window.location.reload();
	}).catch(err =>{
  	alert("There seems to be a problem. Please try again.");
  })


/*else{
  alert("Invalid Course Code.Please try again.");
  join_form.reset();
  //console.log(ct);
}*/


})


var tList = new Array();
var crList = new Array();
var cList = new Array();

db.collection('Courses').get().then(snapshot =>{
  var i=0;
   snapshot.forEach(doc =>{
    /* if(cList.contain)
     cList[i] = doc.data().Code;
     crList[i] = doc.data().CreditHr;
     tList[i] = doc.data().Title;*/
   //  console.log(cc);
    let cc = doc.data().Code;
     db.collection('Courses').where('Code' , '==', cc).get().then(snapshotDoc =>{
       snapshotDoc.forEach(sdoc =>{
         if(doc.data().Title == "" && sdoc.data().Title > ""){
           doc.data().Title = sdoc.data().Title;
           doc.data().CreditHr = sdoc.data().CreditHr;
         }
         console.log(sdoc.data());
       })
    //   console.log(doc.data());


     })

   })

 })



 /*setTimeout(function(){
 document.location.href="#";
},50000);
})*/
