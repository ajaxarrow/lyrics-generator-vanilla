import {main} from '../content.js';

async function changeViewByRoute(path){
  // await fetch(path)
  //   .then(response => response.text())
  //   .then(data => {
  //     main.innerHTML = data;
  //   })
  //   .catch(error => console.error('Error loading content:', error));

  try {
    const response = await fetch(path);
    const data = await response.text();

    setTimeout(function(){
      main.innerHTML = `
        <div class="center">
          <div class="loader">
          </div>
        </div>
      `;
    }, 1000)

    setTimeout(() => {
      main.innerHTML = data;
    }, 2000); 
  } catch (error) {
    console.error('Error loading content:', error);
  }
}


export {changeViewByRoute}