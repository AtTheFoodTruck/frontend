import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Rating from "./star/Rating";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import ImgUpload from "./ImgUpload";
import AWS from "aws-sdk";

const ReviewWritinghWrapper = styled.div`
  position: absolute;
  align-items: center;
  width: 55%;
  top: 20%;
  left: 30%;
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

const ReviewWriting = ({ store_name, menu }) => {
  const navigate = useNavigate();
  const contentInput = useRef();
  const [loaded, setLoaded] = useState(false);

  const [state, setState] = useState({
    user_id: null,
    content: "",
    // img_url: "",
    // img_file: "img/default_image.png",
    rating: 0,
  });

  //image 상태
  //s3
  const [imgURL, setImgURL] = useState(null);
  //미리보기
  const [fileURL, setFileURL] = useState("img/default_image.png");

  const authorization = localStorage.getItem("Authorization");
  const userId = localStorage.getItem("userId");

  const url = `http://localhost:8000/order-service/orders/v1/customer/reviews`;
  // const url = `https://apifood.blacksloop.com/order-service/orders/v1/customer/reviews`;

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
  //이미지 업로드 진행
  const handleImgUpload = (file) => {
    // const file = e.target.files[0];
    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Body: file,
        Bucket: process.env.REACT_APP_S3_BUCKET,
        Key: "upload/" + file.name,
      },
    });

    const promise = upload.promise();

    promise.then(
      function (data) {
        console.log(data.Location);
        console.log("이미지 업로드에 성공했습니다.");
      },
      function (err) {
        console.log(err);
        return console.log("오류가 발생했습니다");
      }
    );
  };

  const onCreate = (content, rating) => {
    // console.log("Params => orderId : ", orderId);
    axios
      .post(
        url,
        {
          user_id: userId,
          order_id: 39,
          rating: rating,
          //이미지 파일 오류
          // review_img_url: img_file,
          review_img_url: `https://[버킷명].s3.ap-northeast-2.amazonaws.com/[파일명].jpg`,
          content: content,
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
        console.log("저장 성공");
        // navigate(-1);
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
  const handleSubmit = (imgURL) => {
    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }
    handleImgUpload(imgURL);
    onCreate(state.content, state.img_file, state.rating);
    // console.log(state);
  };

  return (
    <ReviewWritinghWrapper>
      <Container className="text-center">
        <header>
          <h1>리뷰 작성하기</h1>
          {/* TODO  */}
          {/* 퍼블리싱 */}
        </header>

        <Row className="mt-5">
          <Col>
            <h3>매장명</h3>
          </Col>
          <Col>
            <h3>메뉴명</h3>
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col>{store_name}</Col>
          <Col>{menu}</Col>
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
          <div>
            <p>별점을 매겨주세요</p>
          </div>
          <Rating className="rating" getRating={getRating} />
        </Row>

        {/* 리뷰등록버튼 */}
        <Row className="d-inline-flex mt-5">
          <button
            size="mg"
            class="btn btn-outline-secondary"
            variant="outline-secondary"
            onClick={() => handleSubmit(imgURL)}
          >
            리뷰등록
          </button>{" "}
          <button
            id="cancle_btn"
            type="button"
            class="btn btn-outline-danger"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
        </Row>
      </Container>
    </ReviewWritinghWrapper>
  );
};

export default ReviewWriting;
