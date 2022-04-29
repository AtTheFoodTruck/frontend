import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import Map from "../Map/Map.jsx";
import StoreList from "./StoreList";
import { BiTargetLock } from "react-icons/bi";
import { Container, Card, InputGroup, FormControl } from "react-bootstrap";

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
    store_name: "열정닭꼬지",
    address: "서울 금천구 독산동 297-11",
    category: "닭꼬치",
  },
  {
    id: 2,
    store_name: "붕어빵먹신",
    address: "서울 금천구 독산동 152-12",
    category: "디저트",
  },
  {
    id: 3,
    store_name: "대박햄버거집",
    address: "서울 금천구 독산동 148-30",
    category: "햄버거",
  },
  {
    id: 4,
    store_name: "피자엔트럭",
    address: "서울 마포구 서교동 406",
    category: "피자",
  },
];

const Store = () => {
  const [address, setAddress] = useState("");
  const [popup, setPopup] = useState(false);
  const [myAdrress, setMyAdrress] = useState("");

  const selectedAddress = (data) => {
    console.log(data);
    setPopup(!popup);
    setAddress(data.address);
  };

  const [currentState, setCurrentState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const mylocation = (location) => {
    console.log("나의 위도 좌표 " + location.center.lat);
    console.log("나의 경도 좌표 " + location.center.lng);
    console.log("----------------------------------");
    setAddress(myAdrress);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setCurrentState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setCurrentState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  return (
    <StoreWrapper className="test w-auto">
      <Container className="Store text-center mt-5">
        <Container className="Title mb-5">
          <h1>Store</h1>
        </Container>

        {/* 검색창 */}
        <Container className="Search w-90 d-flex justify-content-center ">
          <InputGroup className="ms-5 mb-3 w-75">
            {/* 검색창 클릭 시 우편번호 입력 창 창 생성 */}
            <FormControl
              onClick={() => setPopup(!popup)}
              size="lg"
              placeholder="동명, 지번을 검색하세요"
              aria-describedby="basic-addon2"
              id="address_search"
              value={address}
            />
            {popup && <Post selectedAddress={selectedAddress}></Post>}

            {/* 아이콘 클릭 시 현재 위치 지도에 표시 */}
            <BiTargetLock
              style={{ width: 40, height: "auto" }}
              id="basic-addon2"
              onClick={() => mylocation(currentState)}
            />
          </InputGroup>
        </Container>

        {/* 지도 api 받아와야함 */}
        <Container
          className="Map mt-5"
          style={{ width: "auto", height: "auto" }}
        >
          <Card className="MapApi">
            <Map
              address={address}
              mylat={currentState.center.lat}
              mylng={currentState.center.lng}
              setMyAdrress={setMyAdrress}
            />
          </Card>
        </Container>

        {/* 매장리스트 */}
        <StoreList storelist={DUMMYDATA} />

        <Container className="d-flex justify-content-center mt-5">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#">
                &laquo;
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
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
