import {changeViewByRoute} from './utils/contentLoader.js'

document.addEventListener('DOMContentLoaded', async function(){
  await changeViewByRoute('./views/landing.html');
});

