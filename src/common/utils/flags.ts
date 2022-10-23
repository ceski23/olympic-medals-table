export const flags = Object.fromEntries(
  Object.entries(
    import.meta.glob("../../../node_modules/country-flag-icons/3x2/*.svg", {
      as: "url",
      eager: true,
    })
  ).map(([id, url]) => [id.match(/([A-Z][A-Z])\.svg/)?.[1] ?? id, url])
);
