import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="m-auto max-w-2xl lg:max-w-7xl">
      <Navbar />
      <main className="min-h-full flex justify-center items-center flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
