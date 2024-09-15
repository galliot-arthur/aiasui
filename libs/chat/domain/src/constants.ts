export const ROLE_USER = "user";
export const ROLE_ASSISTANT = "assistant";

export const ROLES = [ROLE_USER, ROLE_ASSISTANT] as const;

export type Role = (typeof ROLES)[number];

export const isRole = (role: unknown): role is Role => {
  if (typeof role === "string") {
    return (ROLES as unknown as string[]).includes(role);
  }
  return false;
};
