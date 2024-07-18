import { useCart } from 'react-use-cart';

export default function Items({ products }) {
  const { addItem } = useCart();

  const addToCart = (element) => {
    addItem(element);
  }
  return (
    <div id="contentGrid">
      {products.map((elem) => (
        <div className='box' key={elem.id}>
          <img src={elem.image} alt="item" />
          <hr />
          <div className='description'>
            <h3>{elem.title}</h3>
            <p>${elem.price}</p>
            <button onClick={()=> addToCart(elem)} type="button">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
  