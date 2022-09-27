type Multiplier<T> = T extends `${infer U extends number}` ? U : never;

type M = Multiplier<"2x" | "3x" | "4x">;

type NYAreaCode = 934 | 680 | 332 | 838;

type NYPhoneNumber<T> =
  T extends `${infer P1 extends NYAreaCode}-${infer P2 extends number}-${infer P3 extends number}`
    ? [P1, P2, P3]
    : never;

type InvalidNumber = NYPhoneNumber<"123-456-7890">;
type ValidNumber = NYPhoneNumber<"934-456-7890">;
