/*function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
*/


const fetch = require('node-fetch');

async function loadJson(url) {
    const response = await fetch(url);
    
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
}

(async () => {
    try {
        const data = await loadJson('https://javascript.info/no-such-user.json');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();

