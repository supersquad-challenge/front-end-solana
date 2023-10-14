import styled from "styled-components";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { colors } from "../../src/lib/colors";
import { SetterOrUpdater, useRecoilState } from "recoil";
import {
  isPaidWithCrpytoState,
  registerChallengeIdState,
  userInfoIdState,
} from "../../src/lib/states";
import AfterPayment from "../../src/page/flow/AfterPayment";
import { registerMyChallenge } from "../../src/api/myChallengeRegister";
import dotenv from "dotenv";
import dynamic from "next/dynamic";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ButtonProps } from "@solana/wallet-adapter-react-ui/lib/types/Button";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";

dotenv.config();

export default function ConnectWallet() {
  const [isPaidWithCrypto, setIsPaidWithCrypto] = useRecoilState(
    isPaidWithCrpytoState
  );
  const [userInfoId, setUserInfoId] = useRecoilState(userInfoIdState);
  const [registerChallengeId, setRegisterChallengeId] = useRecoilState(
    registerChallengeIdState
  );
  if (typeof registerChallengeId === "string" && isPaidWithCrypto) {
    // challengeId가 string 타입인지 확인;;
    registerMyChallenge(userInfoId, registerChallengeId);
  }

  useEffect(() => {
    // 모달 스타일 변경
    const setModalStyle = () => {
      const element_wrapper = document.querySelector(
        ".wallet-adapter-modal-wrapper "
      ) as HTMLElement;
      const element_fade_in = document.querySelector(
        ".wallet-adapter-modal-fade-in "
      ) as HTMLElement;
      const element_container = document.querySelector(
        ".wallet-adapter-modal-container "
      ) as HTMLElement;
      const element_title = document.querySelector(
        ".wallet-adapter-modal-title "
      ) as HTMLElement;
      const element_button_close = document.querySelector(
        ".wallet-adapter-modal-button-close "
      ) as HTMLElement;
      const element_list = document.querySelector(
        ".wallet-adapter-modal-list "
      ) as HTMLElement;
      const element_list_lis = element_list.querySelectorAll("li");

      const element_button_list_more = element_wrapper.querySelector(
        ".wallet-adapter-modal-list-more "
      ) as HTMLElement;
      const element_button_list_more_span =
        element_button_list_more.querySelector("span") as HTMLSpanElement;

      const element_collapse = document.querySelector(
        ".wallet-adapter-collapse"
      ) as HTMLElement;
      const element_collapse_lis = element_collapse.querySelectorAll("li");

      if (element_wrapper) {
        element_wrapper.style.display = "flex";
        element_wrapper.style.flexDirection = "column";
        element_wrapper.style.alignItems = "center";
        element_wrapper.style.position = "relative";
        element_wrapper.style.width = "100%";

        element_fade_in.style.setProperty("display", "flex");
        element_fade_in.style.setProperty("justify-content", "center");
        element_fade_in.style.setProperty("position", "absolute");
        element_fade_in.style.setProperty("top", "134px");
        element_fade_in.style.setProperty("z-index", "100");
        element_fade_in.style.setProperty("background-color", "white");
        element_fade_in.style.setProperty("width", "100%");

        element_container.style.setProperty("width", "90%");
        element_container.style.setProperty("border", "1px solid black");
        element_container.style.setProperty("border-radius", "10px");
        element_container.style.setProperty("display", "flex");
        element_container.style.setProperty("flex-direction", "column");
        element_container.style.alignItems = "center";
        // element_container.style.setProperty("color", "white")

        element_button_close.style.backgroundColor = "white";
        element_button_close.style.border = "none";
        element_button_close.style.position = "absolute";
        element_button_close.style.top = "15px";
        element_button_close.style.left = "10px";

        element_title.style.marginTop = "50px";
        element_title.style.setProperty("font-size", "28px");
        element_title.textContent = "Connect a wallet on Solana";

        element_list.style.listStyle = "none";
        element_list.style.padding = "0px";
        element_list.style.width = "100%";
        element_list_lis.forEach((element_list_li) => {
          const element_button = element_list_li.querySelector(
            ".wallet-adapter-button "
          ) as HTMLElement;
          const element_button_start_icon = element_list_li.querySelector(
            ".wallet-adapter-button-start-icon"
          ) as HTMLElement;
          const element_button_start_icon_img =
            element_button_start_icon.querySelector("img") as HTMLImageElement;
          const element_button_span = element_button.querySelector(
            "span"
          ) as HTMLSpanElement;
          element_list_li.style.width = "100%";
          element_list_li.style.display = "flex";
          element_list_li.style.flexDirection = "column";
          element_list_li.style.alignItems = "center";
          element_list_li.style.marginBottom = "10px";

          element_button.style.width = "90%";
          element_button.style.borderRadius = "10px";
          element_button.style.border = "1px solid #121212";
          element_button.style.backgroundColor = "white";
          element_button.style.fontSize = "16px";
          element_button.style.display = "flex";
          element_button.style.alignItems = "center";
          element_button.style.justifyContent = "center";

          element_button_start_icon_img.style.width = "30px";
          element_button_start_icon_img.style.marginRight = "10px";
          element_button_start_icon_img.style.marginTop = "3px";

          element_button_span.style.marginLeft = "5px";
          element_button_span.style.color = "blue";
        });

        element_button_list_more.style.width = "50%";
        element_button_list_more.style.height = "30px";
        element_button_list_more.style.backgroundColor = "white";
        element_button_list_more.style.color = "#121212";
        element_button_list_more.style.fontSize = "16px";
        element_button_list_more.style.borderRadius = "5px";
        element_button_list_more.style.border = "1px solid #121212";
        element_button_list_more.style.marginBottom = "10px";

        element_button_list_more_span.style.marginRight = "5px";

        element_collapse.style.marginTop = "10px";
        element_collapse.style.display = "flex";
        element_collapse.style.flexDirection = "column";
        element_collapse.style.alignItems = "center";

        element_collapse_lis.forEach((element_collapse_li) => {
          const element_collapse_button = element_collapse_li.querySelector(
            ".wallet-adapter-button "
          ) as HTMLElement;

          const element_collapse_button_start_icon =
            element_collapse_li.querySelector(
              ".wallet-adapter-button-start-icon"
            ) as HTMLElement;

          const element_collapse_button_start_icon_img =
            element_collapse_button_start_icon.querySelector(
              "img"
            ) as HTMLImageElement;

          element_collapse_li.style.width = "90%";

          element_collapse_button.style.width = "100%";
          element_collapse_button.style.borderRadius = "10px";
          element_collapse_button.style.border = "1px solid #121212";
          element_collapse_button.style.backgroundColor = "white";
          element_collapse_button.style.fontSize = "16px";
          element_collapse_button.style.display = "flex";
          element_collapse_button.style.alignItems = "center";
          element_collapse_button.style.justifyContent = "center";

          element_collapse_button_start_icon_img.style.width = "30px";
          element_collapse_button_start_icon_img.style.marginRight = "10px";
        });
      }
    };

    setTimeout(() => {
      setModalStyle();
    }, 30);
  }, []);

  return isPaidWithCrypto ? (
    <AfterPayment />
  ) : (
    <PayingWithCrypto setIsPaidWithCrypto={setIsPaidWithCrypto} />
  );
}

