class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `<center>Copyright &copy; 2020 Mario Ramirez Toala</center>`;
    }
}
customElements.define("mi-footer", MiFooter);1