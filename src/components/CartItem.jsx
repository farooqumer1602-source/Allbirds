// src/components/CartItem.jsx
import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  return (

    <div className="flex  items-center justify-between border-b py-4">
      <div className="flex items-center space-x-12 justify-center">
      <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded" />
        <h3 className="font-semibold">{item.name}</h3>
        <p className="space-x-1.5">Size:{item.selectedSize}</p>
        <p className="text-gray-600">
          ${item.price} × {item.quantity}
        </p>
        <div className="mt-2 flex items-center space-x-2">
          <button
            onClick={() => decrementQuantity(item.id)}
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => incrementQuantity(item.id)}
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;