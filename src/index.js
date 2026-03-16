import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

async function cliente(name) {
    return name
}

const cliente1 = cliente("Pedro Borges")
const myCart  = []
const myWishList = []

console.log(`Bem vindo ao seu carrinho de compras, ${await cliente1}! \n`)

const item1 = await createItem("Mitsubishi Lancer 1.8 Manual", 42.599, 4)
const item2 = await createItem("Shineray Jef 150S", 15.999, 2)
const item3 = await createItem("Notebook Gamer", 4.299, 1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myWishList, item3)

await cartService.removeItem(myCart, )

await cartService.displayCart(myCart)

// await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart)

