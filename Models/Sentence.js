class Sentence{
    texto:string

    constructor(name: string) {        
        this.texto = name;
    }
    setTexto(tex:string){
        this.texto=tex;
        return this.texto;
    }
    getTexto(){
        return this.texto;
    }
}
