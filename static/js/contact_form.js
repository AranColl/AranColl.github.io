async function send_message(){
    const email = document.querySelector('#c_email').value;
    const subject = document.querySelector('#c_subject').value;
    const message = document.querySelector('#c_message').value;

    const cookieValue = document.cookie
		  .split('; ')
		  .find(row => row.startsWith('csrftoken'))
		  .split('=')[1];
		const request = new Request(
		    'message/',
		    {headers: {'X-CSRFToken': cookieValue}}
		);

		await fetch('success', {
			method: 'PUT',
			body: JSON.stringify({
			  email: email,
	          subject: subject,
	          message: message,
			})
		});
		document.querySelector('#contact-form').style.display = "none";
        document.querySelector('#message_sent').style.display = "block";
        document.querySelector('#c_email').value = "";
        document.querySelector('#c_subject').value = "";
        document.querySelector('#c_message').value = "";

	return false;
};