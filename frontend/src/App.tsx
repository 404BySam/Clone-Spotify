import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <header>
        <h1 className="text-blue-700 font-bold">Salut le front</h1>
        <SignedOut>
          <SignInButton>
            <Button variant={"outline"}>Inscris toi ici</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  );
}

export default App;
