import CartListItem from './CartListItem';

const CartList = ({ cartlists, handTotalPrice, onRemove }) => {
  return (
    <span className='list'>
      {cartlists.map((cartlist) => (
        <CartListItem
          key={cartlist.id}
          id={cartlist.id}
          store_name={cartlist.store_name}
          image={cartlist.image}
          menu={cartlist.menu}
          price={cartlist.price}
          handTotalPrice={handTotalPrice}
          onRemove={onRemove}
        />
      ))}
    </span>
  );
};

CartList.defaultProps = {
  cartList: [],
};

export default CartList;
