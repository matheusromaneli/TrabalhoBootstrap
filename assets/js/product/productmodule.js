class Produto{
    constructor (id, nome, categoria, valor, srcImagem, desconto){
        this.id = id
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

const objs = [
    {id: 1, nome:"Mouse Razer", categoria:0,valor:123.3,srcImagem:"assets/images/mouserazer.jpg",desconto:0.05},
    {id: 2, nome:"Mouse Logitech", categoria:0,valor:234.4,srcImagem:"assets/images/mouselogitech.jpg",desconto:0.10},
    {id: 10, nome:"Mouse RedDragon", categoria:0,valor:345.5,srcImagem:"assets/images/mousereddragon.jpg",desconto:.123},
    {id: 4, nome:"Teclado Hyper-X", categoria:1,valor:321.1,srcImagem:"assets/images/tecladohyperx.jpg",desconto:0.2},
    {id: 5, nome:"Teclado T-Dagger", categoria:1,valor:432.2,srcImagem:"assets/images/tecladotdagger.jpg",desconto:0.4},
    {id: 6, nome:"Teclado Multilaser", categoria:1,valor:543.3,srcImagem:"assets/images/tecladomultilaser.jpg",desconto:0.15},
    {id: 7, nome:"Monitor LG", categoria:2,valor:1234.4,srcImagem:"assets/images/monitorlg.jpg",desconto:0.2},
    {id: 8, nome:"Monitor AOC", categoria:2,valor:2143.3,srcImagem:"assets/images/monitoraoc.jpg",desconto:0.1},
    {id: 9, nome:"Monitor Samsung", categoria:2,valor:1524.3,srcImagem:"assets/images/monitorsamsung.jpg",desconto:0.05}
]

function generateObjs(objectBase){
    let instancedObjs = []
    objectBase.forEach(obj=>{
        instancedObjs.push(new Produto(obj.id, obj.nome, obj.categoria, obj.valor, obj.srcImagem, obj.desconto))
    })
    return instancedObjs
}

function addObjs(){
    let objsInstanciado = generateObjs(objs)
    
    let divMouse = document.createElement("div")
    divMouse.className = "scrollarea row-inner"
    let divTeclado = document.createElement("div")
    divTeclado.className = "scrollarea row-inner"
    let divMonitor = document.createElement("div")
    divMonitor.className = "scrollarea row-inner"
    
    let categorias = [divMouse,divTeclado,divMonitor]

    objsInstanciado.map((item) => {
        categorias[item.categoria].innerHTML += `
            <div class="item">
                <div class="card shop-item">
                    <div class="d-flex justify-content-between">
                        <p class="font-weight-bold text-danger text-justify">${item.getDesconto()}</p>
                        <div id="likedislike">
                            <a id="${item.id}btnlike" class="btnlike">
                                <i class="far fa-thumbs-up"></i>
                                <span id="${item.id}like">1</span>        
                            </a>
                            <a id="${item.id}btndislike" class="btndislike">
                                <i class="far fa-thumbs-down"></i>
                                <span id="${item.id}dislike">0</span>
                            </a>
                        </div>
                    </div>
                    <div id="midlevel">
                        <div class="bgimage">
                            <img src=${item.srcImagem} alt=${item.nome}>
                        </div>
                    </div>
                    <div class="p-3" id="bottomlevel">
                        <span data-toggle="tooltip" title=${item.nome}>
                            <p class="mb-0 font-weight-bold overflow-hidden">${item.nome}</p>
                        </span>
                        <p class="mb-0 original"> ${item.getValor()}</p>
                        <p class="mb-0 discount"> ${item.getValorDesconto()}</p>
                    </div>
                    <div id="buttonlevel" class="d-flex">
                        <button type="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#modal-compra" style="width: 100%;">Comprar</button>
                    </div>
                </div>
            </div>
        `
    },[categorias])
    
    $("div#mouses").append(divMouse)
    $("div#teclados").append(divTeclado)
    $("div#monitores").append(divMonitor)
}

addObjs()

//logica like
$(".btnlike").click( function(){
    let idNum = $(this)[0].id.match(/\d+/)[0]
    let icon = $(this).children().first()
    let span = $(this).children().next()
    //dar like
    if(icon[0].className.includes("far")){
        icon.addClass("fas")
        icon.removeClass("far")
        span[0].innerHTML = parseInt(span[0].innerHTML) + 1
        //desdar dislike
        let dislike = $("#" + idNum + "btndislike").children()
        if (dislike[0].className.includes("fas")){
            dislike.first().addClass("far")
            dislike.first().removeClass("fas")
            let dislikespan = $("#" + idNum + "dislike")
            dislikespan[0].innerHTML = parseInt(dislikespan[0].innerHTML) - 1
        }

    }
    else{//desdar like
        icon.addClass("far")
        icon.removeClass("fas")
        span[0].innerHTML = parseInt(span[0].innerHTML) - 1
    }
})

//logica dislike
$(".btndislike").click( function(){
    let idNum = $(this)[0].id.match(/\d+/)[0]
    let icon = $(this).children().first()
    let span = $(this).children().next()
    //dar dislike
    if(icon[0].className.includes("far")){
        icon.addClass("fas")
        icon.removeClass("far")
        span[0].innerHTML = parseInt(span[0].innerHTML) + 1
        //desdar like
        let like = $("#" + idNum + "btnlike").children()
        if (like[0].className.includes("fas")){
            like.first().addClass("far")
            like.first().removeClass("fas")
            let likespan = $("#" + idNum + "like")
            likespan[0].innerHTML = parseInt(likespan[0].innerHTML) - 1
        }

    }
    else{//desdar dislike
        icon.addClass("far")
        icon.removeClass("fas")
        span[0].innerHTML = parseInt(span[0].innerHTML) - 1
    }
})
