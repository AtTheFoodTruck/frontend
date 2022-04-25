import CartListItem from './CartListItem';

// Q. 받아와야 할 장바구니 아이템 데이터: 메뉴이미지, 메뉴 단가, 메뉴명
const CartList = ({ cartlist, handTotalPrice, onRemove }) => {
  return (
    <span className='list'>
      {cartlist.map((cartlist) => (
        <CartListItem
          key={cartlist.orderItemId}
          id={cartlist.orderItemId}
          image={cartlist.itemImgUrl}
          menu={cartlist.itemName}
          price={cartlist.totalPrice}
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
