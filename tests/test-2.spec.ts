import { test, expect } from '@playwright/test';

test.describe('Navigating through Free Range Testers', () => {
    const pageSections = [
        { name: 'Experiencia real en QA', url: '/experiencia-en-qa', expectedTitle: 'Obtené experiencia real' },
        { name: 'Cursos', url: '/cursos', expectedTitle: 'Cursos' },
        { name: 'Mentorías', url: '/mentoria-1-1-con-pato', expectedTitle: 'Mentoría personalizada de avance de carrera para testers de software' },
        { name: 'Eventos', url: '/eventos-en-vivo', expectedTitle: 'Eventos' },
        { name: 'Blog', url: '/blog', expectedTitle: 'Free Range Testers' },
        { name: 'Recursos', url: '/recursos', expectedTitle: 'Recursos' },
    ]

    for (const section of pageSections) {
        test(`Validate redirection to ${section.name}`, async ({ page }) => {
            await test.step('Navigate to Free Range Testers homepage', async () => {
                await page.goto('');
                await expect(page).toHaveTitle('Free Range Testers');
            })

            await test.step(`When I click on ${section.name}`, async () => {
                await page.locator('#page_header').getByRole('link', { name: section.name, exact: true }).click();
                await page.waitForURL(`**${section.url}`);
            })

            await test.step(`Then I should be on the ${section.name} page`, async () => {
                await expect(page).toHaveTitle(section.expectedTitle);
            })
        })
    }
});