interface PayingWithCryptoProps {
  setIsPaidWithCrypto: SetterOrUpdater<boolean>;
}

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);
const LABELS = {
  "change-wallet": "Change wallet",
  connecting: "Connecting ...",
  "copy-address": "Copy address",
  copied: "Copied",
  disconnect: "Disconnect",
  "has-wallet": "Connect",
  "no-wallet": "Select Wallet",
} as const;

//지갑을 연결하는 페이지
const PayingWithCrypto = ({ setIsPaidWithCrypto }: PayingWithCryptoProps) => {
  const [showWalletMultiButton, setShowWalletMultiButton] = useState(false);

  const handleCustomWalletClick = () => {
    // WalletMultiButtonDynamic을 보이게 하도록 상태를 변경합니다.
    setShowWalletMultiButton(true);

    // 여기에서 원하는 추가 작업을 수행할 수 있습니다.
  };

  return (
    <Container>
      <ContinueWith>Continue With</ContinueWith>
      {/* <CustomWallet onClick={handleCustomWalletClick}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <WalletImg src="/pages/flow/connectwallet/solana-sol-logo.png" />
          <WalletName>Solana Wallet</WalletName>
        </div>
      </CustomWallet>
      {showWalletMultiButton && <WalletMultiButtonDynamic />} */}
      <SolanaWalletButton labels={LABELS} />
    </Container>
  );
};
type Props = ButtonProps & {
  labels: Omit<
    {
      [TButtonState in ReturnType<
        typeof useWalletMultiButton
      >["buttonState"]]: string;
    },
    "connected" | "disconnecting"
  > & {
    "copy-address": string;
    copied: string;
    "change-wallet": string;
    disconnect: string;
  };
};

function SolanaWalletButton({ children, labels, ...props }: Props) {
  const [isPaidWithCrypto, setIsPaidWithCrypto] = useRecoilState(
    isPaidWithCrpytoState
  );

  const { setVisible: setModalVisible } = useWalletModal();
  const {
    buttonState,
    onConnect,
    onDisconnect,
    publicKey,
    walletIcon,
    walletName,
  } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
      if (!node || node.contains(event.target as Node)) return;

      setMenuOpen(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  const content = useMemo(() => {
    if (children) {
      return children;
    } else if (publicKey) {
      const base58 = publicKey.toBase58();
      return base58.slice(0, 4) + ".." + base58.slice(-4);
    } else if (buttonState === "connecting" || buttonState === "has-wallet") {
      return labels[buttonState];
    } else {
      return labels["no-wallet"];
    }
  }, [buttonState, children, labels, publicKey]);
  return (
    <CustomWallet
      onClick={() => {
        switch (buttonState) {
          case "no-wallet":
            setModalVisible(true);
            break;
          case "has-wallet":
            if (onConnect) {
              onConnect();
            }
            break;
          case "connected":
            setMenuOpen(true);
            break;
        }
        setTimeout(() => {
          setIsPaidWithCrypto(true);
        }, 30000);
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <WalletImg src="/pages/flow/connectwallet/solana-sol-logo.png" />
        <WalletName>Solana Wallet</WalletName>
      </div>
    </CustomWallet>
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

const ContinueWith = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    font-size: 25px;
    font-weight: 700;

    width: 345px;

    margin-top: 40px;
    margin-bottom: 40px;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const CustomWallet = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 345px;
    height: 50px;

    border-radius: 10px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: 1px solid ${colors.black};
`;

const WalletImg = styled.img`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    width: 22px;
    height: 22px;
    border-radius: 8px;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const WalletName = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    //mobile
    font-size: 17px;
    margin-left: 5px;
  }
  font-weight: 600;
`;

const BlackButton = styled.div`
  /* @media (max-width: 2160px) {
    //PC
  } */
  @media (max-width: 576px) {
    width: 170px;
    height: 44px;

    border-radius: 40px;

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
