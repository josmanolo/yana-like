export interface IProps {
  type?: string;
}

export interface ButtonProps {
  type?: string;
  text?: string;
  isPressed?: boolean
  onPress?(): void
  disabled?: boolean
}
