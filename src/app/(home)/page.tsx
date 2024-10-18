

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { LoginForm } from "../../components/auth/loginForm";

export default async function Home() {

  let loggedIn = false


  // Caso exista um sessão, o login será alterado p/ True. O metodo foi criado p/ evitar erro de direcionamento durante o codigo
  try {

    const supabase = createServerComponentClient({ cookies })
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (session) loggedIn = true

  } catch (error) {
    console.log("Home", error)
  }// finally {
  //   if (loggedIn) redirect("/user-app", RedirectType.replace)
  // }

  return (
    <LoginForm />
  )

}
