import CartListItem from './CartListItem';

// Q. 받아와야 할 장바구니 아이템 데이터: 메뉴이미지, 메뉴 단가, 메뉴명
const CartList = ({ cartList, handTotalPrice, onRemove }) => {
  console.log('cartList :' + cartList);
  console.log('handTotalPrice ' + handTotalPrice);

  return (
    <span className='list'>
      {cartList.map((cartList2) => (
        <CartListItem
          key={cartList2.orderItemId}
          id={cartList2.orderItemId}
          image={cartList2.itemImgUrl}
          menu={cartList2.itemName}
          price={cartList2.totalPrice}
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
