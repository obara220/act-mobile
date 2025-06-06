export function passwordValidator(password: string) {
  if (!password) return "Please fill in this field."
  if (password.length < 8) return 'Password should contain at least 8 characters.'
  return ''
}
