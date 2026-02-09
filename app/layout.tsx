import "./globals.css";

export const metadata = {
  title: "Ganavi D Gowda | Portfolio",
  description:
    "Computer Science student building scalable full-stack and NLP-based applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
