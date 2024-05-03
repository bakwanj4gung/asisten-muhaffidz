import Buttons from "@/components/Buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-14">
        <Buttons goTo="/login" value="Login" />
        <Buttons goTo="/register" value="Register" />
      </div>
    </main>
  );
}
