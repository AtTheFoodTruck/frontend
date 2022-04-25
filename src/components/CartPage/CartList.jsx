import CartListItem from './CartListItem';

// Q. 받아와야 할 장바구니 아이템 데이터: 메뉴이미지, 메뉴 단가, 메뉴명
const CartList = ({ cartlists, handTotalPrice, onRemove }) => {
  console.log('cartList :' + cartlists);
  console.log('handTotalPrice ' + handTotalPrice);

  return (
    <span className='list'>
      {cartlists.map((cartlists) => (
        <CartListItem
          key={cartlists.orderItemId}
          cartList={cartlists}
          // id={cartList.orderItemId}
          // image={cartList.itemImgUrl}
          // menu={cartList.itemName}
          // price={cartList.totalPrice}
          handTotalPrice={handTotalPrice}
          onRemove={onRemove}
        />
      ))}
    </span>
  );
};

// CartList.defaultProps = {
//   cartList: [],
// };

export default CartList;
