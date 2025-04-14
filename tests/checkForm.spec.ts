import { test, expect } from '@playwright/test';

test('rellena el formulario y lo envía', async ({ page }) => {
  await page.goto('http://localhost:4321/automate-work.io'); // Ajusta a tu puerto de desarrollo

  await page.fill('input[name="business"]', 'Juanito Test');
  await page.fill('input[name="businessEmail"]', 'juanito@test.com');
  await page.fill('input[name="locationBusiness"]', 'Calle Loco Juanito');
  await page.fill('input[name="phoneBusiness"]', '11111111');
  await page.fill('input[name="dni"]', '1111111B');
  await page.fill('input[name="urlSite"]', 'http://localhost:4321');


  page.once('dialog', async dialog => {
    console.log('Alert:', dialog.message());
    await dialog.accept();
  });


  await page.click('#Terminosdeuso');


});

