/* eslint-disable @typescript-eslint/no-explicit-any */

import { createClient } from "@/utils/supabase/client";


const UserName = async () => {
  const supabase = createClient();
  const session : any = await supabase.auth.getSession();
  if (!session?.user) return null;

  return (
    <div>{session.user.name} {session.user.lastname}</div>
  )
}

export default UserName;