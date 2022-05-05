import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import StoreListItem from "./StoreListItem";

const StoreList = (props) => {
  const { listAddress } = props;
  return (
    <Container className="Table">
      <Table className="text-center mt-5">
        <thead>
          <tr>
            <th>매장명</th>
            <th>주소</th>
            <th>거리</th>
          </tr>
        </thead>
        <tbody>
          {listAddress &&
            listAddress.map((list) => (
              <StoreListItem key={list.id} {...list} />
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StoreList;
