import { Select, SelectItem } from "./select";

type CountrySelectProps = {
  defaultCountry?: string;
};

export const CountrySelect = ({ defaultCountry }: CountrySelectProps) => {
  return (
    <Select
      label="Country"
      name="country"
      defaultSelectedKey={defaultCountry && "CA"}
      isRequired
      items={[{ key: "CA", name: "Canada" }]}
    >
      {(item) => <SelectItem>{item.name}</SelectItem>}
    </Select>
  );
};
