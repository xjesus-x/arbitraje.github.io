// Variables para almacenar los valores de la API
let fecha_eth_mxn, precio_eth_mxn, fecha_eth_btc, precio_eth_btc, fecha_btc_mxn, precio_btc_mxn;

// Función para hacer la consulta a la API
function consultarAPI(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}

// Consultar el primer endpoint y guardar los valores
consultarAPI('https://sandbox.bitso.com/api/v3/trades/?book=eth_mxn', data => {
  fecha_eth_mxn = data.payload[0].created_at;
  precio_eth_mxn = data.payload[0].price;
  document.getElementById('fecha_eth_mxn').textContent = fecha_eth_mxn;
  document.getElementById('precio_eth_mxn').textContent = precio_eth_mxn;
});

// Consultar el segundo endpoint y guardar los valores
consultarAPI('https://sandbox.bitso.com/api/v3/trades/?book=eth_btc', data => {
  fecha_eth_btc = data.payload[0].created_at;
  precio_eth_btc = data.payload[0].price;
  document.getElementById('fecha_eth_btc').textContent = fecha_eth_btc;
  document.getElementById('precio_eth_btc').textContent = precio_eth_btc;
});

// Consultar el tercer endpoint y guardar los valores
consultarAPI('https://sandbox.bitso.com/api/v3/trades/?book=btc_mxn', data => {
  fecha_btc_mxn = data.payload[0].created_at;
  precio_btc_mxn = data.payload[0].price;
  document.getElementById('fecha_btc_mxn').textContent = fecha_btc_mxn;
  document.getElementById('precio_btc_mxn').textContent = precio_btc_mxn;
});
