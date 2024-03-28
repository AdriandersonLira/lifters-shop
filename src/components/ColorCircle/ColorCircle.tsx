export function ColorCircle({ color, size }: any) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1px solid #000",
      }}
    />
  );
}
