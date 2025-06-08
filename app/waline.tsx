"use client";

import { useEffect, useRef } from "react";
import type { WalineInitOptions } from "@waline/client";

interface WalineProps extends WalineInitOptions {
  path: string;
}

export default function Waline({ path, ...options }: WalineProps) {
  const walineInstanceRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamically import Waline
    import("@waline/client").then(({ init }) => {
      walineInstanceRef.current = init({
        el: containerRef.current,
        serverURL: options.serverURL,
        dark: options.dark,
        path: path,
        locale: {
          placeholder: "Share your thoughts...",
        },
        reaction: true,
        search: false,
        ...options,
      });
    });

    return () => {
      walineInstanceRef.current?.destroy();
    };
  }, [path, options]);

  return <div ref={containerRef} className="mt-8" />;
}
