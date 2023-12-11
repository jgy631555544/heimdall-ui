import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { ConfigProvider, theme } from "antd";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "运维平台",
  description: "IT环境管理与监控的工具",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#04b366",
                colorLink: "#04b366",
                colorInfo: "#04b366",
              },
              algorithm: theme.darkAlgorithm,
            }}
          >
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
