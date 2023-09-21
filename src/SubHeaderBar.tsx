import styled from "styled-components";
import React from "react";
import { IsClickedProps } from "./lib/interfaces";
import { useRouter } from "next/router";

const SubHeaderBar = () => {
  const router = useRouter();
  const { pathname } = router;

  const OnApplication_Ongoing = () => {
    return (
      <SubHeaderBarContainer>
        <SubHeaderBarWrapper
          isClicked={pathname === "/home/onApplication"}
          onClick={() => {
            router.push("/home/onApplication");
          }}
        >
          OnApplication
        </SubHeaderBarWrapper>
        <SubHeaderBarWrapper
          isClicked={pathname === "/home/ongoing"}
          onClick={() => {
            router.push("/home/ongoing");
          }}
        >
          Ongoing
        </SubHeaderBarWrapper>
      </SubHeaderBarContainer>
    );
  };

  //여기는 바뀌어야함.
  const MyChallengesPageHeaderBar = () => {
    return (
      <SubHeaderBarContainer>
        <SubHeaderBarWrapper
          isClicked={pathname === "/myChallenges/ongoing"}
          onClick={() => {
            router.push("/myChallenges/ongoing");
          }}
        >
          Ongoing (1)
        </SubHeaderBarWrapper>
        <SubHeaderBarWrapper
          isClicked={pathname === "/myChallenges/completed"}
          onClick={() => {
            router.push("/myChallenges/completed");
          }}
        >
          Completed (14)
        </SubHeaderBarWrapper>
      </SubHeaderBarContainer>
    );
  };

  return (
    <>
      {pathname.startsWith("/home/") && <OnApplication_Ongoing />}
      {pathname.startsWith("/myChalleges/") && <MyChallengesPageHeaderBar />}
    </>
  );
};

export default SubHeaderBar;

const SubHeaderBarContainer = styled.div`
  /* @media (max-width: 2160px) {
      //PC
    } */
  @media (max-width: 576px) {
    //mobile
    top: 68px;
    height: 30px;
  }
  position: fixed;
  z-index: 100;
  width: 100%;

  background-color: white;

  display: flex;

  /* border: 1px solid black;
    box-sizing: border-box; */
`;

const SubHeaderBarWrapper = styled.div<IsClickedProps>`
  /* @media (max-width: 2160px) {
      //PC
    } */
  @media (max-width: 576px) {
    //mobile
    font-size: 14px;
  }
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-weight: 500;
  color: #6f7789;

  border-bottom: ${(props) => (props.isClicked ? "1px solid #121212" : "none")};
  box-sizing: border-box;
`;
