
const tSignUp =  document.querySelector('#tform');
tSignUp.addEventListener('submit', (e) => {
	e.preventDefault();
	//user information
		const f_name=tSignUp['fname'].value;
		const l_name=tSignUp['lname'].value;
		const u_name=tSignUp['uname'].value;
	 	const e_mail=tSignUp['email'].value;
		const pass_=tSignUp['pass'].value;
		const c_pass=tSignUp['cpass'].value;

	//	console.log("email,pass")

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
	db.collection('TeacherInfo').add({
		Name:{f_name,l_name},
		Email: e_mail,
		Userame : u_name,
		Password: pass_
	}).then(() => {
		//alert("Redirecting to the SignIn page");
		window.location.href = "../Teacher/homepage.html";
	})
}).catch(err =>{
	alert("This email address ( " + e_mail +" ) is already being used.");
})


})
