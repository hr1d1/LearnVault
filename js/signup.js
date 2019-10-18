const sSignUp =  document.querySelector('#sform');
sSignUp.addEventListener('submit', (e) => {
	e.preventDefault();
	//user information
		const f_name=sSignUp['fname'].value;
		const l_name=sSignUp['lname'].value;
		const u_name=sSignUp['uname'].value;
		const stype=sSignUp['sel1'].value;
	 	const e_mail=sSignUp['email'].value;
		const pass_=sSignUp['pass'].value;
		const c_pass=sSignUp['cpass'].value;

//		console.log("hello")

		if(e_mail==""|| pass_=="")
		{
			alert("Incomplete form. Please fill up the required fields");
			return;

		}
		if( !(e_mail.includes("@")) || !(e_mail.includes(".com")) )
		{
			alert("Inappropriate email format .");
			return;
		}

		if(pass_.length<6)
		{
		alert("Password must contain at least 6 alphanumeric characters.");
		signupForm['pass'].value="";
		signupForm['cpass'].value="";
		return;
		}
		auth.createUserWithEmailAndPassword(e_mail, pass_).then( cred => {
	console.log(cred);
	db.collection('StudentInfo').add({
		Name:{f_name,l_name},
		Email: e_mail,
		Userame : u_name,
 		Studying: stype,
		Password: pass_
	}).then(() => {
		//alert("Redirecting to the SignIn page");
		window.location.href = "../Student/homepage.html";
	})
}).catch(err =>{
	alert("This email address ( " + e_mail +" ) is already being used.");
})


})
