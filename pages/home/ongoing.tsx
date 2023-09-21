import { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styled from "styled-components";
import { useRouter } from "next/router";
import SubHeaderBar from "../../src/SubHeaderBar";
import { SubHeaderBarPlaceholder } from "../../src/PlaceHolder";

export default function Ongoing() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home / SuperSquad</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SubHeaderBar />
      <SubHeaderBarPlaceholder />
      <Container>
        <BlackButton
          onClick={() => {
            router.push("/challenges/diet");
          }}
        >
          Challenge Start
        </BlackButton>
        <BlackButton
          onClick={() => {
            router.push("/proove/diet");
          }}
        >
          Snap your scale
        </BlackButton>
        <BlackButton
          onClick={() => {
            router.push("/myChallenges/ongoing");
          }}
        >
          Challenge Payback
        </BlackButton>
      </Container>
    </>
  );
}

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

const BlackButton = styled.div`
  /* @media (max-width: 2160px) {
      //PC
    } */
  @media (max-width: 576px) {
    width: 151px;
    height: 44px;

    border-radius: 50px;

    margin-top: 20px;
  }

  background-color: #121212;
  &:hover {
    background-color: #3a3a3a;
  }

  color: white;

  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;
