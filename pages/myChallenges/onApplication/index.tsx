import styled from "styled-components";
import React from "react";

import { useEffect, useState } from "react";

import SubHeaderBar from "../../../src/SubHeaderBar";
import { SubHeaderBarPlaceholder } from "../../../src/PlaceHolder";

import Head from "next/head";

const MyChallengesOnApplication = () => {
  return (
    <>
      <Head>
        <title>My Challenges / SuperSquad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SubHeaderBar />
      <SubHeaderBarPlaceholder />
      <Container>
        <MyChllengeWrapper>
          <MyChallengeThumbnail src="/pages/myChallenges/dietExSmall.svg" />
          <MyChallengeInfoWrapper>
            <MyChallengeTitle>Lose 6lbs</MyChallengeTitle>
            <MyChallengeDuration>Everyday | 1 Month</MyChallengeDuration>
            <div
              style={{
                width: "153px",
                height: "63px",
                marginTop: "16px",
                display: "flex",
              }}
            >
              <ValuesWrapper>
                <ValueRatio>100%</ValueRatio>
                <ValueTitle>
                  Done So <br />
                  Far
                </ValueTitle>
              </ValuesWrapper>
              <ValuesWrapper>
                <ValueRatio>6.86%</ValueRatio>
                <ValueTitle>
                  Realized <br />
                  Yield
                </ValueTitle>
              </ValuesWrapper>
            </div>
            <PurpleButton>Challenge Payback</PurpleButton>
          </MyChallengeInfoWrapper>
        </MyChllengeWrapper>
      </Container>
    </>
  );
};

export default MyChallengesOnApplication;

const Container = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    height: fit-content;
  }

  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* background-color: red; */
  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const MyChllengeWrapper = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 345px;
    height: 224px;
    border-radius: 20px;
    margin-top: 20px;
  }
  position: relative;

  background-color: #f6f6f6;
`;

const MyChallengeThumbnail = styled.img`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    left: 15px;
    top: 15px;
  }
  position: absolute;
`;

const MyChallengeInfoWrapper = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 188px;
    height: 194px;

    left: 122px;
    top: 15px;
  }
  position: absolute;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const MyChallengeTitle = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    height: 25px;

    font-size: 18px;

    margin-top: 9px;
  }
  font-weight: 600;
  color: #121212;
`;

const MyChallengeDuration = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    height: 18px;

    font-size: 14px;

    margin-top: 4px;
  }
  font-weight: 400;
  color: #898989;
`;

const ValuesWrapper = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
  }
  height: 100%;
  width: 50%;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

const ValueRatio = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    height: 25px;
    font-size: 18px;
    font-weight: 600;
  }
  display: flex;
  align-items: center;
  color: #121212;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ValueTitle = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    height: 36px;
    font-size: 14px;
    font-weight: 400;
  }
  display: flex;
  align-items: center;

  color: #898989;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const PurpleButton = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 171px;
    height: 34px;
    margin-top: 16px;

    font-size: 14px;
    font-weight: 500;

    border-radius: 50px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  background-color: #8201ca;

  &:hover {
    background-color: #9c23d1;
  }

  color: white;
`;
