import { TabPanelProps, TabPanel as RACTabPanel } from "react-aria-components";

export function TabPanel(props: TabPanelProps) {
    return (
        <RACTabPanel
          {...props}
          className="mt-2 text-gray-700 font-serif rounded-2xl bg-white focus-visible:ring-2 w-full"
        />
      );
}