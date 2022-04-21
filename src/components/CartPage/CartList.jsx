import CartListItem from './CartListItem';

const CartItemList = (props) => {
  return (
    <span className='list'>
      {props.cartlists.map((cartlist) => (
        <CartListItem
          key={cartlist.id}
          id={cartlist.id}
          store_name={cartlist.store_name}
          image={cartlist.image}
          menu={cartlist.menu}
          price={cartlist.price}
          handTotalPrice={props.handTotalPrice}
        />
      ))}
    </span>
  );
};

export default CartItemList;
