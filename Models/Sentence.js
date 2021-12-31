class Sentence {
    texto;

    constructor(name) {
        this.texto = name;
    }
    setTexto(tex) {
        this.texto = tex;
        return this.texto;
    }
    getTexto() {
        return this.texto;
    }
}