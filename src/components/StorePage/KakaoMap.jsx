/* global kakao */

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function KakaoMap(props) {
  // 부모 컴포넌트에서 받아오는 상태 값

  const { setMyAdrress, address, setListAddress, listAddress } = props;

  // 카카오 맵이 생성 되었는지 안됬는지 확인하는 상태값
  const [kakaoMap, setKakaoMap] = useState(null);

  // 마커를 저장하는 상태값
  // const [, setMarkers] = useState([]);

  // 가게들을 찍기 위한 상태
  const [picker, setPicker] = useState();

  // 초기 컨테이너 값을 useRef로 관리
  const container = useRef();

  // 현재 위치 관련 상태값
  const [currentState, setCurrentState] = useState({
    center: {
      lat: 1,
      lng: 1,
    },
    errMsg: null,
    isLoading: true,
  });

  // API로 받아오는 상태값
  const [positionAddress, setPositionAddress] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://apifood.blacksloop.com/item-service/items/v1/search/stores",
        {
          latitude: currentState.center.lat,
          longitude: currentState.center.lng,
          name: "",
        }
      )
      .then(function (response) {
        //console.log(response.data.data.stores);
        setPositionAddress(response.data.data.stores);
        setListAddress(response.data.data.stores);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentState, address]);

  // 렌더링이 되면 계속해서 최신화 해서 현재 위치를 currentState에 담기
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

    setPicker(true);
  });

  //렌더링 될때 한번 랜더링이 되고 useRef로 관리되는 컨테이너 값이 변하면 렌더링
  // 변화는 감지하지만 데이터 값을 바꾸면 안되기 때문에 useRef를 사용
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=ff6ed06df85eabd9e0e07503eada6419&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(1, 1);
        const options = {
          center,
          level: 1,
        };
        const map = new kakao.maps.Map(container.current, options);

        // 드래그 및 줌을 하지 못하게
        map.setDraggable(false);
        map.setZoomable(false);

        setKakaoMap(map);
      });
    };
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    let coords = new kakao.maps.LatLng(
      currentState.center.lat,
      currentState.center.lng
    );

    var geocoder = new kakao.maps.services.Geocoder();

    function displayDetailCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setMyAdrress(result[0].address.address_name);
      }
    }

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    searchDetailAddrFromCoords(kakaoMap.getCenter(), displayDetailCenterInfo);

    kakaoMap.setCenter(coords);
  }, [currentState]);

  // 검색을 하게 되면 지도를 중앙으로 이동 하고 랜더링을 종료 검색결과 및 현재위치 버튼을 눌러 address의 상태값이 변하면 랜더링
  // 지도 박스 안에 좌표가 있으면 픽커로 표시
  useEffect(() => {
    // 맵이 만들어지지 안으면 그냥 리턴
    if (kakaoMap === null) {
      return;
    }
    //console.log("address의 상태값이 변하면 랜더링");

    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        kakaoMap.setCenter(coords);
      }
    });
  }, [address]);

  useEffect(() => {
    // 맵이 만들어지지 안으면 그냥 리턴
    if (kakaoMap === null) {
      return;
    }

    console.log("피커");

    var geocoder = new kakao.maps.services.Geocoder();

    for (var i = 0; i < positionAddress.length; i++) {
      let storeName = positionAddress[i].storeName;
      let storeAddress = positionAddress[i].address;

      geocoder.addressSearch(
        positionAddress[i].address,
        function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            var imageSrc =
                "https://cdn-icons-png.flaticon.com/512/1046/1046762.png", // 마커이미지의 주소입니다
              imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
              imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

            // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
              ),
              markerPosition = coords; // 마커가 표시될 위치입니다

            var marker = new kakao.maps.Marker({
              position: markerPosition,
              image: markerImage, // 마커이미지 설정
            });

            marker.setMap(kakaoMap);

            var content = `<div class="customoverlay">
               <a href="https://map.kakao.com/link/search/${storeAddress}" target="_blank" style="text-decoration-line: none;"
               >
                  <span class="title" style="background: wheat; padding: 5px;">${storeName}</span>
               </a>
              </div>`;

            // 커스텀 오버레이가 표시될 위치입니다
            var position = coords;

            // 커스텀 오버레이를 생성합니다
            var customOverlay = new kakao.maps.CustomOverlay({
              map: kakaoMap,
              position: position,
              content: content,
              yAnchor: 3,
            });
          }
        }
      );
    }
  }, [listAddress]);

  return (
    <div
      id="containered"
      style={{ width: "100%", height: "360px", marginTop: "0.5em" }}
      ref={container}
    />
  );
}
