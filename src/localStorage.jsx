export const addToLocalStorage = (items) => {
  localStorage.setItem("cart", JSON.stringify(items))
}

export const getFromLocalStorage = () => {
  const result = localStorage.getItem("cart")
  const items = result ? JSON.parse(result) : []
  return items
}
