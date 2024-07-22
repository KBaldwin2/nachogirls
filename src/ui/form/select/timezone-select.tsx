import { Select, SelectItem } from "./select";

type TimezoneSelectProps = {
  defaultTimezone?: string | null;
};

export const TimezoneSelect = ({ defaultTimezone }: TimezoneSelectProps) => {
  return (
    <Select
      key={defaultTimezone}
      label="Timezone"
      name="timezone"
      id="timezone"
      isRequired
      defaultSelectedKey={defaultTimezone ?? undefined}
      items={[
        "America/St_Johns",
        "America/Halifax",
        "America/Glace_Bay",
        "America/Moncton",
        "America/Goose_Bay",
        "America/Blanc-Sablon",
        "America/Montreal",
        "America/Toronto",
        "America/Nipigon",
        "America/Thunder_Bay",
        "America/Iqaluit",
        "America/Pangnirtung",
        "America/Resolute",
        "America/Atikokan",
        "America/Rankin_Inlet",
        "America/Winnipeg",
        "America/Rainy_River",
        "America/Regina",
        "America/Swift_Current",
        "America/Edmonton",
        "America/Cambridge_Bay",
        "America/Yellowknife",
        "America/Inuvik",
        "America/Creston",
        "America/Dawson_Creek",
        "America/Vancouver",
        "America/Whitehorse",
        "America/Dawson",
      ].map((x) => ({ key: x, name: x }))}
    >
      {(item) => <SelectItem>{item.name}</SelectItem>}
    </Select>
  );
};
