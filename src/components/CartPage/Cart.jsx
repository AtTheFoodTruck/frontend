import { React, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import CartList from './CartList';
import axios from 'axios';

const Cart = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const accessToken = localStorage.getItem('Authorization');
  // let cartArray = [];

  // headers
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  // 아이템 삭제 버튼 클릭 이벤트
  const onRemove = (targetId) => {
    const newCartList = data.filter((list) => list.id !== targetId);
    setData(newCartList);
  };

  // 총 가격
  const handTotalPrice = (price) => setTotalPrice(totalPrice + price);

  // 최초 브라우저 rendering되었을 때 실행
  useEffect(() => {
    const request = `https://apifood.blacksloop.com/order-service/orders/v1/customer/carts`;
    printCartList(request);

    /* 이재민 샘플 코드
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=`;
    callMovie(response);
    getMovie(response);
    */
  }, []);

  /* 이재민 샘플 코드
  const callMovie = async (response) => {
    let movieList = [];
    for (let i = 1; i < 11; i++) {
      movieList = movieList.concat(
        await fetch(response + i)
          .then((response) => response.json())
          .then((response) => response.results)
      );
    }
    setMovies(movieList.concat());
    setMainMovieImage(movieList[0]);
  };
  */
  const printCartList = async (request) => {
    axios
      .get(
        request, // 카트목록조회 URL
        //'http://localhost:8000/order-service/orders/v1/customer/carts',
        {
          // body
          user_id: 1,
        },
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        // return 받은 데이터를 newCart 객체로 담기
        // const newCart = {
        //   orderItemId: response.data.data.orderItemId,
        //   storeName: response.data.data.storeName,
        //   itemId: response.data.data.itemId,
        //   itemName: response.data.data.itemName,
        //   itemImgUrl: response.data.data.itemImgUrl,
        //   count: response.data.data.count,
        //   totalPrice: response.data.data.totalPrice,
        // };

        // 위에서 선언한 cartArray에 newCart를 담기, cartArray에 담긴 객체를 화면에 출력해줘야함!!!!
        // cartArray.push(newCart);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //주문생성 및 주문 완료 버튼
  async function handleClick() {
    axios.post(
      'http://localhost:8000/order-service/orders/v1/customer/order',
      {
        //body
        user_id: 1,
        //
      },
      {
        headers: headers,
      }
    );
    alert(`주문 완료되었습니다!`);
  }

  return (
    <CartWrapper>
      <Container className='mt-5'>
        <h1 className='text-center'>Cart</h1>
        <h4>{data.store_name}</h4>
        <Row className='d-flex justify-content-evenly mt-5'>
          <Col lg={5}></Col>
          <Col className='d-flex justify-content-center p-0 ms-5 me-4'>
            <h5>Menu</h5>
          </Col>
          <Col className='d-flex justify-content-center p-0'>
            <h5>Amout</h5>
          </Col>
          <Col className='d-flex justify-content-center p-0 me-3'>
            <h5>Price</h5>
          </Col>
        </Row>

        <Row className='StoreName d-flex justify-content-start mt-5'>
          <hr />
        </Row>

        {/* 카트리스트 */}
        <Row>
          <CartList
            cartlists={data}
            onRemove={onRemove}
            handTotalPrice={handTotalPrice}
          />
          <Row className='text-end mt-5'>
            <h4>총 금액 : {totalPrice.toLocaleString()}</h4>
          </Row>
        </Row>

        {/* 주문하기 버튼 */}
        <Container className='text-center'>
          <Button
            onClick={handleClick}
            className='mt-5'
            size='lg'
            variant='outline-secondary'
          >
            주문하기
          </Button>{' '}
        </Container>
      </Container>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 40%;
  top: 20%;
  left: 30%;
`;

// const DUMMY_DATA = [
//   {
//     id: 's1',
//     store_name: '비빔밥 세상',
//     menu: '돌솥비빔밥',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg',
//     price: 6000,
//   },
//   {
//     id: 's2',
//     store_name: '비빔밥 세상',
//     menu: '날치알비빔밥',
//     image:
//       'https://d1hk7gw6lgygff.cloudfront.net/uploads/recipe/image_file/4472/Flying_Fish_Roe_Bibimbap_I01.jpg',
//     price: 7000,
//   },
//   {
//     id: 's3',
//     store_name: '쉐프의 스테이크',
//     menu: '큐브 스테이크',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg',
//     price: 10000,
//   },
//   {
//     id: 's4',
//     store_name: '쉐프의 스테이크',
//     menu: '오늘의 추천메뉴',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Minute_steak_in_Tulppio.jpg/220px-Minute_steak_in_Tulppio.jpg',
//     price: 16999,
//   },
// ];
export default Cart;
