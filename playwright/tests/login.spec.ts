import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login'

let login: LoginPage

test.beforeEach(async ({ page })=> {
    login = new LoginPage(page)
})

test('Acessar o portal', async ({ page }) => {
    test.slow()
    await login.irParaPortal()
    await login.preencherDados('01435120990','05/05/1971')
    await login.continuar()
    await page.waitForTimeout(30000)
    await expect(page.getByText('Recebimento do código').first()).toBeVisible({timeout:5000})
})