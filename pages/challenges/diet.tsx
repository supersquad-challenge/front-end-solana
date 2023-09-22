import styled from "styled-components";
import React, { useState } from "react";
import {
  IsOpenProps,
  BackgroundColorProps,
  TitleContentProps,
  IndexProps,
  IsClickedProps,
} from "../../src/lib/interfaces";
import { colors } from "../../src/lib/colors";
import ChallengeInfoModal from "../../src/page/challenges/ChallengeInfoModal";
import PaymentMethodModal from "../../src/page/challenges/PaymentMethodModal";
import { useRecoilValue } from "recoil";
import { paymentMethodState } from "../../src/lib/states";

//PaymentMethodModal => ChallengeInfoModal

const ChallengesDiet = () => {
  const [isChallengeInfoModalOpen, setIsChallengeInfoModalOpen] =
    useState(false);

  const handleIAmInButtonClick = () => {
    // setIsChallengeInfoModalOpen(true);
    setIsPaymentMethodModalOpen(true);
  };
  let paymentMethod = useRecoilValue(paymentMethodState);

  //paymentMethodModal
  const [isPaymentMethodModalOpen, setIsPaymentMethodModalOpen] =
    useState(false);

  const handleGoOnButtonClick = () => {
    if (paymentMethod !== "") {
      setIsPaymentMethodModalOpen(false);
      setIsChallengeInfoModalOpen(true);
    }
  };

  return (
    <Container>
      <ChallengeThumbnailImage
        src="/pages/challenges/diet/miracleMorningEx.svg"
        alt="miracleMorningChallengeThumbnail"
      />
      <TagsContainer>
        <TagWrapper backgroundColor="#ECECEC">Everyday</TagWrapper>
        <TagWrapper backgroundColor="#D6C0F0">1 Month</TagWrapper>
      </TagsContainer>
      {isChallengeInfoModalOpen == false && (
        <>
          <ChallengeContainer>
            <ChallengeTitle>Lose 6lbs</ChallengeTitle>
            <div
              style={{
                marginTop: "5px",
                width: "345px",
                display: "flex",
              }}
            >
              <ChallengeParticipants>30 Paticipants</ChallengeParticipants>
              <ChallengeTotalDeposit>$3,800</ChallengeTotalDeposit>
            </div>
            <ChallengeInfoContainer>
              <ChallengeInfo
                index={1}
                title="Schedule"
                content={"Sep 11st -\nOct 11st"}
              />
              <ChallengeInfo
                index={2}
                title="How To"
                content="Take a picture"
              />

              <ChallengeInfo index={3} title="Complete" content="Everyday" />
              <ChallengeInfo index={4} title="CryptoYield+" content="+1.86%" />
            </ChallengeInfoContainer>
          </ChallengeContainer>
          <BlackFixedButton onClick={handleIAmInButtonClick}>
            I am in!
          </BlackFixedButton>
        </>
      )}
      <PaymentMethodModal
        isPaymentMethodModalOpen={isPaymentMethodModalOpen}
        setIsPaymentMethodModalOpen={setIsPaymentMethodModalOpen}
        handleGoOnButtonClick={handleGoOnButtonClick}
      />

      <ChallengeInfoModal
        isChallengeInfoModalOpen={isChallengeInfoModalOpen}
        setIsChallengeInfoModalOpen={setIsChallengeInfoModalOpen}
      />
    </Container>
  );
};

export default ChallengesDiet;

interface IndexTitleContentProps extends IndexProps, TitleContentProps {}

const ChallengeInfo = ({ index, title, content }: IndexTitleContentProps) => {
  return (
    <ChallengeInfoWrapper index={index}>
      <ChallengeInfoTitle>{title}</ChallengeInfoTitle>
      <ChallengeInfoContent style={{ whiteSpace: "pre-line" }} index={index}>
        {content}
      </ChallengeInfoContent>
    </ChallengeInfoWrapper>
  );
};

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
  justify-content: center;

  /* background-color: red;
  border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeThumbnailImage = styled.img`
  position: absolute;
  width: 100%;

  top: 0px;
`;

const ChallengeContainer = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    height: 380px;

    background-color: white;

    top: 290px;
  }

  position: absolute;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagsContainer = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 345px;
    height: 27px;
    margin-top: 20px;
    top: 230px;
  }
  position: absolute;
  width: 100%;
  display: flex;
  z-index: 1;

  /* box-sizing: content-box;
  background-color: red;
  border: 1px solid black; */
