class Player extends DOMGui{

    constructor(username, params = undefined) {
        super();
        this._username = username || '';
        this.character = new Character({weapon: '.weapon', rolClass: '#svg'});
        this._DOMElements = {
            username: undefined
        }
        this.setDOMElements(params);
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
        if (this._DOMElements.username){
            document.querySelector(this._DOMElements.username).innerHTML = this._username;
        }
    }
}