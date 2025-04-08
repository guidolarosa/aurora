/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth"

const UserName = async () => {
  const session : any = await auth();
  if (!session?.user) return null;

  return (
    <div>{session.user.name} {session.user.lastname}</div>
  )
}

export default UserName;