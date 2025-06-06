import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("token");
  return Response.json(
    { success: true, message: "Logged out successfully" },
    { status: 200 }
  );
}
