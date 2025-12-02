import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import './globals.css';

import classNames from "classnames";
import { Column, DataThemeProvider, IconProvider, LayoutProvider, ThemeProvider, ToastProvider } from "@once-ui-system/core";
import { fonts } from "../resources/once-ui.config";
import Header from '@/component/header';

export const metadata = {
  title: 'App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning
      className={classNames(
        fonts.primary.variable,
        fonts.secondary.variable,
        fonts.tertiary.variable,
        fonts.code.variable,
      )}
    >
      <head>
        {/* theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  root.setAttribute('data-neutral', 'gray');
                  root.setAttribute('data-brand', 'blue');
                  root.setAttribute('data-accent', 'indigo');
                  root.setAttribute('data-solid', 'contrast');
                  root.setAttribute('data-solid-style', 'flat');
                  root.setAttribute('data-border', 'playful');
                  root.setAttribute('data-surface', 'filled');
                  root.setAttribute('data-transition', 'all');
                  root.setAttribute('data-scaling', '100');
                  root.setAttribute('data-viz-style', 'categorical');
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  const theme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(theme);
                  root.setAttribute('data-theme', resolvedTheme);
                  if (resolvedTheme === 'dark') root.classList.add('dark');
                  else root.classList.remove('dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>

      <body>
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
      </body>
    </html>
  );
}
