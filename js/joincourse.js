const join_form = document.querySelector('#joinForm');

join_form.addEventListener('submit',(e) =>{
  e.preventDefault();

  const ct="";
  const cc=join_form['coursecode'].value;
  const chr="";
  const umail = firebase.auth().currentUser.email;

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


})
db.collection('Courses').get().then(snapshot =>{
   snapshot.forEach(doc =>{
     let cc = doc.data().Code;
   //  console.log(cc);
     db.collection('Courses').where('Code' , '==', cc).get().then(snapshotDoc =>{
       snapshotDoc.forEach(sdoc =>{
         if(doc.data().Title == "" && sdoc.data().Title > ""){
           doc.data().Title = sdoc.data().Title;
           doc.data().CreditHr = sdoc.data().CreditHr;
         }
         console.log(sdoc.data());
       })
       console.log(doc.data());


     })

   })

 })



 /*setTimeout(function(){
 document.location.href="#";
},50000);
})*/
