export const addToCart = (product, quantity = 1) => {
  const productInfo = {
    _id: product._id,
    brand: product.brand,
    price: product.price,
    discountPercentage: product.discountPercentage,
    thumbnail: product.thumbnail,
    title: product.title,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) => item._id === productInfo._id
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      ...productInfo,
      quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};