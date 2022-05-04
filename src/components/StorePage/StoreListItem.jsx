import React from "react";

const StoreListItem = ({ storeName, address, distance }) => {
  return (
    <tr>
      <td>{storeName}</td>
      <td>{address}</td>
      <td>{distance}</td>
    </tr>
  );
};

export default StoreListItem;
