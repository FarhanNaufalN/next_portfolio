"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Row,} from "@once-ui-system/core";
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
    <header style={{ position: "sticky", top: 0, zIndex: 10 }}
    className="w-full">

      <Row
        align="center"
        center
        minHeight={10}
        minWidth={12}
        s={{direction: "column"}}
        style={{
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--neutral-alpha-200)",
          paddingInline: 10
        }}
        >
         

            <div className="w-full grid grid-cols-4 items-center">
              <div />
               <div className="col-start-1 col-end-2 ml-xl">
                <div className=" text-sm text-slate-700 dark:text-slate-200" aria-live="polite">
                  <h1 className="text-l font-sans font-medium"> @hans_nafl</h1>
                </div>     
              </div>
              
                 
              <div className="col-start-2 col-end-4 flex justify-center">
                <SegmentedControl
                  buttons={navMenu}
                  selected={pathname}
                  onToggle={(val) => router.push(val)}
                  fillWidth={false}
                  compact={false}
                />

                <div className="ml-2">
                  <ThemeToggle />
                </div>
              </div>
              <div className="flex items-center justify-start">
                <div className="pr-2 text-sm text-slate-700 dark:text-slate-200" aria-live="polite">
                  {now.toLocaleTimeString()}
                </div>
              </div>
            </div>
      </Row>

    </header>
  );
}
