import TopBar from "./components/TopBar";
import "./globals.scss";

export const metadata = {
  title: "Next App 2",
  description: "Second Next.js Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
