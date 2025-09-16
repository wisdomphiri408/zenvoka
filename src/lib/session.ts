import { cookies } from "next/headers";

export async function getSession() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if(!accessToken) return null;

    return {token:accessToken}
}