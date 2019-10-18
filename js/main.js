// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBZCPh-D7RGJNIgcKe3oWEO_i6i-S3sA1s",
  authDomain: "learn-vault-224.firebaseapp.com",
  databaseURL: "https://learn-vault-224.firebaseio.com",
  projectId: "learn-vault-224",
  storageBucket: "learn-vault-224.appspot.com",
  messagingSenderId: "143926053125",
  appId: "1:143926053125:web:6a8a5ff751a572c16c4f6c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();


var eMail;
auth.onAuthStateChanged(user => {
	if(user)
	{
		console.log("User is signed in.");
    eMail=user.email;
    // DynCourseList
    //const e_mail = eMail;
  /*  db.collection('Courses').where('Members','array-contains',eMail).get().then(snapshot =>{
     //console.log(eMail);
      showCourse(snapshot.docs);
    })*/

//  console.log(eMail);
	}
	else
	{
		console.log("User is not signed in.");
	}
})
document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM content loaded');
})
