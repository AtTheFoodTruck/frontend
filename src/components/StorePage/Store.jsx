import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import Map from '../Map/Map';
import StoreList from './StoreList';
import { useState } from 'react';
import { BiTargetLock } from 'react-icons/bi';
import { Container, Card, InputGroup, FormControl } from 'react-bootstrap';

const StoreWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 10%;
  left: 30%;
`;

const DUMMYDATA = [
  {
    id: 1,
    store_name: '박가네',
    address: '서울시 관악구 남부순환로 2222길',
    category: '치킨',
  },
  {
    id: 2,
    store_name: '정많은 집',
    address: '서울시 강남구 남부순환로 2222길',
    category: '중식',
  },
  {
    id: 3,
    store_name: '마라탕',
    address: '대구광역시 관악구 남부순환로 2222길',
    category: '중식',
  },
  {
    id: 4,
    store_name: '비빔밥나라',
    address: '부산시 해운대구 남부순환로 2222길',
    category: '한식',
  },
];

const Store = () => {
  const [address, setAddress] = useState('');
  const [popup, setPopup] = useState(false);

  const selectedAddress = (data) => {
    console.log(data);
    setPopup(!popup);
    setAddress(data.address);
  };

  return (
    <StoreWrapper className='test w-auto'>
      <Container className='Store text-center mt-5'>
        <Container className='Title mb-5'>
          <h1>Store</h1>
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
              value={address}
            />
            {popup && <Post selectedAddress={selectedAddress}></Post>}

            {/* 아이콘 클릭 시 현재 위치 지도에 표시 */}
            <BiTargetLock
              style={{ width: 40, height: 'auto' }}
              id='basic-addon2'
            />
          </InputGroup>
        </Container>

        {/* 지도 api 받아와야함 */}
        <Container
          className='Map mt-5'
          style={{ width: 'auto', height: 'auto' }}
        >
          <Card className='MapApi'>
            <Map address={address} />
          </Card>
        </Container>

        {/* 매장리스트 */}
        <StoreList storelist={DUMMYDATA} />

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
