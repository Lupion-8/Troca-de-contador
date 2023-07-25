
async function formController(form){
    await fetch('https://controllercontadores.com.br/controller/forms', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(form)
    })
        .then(response => response.json())
        .then((data) => {
            if (data.data == 'err') {
                console.log(err)
            } else {
                document.querySelector('.elementor-form').innerHTML = `<div class="elementor-message elementor-message-danger" role="alert">${data.msg}</div>`
            }
        })
        .catch(function (motivo) {
            console.log('Sem resposta');
        });
}

let ip;
$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    let x = JSON.stringify(data, null, 2);
    ip = JSON.parse(x).ip
    console.log(JSON.parse(x).ip);
});


document.querySelector('.envi').addEventListener('click', async (e) =>{
    const formatter = new Intl.DateTimeFormat('pt-BR');
    const date = new Date();
    const hor = date.getHours();
    const minu = date.getMinutes();
    const  n = document.querySelector('.nn').value;
    const  t = document.querySelector('.tt').value;
    const  em = document.querySelector('.ee').value;
    const data = formatter.format(date);
    const hora =  hor+':'+minu;

    let first = Math.random().toString(36).substr(-4).toUpperCase();
    let last = Math.floor((Math.random() * (9999 - 1000)) + 1000);
    

    if(n.length >=2){
        if(t.length >=11){
            if(em.indexOf('@') != -1){
                const formulario = {
                    nome: n,
                    telefone: t,
                    email: em,            
                    data: data,
                    hora: hora,
                    ip: ip,
                    status: 'novo',
                    pagina: 'landing 1',
                    id: `${first}-${last}`
                };
                formController( await formulario);
            }else{ alert('E-mail inválido')}
        }else{ alert('Número inválido')}
    }else{ alert('Nome inválido') }
});


