"use client";

import { useEffect } from "react";

/**
 * Locks body scroll when any modal is open. Use with isOpen state of dialogs/modals.
 * Ensures background does not scroll and keeps UX professional.
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}
