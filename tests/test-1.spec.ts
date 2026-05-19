import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).fill('gatitos');
  await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
  await page.locator('.sPlQxd').click();
  await page.locator('.sPlQxd').click();
});

let edad: number = 25;
let nombre: string = 'Juan';
let esEstudiante: boolean = true;

let suma: number = edad + 5;

enum Color {
  Rojo,
  Verde,
  Azul
}

let colorFavorito: Color = Color.Verde;

if (colorFavorito === Color.Verde) {
  console.log('Tu color favorito es verde');
} else {
  console.log('Tu color favorito no es verde');
}
