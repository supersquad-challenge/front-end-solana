import { atom, RecoilState } from "recoil";

export const upLoadImageBoolState = atom<boolean>({
  key: "UpLoadImageBoolState",
  default: false,
});

export const depositAmountState = atom<number>({
  key: "DepositAmountState",
  default: 0,
});

export const paymentMethodState = atom<string>({
  key: "PaymentMethodState",
  default: "",
});

export const isSignedInState = atom<boolean>({
  key: "IsSignedInState",
  default: false,
});

export const isPaidWithCrpytoState = atom<boolean>({
  key: "IsPaidWithCrpytoState",
  default: false,
});
