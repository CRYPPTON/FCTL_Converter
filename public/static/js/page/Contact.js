import AbstractPage from "./AbstractPage.js"

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle("Contact")
    }

    async getHtml(){
        return `
        <h1>Contact</h1><hr>
        <table>
        <tr>
            <td>Author: </td>
            <td>Nikola Nikolić</td>
        </tr>
        <tr>
            <td>Email: </td>
            <td>nikola.nikkolic@gmail.com</td>
        </tr>
        <tr>
            <td>Github: </td>
            <td>https://github.com/CRYPPTON</td>
        </tr>
        <tr>
            <td>Linkedin: </td>
            <td>https://www.linkedin.com/in/nikola-nikolic-1883b9205/</td>
        </tr>
    </table>
        `
    }
}


