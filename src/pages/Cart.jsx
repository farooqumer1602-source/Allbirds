// src/pages/Cart.jsx
import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-6 w-[70%] m-auto">
      <h1 className="text-2xl mt-11 font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;