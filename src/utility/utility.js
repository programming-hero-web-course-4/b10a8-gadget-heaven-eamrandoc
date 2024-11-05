
const getAddCart = () => {
    const all = localStorage.getItem('cart')
    if (all) {
        const cart = JSON.parse(all)
        return cart
    } else {
        return []
    }
}

const addCart = product => {

    const cart = getAddCart()
    const isExist = cart.find(item => item.product_id == product.product_id)
    if (isExist) return alert('product already exists!')

    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Successfully added!')
}


const removeCart = id => {
    const cart = getAddCart()
    const remaining = cart.filter(product => product.product_id != id)
    localStorage.setItem('cart', JSON.stringify(remaining))
    alert('Successfully Removed!')
}

export { addCart, getAddCart, removeCart }