let host = "localhost";
let port = "3000";
let resource = "users";
let url = "https://"+ host + ":" + port + "/" + resource; 

url = `https://${host}:${port}/${resource}`; //vou sustituir por template literal


console.log(url);