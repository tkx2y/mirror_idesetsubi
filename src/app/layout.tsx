import "@/styles/globals.css";
import "@/styles/reset.css";
// import type { AppProps } from "next/app";
import { Noto_Sans_JP } from "next/font/google";
import AppPropsWithLayout from 'next/app'

const notoSansJP = Noto_Sans_JP({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={notoSansJP.className}>{children}</body>
        </html>
    )
}