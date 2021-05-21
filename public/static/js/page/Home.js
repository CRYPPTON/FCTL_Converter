import AbstractPage from './AbstractPage.js';

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle("Home")
    }

    async getHtml(){
        return  `
        <h1> Welcome to "From Cyrillic to Latin converter" </h1><hr>
        <p id="descr">
         The program intended for converting text from Cyrillic to Latin, can also convert Latin to Cyrillic, it is up to you to decide        </p>
        <p>
            <a href="/fctl" data-link>Convert my text now</a>
        </p>
    `;
    }
}