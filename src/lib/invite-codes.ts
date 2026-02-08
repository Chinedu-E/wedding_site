export const INVITE_CODES: Record<string, string> = {
  x1a7: "Yigale",
  q9b3: "Brianna",
  j4k2: "Chinwe",
  kp38: "Jade",
  al4v: "AJ",
  mz61: "Ella",
  yg82: "Folarin",
  uq12: "Eliza",
  ze55: "Ugom",
  r3n9: "Zaan",
  ct76: "Netacci",
  ds42: "Zarokome",
  fg51: "Ada",
  hx93: "Ekene",
  jk24: "Ekom",
  test: "Test",
} as const;

export function getNameForCode(code: string): string | undefined {
  return INVITE_CODES[code];
}

export function isValidCode(code: string): code is keyof typeof INVITE_CODES {
  return code in INVITE_CODES;
}
