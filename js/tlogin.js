
const tSignIn = document.querySelector('#tlogin');
tSignIn.addEventListener('submit',(e)=>{
	e.preventDefault();

	const e_mail =tSignIn['email'].value;
	const pass=tSignIn['password'].value;

	if( !(e_mail.includes("@")) || !(e_mail.includes(".com")) )
	{
		alert("Inappropriate format of email address.");
		return;
	}
	if(e_mail=="" || pass=="")
	{
		alert("You cannot sign in unless all the fields in the form are properly filled.");
		return;
	}
	if(pass.length<6)
	{
		alert("Your password is too short.");
		tSignIn['password'].value="";
		return;
	}

	else{

		auth.signInWithEmailAndPassword(e_mail,pass).then(cred =>{
			console.log(cred.user);

			tSignIn.reset();
			document.location.href="../Teacher/homepage.html";


		})
	}

})
