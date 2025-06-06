import { TabProps, Tab as RACTab } from "react-aria-components";

export function Tab(props: TabProps) {
    return (
        <RACTab
          {...props}
          className={({ isSelected }) => `
            w-full rounded-full py-2.5 font-medium text-[1.1em] text-center cursor-default ring-black outline-none transition-colors focus-visible:ring-52
            ${
            isSelected
              ? 'text-emerald-700 bg-white shadow'
              : 'text-white hover:bg-white/10 pressed:bg-white/10'
          }
          `}
        />
      );
}