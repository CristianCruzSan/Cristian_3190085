const inputTexto = document.getElementById('inputTexto');
const btnGenerar = document.getElementById('btnGenerar');
const canvasQR = document.getElementById('codigoQR');


const qr = new QRious({
  element: canvasQR,
  size: 200, 
  value: ''  
});


btnGenerar.addEventListener('click', () => {
  const texto = inputTexto.value;

  if (texto.trim() === '') {
    alert('Por favor, ingresa un texto o URL');
    return;
  }

  qr.value = texto;
});
