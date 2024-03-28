import styles from "./CheckBox.module.css";

interface CheckBoxProps {
  id: number;
  label: string;
}

export function CheckBox({ id, label }: CheckBoxProps) {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.input}
        type="checkbox"
        id={`${id}`}
        name={`${label}`}
      />
      <label htmlFor={`${id}`}>{label}</label>
    </div>
  );
}
