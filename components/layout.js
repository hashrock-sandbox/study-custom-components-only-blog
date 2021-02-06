export class MyLayout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        </style>
        <div>
            <my-header></my-header>

            <slot></slot>

            <div>
                <ul>
                    <li><a href="./page1.html">記事１</a></li>
                    <li><a href="./page2.html">記事２</a></li>
                </ul>
            </div>

        </div>
        `
    }
}
customElements.define('my-layout', MyLayout);