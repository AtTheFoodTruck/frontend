import CartListItem from './CartListItem';

// Q. 받아와야 할 장바구니 아이템 데이터: 메뉴이미지, 메뉴 단가, 메뉴명
const CartList = ({ cartList, handTotalPrice, onRemove }) => {
  console.log('cartList :' + cartList);
  console.log('handTotalPrice ' + handTotalPrice);

  return (
    <span className='list'>
      {cartList.map((cartList) => (
        <CartListItem
          key={cartList.orderItemId}
          {...cartList}
          // id={cartList.orderItemId}
          // image={cartList.itemImgUrl}
          // menu={cartList.itemName}
          // price={cartList.totalPrice}
          // handTotalPrice={handTotalPrice}
          // onRemove={onRemove}
        />
      ))}
    </span>
  );
};

// CartList.defaultProps = {
//   cartList: [],
// };

export default CartList;
