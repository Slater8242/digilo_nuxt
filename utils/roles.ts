export const rolePermissions: Record<string, string[]>={
  admin: ["/investor"],
  user: ["/client"],
  guest: ["/","/login","/about"]
}