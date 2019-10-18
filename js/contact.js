

const contactUs = document.querySelector('#contactForm');
contactUs.addEventListener('submit',(e)=>{
	e.preventDefault();

	const e_mail=contactUs['contact-email'].value;
	const name=contactUs['contact-name'].value;
	const sub=contactUs['contact-subject'].value;
	const msg=contactUs['message'].vale;

	if(e_mail=="")
	{
		alert("Incomplete form. Please fill up the required fields");
		return;

	}
	if( !(e_mail.includes("@")) || !(e_mail.includes(".com")) )
	{
		alert("Inappropriate email format .");
		return;
	}

	else {
		db.collection('Messages').add({
			Email:contactUs['contact-email'].value,
			Username:contactUs['contact-name'].value,
			Subject:contactUs['contact-subject'].value,
			Message:contactUs['message'].value
		}).then(()=>{
			contactUs.reset();
			window.location.href="about.html";
		}).catch(err =>{
			alert("Sorry.There seems to be some problem in sending your message. Please try again.");
		})
	}

})
