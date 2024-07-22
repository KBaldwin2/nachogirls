import { Select, SelectItem } from "./select";

type ProvinceSelectProps = {
  defaultProvince?: string;
};

export const ProvinceSelect = ({ defaultProvince }: ProvinceSelectProps) => {
  return (
    <Select
      label="Province"
      name="province"
      defaultSelectedKey={defaultProvince && "SK"}
      isRequired
      items={[
        { key: "AB", name: "Alberta" },
        { key: "BC", name: "British Columbia" },
        { key: "MB", name: "Manitoba" },
        { key: "NB", name: "New Brunswick" },
        { key: "NL", name: "Newfoundland and Labrador" },
        { key: "NS", name: "Nova Scotia" },
        { key: "NT", name: "Northwest Territories" },
        { key: "NU", name: "Nunavut" },
        { key: "ON", name: "Ontario" },
        { key: "PE", name: "Prince Edward Island" },
        { key: "QC", name: "Québec" },
        { key: "SK", name: "Saskatchewan" },
        { key: "YT", name: "Yukon" },
      ]}
    >
      {(item) => <SelectItem>{item.name}</SelectItem>}
    </Select>
  );
};
