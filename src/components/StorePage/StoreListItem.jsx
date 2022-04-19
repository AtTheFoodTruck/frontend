const StoreListItem = ({ store_name, address, category, id }) => {
  return (
    <tr>
      <td>{store_name}</td>
      <td>{address}</td>
      <td>{category}</td>
    </tr>
  );
};

export default StoreListItem;
