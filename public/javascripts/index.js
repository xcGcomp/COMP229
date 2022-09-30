if(document.querySelector('#form')){
	document.querySelector('#submit').addEventListener('click',function(){
		const data = new FormData(document.getElementById('form'));
		const value = Object.fromEntries(data.entries());
		email: ""
		firstName: ""
		lastName: ""
		console.log(value);
		
		if(!value.email){
			alert('pls input email!');
			return;
		}
		if(!value.firstName){
			alert('pls input firstName!');
			return;
		}
		if(!value.lastName){
			alert('pls input lastName!');
			return;
		}
		if(!value.content){
			alert('pls input message!');
			return;
		}
		if(!value.phone){
			alert('pls input phone!');
			return;
		}
		alert('thanks , i Will contact you sooner')
		document.location="/"
	})
}