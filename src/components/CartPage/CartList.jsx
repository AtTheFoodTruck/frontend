import CartListItem from './CartListItem';

// Q. 받아와야 할 장바구니 아이템 데이터: 메뉴이미지, 메뉴 단가, 메뉴명
const CartList = ({ cartlists, handTotalPrice, onRemove }) => {
  return (
    <span className='list'>
      {cartlists.map((cartlist) => (
        <CartListItem
          key={cartlist.id}
          id={cartlist.id}
          image={cartlist.image}
          menu={cartlist.item_name}
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
