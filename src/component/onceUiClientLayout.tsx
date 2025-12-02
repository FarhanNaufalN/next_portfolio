'use client'; 

import { Column, DataThemeProvider, IconProvider, LayoutProvider, ThemeProvider, ToastProvider } from "@once-ui-system/core";
import Header from '@/component/header';

export default function OnceUIClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider>
        <DataThemeProvider>
          <ToastProvider>
            <IconProvider>
              <Column
                className="page-bg"
                background="page"
                fillWidth
                margin="0"
                padding="0"
                style={{ minHeight: "100vh" }}
              >
                <Header /> 
                {children}
              </Column>
            </IconProvider>
          </ToastProvider>
        </DataThemeProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}