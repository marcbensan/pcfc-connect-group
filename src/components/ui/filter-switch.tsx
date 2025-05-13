"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

function FilterSwitch({
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className="relative cursor-pointer inline-flex h-[3rem] w-48 shrink-0 items-center rounded-full border border-transparent bg-pcfctertiary shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <p className="text-xs text-pcfcwhite font-bold mr-2">IN-PERSON</p>
        <p className="text-xs text-pcfcwhite font-bold mr-2">ONLINE</p>
      </div>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="absolute bg-white/20 pointer-events-none block h-11 w-24 rounded-full ring-0 transition-transform transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
      />
    </SwitchPrimitive.Root>
  );
}

export { FilterSwitch };
