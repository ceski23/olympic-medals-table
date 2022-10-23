import { FC } from "react";
import { hasFlag } from "country-flag-icons";
import { flags } from "common/utils";

interface CountryFlagProps {
  code: string;
}

export const CountryFlag: FC<CountryFlagProps> = ({ code }) => {
  return hasFlag(code) ? (
    <img
      width="30px"
      height="20px"
      loading="lazy"
      src={flags[code]}
      alt={code}
    />
  ) : null;
};
