import { toast } from "react-toastify"

const getWishlist = () => {
    const all = localStorage.getItem('wishlist')
    if (all) {
        const wishlist = JSON.parse(all)
        return wishlist
    } else {
        return []
    }
}

const addWishlist = product => {
    const wishlist = getWishlist()
    const isExist = wishlist.find(item => item.product_id == product.product_id)
    if (isExist) return toast.error('product already exists!')

        wishlist.push(product)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    toast.success('Successfully added!')
}


const removeWishlist = id => {
    const wishlist = getWishlist()
    const remaining = wishlist.filter(product => product.product_id != id)
    localStorage.setItem('wishlist', JSON.stringify(remaining))
    toast.success('Successfully Removed!')
}

export { addWishlist, getWishlist, removeWishlist }