import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  console.log(user);
  if (loading) return <h1>Loading</h1>;
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <div>
        <h1>Welcome to your dashboard, {user.displayName} ♥️</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
}
