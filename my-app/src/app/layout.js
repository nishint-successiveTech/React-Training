import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* This will render the page content inside the layout */}
      </body>
    </html>
  );
}
