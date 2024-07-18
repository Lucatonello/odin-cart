import { useCart } from 'react-use-cart';

export default function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <hr />
      <h1>
        {isEmpty? 'Your Cart is Empty' : ''}
      </h1>

        <div>
          {items.map((item, index) => (
            <div key={index} className='cartItem'>
              <img src={item.image} alt="item" />
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Total: ${cartTotal}</h2>
          <button onClick={emptyCart}>Empty Cart</button>
        </div>
    </div>
  );
}
