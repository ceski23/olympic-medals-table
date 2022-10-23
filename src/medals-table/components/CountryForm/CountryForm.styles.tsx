import styled from "@emotion/styled";
import { Select, Input } from "common/components";
import { mediaQueryUp } from "common/utils/styles";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;

  ${mediaQueryUp("lg")} {
    flex-wrap: nowrap;
  }
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.colors.primary};
  transition: background-color 0.3s;
  min-width: 100px;
  color: ${(props) => props.theme.colors.textAlt};
  margin-bottom: auto;
  font-weight: 600;
  flex-basis: 100%;
  margin-top: 24px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }

  ${mediaQueryUp("lg")} {
    flex-basis: unset;
  }
`;

export const CountrySelect = styled(Select)`
  flex: 2;

  ${mediaQueryUp("lg")} {
    min-width: 0;
  }
`;

export const MedalInput = styled(Input)`
  flex: 1;

  ${mediaQueryUp("lg")} {
    min-width: 0;
  }
`;
