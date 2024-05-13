// @ts-check
import { test, expect } from '@playwright/test'  
//const { test, expect } = require('@playwright/test');

//ejemplo de test end to end
const CAT_PREFIX_URL ='https://cataas.com'
const LOCALHOST_URL='http://localhost:5173/'

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  
  //al ser muy sencilla la pagina recuperamos el rol tanto del parrafo como de la imagen
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  //toma el text contet y el atributo src
  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy
  



});

