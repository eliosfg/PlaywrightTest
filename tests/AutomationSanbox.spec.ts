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
});