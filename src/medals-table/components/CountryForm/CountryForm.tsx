import { FC } from "react";
import { useForm, UseFormReset } from "react-hook-form";
import { countries } from "country-flag-icons";
import iso from "iso-3166-1";
import { nonNullable } from "common/utils/guards";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CountrySelect,
  Form,
  MedalInput,
  SubmitButton,
} from "./CountryForm.styles";
import { countryFormSchema, CountryFormValues } from "./CountryForm.schema";

export enum FormMode {
  ADD,
  EDIT,
}

interface CountryFormProps {
  onSubmit: (
    data: CountryFormValues,
    reset: UseFormReset<CountryFormValues>
  ) => void;
  defaultValues?: Partial<CountryFormValues>;
  mode: FormMode;
}

export const CountryForm: FC<CountryFormProps> = ({
  onSubmit,
  defaultValues,
  mode,
}) => {
  const { handleSubmit, register, reset, formState } =
    useForm<CountryFormValues>({
      resolver: zodResolver(countryFormSchema),
      defaultValues,
    });

  const availableCountries = countries.map(iso.whereAlpha2).filter(nonNullable);

  const handleFormSubmit = (data: CountryFormValues) => {
    onSubmit(data, reset);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <CountrySelect
        id="countrySelect"
        label="Country"
        error={formState.errors.country?.message}
        {...register("country")}
        defaultValue=""
        disabled={mode === FormMode.EDIT}
      >
        <option disabled value="">
          Select country...
        </option>
        {availableCountries.map(({ alpha3, country }) => (
          <option value={alpha3} key={alpha3}>
            {country}
          </option>
        ))}
      </CountrySelect>

      <MedalInput
        id="goldMedalsInput"
        label="Gold medals"
        {...register("medals.gold", { valueAsNumber: true })}
        type="number"
        inputMode="numeric"
        error={formState.errors.medals?.gold?.message}
      />
      <MedalInput
        id="silverMedalsInput"
        label="Silver medals"
        {...register("medals.silver", { valueAsNumber: true })}
        type="number"
        inputMode="numeric"
        error={formState.errors.medals?.silver?.message}
      />
      <MedalInput
        id="bronzeMedalsInput"
        label="Bronze medals"
        {...register("medals.bronze", { valueAsNumber: true })}
        type="number"
        inputMode="numeric"
        error={formState.errors.medals?.bronze?.message}
      />

      <SubmitButton type="submit">
        {mode === FormMode.EDIT ? "save" : "add"}
      </SubmitButton>
    </Form>
  );
};
