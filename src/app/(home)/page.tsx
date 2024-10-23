

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { LoginForm } from "../../components/auth/loginForm";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });

  try {
    // Obtém a sessão atual
    const { data: { session } } = await supabase.auth.getSession();

    // Se houver sessão, redireciona para /user-app
    if (session) {
      redirect("/user-app");
    }

  } catch (error) {
    console.error("Erro ao verificar sessão:", error);
    // Você pode exibir uma mensagem de erro ou lidar com o erro de outra forma
  }
  return (
    <div><LoginForm /></div>
  )

}
