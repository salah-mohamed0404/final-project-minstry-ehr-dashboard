import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
   React.ElementRef<typeof SwitchPrimitives.Root>,
   React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
   <SwitchPrimitives.Root
      className={cn(
         "peer inline-flex h-7 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-primary-500 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-[#B5B8BA]",
         className,
      )}
      {...props}
      ref={ref}
   >
      <SwitchPrimitives.Thumb
         className={cn(
            "pointer-events-none block aspect-square h-full rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-9 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-[#E7E8E9] lang-ar:data-[state=checked]:-translate-x-9",
         )}
      />
   </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
