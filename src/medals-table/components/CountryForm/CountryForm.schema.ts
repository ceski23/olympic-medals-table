import { z } from "zod";

export const countryFormSchema = z.object({
  country: z.string().min(1, "You must select country"),
  medals: z.object({
    gold: z
      .number({ invalid_type_error: "Medals count should be a number" })
      .int("Medals count should be an integer")
      .nonnegative("Medals count should be non-negative"),
    silver: z
      .number({ invalid_type_error: "Medals count should be a number" })
      .int("Medals count should be an integer")
      .nonnegative("Medals count should be non-negative"),
    bronze: z
      .number({ invalid_type_error: "Medals count should be a number" })
      .int("Medals count should be an integer")
      .nonnegative("Medals count should be non-negative"),
  }),
});

export type CountryFormValues = z.infer<typeof countryFormSchema>;
