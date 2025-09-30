import i18next from "i18next"

export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: i18next.t("emailInvalid"),
}

export const namePattern = {
  value: /^[A-Za-z\s\u00C0-\u017F]{1,30}$/,
  message: i18next.t("nameInvalid"),
}

export const passwordRules = (isRequired = true) => {
  const rules = {
    minLength: {
      value: 8,
      message: i18next.t("passwordRule"),
    },
  }

  if (isRequired) {
    rules.required = i18next.t("passwordRequired")
  }

  return rules
}

export const confirmPasswordRules = (
  getValues,
  isRequired = true,
) => {
  const rules = {
    validate: (value) => {
      const password = getValues().password || getValues().new_password
      return value === password ? true : i18next.t("passwordNotMatch")
    },
  }

  if (isRequired) {
    rules.required = i18next.t("passwordRequired")
  }

  return rules
}