`;

const TagWrapper = styled.div<BackgroundColorProps>`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    padding-bottom: 3px;

    margin-right: 10px;

    height: 27px;

    border-radius: 10px;

    font-size: 14px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
`;

const ChallengeTitle = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    font-size: 24px;
    font-weight: 600;

    width: 345px;

    margin-top: 20px;
  }

  width: fit-content;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ChallengeParticipants = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    font-size: 14px;
    padding-right: 12px;
  }
  //border-right 설정해야 함.
  border-right: 1px solid black;
  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeTotalDeposit = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    font-size: 14px;
    margin-left: 12px;
  }
  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeInfoContainer = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    margin-top: 20px;
    height: 200px;
    width: 330px;
  }
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  background-color: ${colors.paleGray};
  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ChallengeInfoWrapper = styled.div<IndexProps>`
  /* @media (max-width: 2160px) {
  } */
  @media (max-width: 576px) {
    width: 160px;
    height: 95px;

    border-radius: 20px;
  }
  left: ${(props) => [1, 3].includes(props.index) && "0px"};
  right: ${(props) => [2, 4].includes(props.index) && "0px"};
  top: ${(props) => [1, 2].includes(props.index) && "0px"};
  bottom: ${(props) => [3, 4].includes(props.index) && "0px"};

  position: absolute;

  background-color: white;
`;

const ChallengeInfoTitle = styled.div`
  /* @media (max-width: 2160px) {
  } */
  @media (max-width: 576px) {
    font-size: 14px;
    font-weight: 400;
    margin-left: 16px;
    margin-top: 12px;
  }
  width: fit-content;
  color: black;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const ChallengeInfoContent = styled.div<IndexProps>`
  /* @media (max-width: 2160px) {
  } */
  @media (max-width: 576px) {
    font-size: 18px;
    font-weight: 600;
    margin-left: 16px;
    margin-top: 10px;
  }
  width: fit-content;
  color: ${(props) =>
    props.index == 4 ? `${colors.darkPurple}` : `${colors.black}`};

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const BlackFixedButton = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    width: 343px;
    height: 60px;

    border-radius: 20px;

    margin-bottom: 14px;
  }

  position: fixed;
  bottom: 0px;

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

const Modal = styled.div<IsOpenProps>`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    height: 390px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1); // 그림자 추가
  }

  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(100%)"};
  transition: transform 0.3s ease-in-out;
`;

const ModalChallengeInfoContainer = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    margin-top: 20px;
    width: 343px;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ModalChallengeInfoWrapper = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    height: 21px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DepositWrapper = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    width: 343px;
    height: 48px;

    margin-top: 20px;
    padding-left: 12px;

    border-radius: 8px;
  }

  display: flex;
  align-items: center;
  text-align: center;

  border: 1px solid #ececec;
`;

const UserAverageWrapper = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    width: 343px;
    height: 22px;
    font-size: 14px;
  }
  color: #898989;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const OrangeText = styled.span`
  color: #eb4826;
`;

const ModalPaymentMethodContainer = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    margin-top: 20px;
    width: 343px;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ModalPaymentMethodWrapper = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    height: 56px;
  }
  width: 100%;
  display: flex;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const CheckButton = styled.div<IsClickedProps>`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  z-index: 201;
  background-color: ${(props) =>
    props.isClicked ? `${colors.lightPurple}` : "white"};

  border: ${(props) => !props.isClicked && `${colors.lightGray}`};
  box-sizing: border-box;
`;

const PaymentMethod = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    margin-top: 3px;
    font-size: 18px;
    font-weight: 500;
  }
  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const PaymentMethodDetail = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
  }
  /* border: 1px solid green;
  box-sizing: border-box; */
`;
