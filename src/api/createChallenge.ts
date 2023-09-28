import axios from "axios";

const createUser = async () => {
  // JWT 토큰 설정
  const token = "your-jwt-token-here";

  // 요청 파라미터 설정
  const params = {
    category: "Diet",
    challengeName: "Lose 4lbs",
    joinChallengeStartsAt: "20230925",
    joinChallengeEndsAt: "20231001",
    challengeStartsAt: "20231002",
    challengeEndsAt: "20231015",
    challengeStatus: "notStarted",
    challengeVerificationFrequency: "Everyday",
    challengeTotalVerificationNum: 14,
    challengeRequiredCompleteNum: 11,
    challengeMaxParticipants: 30,
    challengeParticipantsCount: 0,
    challengeVerificationMethod: "photo verification`",
    challengeCashDeposit: 0,
    cashSuccessPool: 0,
    cashFailPool: 0,
    challengeCryptoDeposit: 0,
    cryptoSuccessPool: 0,
    cryptoFailPool: 0,
    challengeTotalDeposit: 0,
    defiPool: "compound",
    cryptoYield: 2.5,
    description: "test",
    challengeThumbnail: "https://test.com",
  };

  try {
    // API 호출
    const response = await axios.post(
      "http://52.65.222.108:8080//user/create",
      params,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // 성공 응답 처리
    if (response.status === 200) {
      console.log("User registered:", response.data);
    }
  } catch (error) {
    // 실패 응답 처리
    if (error.response && error.response.status === 500) {
      console.error("Internal Server Error:", error.response.data);
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
};

// 함수 호출
createUser();
