import React, { useEffect } from "react";
import styled from "styled-components";

const HomeCategories = ({
  setActiveMenuList,
  activeMenuList,
  setFiltered,
  popular,
}) => {
  useEffect(() => {
    if (activeMenuList === "전체") {
      setFiltered(popular);
      console.log(activeMenuList);
      return;
    }
    const _filtered = popular.filter((item) =>
      item.categoryName.includes(activeMenuList)
    );
    console.log("popular", popular);
    setFiltered(_filtered);
  }, [activeMenuList]);

  // //리팩터링 전에 했던것
  // function handleClick() {
  //   // paginate(1);
  //   setActiveactiveMenuList("전체");
  // }

  const onClickCategoryHandler = (e) => {
    e.preventDefault();
    console.log(`선택한 button 이름 : ${e.target.value}`);
    setActiveMenuList(e.target.value);
  };
  const cateAll = () => {
    setFiltered(popular);
  };

  const categoryList = [
    { id: 0, name: "전체" },
    { id: 1, name: "치킨" },
    { id: 2, name: "피자" },
    { id: 3, name: "햄버거" },
    { id: 4, name: "스테이크" },
    { id: 5, name: "닭강정" },
    { id: 6, name: "핫도그" },
    { id: 7, name: "중식" },
    { id: 8, name: "디저트" },
    { id: 9, name: "일식" },
    { id: 10, name: "기타" },
    { id: 11, name: "한식" },
    { id: 12, name: "분식" },
  ];
  return (
    <Nav1>
      <div className="btn-group" role="group" aria-label="category">
        {/* <button onClick={cateAll} className="btn btn-outline-primary m-3">
          전체
        </button> */}
        {categoryList.map((item) => (
          <div key={item.id}>
            <button
              name={item.name}
              value={item.name}
              onClick={onClickCategoryHandler}
              className="btn btn-outline-primary m-3"
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </Nav1>
  );
};

const Nav1 = styled.nav`
  margin-top: 70px;
  text-align: center;
`;

export default HomeCategories;
