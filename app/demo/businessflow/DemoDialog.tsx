"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./demo.module.css";

export function DemoDialog({ children, title, onClose, wide = false }: {
  children: ReactNode;
  title: string;
  onClose: () => void;
  wide?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    dialog?.showModal();
    dialog?.querySelector<HTMLElement>("input, select")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      className={`${styles.dialog} ${wide ? styles.wideDialog : ""}`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
    >
      {children}
    </dialog>
  );
}
