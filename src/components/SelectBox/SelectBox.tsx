import { ChangeEvent } from 'react';
import { Label } from '../Label';
import styles from './SelectBox.module.scss';

type SelectOption = {
    label: string;
    value: string;
    disabled?: boolean;
};

type Props = {
  value?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  options: SelectOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox = ({
  value,
  label,
  disabled,
  className,
  options,
  onChange,
}: Props) => {
  const selectBox = (
    <select
      className={className}
      disabled={disabled}
      onChange={onChange}
      value={value}
    >
      {options.map(({ value, label, disabled }) => (
        <option key={value} value={value} disabled={disabled}>
          {label}
        </option>
      ))}
    </select>
  );

  const result = label ? (
      <Label>
        <div className={styles.Label}>{label}</div>
        {selectBox}
      </Label>
    ) : (
      selectBox
    );

  return <div className={styles.SelectBox}>{result}</div>;
};

export { SelectBox };
export type { SelectOption };