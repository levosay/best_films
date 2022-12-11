export const dateFormatPattern =
  /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i

export const removeSpecChar = /[^\w]/g

export const passOnlyUpperLowerDigitsSpec =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,99}$/g

export const passWithoutSpaces = /^(?=.*[a-zA-Z0-9])(?!.*\s).{4,99}$/g
