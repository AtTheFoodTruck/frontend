import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import Map from '../Map/Map';
import { BiTargetLock } from 'react-icons/bi';
import {
  Container,
  Table,
  Card,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const StoreWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 10%;
  left: 30%;
`;

const Store = () => {
  const [address, setAddress] = React.useState('');
  const [popup, setPopup] = React.useState(false);

  return (
    <StoreWrapper>
      <Container className='Store text-center mt-5'>
        <Container className='Title mb-5'>
          <h1>매장찾기</h1>
        </Container>

        {/* 검색창 */}
        <Container className='Search w-90 d-flex justify-content-center '>
          <InputGroup className='ms-5 mb-3 w-75'>
            {/* 검색창 클릭 시 우편번호 입력 창 창 생성 */}
            <FormControl
              onClick={() => setPopup(!popup)}
              size='lg'
              placeholder='동명, 도로명을 검색하세요'
              aria-describedby='basic-addon2'
            />
            {popup && <Post address={address} setAddress={setAddress}></Post>}

            {/* 아이콘 클릭 시 현재 위치 지도에 표시 */}
            <BiTargetLock
              style={{ width: 40, height: 'auto' }}
              id='basic-addon2'
            />
          </InputGroup>
        </Container>

        {/* 지도 api 받아와야함 */}
        <Container className='Map mt-5' style={{ width: 1000, height: 'auto' }}>
          <Card className='MapApi'>
            <Map />
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

        <Container className='d-flex justify-content-center mt-5'>
          <ul class='pagination'>
            <li class='page-item disabled'>
              <a class='page-link' href='#'>
                &laquo;
              </a>
            </li>
            <li class='page-item active'>
              <a class='page-link' href='#'>
                1
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                2
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                3
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                4
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                5
              </a>
            </li>
            <li class='page-item'>
              <a class='page-link' href='#'>
                &raquo;
              </a>
            </li>
          </ul>
        </Container>
      </Container>
    </StoreWrapper>
  );
};

export default Store;
