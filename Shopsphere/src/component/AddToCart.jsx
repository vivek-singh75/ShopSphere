export const addToCart = (product, quantity = 1) => {
  const productInfo = {
    id: product.id,
    brand: product.brand,
    price: product.price,
    discountPercentage: product.discountPercentage,
    thumbnail: product.thumbnail,
    title: product.title,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) => item.id === productInfo.id
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

