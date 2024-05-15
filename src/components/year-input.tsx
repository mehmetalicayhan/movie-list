import { Input } from "./ui/input";

const YearInput = ({
  value,
  defaultValue,
  onChange,
  className,
}: {
  value: string;
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}) => {
  return (
    <Input
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
      placeholder="Year"
      maxLength={4}
      onKeyDown={(e) => {
        if (e.key.length === 1 && isNaN(parseInt(e.key))) {
          e.preventDefault();
        }
      }}
    />
  );
};
export default YearInput;
