const url = 'http://10.1.9.87:8088/api/send-mail';
const method = 'POST'
const body = {
    "from": "linhnt.solution@gmail.com",
    "password": "cgyhadxomfrkyiew",
    "to": "linhnt28031995@gmail.com",
    "subject": "test",
    "html": "<p style = 'color: red;'>Zolo</p>"
}
async function clickHandler(){
    try{
    let response = await request(url,method,body)
    let bodyResponse = await response.json()
    let statusCode = response.status
    if(statusCode == 200){
        alert('Success!')
    }else{
        //statusCode == 400 | 500
        alert('Error'+ bodyResponse.message)
    }
    console.log(response);
    }catch(err){
        console.log('Error',err)
    }
}
function request(url,method,body){
    return fetch(url,{
        method:method,
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body),
    })
}