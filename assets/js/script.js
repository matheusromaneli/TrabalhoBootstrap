var carItems = 0
document.getElementById("adicionar-carrinho").onclick = function() {
    var toastEl = document.getElementById("toast-compra")
    var toast = new bootstrap.Toast(toastEl)
    toast.show()

    carItems++
    carrinho = document.getElementById("car-items")
    carrinho.innerText = carItems
    carrinho.style.display = "inline-block"
}
