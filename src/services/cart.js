// Quais ações o meu carrinho deve fazer

// Adicionar item no carrinho

async function addItem(userCart, item) {
  userCart.push(item)
}

// Deletar item do carrinho

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if (index !== -1) {
    userCart.splice(index, 1)
  }
}

// Remover um item

async function removeItem(userCart, index) {
  const deleteIndex = index -1

  if (index => 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1)
  }
}

// Calcular o total

async function calculateTotal(userCart) {
  console.log("\nO total de seu carrinho é: ")
  const result = userCart.reduce((total,item) => total + item.subtotal(), 0)
  console.log("R$ " + result)
}

async function displayCart(userCart) {
  console.log("Lista do seu carrinho: ")

  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price } | ${item.quantity}x | Subtotal = R$ ${item.subtotal()}`)
  });
}

export {addItem, calculateTotal, removeItem, deleteItem, displayCart}