// @ts-check

const { chromium } = require('playwright');

(async () => {
  // Inicializa el navegador
  const browser = await chromium.launch({ headless: false }); // headless: false para ver el navegador
  const page = await browser.newPage();

  // Navega a la página deseada
  await page.goto('http://localhost:3000/automate-work.io/');

  // Haz clic en el botón que despliega o activa el formulario
  await page.click('#accesibilidad'); // Localiza y hace clic en el botón

  // Espera que el formulario aparezca o se habilite después de hacer clic
  await page.waitForSelector('input[name="nombreEmpresa"]');

  // Rellena el formulario
  const nombreInput = 'Juan Pérez';
  const direccionInput = 'La Orotava 3500';
  const urlInput = 'https://playwright.dev/';

  await page.fill('input[name="nombreEmpresa"]', nombreInput); // Rellena el campo "nombre"
  await page.fill('input[name="direccion"]', direccionInput);   // Rellena el campo "email"
  await page.fill('input[name="url"]', urlInput); // Rellena el campo "teléfono"

  // Verifica los valores de los inputs y los imprime
  const valorNombre = await page.inputValue('input[name="nombreEmpresa"]');
  const valorDireccion = await page.inputValue('input[name="direccion"]');
  const valorUrl = await page.inputValue('input[name="url"]');

  // Imprimir los valores de los inputs
  console.log('Valor del nombre:', valorNombre);
  console.log('Valor del email:', valorDireccion);
  console.log('Valor del teléfono:', valorUrl);

  // Verifica si los valores coinciden con lo esperado
  if (valorNombre === nombreInput && valorDireccion === direccionInput && valorUrl === urlInput) {
    console.log('Test pasado: Los valores de los inputs son correctos.');
  } else {
    console.log('Test fallido: Los valores de los inputs no coinciden.');
  }

  // Envía el formulario (opcional)
  await page.click('button[type="sender"]'); // Localiza el botón de envío y hace clic

  // Cierra el navegador
  await browser.close();
})();
