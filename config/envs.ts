function getEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

export const envs = {
  DOMAIN: getEnv("NEXT_PUBLIC_DOMAIN").replace(/\/$/, ""),
  IS_STAGING: getEnv("NEXT_PUBLIC_IS_STAGING") === "true",
};
