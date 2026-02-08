"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type RsvpModalProps = {
  open: boolean;
  code: string;
  name: string;
  onClose: () => void;
};

export function RsvpModal({ open, code, name, onClose }: RsvpModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleRsvp = useCallback(async () => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }, [code]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    const focusable = overlayRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0] as HTMLElement | undefined;
    first?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-modal-title"
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl border border-[#DDBEA9]/60 overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B705C]"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 pt-10 pb-8 text-center">
          {status === "success" ? (
            <>
              <div className="mx-auto w-16 h-16 mb-6" aria-hidden>
                <CheckmarkIcon />
              </div>
              <h2 id="rsvp-modal-title" className="font-serif text-2xl md:text-3xl text-[#6B705C]">
                Thank you {name}
              </h2>
              <p className="mt-2 text-sm text-slate-500">We can’t wait to celebrate with you.</p>
            </>
          ) : (
            <>
              <h2 id="rsvp-modal-title" className="font-serif text-2xl md:text-3xl text-[#6B705C]">
                You’re invited
              </h2>
              <p className="mt-2 text-sm text-slate-600">Join us for our wedding celebration.</p>
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600" role="alert">
                  {errorMessage}
                </p>
              )}
              <div className="mt-8">
                <Button
                  onClick={handleRsvp}
                  disabled={status === "loading"}
                  className="w-full bg-[#6B705C] text-white hover:bg-[#545843] rounded-full py-3 font-medium tracking-[0.16em] text-[11px] uppercase"
                >
                  {status === "loading" ? "Sending…" : "RSVP"}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      className="w-full h-full text-[#6B705C] animate-checkmark"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="currentColor"
        strokeWidth="3"
        className="animate-checkmark-circle"
      />
      <path
        d="M20 32l8 8 16-16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-checkmark-path"
      />
    </svg>
  );
}
