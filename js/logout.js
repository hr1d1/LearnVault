const logout =  document.querySelector('#logout');
logout.addEventListener('click', (e) => {
	e.preventDefault();

  auth.signOut().then(()=>{
//console.log("USER SIGNED OUT");

});
  document.location.href="../index.html";


});
