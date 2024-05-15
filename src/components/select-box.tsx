import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps {
  options?: Option[];
  placeholder: string;
  loading?: boolean;
  value: string;
  onChange: (value: string) => void;
  triggerClassName?: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function SelectBox({
  options,
  placeholder,
  value,
  onChange,
  className,
  triggerClassName,
  disabled,
  loading,
  icon,
}: SelectBoxProps) {
  return (
    <Select
      disabled={disabled || loading}
      onValueChange={onChange}
      defaultValue={value}
    >
      <SelectTrigger className={triggerClassName}>
        {icon && (
          <div className="flex items-center justify-between  gap-2">
            <SelectValue placeholder={placeholder} />
            {icon}
          </div>
        )}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={className}>
        {options?.map((option: Option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectBox;
