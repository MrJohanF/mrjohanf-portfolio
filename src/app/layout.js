import "./globals.css";



export const metadata = {
  title: "MrjohanF",
  description: "MrjohanF - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
