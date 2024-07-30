import test, { Page, expect } from "@playwright/test"

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async irParaPortal() {
        await this.page.goto('https://hml.chronicles-boticario.engenhariapoc-wh.com/')
    }

    async preencherDados(cpf: string, dataNascimento: string) {
        await this.page.fill('input[name="doc"]',cpf)
        await this.page.fill('input[name="birthDate"]',dataNascimento)
    }

    async continuar(){
        await this.page.click('form button')
    }
}