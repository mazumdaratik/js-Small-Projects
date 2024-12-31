
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwU5emNKIoNUWQoTD0qekaBst61NTl9g2ISd6UZ8EJ_VsQROkpnnqMSE9kHUXihCK4E/exec'
  const form = document.forms['submit-to-google-sheet']
  const thanks = document.getElementById('thanks');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        thanks.innerHTML = 'Thanks, for subscribing.';
        setTimeout(function(){
            thanks.innerHTML = '';
        },2000);
        
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
