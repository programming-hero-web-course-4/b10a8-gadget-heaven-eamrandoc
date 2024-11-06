import { toast } from "react-toastify"

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
    if (isExist) return toast.error('product already exists!')

    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    toast.success('Successfully added!')
}


const removeCart = id => {
    const cart = getAddCart()
    const remaining = cart.filter(product => product.product_id !== id)
    localStorage.setItem('cart', JSON.stringify(remaining))
    toast.success('Successfully Removed!')
}

export { addCart, getAddCart, removeCart }