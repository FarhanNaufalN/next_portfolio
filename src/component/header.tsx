"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Row } from "@once-ui-system/core";
import { SegmentedControl, ButtonOption } from "./segmentControl";
import { ThemeToggle } from "./themeToogle";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const navMenu: ButtonOption[] = [
    { value: "/", prefixIcon: "person" },
    { value: "/project", label: "Projects" },
    { value: "/education", label: "Education" },
    { value: "/gallery", label: "Gallery" },
  ];

  return (
    <header
      style={{ position: "sticky", top: 0, zIndex: 10 }}
      className="w-full"
    >
      <Row
        align="center"
        minHeight={10}
        minWidth={12}
        style={{
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--neutral-alpha-200)",
          paddingInline: 10,
        }}
      >
        <div
          className="
            w-full flex items-center justify-between px-2 py-2
            sm:grid sm:grid-cols-3 sm:items-center

          "
        >
         
          <div className="sm:col-start-1 sm:col-end-2 ml-2 flex justify-start">
            <h1 className="text-sm sm:text-l font-sans font-medium text-slate-700 dark:text-white">
              @hans_nafl
            </h1>
          </div>

         
          <div
            className="
              sm:col-start-2 sm:col-end-3 
              flex flex-col sm:flex-row items-center justify-center 
              gap-3 mt-2 sm:mt-0
            "
          >
            <SegmentedControl
              buttons={navMenu}
              selected={pathname}
              onToggle={(val) => router.push(val)}
              fillWidth={false}
            />
            <ThemeToggle />
          </div>

          
          <div
            className="
              sm:col-start-3 sm:col-end-4 
              flex items-center justify-end pr-4
            "
          >
            <div
              className="text-l sm:text-base text-slate-700 dark:text-white"
              aria-live="polite"
            >
              {now.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </Row>
    </header>
  );
}
