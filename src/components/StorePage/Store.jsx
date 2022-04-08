import React from 'react';
import classes from './Store.module.css';

import {
  Container,
  Table,
  Pagination,
  Card,
  InputGroup,
  FormControl,
  Col,
  Row,
} from 'react-bootstrap';
import { BiTargetLock } from 'react-icons/bi';

const Store = () => {
  return (
    <Container className='Store text-center mt-5'>
      <Container className='Title mb-5'>
        <h1>매장찾기</h1>
      </Container>

      {/* 검색창 */}
      <Container className='Search w-90  '>
        <InputGroup className='ms-5 mb-3 w-75'>
          <FormControl
            size='lg'
            placeholder='동명, 도로명을 검색하세요'
            aria-describedby='basic-addon2'
          />
          <BiTargetLock
            style={{ width: 40, height: 'auto' }}
            className={classes.Target}
            id='basic-addon2'
          />
        </InputGroup>
      </Container>

      {/* 지도 api 받아와야함 */}
      <Container className='Map' style={{ width: 1000, height: 'auto' }}>
        <Card className='MapApi'>
          <Card.Img
            variant='top'
            src='https://apis.map.kakao.com/images/webres/sample_thumb/mapInfo.png'
          />
        </Card>
      </Container>
      <Container className='Table'>
        <Table className='text-center mt-5'>
          <thead>
            <tr>
              <th>매장명</th>
              <th>주소</th>
              <th>카테고리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>엽기떡볶이</td>
              <td>반포한강공원</td>
              <td>분식</td>
            </tr>
            <tr>
              <td>엽기떡볶이</td>
              <td>반포한강공원</td>
              <td>분식</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container className='Pages'>
        <Pagination className='Pagination m-0'>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
    </Container>
  );
};

export default Store;
