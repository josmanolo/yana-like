export interface InputProps {
  width?: string;
  placeholder?: string
  placeholderTextColor?: string
  onChangeText?: (text: string) => void
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  secureTextEntry?: any
  type?: string
  value?: string
}
