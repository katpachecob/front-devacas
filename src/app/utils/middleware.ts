import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

export default function protectedPage() {

  const accessToken = typeof window !== 'undefined' ? localStorage?.getItem("devacas-token") || '' : '';


  if (!accessToken) {
    return redirect("/auth/login");
  }
}