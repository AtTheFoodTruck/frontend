import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Rating from './star/Rating';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';
import ImgUpload from './ImgUpload';
import AWS from 'aws-sdk';

const ReviewWritinghWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 55%;
  top: 20%;
  left: 23%;
  border: 1px white solid;
  header {
    border: 1px white solid;
  }
  button {
    font-weight: bold;
    font-size: 0.95rem;
  }
`;

//TODO
//주문내역 props ( orderId,Store_name,menu) 받아서 출력
// useLocation으로 받아와야함

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});

export default function ReviewWriting() {
  const location = useLocation();

  const orderId = location.state.orderId;
  const storeName = location.state.storeName;
  const itemName = location.state.itemName;

  //image 상태
  //s3
  const [imgURL, setImgURL] = useState('');
  //미리보기
  const [fileURL, setFileURL] = useState('img/default_image.png');
  const [reviewLocation, setReviewLocation] = useState('');

  const contentInput = useRef();
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState({
    user_id: 0,
    order_id: orderId,
    content: '',
    review_img_url: '',
    storeName: storeName,
    itemName: itemName,
    rating: 0,
  });
  const navigate = useNavigate();

  const authorization = localStorage.getItem('Authorization');
  const userId = localStorage.getItem('userId');

  // const url = `http://localhost:8000/order-service/orders/v1/customer/reviews`;
  const url = `https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews`;

  //${accessToken}
  const headers = {
    Authorization: `Bearer ${authorization}`,
  };

  //img input
  const handleImgInput = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      setLoaded("loading");
      fileReader.readAsDataURL(file);
    }
    fileReader.onload = () => {
      //미리보기
      setFileURL(fileReader.result);
      //s3
      setImgURL(e.target.files[0]);
      setLoaded(true);
    };
  };

  // function updateUrl(url) {
  //   setReviewLocation(url);
  // }

  //이미지 업로드 진행
  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Body: file,
        Bucket: process.env.REACT_APP_S3_BUCKET,
        Key: "reviewImg/" + file.name,
      },
    });

    const promise = upload.promise();

    promise.then(
      function (data) {
        setReviewLocation(data.Location);
        console.log(data.Location + '업로드 성공');
      },

      function (err) {
        console.log(err);
        console.log('env, ', process.env.AWS_CONFIG);
        return console.log('오류가 발생했습니다');
      }
    );
  };

  const onCreate = async (content, rating, orderId, reviewLocation) => {
    console.log('리뷰 이미지 URL' + reviewLocation);
    // console.log("Params => orderId : ", orderId);
    await axios
      .post(
        url,
        {
          user_id: userId,
          //TODO 변수 확인
          order_id: orderId,
          rating: rating,
          review_img_url: reviewLocation,
          content: content,
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
        console.log('저장 성공');
        navigate(-1);
      })
      .catch((err) => console.log(err.response));
  };

  //input debounce
  const inputDebounce = _.debounce((text) => {
    setState({
      ...state,
      content: text,
    });
  }, 500);

  const handleContentInput = (e) => {
    const text = e.target.value;
    inputDebounce(text);
  };

  //별점
  const getRating = (score) => {
    setState({
      ...state,
      rating: score,
    });
  };

  //리뷰 등록
  const handleSubmit = () => {
    if (state.content.length < 1) {
      contentInput.current.focus();
      return alert('리뷰 내용을 입력해주세요!');
    }
    // handleImgUpload(imgURL);

    onCreate(state.content, state.rating, state.order_id, reviewLocation);

    // console.log(state);
  };

  return (
    <ReviewWritinghWrapper>
      <Container className="text-center">
        <h1>Write a review</h1>

        <Row className="mt-5">
          <Col>
            <p className="fs-5">매장명</p>
          </Col>
          <Col>
            <p className="fs-5">메뉴명</p>
          </Col>
        </Row>
        <hr />

        <Row className="mb-5 mt-5">
          <Col>{state.storeName}</Col>
          <Col>{state.itemName}</Col>
        </Row>

        {/* 리뷰 입력 줄 */}
        <Row className="mt-5">
          <Col className="d-flex align-items-center">
            {/*  */}
            <ImgUpload
              setState={setState}
              loaded={loaded}
              fileURL={fileURL}
              handleImgInput={handleImgInput}
              handleImgUpload={handleImgUpload}
            />
            {/* 이미지 처리 -> S3 Upload */}
            {/* 이미지 S3 컴포넌트 */}
          </Col>
          {/* 이미지 처리 -> S3 Upload */}
          {/*  */}
          <Col lg={8}>
            <div class="form-group">
              <textarea
                name="content"
                class="form-control"
                id="exampleTextarea"
                rows="10"
                placeholder="음식은 어떠셨나요? 후기를 남겨주세요."
                ref={contentInput}
                // value={state.content}
                onChange={handleContentInput}
              ></textarea>
            </div>
          </Col>
        </Row>

        <Row
          className="d-flex flex-column justify-content-center mt-5"
          id="rating"
        >
          <p>별점을 매겨주세요</p>
        </Row>

        <Container className="d-flex justify-content-center">
          <Rating className="rating" getRating={getRating} />
        </Container>

        {/* 리뷰등록버튼 */}
        <Row className="mt-5">
          <Col />
          <Col className="d-flex justify-content-end">
            <button
              class="btn btn-outline-secondary"
              variant="outline-secondary"
              onClick={() => handleSubmit(imgURL)}
            >
              리뷰등록
            </button>{' '}
          </Col>
          <Col className="d-flex justify-content-start">
            <button
              id="cancle_btn"
              type="button"
              class="btn btn-outline-danger"
              onClick={() => navigate(-1)}
            >
              취소
            </button>
          </Col>
          <Col />
        </Row>
      </Container>
    </ReviewWritinghWrapper>
  );
}
