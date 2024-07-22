"use client";

import React from "react";
import {
  ModalOverlay,
  type ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const overlayStyles = tv({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg overflow-y-auto",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in",
    },
  },
});

const modalStyles = tv({
  base: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all ",
  variants: {
    isEntering: {
      true: "animate-in zoom-in-105 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out zoom-out-95 ease-in duration-200",
    },
    size: {
      md: "sm:my-8 sm:w-full sm:max-w-xl sm:p-6 min-w-[360px] sm:min-w-[480px]",
      lg: "sm:my-8 w-full sm:p-6 max-w-4xl",
    },
  },
});

type ModalProps = ModalOverlayProps & {
  size?: "md" | "lg";
};

export const Modal = (props: ModalProps) => {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <RACModal
        {...props}
        className={modalStyles({ size: props.size ?? "md" })}
      />
    </ModalOverlay>
  );
};
