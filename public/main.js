const gitHubId = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button]')
gitHubId.oninput = function(){
    //Fazendo a conexão com a API
    fetch('https://api.github.com/users/' + gitHubId.value)
    .then(Response => {
     if(Response.ok){
        return Response.json()
     }
     else{
        throw new Error('Erro na requisição')
     }
    })
    .then(data => {
      document.querySelector('#name').textContent = data.name
      document.querySelector('#Bio').textContent = data.bio
      document.querySelector('#Follwers').textContent = data.follwers
      document.querySelector('#Location').textContent = data.location
      document.querySelector('#Avatar').src = data.avatar_url

    })
    .catch(Error => {
        console.log('Erro' + Error)
    })
        

}
