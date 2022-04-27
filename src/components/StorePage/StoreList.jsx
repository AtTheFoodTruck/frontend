import React from "react";
import { Container, Table } from "react-bootstrap";
import StoreListItem from "./StoreListItem";

const StoreList = ({ storelist }) => {
  console.log(storelist);
  return (
    <Container className="Table">
      <Table className="text-center mt-5">
        <thead>
          <tr>
            <th>매장명</th>
            <th>주소</th>
            <th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          {storelist.map((list) => (
            <StoreListItem key={list.id} {...list} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StoreList;
