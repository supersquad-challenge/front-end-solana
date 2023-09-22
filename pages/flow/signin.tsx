import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";
import GoogleSignIn from "../../src/GoogleSignIn";

export default function Login() {
  const router = useRouter();

  return (
    <Container>
      <SignUpNSignInWithGoogle>Sign Up & Sign In</SignUpNSignInWithGoogle>
      <GoogleSignIn />
    </Container>
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

  /* background-color: red;
  border: 1px solid green;
  box-sizing: border-box; */
`;

const SignUpNSignInWithGoogle = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    font-size: 25px;
    font-weight: 700;

    width: 345px;

    margin-top: 40px;
    margin-bottom: 70px;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
