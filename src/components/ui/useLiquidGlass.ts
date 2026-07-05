import { LiquidGlass } from "@ybouane/liquidglass";
import { useEffect } from "react";
import type { RefObject } from "react";

export function useLiquidGlass(rootRef: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    if (!enabled || !rootRef.current) {
      return;
    }

    let instance: any = null;
    let cancelled = false;
    let timerId = 0;

    async function initAllGlass() {
      if (cancelled || !rootRef.current) {
        return;
      }

      const glassElements = rootRef.current.querySelectorAll<HTMLElement>(".glass");

      if (!glassElements.length) {
        return;
      }

      try {
        instance = await LiquidGlass.init({
          root: rootRef.current,
          glassElements,
        });

        if (cancelled) {
          instance?.destroy?.();
        }
      } catch (error) {
        console.error("LiquidGlass init failed", error);
      }
    }

    // Delay init to let all fade-up animations complete (cards become fully opaque)
    timerId = window.setTimeout(() => {
      void initAllGlass();
    }, 1200);

    return () => {
      cancelled = true;
      window.clearTimeout(timerId);
      if (instance) {
        instance.destroy();
      }
    };
  }, [enabled, rootRef]);
}
