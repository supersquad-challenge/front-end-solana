import styled from "styled-components";
import React from "react";

import { useEffect, useState } from "react";

import SubHeaderBar from "../../../src/SubHeaderBar";
import { SubHeaderBarPlaceholder } from "../../../src/PlaceHolder";

import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  isImageUploadedState,
  isPaybackReceivedState,
} from "../../../src/lib/states";
import { colors } from "../../../src/lib/colors";

const MyChallengesCompleted = () => {
  const router = useRouter();
  const [isImageUploaded, setIsImageUploaded] =
    useRecoilState(isImageUploadedState);
  const [isPaybackReceived, setIsPaybackReceived] = useRecoilState(
    isPaybackReceivedState
  );

  return (
    <>
      <Head>
        <title>My Challenges / SuperSquad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SubHeaderBar />
      <SubHeaderBarPlaceholder />
      <Container>
        <MyChllengeWrapper
          onClick={() => {
            router.push("/myChallenges/ongoing/diet");
          }}
        >
          <MyChallengeThumbnail src="/pages/myChallenges/dietExSmall.svg" />
          <MyChallengeInfoWrapper>
            <MyChallengeTitle>Lose 6lbs</MyChallengeTitle>
            <MyChallengeDuration>Everyday | 1 Month</MyChallengeDuration>
            {isPaybackReceived ? (
              <GrayButton
                onClick={() => {
                  router.push("/myChallenges/completed/diet");
                }}
              >
                Mission Completed
              </GrayButton>
            ) : (
              <PurpleButton
                onClick={(event) => {
                  event.stopPropagation();
                  router.push("/myChallenges/completed/diet");
                }}
              >
                Get Payback
              </PurpleButton>
            )}
          </MyChallengeInfoWrapper>
          <GoDetailButton
            src="/pages/myChallenges/goDetail.svg"
            alt="goDetail"
          />
        </MyChllengeWrapper>
      </Container>
    </>
  );
};

export default MyChallengesCompleted;

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
    height: 115px;
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

const PurpleButton = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 171px;
    height: 34px;
    margin-top: 10px;

    font-size: 14px;
    font-weight: 400;

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

const GrayButton = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 171px;
    height: 34px;
    margin-top: 10px;

    font-size: 14px;
    font-weight: 400;

    border-radius: 50px;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  background-color: #dadada;

  color: ${colors.black};
`;

const GoDetailButton = styled.img`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 5px;
    height: 10px;

    right: 12px;
    top: 50px;
  }
  position: absolute;
`;
