import OrderListItem from './OrderListItem';

const OrderList = ({ orderList }) => {
  return (
    <span className='list'>
      {orderList.map((orderItem) => (
        <OrderListItem key={orderItem.id} {...orderItem} />
      ))}
    </span>
  );
};

export default OrderList;
