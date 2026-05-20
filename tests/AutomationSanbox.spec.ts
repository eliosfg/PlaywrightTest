import {test, expect} from '@playwright/test';

test.describe('Interactions with the Automation Sandbox web elements', () => {
    test('Interact with dynamic elements', async ({ page }) => {
        await test.step('Navigate to FreeRangeTester Automation Sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            await expect(page).toHaveTitle('Automation Sandbox');
        })

        await test.step('Click on a button with dynamic ID', async () => {
            await page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto', exact: true }).click();
        })

        await test.step('Verify the hidden message is visible after 3 seconds', async () => {
            const hiddenElement = page.locator('#hidden-element');
            await expect(hiddenElement).toBeVisible();
        })
    })

    test('Writing text in a text field', async ({ page }) => {
        await test.step('Navigate to FreeRangeTester Automation Sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            await expect(page).toHaveTitle('Automation Sandbox');
        })

        await test.step('Write text in the text field', async () => {
            const textField = page.getByPlaceholder('Ingresá texto');
            await textField.fill('Hello, World!');
            await expect(textField).toHaveValue('Hello, World!');
        })
    })

    test('Selecting checkboxes', async ({ page }) => {
        await test.step('Navigate to FreeRangeTester Automation Sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            await expect(page).toHaveTitle('Automation Sandbox');
        })

        await test.step('Select the checkboxes', async () => {
            const checkbox1 = page.getByLabel('Pizza');
            const checkbox2 = page.getByLabel('Pasta');
            await checkbox1.check();
            await checkbox2.check();
            await expect(checkbox1).toBeChecked();
            await expect(checkbox2).toBeChecked();
        })
    })
    
    test('Interacting with Radio Buttons', async ({ page }) => {
        await test.step('Navigate to FreeRangeTester Automation Sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            await expect(page).toHaveTitle('Automation Sandbox');
        })

        await test.step('Select a radio button', async () => {
            const radioButton = page.getByLabel('Si');
            await radioButton.check();
            await expect(radioButton).toBeChecked();
        })
    })
    
    test('Dropdowns', async ({ page }) => {
        await test.step('Navigate to FreeRangeTester Automation Sandbox', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            await expect(page).toHaveTitle('Automation Sandbox');
        })

        await test.step('Select an option from the dropdown', async () => {
            const dropdown = page.getByLabel('Dropdown');
            await dropdown.selectOption('Tennis');
            await expect(dropdown).toHaveValue('Tennis');
            await page.getByRole('button', { name: 'Enviar' }).click();
        })

        await test.step('Select an option from the button dropdown', async () => {
            const buttonDropdown = page.getByRole('button', { name: 'Día de la semana' });
            const option = page.getByRole('link', { name: 'Viernes' });
            await buttonDropdown.click();
            await page.waitForTimeout(3000);
            await option.click();
        })
    })
});