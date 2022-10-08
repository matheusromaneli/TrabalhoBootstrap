export class Produto{
    constructor (nome, categoria, valor, srcImagem, desconto){
        this.nome = nome
        this.categoria = categoria
        this.valor = valor
        this.srcImagem = srcImagem
        this.desconto = desconto
        this.valorDesconto = valor * (1.0 - desconto)
    }

    getValor(){
        return `R$ ${this.valor.toFixed(2)}`
    }

    getValorDesconto(){
        return `R$ ${this.valorDesconto.toFixed(2)}`
    }

    getDesconto(){
        return `${this.desconto*100 .toFixed(0)}%`
    }

}