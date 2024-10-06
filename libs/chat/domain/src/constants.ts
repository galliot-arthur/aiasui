export const ROLE_USER = "user";
export const ROLE_ASSISTANT = "assistant";
export const ROLE_SYSTEM = "system";
export const ROLE_FUNCTION = "function";
export const ROLE_DATA = "data";
export const ROLE_TOOL = "tool";

export const ROLES = [
  ROLE_USER,
  ROLE_ASSISTANT,
  ROLE_SYSTEM,
  ROLE_FUNCTION,
  ROLE_DATA,
  ROLE_TOOL,
] as const;
export type Role = (typeof ROLES)[number];

export const ONE_TO_ONE_ROLES = [ROLE_USER, ROLE_ASSISTANT] as const;
export type OneToOneRole = (typeof ONE_TO_ONE_ROLES)[number];

export const isRole = (role: unknown): role is OneToOneRole => {
  if (typeof role === "string") {
    return (ONE_TO_ONE_ROLES as unknown as string[]).includes(role);
  }
  return false;
};
