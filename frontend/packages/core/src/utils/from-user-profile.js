export const formatMainGoal = (intl, mainGoal) => {
  return intl.formatMessage({ id: `GOALS.${mainGoal}_player`, defaultMessage: `${mainGoal}_player` }).toLowerCase()
}

export const formatRank = (intl, rank, game) => {
  return intl.formatMessage({ id: `RANKS.${game}.${rank}`, defaultMessage: `${rank}` })
}

export const formatRoles = (intl, roles = [], game) => {
  return roles
    .map(value => {
      return `${intl.formatMessage({ id: `ROLES.${game}.${value}`, defaultMessage: value })}`
    })
    .join(', ')
}

export const formatServers = (intl, servers) => {
  return servers
    .map(value => {
      return `${intl.formatMessage({ id: `SERVERS.${value}`, defaultMessage: value })}`
    })
    .join(', ')
}

export const formatLanguages = (intl, languages) => {
  return languages
    .map(value => {
      return `${intl.formatMessage({ id: `LANGUAGES.${value}`, defaultMessage: value })}`
    })
    .join(', ')
}

export const formatLanguage = (intl, country) => {
  return intl.formatMessage({
    id: `COUNTRIES.${country}`,
    defaultMessage: country
  })
}
