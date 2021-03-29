export interface NamedSwitchProps {
  left: string,
  right: string,
  value: boolean,
  onChange: (force?: boolean) => void
}
