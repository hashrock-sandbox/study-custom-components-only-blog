export class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        .nav{
            background: #333;
            color: #EEE;
        }
        ul {
            margin: 0;
            padding: 0;
        }
        ul > li{
            display: inline-block;
            margin: 0;
            padding: 1rem;
        }
        </style>
        <div class="nav">
            <ul>
                <li>Home</li>
                <li>Works</li>
                <li>About</li>
            </ul>
        </div>
        `
    }
}
customElements.define('my-header', MyHeader);