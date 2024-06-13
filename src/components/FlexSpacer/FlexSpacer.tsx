export default function FlexSpacer({ flex = 1 }: { flex?: number }) {
  return <div style={{ flexGrow: flex }} />;
}
