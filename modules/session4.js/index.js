window.onload = init
const serverAddress = 'http://10.1.9.87:8088';
const sendMailPath = '/api/send-mail';
function init() {
  let form = document.querySelector('#form-send-mail');
  form.onsubmit = async (e) => {
    e.preventDefault()
    let sendMailInfo = {
      from: form.from.value,
      password: form.password.value,
      to: form.to.value,
      subject: form.subject.value,
      text: form.content.value
    }
    try {
      let url = serverAddress + sendMailPath
      let method = 'POST';
      let body = sendMailInfo;
      let response = await request(url, method, body);
      let responseBody = await response.json();
      let statusCode = response.status;
      if(statusCode == 200){
        alert('send mail success!')
      } else{
        let errorMessage = responseBody.errorMessage;
        throw new Error(errorMessage)
      }
    } catch (err) {
      alert('send mail failed!, Error'+ err.message)
    }
  }
}
function request(url, method, body){
  return fetch(url,{
    mode: 'cors',
    method: method,
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(body)
  })
}