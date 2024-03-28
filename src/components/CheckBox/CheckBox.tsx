import styles from "./CheckBox.module.css";

interface CheckBoxProps {
  id: number;
  label: string;
  checked: boolean;
}

export function CheckBox({ id, label, checked = false }: CheckBoxProps) {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.input}
        type="checkbox"
        id={`${id}`}
        name={`${label}`}
        defaultChecked={checked}
      />
      <label htmlFor={`${id}`}>{label}</label>
    </div>
  );
}
