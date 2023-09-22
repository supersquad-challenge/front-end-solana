import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import { colors } from "./lib/colors";

const shouldShowProfilePath = [
  "/challenges/diet",
  "/",
  "/myChallenges/ongoing",
  "/forDemo",
];

const shouldShowHeaderTitlePath: { [key: string]: string } = {
  "/myChallenges/": "My Challenges",
};

const MainHeaderBar = () => {
  const router = useRouter();
  const { pathname } = router;
  // console.log(pathname);
  // // Object.keys(shouldShowHeaderTitlePath).some((key) => {
  // //   if (pathname.startsWith(key)) {
  // //     console.log(shouldShowHeaderTitlePath[key]);
  // //   }
  // //   return pathname.startsWith(key);
  // // });

  /////상황별로 다르게 쓸 수 있음. /////

  //Login 전
  const Logo_SignIn = () => {
    return (
      <Container>
        <SuperSquad>SuperSquad</SuperSquad>
        <SignInButton>Sign In</SignInButton>
      </Container>
    );
  };

  //Profile이 있다는 건 login을 했다는 것.
  const Back_Alarm_Profile = () => {
    return (
      <Container>
        {shouldShowProfilePath.includes(pathname) && (
          <>
            <GoBackButton
              src="/PageHeaderBar/chevron-left.svg"
              alt="goBack"
              onClick={() => {
                router.push("/forDemo");
              }}
            />
            {pathname in shouldShowHeaderTitlePath && (
              <PageHeaderTitle>
                {shouldShowHeaderTitlePath[pathname]}
              </PageHeaderTitle>
            )}

            <ProfileImage src="/PageHeaderBar/profileEx.svg" alt="profileEx" />
            <NotificationButton
              src="/PageHeaderBar/notification.svg"
              alt="notification"
            />
          </>
        )}
      </Container>
    );
  };

  const Back = () => {
    return (
      <Container>
        <GoBackButton
          src="/PageHeaderBar/chevron-left.svg"
          alt="goBack"
          onClick={() => {
            router.push("/forDemo");
          }}
        />
      </Container>
    );
  };
  //조건 때문에 주석은 남겨둠
  const NaviBarName_SignIn = () => {
    let title = null;

    Object.keys(shouldShowHeaderTitlePath).some((key) => {
      if (pathname.startsWith(key)) {
        title = shouldShowHeaderTitlePath[key];
        return true; // 종료 조건
      }
      return false; // 계속 진행
    });

    return (
      <Container>
        {title && <PageHeaderTitle>{title}</PageHeaderTitle>}
        <ProfileImage src="/PageHeaderBar/profileEx.svg" alt="profileEx" />
        <NotificationButton
          src="/PageHeaderBar/notification.svg"
          alt="notification"
        />
      </Container>
    );
  };

  return (
    // <Back_Alarm_Profile />
    // <Logo_SignIn />
    // <Back />
    <NaviBarName_SignIn />
  );
};

export default MainHeaderBar;

const Container = styled.div`
  position: fixed;
  z-index: 100;

  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  @media (max-width: 2160px) {
    //PC
    height: 96px;
  }
  @media (max-width: 576px) {
    //mobile
    height: 48px;
  }

  background-color: white;
`;

const GoBackButton = styled.img`
  position: absolute;
  @media (max-width: 2160px) {
    //PC
    width: 48px;
    height: 48px;

    left: 48px;
  }
  @media (max-width: 576px) {
    //mobile
    width: 24px;
    height: 24px;

    left: 24px;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  /* @media (max-width: 2160px) {
    //PC
    
  } */
  @media (max-width: 576px) {
    //mobile
    width: 33px;
    height: 33px;
    right: 24px;
  }
`;

const NotificationButton = styled.img`
  position: absolute;
  /* @media (max-width: 2160px) {
    //PC
    
  } */
  @media (max-width: 576px) {
    //mobile
    width: 24px;
    height: 24px;
    right: 65px;
  }
`;

const SearchButton = styled.img`
  //나중에 검색 기능이 추가될 수 있으니 지우지는 않겠음.
  position: absolute;
  /* @media (max-width: 2160px) {
    //PC
    
  } */
  @media (max-width: 576px) {
    //mobile
    width: 24px;
    height: 24px;
    right: 97px;
  }
`;

const SuperSquad = styled.div`
  position: absolute;
  /* @media (max-width: 2160px) {
    //PC
    
  } */
  @media (max-width: 576px) {
    //mobile
    left: 24px;
    font-size: 24px;
    font-weight: 500;
  }
`;

const SignInButton = styled.button`
  position: absolute;
  /* @media (max-width: 2160px) {
    //PC
    
  } */
  @media (max-width: 576px) {
    //mobile
    right: 24px;
    font-size: 12px;
    font-weight: 500;
    width: 60px;
    height: 32px;
    border-radius: 10px;
  }
  border: 2px solid ${colors.darkPurple};
  color: ${colors.darkPurple};
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PageHeaderTitle = styled.div`
  position: absolute;
  /* @media (max-width: 2160px) {
    //PC
    
  } */
  @media (max-width: 576px) {
    //mobile
    left: 30px;
    font-size: 24px;
    font-weight: 500;
  }
`;
