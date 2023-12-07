import { ConnectKitButton } from "connectkit";

export const metadata = {
  title: 'Zypto Finance',
};

export default function Home() {
  return (
    <main>
      <div className="flex items-center align-middle w-full justify-center h-screen mx-auto my-auto">
        <ConnectKitButton />
      </div>
    </main>
  );
}
