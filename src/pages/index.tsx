import { ConnectKitButton } from "connectkit";

export const metadata = {
  title: 'Zypto Finance',
};

export default function Home() {
  return (
    <main>
      <div className="flex items-center align-middle w-full justify-center h-screen mx-auto my-auto">
        <div>

          <h1 className="text-2xl">Sign in with Ethereum</h1>
          <ul className="list">
            <li>Connect your wallet</li>
            <li>Click on the profile icon on the modal to sign in with Ethereum</li>
            <li>Sign the message displayed in your wallet to verify you own the address</li>
            <li>You are good to go!!!</li>
          </ul>
        </div>
        <ConnectKitButton />
      </div>
    </main>
  );
}
