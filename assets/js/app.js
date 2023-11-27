const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Se corrige, se pone punto para mencion de la clase
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {//se pone async al principio
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;//Se agrega el ; y el $
}

displayUser('stolinski').catch(handleError);