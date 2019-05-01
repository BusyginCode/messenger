// eslint-disable-line max-lines
/* ignore coverage */

const playerFilters = {
  team_1611843: {
    'STEAM_1:0:79295022': true,
    'STEAM_1:1:208017641': true,
    'STEAM_1:1:227437474': true,
    'STEAM_1:1:35861504': true,
    'STEAM_1:1:49287189': true
  },
  team_161860: {
    'STEAM_1:0:122694050': true,
    'STEAM_1:0:144074579': true,
    'STEAM_1:0:26217115': true,
    'STEAM_1:0:27776013': true,
    'STEAM_1:0:53908971': true
  }
}

export default {
  loadingStatus: {
    'replaysById/5b8fabc90ec65e00513ad1d3': 'loaded',
    'csgoAnalyticsMatchWeaponStats/5b8fabc90ec65e00513ad1d3': 'loaded',
    'csgoAnalyticsMatchEntryFrags/5b8fabc90ec65e00513ad1d3': 'loaded',
    'csgoAnalyticsMatchClutches/5b8fabc90ec65e00513ad1d3': 'loaded',
    'economicsDataByReplay/5b8fabc90ec65e00513ad1d3': 'loaded',
    'playerStatsByReplay/5b8fabc90ec65e00513ad1d3': 'loaded'
  },
  activities: { tokens: {}, data: {} },
  app: { locale: 'en', activeGame: 'csgo' },
  auth: { authToken: null, refreshToken: null, resendToken: null },
  dictionaries: {
    features: {
      achievements: true,
      dashboard: true,
      lol: true,
      'csgo-analytics': true,
      'csgo-analytics-distance-chart': true
    },
    seo: [
      {
        id: 23,
        pattern: '/csgo/team/${teamProfileId}',
        title:
          '${teamProfile.name} Team CS:GO - Owner: ${teamProfile.owner}, Skill Level: ${teamProfile.skillLevel}, Language: ${teamProfile.langs} | DreamTeam',
        description: 'Team players CS:GO: ${teamProfile.players}, Servers: ${teamProfile.servers}'
      },
      {
        id: 22,
        pattern: '/csgo/player/${playerProfileName}',
        title:
          '${playerProfile.name} Player CS:GO - Team: ${playerProfile.teamName}, Skill Level: ${playerProfile.skillLevel}, Language: ${playerProfile.langs} | DreamTeam',
        description: 'DreamTeam: ${playerProfile.name} Player CS:GO - Team: ${playerProfile.teamName}'
      },
      {
        id: 14,
        pattern: '/csgo/teams',
        title: 'Find team for CS:GO | DreamTeam',
        description: 'DreamTeam: Find team for CS:GO'
      },
      { id: 24, pattern: '/csgo', title: 'CS:GO', description: 'CS:GO' },
      {
        id: 18,
        pattern: '/privacy-policy',
        title: 'Privacy Policy | DreamTeam',
        description: null
      },
      {
        id: 16,
        pattern: '/contacts',
        title: 'Contacts | DreamTeam',
        description: null
      },
      {
        id: 17,
        pattern: '/terms',
        title: 'Terms | DreamTeam',
        description: null
      },
      {
        id: 13,
        pattern: '/csgo/players',
        title: 'Find CS:GO Players | DreamTeam',
        description: 'DreamTeam: Find players for CS:GO'
      },
      {
        id: 25,
        pattern: '/lol/team/${teamProfileId}',
        title:
          '${teamProfile.name} Team LOL - Owner: ${teamProfile.owner}, Skill Level: ${teamProfile.skillLevel}, Language: ${teamProfile.langs} | DreamTeam',
        description: 'Team players LOL: ${teamProfile.players}, Servers: ${teamProfile.servers}'
      },
      {
        id: 26,
        pattern: '/lol/player/${playerProfileName}',
        title:
          '${playerProfile.name} Player LOL - Team: ${playerProfile.teamName}, Skill Level: ${playerProfile.skillLevel}, Language: ${playerProfile.langs} | DreamTeam',
        description: 'DreamTeam: ${playerProfile.name} Player LOL - Team: ${playerProfile.teamName}'
      },
      { id: 27, pattern: '/lol', title: 'LOL', description: null },
      {
        id: 28,
        pattern: '/lol/players',
        title: 'League of Legends Player Search. Find All Players | DreamTeam',
        description: 'DreamTeam: Find League of Legends best top active players'
      },
      {
        id: 21,
        pattern: '/lol/team/dashboard',
        title: '${team.name} Team Dashboard | DreamTeam',
        description: null
      },
      {
        id: 20,
        pattern: '/lol/player/dashboard',
        title: '${player.name} Dashboard | DreamTeam',
        description: null
      },
      {
        id: 29,
        pattern: '/csgo/player/dashboard',
        title: '${player.name} Dashboard | DreamTeam',
        description: null
      },
      {
        id: 30,
        pattern: '/csgo/team/dashboard',
        title: '${team.name} Team Dashboard | DreamTeam',
        description: null
      },
      {
        id: 31,
        pattern: '/lol/teams',
        title: 'League of Legends Team Finder. All Teams | DreamTeam',
        description: 'DreamTeam: Find team for League of Legends. Recruitment & team builder LoL'
      },
      {
        id: 32,
        pattern: '/lol/settings',
        title: 'The Ultimate Teambuilding and Skill-Growing Platform. CS:GO Team Finder',
        description: null
      },
      {
        id: 33,
        pattern: '/csgo/settings',
        title: 'Settings | DreamTeam',
        description: null
      },
      {
        id: 34,
        pattern: '/csgo/practice',
        title: 'PCW CS:GO Finder 5v5 | DreamTeam',
        description:
          'Get your practice games on! Take part in advanced PCW CS:GO Finder with 5-on-5 match-ups with the teams of your choice.'
      },
      {
        id: 35,
        pattern: '/lol/practice',
        title: 'PCW League of Legends Finder 5v5 | DreamTeam',
        description:
          'Get your practice games on! Take part in advanced PCW League of Legends Finder with 5-on-5 match-ups with the teams of your choice.'
      },
      {
        id: 15,
        pattern: '/',
        title: 'DreamTeam - The Ultimate Teambuilding and Skill-Growing Platform. CS:GO Team Finder',
        description:
          'DreamTeam: The Easiest way to Find a Team or Player for CS:GO, LoL and Dota2. Gaming Recruitment and Management Network'
      }
    ],
    languages: [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Spanish' },
      { code: 'de', name: 'German' },
      { code: 'ru', name: 'Russian' },
      { code: 'it', name: 'Italian' },
      { code: 'zh', name: 'Chinese' },
      { code: 'ab', name: 'Abkhazian' },
      { code: 'aa', name: 'Afar' },
      { code: 'af', name: 'Afrikaans' },
      { code: 'ak', name: 'Akan' },
      { code: 'sq', name: 'Albanian' },
      { code: 'am', name: 'Amharic' },
      { code: 'ar', name: 'Arabic' },
      { code: 'an', name: 'Aragonese' },
      { code: 'hy', name: 'Armenian' },
      { code: 'as', name: 'Assamese' },
      { code: 'av', name: 'Avaric' },
      { code: 'ae', name: 'Avestan' },
      { code: 'ay', name: 'Aymara' },
      { code: 'az', name: 'Azerbaijani' },
      { code: 'bm', name: 'Bambara' },
      { code: 'ba', name: 'Bashkir' },
      { code: 'eu', name: 'Basque' },
      { code: 'be', name: 'Belarusian' },
      { code: 'bn', name: 'Bengali' },
      { code: 'bh', name: 'Bihari languages' },
      { code: 'bi', name: 'Bislama' },
      { code: 'nb', name: 'Bokmål' },
      { code: 'bs', name: 'Bosnian' },
      { code: 'br', name: 'Breton' },
      { code: 'bg', name: 'Bulgarian' },
      { code: 'my', name: 'Burmese' },
      { code: 'ca', name: 'Catalan; Valencian' },
      { code: 'km', name: 'Central Khmer' },
      { code: 'ch', name: 'Chamorro' },
      { code: 'ce', name: 'Chechen' },
      { code: 'cv', name: 'Chuvash' },
      { code: 'kw', name: 'Cornish' },
      { code: 'co', name: 'Corsican' },
      { code: 'cr', name: 'Cree' },
      { code: 'hr', name: 'Croatian' },
      { code: 'cs', name: 'Czech' },
      { code: 'da', name: 'Danish' },
      { code: 'nl', name: 'Dutch; Flemish' },
      { code: 'dz', name: 'Dzongkha' },
      { code: 'eo', name: 'Esperanto' },
      { code: 'et', name: 'Estonian' },
      { code: 'ee', name: 'Ewe' },
      { code: 'fo', name: 'Faroese' },
      { code: 'fj', name: 'Fijian' },
      { code: 'fi', name: 'Finnish' },
      { code: 'fr', name: 'French' },
      { code: 'ff', name: 'Fulah' },
      { code: 'gd', name: 'Gaelic' },
      { code: 'gl', name: 'Galician' },
      { code: 'lg', name: 'Ganda' },
      { code: 'ka', name: 'Georgian' },
      { code: 'el', name: 'Greek' },
      { code: 'gn', name: 'Guarani' },
      { code: 'gu', name: 'Gujarati' },
      { code: 'ht', name: 'Haitian Creole' },
      { code: 'ha', name: 'Hausa' },
      { code: 'he', name: 'Hebrew' },
      { code: 'hz', name: 'Herero' },
      { code: 'hi', name: 'Hindi' },
      { code: 'ho', name: 'Hiri Motu' },
      { code: 'hu', name: 'Hungarian' },
      { code: 'is', name: 'Icelandic' },
      { code: 'io', name: 'Ido' },
      { code: 'ig', name: 'Igbo' },
      { code: 'id', name: 'Indonesian' },
      { code: 'ia', name: 'Interlingua' },
      { code: 'iu', name: 'Inuktitut' },
      { code: 'ik', name: 'Inupiaq' },
      { code: 'ga', name: 'Irish' },
      { code: 'ja', name: 'Japanese' },
      { code: 'jv', name: 'Javanese' },
      { code: 'kl', name: 'Kalaallisut' },
      { code: 'kn', name: 'Kannada' },
      { code: 'kr', name: 'Kanuri' },
      { code: 'ks', name: 'Kashmiri' },
      { code: 'kk', name: 'Kazakh' },
      { code: 'ki', name: 'Kikuyu' },
      { code: 'rw', name: 'Kinyarwanda' },
      { code: 'kv', name: 'Komi' },
      { code: 'kg', name: 'Kongo' },
      { code: 'ko', name: 'Korean' },
      { code: 'ku', name: 'Kurdish' },
      { code: 'kj', name: 'Kwanyama' },
      { code: 'ky', name: 'Kyrgyz' },
      { code: 'lo', name: 'Lao' },
      { code: 'la', name: 'Latin' },
      { code: 'lv', name: 'Latvian' },
      { code: 'li', name: 'Limburgish' },
      { code: 'ln', name: 'Lingala' },
      { code: 'lt', name: 'Lithuanian' },
      { code: 'lu', name: 'Luba-Katanga' },
      { code: 'lb', name: 'Luxembourgish' },
      { code: 'mk', name: 'Macedonian' },
      { code: 'mg', name: 'Malagasy' },
      { code: 'ms', name: 'Malay' },
      { code: 'ml', name: 'Malayalam' },
      { code: 'dv', name: 'Maldivian' },
      { code: 'mt', name: 'Maltese' },
      { code: 'gv', name: 'Manx' },
      { code: 'mi', name: 'Maori' },
      { code: 'mr', name: 'Marathi' },
      { code: 'mh', name: 'Marshallese' },
      { code: 'mn', name: 'Mongolian' },
      { code: 'na', name: 'Nauru' },
      { code: 'nv', name: 'Navajo; Navaho' },
      { code: 'nd', name: 'Ndebele, North' },
      { code: 'nr', name: 'Ndebele, South' },
      { code: 'ng', name: 'Ndonga' },
      { code: 'ne', name: 'Nepali' },
      { code: 'se', name: 'Northern Sami' },
      { code: 'no', name: 'Norwegian' },
      { code: 'ny', name: 'Nyanja' },
      { code: 'nn', name: 'Nynorsk' },
      { code: 'oc', name: 'Occitan' },
      { code: 'oj', name: 'Ojibwa' },
      { code: 'or', name: 'Oriya' },
      { code: 'om', name: 'Oromo' },
      { code: 'os', name: 'Ossetian' },
      { code: 'pi', name: 'Pali' },
      { code: 'ps', name: 'Pashto' },
      { code: 'fa', name: 'Persian' },
      { code: 'pl', name: 'Polish' },
      { code: 'pt', name: 'Portuguese' },
      { code: 'pa', name: 'Punjabi' },
      { code: 'qu', name: 'Quechua' },
      { code: 'ro', name: 'Romanian; Moldovan' },
      { code: 'rm', name: 'Romansh' },
      { code: 'rn', name: 'Rundi' },
      { code: 'sm', name: 'Samoan' },
      { code: 'sg', name: 'Sango' },
      { code: 'sa', name: 'Sanskrit' },
      { code: 'sc', name: 'Sardinian' },
      { code: 'sr', name: 'Serbian' },
      { code: 'sn', name: 'Shona' },
      { code: 'ii', name: 'Sichuan Yi; Nuosu' },
      { code: 'sd', name: 'Sindhi' },
      { code: 'si', name: 'Sinhala; Sinhalese' },
      { code: 'sk', name: 'Slovak' },
      { code: 'sl', name: 'Slovenian' },
      { code: 'so', name: 'Somali' },
      { code: 'st', name: 'Sotho, Southern' },
      { code: 'su', name: 'Sundanese' },
      { code: 'sw', name: 'Swahili' },
      { code: 'ss', name: 'Swati' },
      { code: 'sv', name: 'Swedish' },
      { code: 'tl', name: 'Tagalog' },
      { code: 'ty', name: 'Tahitian' },
      { code: 'tg', name: 'Tajik' },
      { code: 'ta', name: 'Tamil' },
      { code: 'tt', name: 'Tatar' },
      { code: 'te', name: 'Telugu' },
      { code: 'th', name: 'Thai' },
      { code: 'bo', name: 'Tibetan' },
      { code: 'ti', name: 'Tigrinya' },
      { code: 'to', name: 'Tonga (Tonga Islands)' },
      { code: 'ts', name: 'Tsonga' },
      { code: 'tn', name: 'Tswana' },
      { code: 'tr', name: 'Turkish' },
      { code: 'tk', name: 'Turkmen' },
      { code: 'tw', name: 'Twi' },
      { code: 'ug', name: 'Uighur; Uyghur' },
      { code: 'uk', name: 'Ukrainian' },
      { code: 'ur', name: 'Urdu' },
      { code: 'uz', name: 'Uzbek' },
      { code: 've', name: 'Venda' },
      { code: 'vi', name: 'Vietnamese' },
      { code: 'vo', name: 'Volapük' },
      { code: 'wa', name: 'Walloon' },
      { code: 'cy', name: 'Welsh' },
      { code: 'fy', name: 'Western Frisian' },
      { code: 'wo', name: 'Wolof' },
      { code: 'xh', name: 'Xhosa' },
      { code: 'yi', name: 'Yiddish' },
      { code: 'yo', name: 'Yoruba' },
      { code: 'za', name: 'Zhuang; Chuang' },
      { code: 'zu', name: 'Zulu' }
    ],
    regions: [
      { id: 1, name: 'Africa' },
      { id: 2, name: 'Asia' },
      { id: 3, name: 'Central America' },
      { id: 4, name: 'Europe' },
      { id: 5, name: 'Middle East' },
      { id: 6, name: 'North America' },
      { id: 7, name: 'Oceania' },
      { id: 8, name: 'South America' },
      { id: 9, name: 'The Caribbean' }
    ],
    countries: [
      { code: 'us', name: 'United States' },
      { code: 'br', name: 'Brazil' },
      { code: 'de', name: 'Germany' },
      { code: 'pl', name: 'Poland' },
      { code: 'ru', name: 'Russia' },
      { code: 'gb', name: 'United Kingdom' },
      { code: 'af', name: 'Afghanistan' },
      { code: 'al', name: 'Albania' },
      { code: 'dz', name: 'Algeria' },
      { code: 'as', name: 'American Samoa' },
      { code: 'ad', name: 'Andorra' },
      { code: 'ao', name: 'Angola' },
      { code: 'ai', name: 'Anguilla' },
      { code: 'aq', name: 'Antarctica' },
      { code: 'ag', name: 'Antigua and Barbuda' },
      { code: 'ar', name: 'Argentina' },
      { code: 'am', name: 'Armenia' },
      { code: 'aw', name: 'Aruba' },
      { code: 'au', name: 'Australia' },
      { code: 'at', name: 'Austria' },
      { code: 'az', name: 'Azerbaijan' },
      { code: 'bs', name: 'Bahamas, The' },
      { code: 'bh', name: 'Bahrain' },
      { code: 'bd', name: 'Bangladesh' },
      { code: 'bb', name: 'Barbados' },
      { code: 'by', name: 'Belarus' },
      { code: 'be', name: 'Belgium' },
      { code: 'bz', name: 'Belize' },
      { code: 'bj', name: 'Benin' },
      { code: 'bm', name: 'Bermuda' },
      { code: 'bt', name: 'Bhutan' },
      { code: 'bo', name: 'Bolivia' },
      { code: 'ba', name: 'Bosnia and Herzegovina' },
      { code: 'bw', name: 'Botswana' },
      { code: 'bv', name: 'Bouvet Island' },
      { code: 'io', name: 'British Indian Ocean Territory' },
      { code: 'vg', name: 'British Virgin Islands' },
      { code: 'bn', name: 'Brunei' },
      { code: 'bg', name: 'Bulgaria' },
      { code: 'bf', name: 'Burkina Faso' },
      { code: 'bi', name: 'Burundi' },
      { code: 'kh', name: 'Cambodia' },
      { code: 'cm', name: 'Cameroon' },
      { code: 'ca', name: 'Canada' },
      { code: 'cv', name: 'Cape Verde' },
      { code: 'ky', name: 'Cayman Islands' },
      { code: 'cf', name: 'Central African Republic' },
      { code: 'td', name: 'Chad' },
      { code: 'cl', name: 'Chile' },
      { code: 'cn', name: 'China' },
      { code: 'cx', name: 'Christmas Island' },
      { code: 'cc', name: 'Cocos (Keeling) Islands' },
      { code: 'co', name: 'Colombia' },
      { code: 'km', name: 'Comoros' },
      { code: 'cd', name: 'Congo, Democratic Republic of the' },
      { code: 'cg', name: 'Congo, Republic of the' },
      { code: 'ck', name: 'Cook Islands' },
      { code: 'cr', name: 'Costa Rica' },
      { code: 'ci', name: "Cote d'Ivoire" },
      { code: 'hr', name: 'Croatia' },
      { code: 'cu', name: 'Cuba' },
      { code: 'cw', name: 'Curacao' },
      { code: 'cy', name: 'Cyprus' },
      { code: 'cz', name: 'Czech Republic' },
      { code: 'dk', name: 'Denmark' },
      { code: 'dj', name: 'Djibouti' },
      { code: 'dm', name: 'Dominica' },
      { code: 'do', name: 'Dominican Republic' },
      { code: 'tl', name: 'East Timor' },
      { code: 'ec', name: 'Ecuador' },
      { code: 'eg', name: 'Egypt' },
      { code: 'sv', name: 'El Salvador' },
      { code: 'gq', name: 'Equatorial Guinea' },
      { code: 'er', name: 'Eritrea' },
      { code: 'ee', name: 'Estonia' },
      { code: 'et', name: 'Ethiopia' },
      { code: 'fk', name: 'Falkland Islands (Islas Malvinas)' },
      { code: 'fo', name: 'Faroe Islands' },
      { code: 'fj', name: 'Fiji' },
      { code: 'fi', name: 'Finland' },
      { code: 'fr', name: 'France' },
      { code: 'gf', name: 'French Guiana' },
      { code: 'pf', name: 'French Polynesia' },
      { code: 'tf', name: 'French Southern and Antarctic Lands' },
      { code: 'ga', name: 'Gabon' },
      { code: 'gm', name: 'Gambia, The' },
      { code: 'ge', name: 'Georgia' },
      { code: 'gh', name: 'Ghana' },
      { code: 'gi', name: 'Gibraltar' },
      { code: 'gr', name: 'Greece' },
      { code: 'gl', name: 'Greenland' },
      { code: 'gd', name: 'Grenada' },
      { code: 'gp', name: 'Guadeloupe' },
      { code: 'gu', name: 'Guam' },
      { code: 'gt', name: 'Guatemala' },
      { code: 'gg', name: 'Guernsey' },
      { code: 'gn', name: 'Guinea' },
      { code: 'gw', name: 'Guinea-Bissau' },
      { code: 'gy', name: 'Guyana' },
      { code: 'ht', name: 'Haiti' },
      { code: 'hm', name: 'Heard Island and McDonald Islands' },
      { code: 'va', name: 'Holy See (Vatican City)' },
      { code: 'hn', name: 'Honduras' },
      { code: 'hk', name: 'Hong Kong' },
      { code: 'hu', name: 'Hungary' },
      { code: 'is', name: 'Iceland' },
      { code: 'in', name: 'India' },
      { code: 'id', name: 'Indonesia' },
      { code: 'ir', name: 'Iran' },
      { code: 'iq', name: 'Iraq' },
      { code: 'ie', name: 'Ireland' },
      { code: 'im', name: 'Isle of Man' },
      { code: 'il', name: 'Israel' },
      { code: 'it', name: 'Italy' },
      { code: 'jm', name: 'Jamaica' },
      { code: 'jp', name: 'Japan' },
      { code: 'je', name: 'Jersey' },
      { code: 'jo', name: 'Jordan' },
      { code: 'kz', name: 'Kazakhstan' },
      { code: 'ke', name: 'Kenya' },
      { code: 'ki', name: 'Kiribati' },
      { code: 'kp', name: 'Korea, North' },
      { code: 'kr', name: 'Korea, South' },
      { code: 'xk', name: 'Kosovo' },
      { code: 'kw', name: 'Kuwait' },
      { code: 'kg', name: 'Kyrgyzstan' },
      { code: 'la', name: 'Laos' },
      { code: 'lv', name: 'Latvia' },
      { code: 'lb', name: 'Lebanon' },
      { code: 'ls', name: 'Lesotho' },
      { code: 'lr', name: 'Liberia' },
      { code: 'ly', name: 'Libyan Arab' },
      { code: 'li', name: 'Liechtenstein' },
      { code: 'lt', name: 'Lithuania' },
      { code: 'lu', name: 'Luxembourg' },
      { code: 'mo', name: 'Macau' },
      { code: 'mg', name: 'Madagascar' },
      { code: 'mw', name: 'Malawi' },
      { code: 'my', name: 'Malaysia' },
      { code: 'mv', name: 'Maldives' },
      { code: 'ml', name: 'Mali' },
      { code: 'mt', name: 'Malta' },
      { code: 'mh', name: 'Marshall Islands' },
      { code: 'mq', name: 'Martinique' },
      { code: 'mr', name: 'Mauritania' },
      { code: 'mu', name: 'Mauritius' },
      { code: 'yt', name: 'Mayotte' },
      { code: 'mx', name: 'Mexico' },
      { code: 'fm', name: 'Micronesia, Federated States of' },
      { code: 'md', name: 'Moldova, Republic of' },
      { code: 'mc', name: 'Monaco' },
      { code: 'mn', name: 'Mongolia' },
      { code: 'me', name: 'Montenegro' },
      { code: 'ms', name: 'Montserrat' },
      { code: 'ma', name: 'Morocco' },
      { code: 'mz', name: 'Mozambique' },
      { code: 'mm', name: 'Myanmar' },
      { code: 'na', name: 'Namibia' },
      { code: 'nr', name: 'Nauru' },
      { code: 'np', name: 'Nepal' },
      { code: 'nl', name: 'Netherlands' },
      { code: 'nc', name: 'New Caledonia' },
      { code: 'nz', name: 'New Zealand' },
      { code: 'ni', name: 'Nicaragua' },
      { code: 'ne', name: 'Niger' },
      { code: 'ng', name: 'Nigeria' },
      { code: 'nu', name: 'Niue' },
      { code: 'nf', name: 'Norfolk Island' },
      { code: 'mp', name: 'Northern Mariana Islands' },
      { code: 'no', name: 'Norway' },
      { code: 'om', name: 'Oman' },
      { code: 'pk', name: 'Pakistan' },
      { code: 'pw', name: 'Palau' },
      { code: 'ps', name: 'Palestine, State of' },
      { code: 'pa', name: 'Panama' },
      { code: 'pg', name: 'Papua New Guinea' },
      { code: 'py', name: 'Paraguay' },
      { code: 'pe', name: 'Peru' },
      { code: 'ph', name: 'Philippines' },
      { code: 'pn', name: 'Pitcairn Islands' },
      { code: 'pt', name: 'Portugal' },
      { code: 'pr', name: 'Puerto Rico' },
      { code: 'qa', name: 'Qatar' },
      { code: 're', name: 'Reunion' },
      { code: 'ro', name: 'Romania' },
      { code: 'rw', name: 'Rwanda' },
      { code: 'bl', name: 'Saint Barthelemy' },
      { code: 'sh', name: 'Saint Helena' },
      { code: 'kn', name: 'Saint Kitts and Nevis' },
      { code: 'lc', name: 'Saint Lucia' },
      { code: 'mf', name: 'Saint Martin' },
      { code: 'pm', name: 'Saint Pierre and Miquelon' },
      { code: 'vc', name: 'Saint Vincent and the Grenadines' },
      { code: 'ws', name: 'Samoa' },
      { code: 'sm', name: 'San Marino' },
      { code: 'st', name: 'Sao Tome and Principe' },
      { code: 'sa', name: 'Saudi Arabia' },
      { code: 'sn', name: 'Senegal' },
      { code: 'rs', name: 'Serbia' },
      { code: 'sc', name: 'Seychelles' },
      { code: 'sl', name: 'Sierra Leone' },
      { code: 'sg', name: 'Singapore' },
      { code: 'sx', name: 'Sint Maarten' },
      { code: 'sk', name: 'Slovakia' },
      { code: 'si', name: 'Slovenia' },
      { code: 'sb', name: 'Solomon Islands' },
      { code: 'so', name: 'Somalia' },
      { code: 'za', name: 'South Africa' },
      { code: 'gs', name: 'South Georgia and the Islands' },
      { code: 'es', name: 'Spain' },
      { code: 'lk', name: 'Sri Lanka' },
      { code: 'sd', name: 'Sudan' },
      { code: 'sr', name: 'Suriname' },
      { code: 'sj', name: 'Svalbard' },
      { code: 'sz', name: 'Swaziland' },
      { code: 'se', name: 'Sweden' },
      { code: 'ch', name: 'Switzerland' },
      { code: 'sy', name: 'Syrian Arab Republic' },
      { code: 'tw', name: 'Taiwan' },
      { code: 'tj', name: 'Tajikistan' },
      { code: 'tz', name: 'Tanzania, United Republic of' },
      { code: 'th', name: 'Thailand' },
      { code: 'mk', name: 'The Former Yugoslav Republic of Macedonia' },
      { code: 'tg', name: 'Togo' },
      { code: 'tk', name: 'Tokelau' },
      { code: 'to', name: 'Tonga' },
      { code: 'tt', name: 'Trinidad and Tobago' },
      { code: 'tn', name: 'Tunisia' },
      { code: 'tr', name: 'Turkey' },
      { code: 'tm', name: 'Turkmenistan' },
      { code: 'tc', name: 'Turks and Caicos Islands' },
      { code: 'tv', name: 'Tuvalu' },
      { code: 'ug', name: 'Uganda' },
      { code: 'ua', name: 'Ukraine' },
      { code: 'ae', name: 'United Arab Emirates' },
      { code: 'uy', name: 'Uruguay' },
      { code: 'uz', name: 'Uzbekistan' },
      { code: 'vu', name: 'Vanuatu' },
      { code: 've', name: 'Venezuela' },
      { code: 'vn', name: 'Vietnam' },
      { code: 'vi', name: 'Virgin Islands (US)' },
      { code: 'wf', name: 'Wallis and Futuna' },
      { code: 'eh', name: 'Western Sahara' },
      { code: 'ye', name: 'Yemen' },
      { code: 'zm', name: 'Zambia' },
      { code: 'zw', name: 'Zimbabwe' }
    ],
    cities: [],
    isLoaded: true
  },
  modal: {},
  notification: { notifications: [], isLoaded: false },
  user: {
    isLoaded: true,
    isLoggedIn: false,
    isTeamLoaded: false,
    new_teams: [],
    wallet: { balance: 0 },
    teams: { code: 200, message: 'JsonWebTokenError: jwt must be provided' }
  },
  news: { data: [], isLoaded: false },
  feedback: { data: [], isLoaded: false },
  profile: { player: { isLoaded: false }, team: { isLoaded: false } },
  cookiesAgreement: { show: false },
  player: { playersById: {}, playersByExtId: {} },
  users: {},
  profiles: {},
  players: {
    allPlayers: { isLoaded: false, ids: [], data: {}, total: 0 },
    players: { isLoaded: false, ids: [], data: {}, total: 0 }
  },
  teams: {
    allTeams: { isLoaded: false, ids: [], data: {}, total: 0 },
    vacancies: { isLoaded: false, ids: [], data: {}, total: 0 },
    teams: {}
  },
  practice: {
    games: {
      isLoaded: false,
      ids: [],
      data: {},
      total: 0,
      applied: 0,
      created: 0
    },
    applications: { ids: [], data: {} },
    teamProfiles: { ids: [], data: {} }
  },
  game: {
    isLoaded: true,
    goals: [
      { id: '5b2b67818ecce300261201b2', name: 'play_for_fun', ext_id: '1' },
      {
        id: '5b2b67818ecce300261201b3',
        name: 'play_in_amateur_leagues',
        ext_id: '2'
      },
      {
        id: '5b2b67818ecce300261201b4',
        name: 'become_professional',
        ext_id: '3'
      }
    ],
    maps: [
      { id: '5b2b67818ecce300261201b5', name: 'de_vertigo' },
      { id: '5b2b67818ecce300261201b6', name: 'cs_assault' },
      { id: '5b2b67818ecce300261201b7', name: 'de_sugarcane' },
      { id: '5b2b67818ecce300261201b8', name: 'ar_monastery' },
      { id: '5b2b67818ecce300261201b9', name: 'de_safehouse' },
      { id: '5b2b67818ecce300261201ba', name: 'de_nuke' },
      { id: '5b2b67818ecce300261201bb', name: 'cs_office' },
      { id: '5b2b67818ecce300261201bc', name: 'de_cbble' },
      { id: '5b2b67818ecce300261201bd', name: 'de_dust2' },
      { id: '5b2b67818ecce300261201be', name: 'de_lake' },
      { id: '5b2b67818ecce300261201bf', name: 'de_inferno' },
      { id: '5b2b67818ecce300261201c0', name: 'cs_militia' },
      { id: '5b2b67818ecce300261201c1', name: 'cs_italy' },
      { id: '5b2b67818ecce300261201c2', name: 'de_bank' },
      { id: '5b2b67818ecce300261201c3', name: 'de_dust' },
      { id: '5b2b67818ecce300261201c4', name: 'de_aztec' },
      { id: '5b2b67818ecce300261201c5', name: 'ar_baggage' },
      { id: '5b2b67818ecce300261201c6', name: 'ar_shoots' },
      { id: '5b2b67818ecce300261201c7', name: 'de_stmarc' },
      { id: '5b2b67818ecce300261201c8', name: 'de_train' },
      { id: '5b2b67818ecce300261201c9', name: 'de_canals' },
      { id: '5b2b67818ecce300261201ca', name: 'de_shortdust' },
      { id: '5b2b67818ecce300261201cb', name: 'de_shorttrain' },
      { id: '5b2b67818ecce300261201cc', name: 'de_mirage' },
      { id: '5b2b67818ecce300261201cd', name: 'de_overpass' },
      { id: '5b2b67818ecce300261201ce', name: 'de_cache' }
    ],
    servers: [
      { id: '5b2b67828ecce300261201e6', name: 'eu_west', ext_id: '1' },
      { id: '5b2b67828ecce300261201e7', name: 'eu_east', ext_id: '2' },
      { id: '5b2b67828ecce300261201e8', name: 'eu_north', ext_id: '3' },
      { id: '5b2b67828ecce300261201e9', name: 'us_northwest', ext_id: '4' },
      { id: '5b2b67828ecce300261201ea', name: 'us_northeast', ext_id: '5' },
      { id: '5b2b67828ecce300261201eb', name: 'us_northcentral', ext_id: '6' },
      { id: '5b2b67828ecce300261201ec', name: 'us_southwest', ext_id: '7' },
      { id: '5b2b67828ecce300261201ed', name: 'us_southeast', ext_id: '8' },
      { id: '5b2b67828ecce300261201ee', name: 'china_shanghai', ext_id: '9' },
      { id: '5b2b67828ecce300261201ef', name: 'china_guangzhou', ext_id: '10' },
      { id: '5b2b67828ecce300261201f0', name: 'china_tianjin', ext_id: '11' },
      { id: '5b2b67828ecce300261201f1', name: 'australia', ext_id: '12' },
      { id: '5b2b67828ecce300261201f2', name: 'brazil', ext_id: '13' },
      { id: '5b2b67828ecce300261201f3', name: 'chile', ext_id: '14' },
      { id: '5b2b67828ecce300261201f4', name: 'emirates', ext_id: '15' },
      { id: '5b2b67828ecce300261201f5', name: 'india', ext_id: '16' },
      { id: '5b2b67828ecce300261201f6', name: 'india_east', ext_id: '17' },
      { id: '5b2b67828ecce300261201f7', name: 'poland', ext_id: '18' },
      { id: '5b2b67828ecce300261201f8', name: 'japan', ext_id: '19' },
      { id: '5b2b67828ecce300261201f9', name: 'hong_kong', ext_id: '20' },
      { id: '5b2b67828ecce300261201fa', name: 'singapore', ext_id: '21' },
      { id: '5b2b67828ecce300261201fb', name: 'south_africa', ext_id: '22' },
      { id: '5b2b67828ecce300261201fc', name: 'spain', ext_id: '23' }
    ],
    ranks: [
      {
        id: '5b2b67818ecce300261201cf',
        name: 'silver_i',
        weight: 1,
        ext_id: '1'
      },
      {
        id: '5b2b67818ecce300261201d0',
        name: 'silver_ii',
        weight: 2,
        ext_id: '2'
      },
      {
        id: '5b2b67818ecce300261201d1',
        name: 'silver_iii',
        weight: 3,
        ext_id: '3'
      },
      {
        id: '5b2b67818ecce300261201d2',
        name: 'silver_iv',
        weight: 4,
        ext_id: '4'
      },
      {
        id: '5b2b67818ecce300261201d3',
        name: 'silver_elite',
        weight: 5,
        ext_id: '5'
      },
      {
        id: '5b2b67818ecce300261201d4',
        name: 'silver_elite_master',
        weight: 6,
        ext_id: '6'
      },
      {
        id: '5b2b67818ecce300261201d5',
        name: 'goals_nova_i',
        weight: 7,
        ext_id: '7'
      },
      {
        id: '5b2b67818ecce300261201d6',
        name: 'goals_nova_ii',
        weight: 8,
        ext_id: '8'
      },
      {
        id: '5b2b67818ecce300261201d7',
        name: 'goals_nova_iii',
        weight: 9,
        ext_id: '9'
      },
      {
        id: '5b2b67818ecce300261201d8',
        name: 'goals_nova_master',
        weight: 10,
        ext_id: '10'
      },
      {
        id: '5b2b67818ecce300261201d9',
        name: 'master_guardian_i',
        weight: 11,
        ext_id: '11'
      },
      {
        id: '5b2b67818ecce300261201da',
        name: 'master_guardian_ii',
        weight: 12,
        ext_id: '12'
      },
      {
        id: '5b2b67818ecce300261201db',
        name: 'master_guardian_elite',
        weight: 13,
        ext_id: '13'
      },
      {
        id: '5b2b67818ecce300261201dc',
        name: 'distinguished_master_guardian',
        weight: 14,
        ext_id: '14'
      },
      {
        id: '5b2b67818ecce300261201dd',
        name: 'legendary_eagle',
        weight: 15,
        ext_id: '15'
      },
      {
        id: '5b2b67818ecce300261201de',
        name: 'legendary_eagle_master',
        weight: 16,
        ext_id: '16'
      },
      {
        id: '5b2b67818ecce300261201df',
        name: 'supreme_master_first_class',
        weight: 17,
        ext_id: '17'
      },
      {
        id: '5b2b67818ecce300261201e0',
        name: 'global_elite',
        weight: 18,
        ext_id: '18'
      }
    ],
    roles: [
      {
        id: '5b2b67818ecce300261201e1',
        name: 'sniper',
        type: 'in-game',
        ext_id: '1'
      },
      {
        id: '5b2b67828ecce300261201e2',
        name: 'assault',
        type: 'in-game',
        ext_id: '2'
      },
      {
        id: '5b2b67828ecce300261201e3',
        name: 'support',
        type: 'in-game',
        ext_id: '3'
      },
      {
        id: '5b2b67828ecce300261201e4',
        name: 'captain',
        type: 'tactical',
        ext_id: '4'
      },
      {
        id: '5b2b67828ecce300261201e5',
        name: 'strategist',
        type: 'tactical',
        ext_id: '5'
      }
    ],
    feed: { data: [], isLoaded: false }
  },
  weapons: {
    weaponsByName: {
      incgrenade: {
        name: 'Incendiary Grenade',
        class: 'firebomb',
        price: 600,
        kill_award: 0
      },
      molotov: {
        name: 'Molotov',
        class: 'firebomb',
        price: 400,
        kill_award: 0
      },
      hegrenade: { name: 'HE', class: 'damaging', price: 300, kill_award: 0 },
      flashbang: {
        name: 'Flashbang',
        class: 'tactical',
        price: 200,
        kill_award: 0
      },
      smokegrenade: {
        name: 'Smoke Grenade',
        class: 'tactical',
        price: 300,
        kill_award: 0
      },
      decoy: {
        name: 'Decoy Grenade',
        class: 'tactical',
        price: 50,
        kill_award: 0
      },
      usp_silencer: {
        id: 'usp_silencer',
        name: 'USP',
        class: 'pistol',
        price: 200,
        kill_award: 300
      },
      hkp2000: {
        id: 'hkp2000',
        name: 'P2000',
        class: 'pistol',
        price: 200,
        kill_award: 300
      },
      glock: {
        id: 'glock',
        name: 'Glock-18',
        class: 'pistol',
        price: 200,
        kill_award: 300
      },
      elite: {
        id: 'elite',
        name: 'Dual Berettas',
        class: 'pistol',
        price: 400,
        kill_award: 300
      },
      p250: {
        id: 'p250',
        name: 'P250',
        class: 'pistol',
        price: 300,
        kill_award: 300
      },
      fiveseven: {
        id: 'fiveseven',
        name: 'Five-SeveN',
        class: 'pistol',
        price: 500,
        kill_award: 300
      },
      tec9: {
        id: 'tec9',
        name: 'Tec-9',
        class: 'pistol',
        price: 500,
        kill_award: 300
      },
      cz75a: {
        id: 'cz75a',
        name: 'CZ75-Auto',
        class: 'pistol',
        price: 500,
        kill_award: 50
      },
      deagle: {
        id: 'deagle',
        name: 'Desert Eagle',
        class: 'pistol',
        price: 700,
        kill_award: 300
      },
      revolver: {
        id: 'resolver',
        name: 'R8 Revolver',
        class: 'pistol',
        price: 600,
        kill_award: 300
      },
      nova: {
        id: 'nova',
        name: 'Nova',
        class: 'smg',
        price: 1200,
        kill_award: 900
      },
      xm1014: {
        id: 'xm1014',
        name: 'XM1014',
        class: 'smg',
        price: 2000,
        kill_award: 900
      },
      sawedoff: {
        id: 'sawedoff',
        name: 'Sawed-Off',
        class: 'smg',
        price: 1200,
        kill_award: 900
      },
      mag7: {
        id: 'mag7',
        name: 'MAG-7',
        class: 'smg',
        price: 1800,
        kill_award: 900
      },
      m249: {
        id: 'm249',
        name: 'M249',
        class: 'smg',
        price: 5200,
        kill_award: 300
      },
      negev: {
        id: 'negev',
        name: 'Negev',
        class: 'smg',
        price: 1700,
        kill_award: 300
      },
      mp9: {
        id: 'mp9',
        name: 'MP9',
        class: 'smg',
        price: 1250,
        kill_award: 600
      },
      mac10: {
        id: 'mac10',
        name: 'MAC-10',
        class: 'smg',
        price: 1050,
        kill_award: 600
      },
      mp7: {
        id: 'mp7',
        name: 'MP7',
        class: 'smg',
        price: 1500,
        kill_award: 600
      },
      ump45: {
        id: 'ump45',
        name: 'UMP-45',
        class: 'smg',
        price: 1200,
        kill_award: 600
      },
      p90: {
        id: 'p90',
        name: 'P90',
        class: 'smg',
        price: 2350,
        kill_award: 300
      },
      bizon: {
        id: 'bizon',
        name: 'PP-Bizon',
        class: 'smg',
        price: 1400,
        kill_award: 600
      },
      famas: {
        id: 'famas',
        name: 'FAMAS',
        class: 'rifle',
        price: 2250,
        kill_award: 300
      },
      galilar: {
        id: 'galilar',
        name: 'Galil AR',
        class: 'rifle',
        price: 2000,
        kill_award: 300
      },
      m4a4: {
        id: 'm4a4',
        name: 'M4A4',
        class: 'rifle',
        price: 3100,
        kill_award: 300
      },
      m4a1: {
        id: 'm4a1',
        name: 'M4A1',
        class: 'rifle',
        price: 3100,
        kill_award: 300
      },
      m4a1_silencer: {
        id: 'm4a1_silencer',
        name: 'M4A1-S',
        class: 'rifle',
        price: 3100,
        kill_award: 300
      },
      ak47: {
        id: 'ak47',
        name: 'AK-47',
        class: 'rifle',
        price: 2700,
        kill_award: 300
      },
      aug: {
        id: 'aug',
        name: 'AUG Rifle',
        class: 'rifle',
        price: 3300,
        kill_award: 300
      },
      ssg08: {
        id: 'ssg08',
        name: 'SSG 08',
        class: 'sniper-rifle',
        price: 1700,
        kill_award: 300
      },
      awp: {
        id: 'awp',
        name: 'AWP',
        class: 'sniper-rifle',
        price: 4750,
        kill_award: 100
      },
      scar20: {
        id: 'scar20',
        name: 'SCAR-20',
        class: 'sniper-rifle',
        price: 5000,
        kill_award: 300
      },
      g3sg1: {
        id: 'g3sg1',
        name: 'G3SG1',
        class: 'sniper-rifle',
        price: 5000,
        kill_award: 300
      },
      taser: {
        id: 'taser',
        name: 'Zeus x27',
        class: 'specific',
        price: 200,
        kill_award: 0
      },
      knife: {
        id: 'knife',
        class: 'Knife',
        name: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_t: {
        id: 'knife_t',
        name: 'Knife',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_flip: {
        id: 'knife_flip',
        class: 'knife',
        name: 'Flip Knife',
        price: 0,
        kill_award: 1500
      },
      knife_gut: {
        id: 'knife_gut',
        name: 'Gut Knife',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_karambit: {
        id: 'knife_karambit',
        name: 'Karambit',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_m9_bayonet: {
        id: 'knife_m9_bayonet',
        name: 'M9 Bayonet',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_tactical: {
        id: 'knife_tactical',
        name: 'Huntsman Knife',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_falchion: {
        id: 'knife_falchion',
        name: 'Falchion Knife',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_survival_bowie: {
        id: 'knife_survival_bowie',
        name: 'Bowie Knife',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_butterfly: {
        id: 'knife_butterfly',
        name: 'Butterfly Knife',
        class: 'knife',
        price: 0,
        kill_award: 1500
      },
      knife_push: {
        id: 'knife_push',
        name: 'Shadow Dag',
        class: 'knife',
        price: 0,
        kill_award: 1500
      }
    },
    weapons: [
      'incgrenade',
      'molotov',
      'hegrenade',
      'flashbang',
      'smokegrenade',
      'decoy',
      'usp_silencer',
      'hkp2000',
      'glock',
      'elite',
      'p250',
      'fiveseven',
      'tec9',
      'cz75a',
      'deagle',
      'revolver',
      'nova',
      'xm1014',
      'sawedoff',
      'mag7',
      'm249',
      'negev',
      'mp9',
      'mac10',
      'mp7',
      'ump45',
      'p90',
      'bizon',
      'famas',
      'galilar',
      'm4a4',
      'm4a1',
      'm4a1_silencer',
      'ak47',
      'aug',
      'ssg08',
      'awp',
      'scar20',
      'g3sg1',
      'taser',
      'knife',
      'knife_t',
      'knife_flip',
      'knife_gut',
      'knife_karambit',
      'knife_m9_bayonet',
      'knife_tactical',
      'knife_falchion',
      'knife_survival_bowie',
      'knife_butterfly',
      'knife_push'
    ],
    groups: ['knife', 'pistol', 'smg', 'rifle', 'sniper-rifle', 'specific'],
    groupsByName: {
      knife: { id: 'knife', name: 'Knife' },
      pistol: { id: 'pistol', name: 'Pistols' },
      smg: { id: 'smg', name: 'SGM' },
      rifle: { id: 'rifle', name: 'Riffle' },
      'sniper-rifle': { id: 'sniper-rifle', name: 'Sniper rifles' },
      specific: { id: 'specific', name: 'Specfic' }
    },
    weaponByGroups: {
      pistol: [
        {
          id: 'usp_silencer',
          name: 'USP',
          class: 'pistol',
          price: 200,
          kill_award: 300
        },
        {
          id: 'hkp2000',
          name: 'P2000',
          class: 'pistol',
          price: 200,
          kill_award: 300
        },
        {
          id: 'glock',
          name: 'Glock-18',
          class: 'pistol',
          price: 200,
          kill_award: 300
        },
        {
          id: 'elite',
          name: 'Dual Berettas',
          class: 'pistol',
          price: 400,
          kill_award: 300
        },
        {
          id: 'p250',
          name: 'P250',
          class: 'pistol',
          price: 300,
          kill_award: 300
        },
        {
          id: 'fiveseven',
          name: 'Five-SeveN',
          class: 'pistol',
          price: 500,
          kill_award: 300
        },
        {
          id: 'tec9',
          name: 'Tec-9',
          class: 'pistol',
          price: 500,
          kill_award: 300
        },
        {
          id: 'cz75a',
          name: 'CZ75-Auto',
          class: 'pistol',
          price: 500,
          kill_award: 50
        },
        {
          id: 'deagle',
          name: 'Desert Eagle',
          class: 'pistol',
          price: 700,
          kill_award: 300
        },
        {
          id: 'resolver',
          name: 'R8 Revolver',
          class: 'pistol',
          price: 600,
          kill_award: 300
        }
      ],
      smg: [
        {
          id: 'nova',
          name: 'Nova',
          class: 'smg',
          price: 1200,
          kill_award: 900
        },
        {
          id: 'xm1014',
          name: 'XM1014',
          class: 'smg',
          price: 2000,
          kill_award: 900
        },
        {
          id: 'sawedoff',
          name: 'Sawed-Off',
          class: 'smg',
          price: 1200,
          kill_award: 900
        },
        {
          id: 'mag7',
          name: 'MAG-7',
          class: 'smg',
          price: 1800,
          kill_award: 900
        },
        {
          id: 'm249',
          name: 'M249',
          class: 'smg',
          price: 5200,
          kill_award: 300
        },
        {
          id: 'negev',
          name: 'Negev',
          class: 'smg',
          price: 1700,
          kill_award: 300
        },
        { id: 'mp9', name: 'MP9', class: 'smg', price: 1250, kill_award: 600 },
        {
          id: 'mac10',
          name: 'MAC-10',
          class: 'smg',
          price: 1050,
          kill_award: 600
        },
        { id: 'mp7', name: 'MP7', class: 'smg', price: 1500, kill_award: 600 },
        {
          id: 'ump45',
          name: 'UMP-45',
          class: 'smg',
          price: 1200,
          kill_award: 600
        },
        { id: 'p90', name: 'P90', class: 'smg', price: 2350, kill_award: 300 },
        {
          id: 'bizon',
          name: 'PP-Bizon',
          class: 'smg',
          price: 1400,
          kill_award: 600
        }
      ],
      rifle: [
        {
          id: 'famas',
          name: 'FAMAS',
          class: 'rifle',
          price: 2250,
          kill_award: 300
        },
        {
          id: 'galilar',
          name: 'Galil AR',
          class: 'rifle',
          price: 2000,
          kill_award: 300
        },
        {
          id: 'm4a4',
          name: 'M4A4',
          class: 'rifle',
          price: 3100,
          kill_award: 300
        },
        {
          id: 'm4a1',
          name: 'M4A1',
          class: 'rifle',
          price: 3100,
          kill_award: 300
        },
        {
          id: 'm4a1_silencer',
          name: 'M4A1-S',
          class: 'rifle',
          price: 3100,
          kill_award: 300
        },
        {
          id: 'ak47',
          name: 'AK-47',
          class: 'rifle',
          price: 2700,
          kill_award: 300
        },
        {
          id: 'aug',
          name: 'AUG Rifle',
          class: 'rifle',
          price: 3300,
          kill_award: 300
        }
      ],
      'sniper-rifle': [
        {
          id: 'ssg08',
          name: 'SSG 08',
          class: 'sniper-rifle',
          price: 1700,
          kill_award: 300
        },
        {
          id: 'awp',
          name: 'AWP',
          class: 'sniper-rifle',
          price: 4750,
          kill_award: 100
        },
        {
          id: 'scar20',
          name: 'SCAR-20',
          class: 'sniper-rifle',
          price: 5000,
          kill_award: 300
        },
        {
          id: 'g3sg1',
          name: 'G3SG1',
          class: 'sniper-rifle',
          price: 5000,
          kill_award: 300
        }
      ],
      specific: [
        {
          id: 'taser',
          name: 'Zeus x27',
          class: 'specific',
          price: 200,
          kill_award: 0
        }
      ],
      Knife: [
        {
          id: 'knife',
          class: 'Knife',
          name: 'knife',
          price: 0,
          kill_award: 1500
        }
      ],
      knife: [
        {
          id: 'knife_t',
          name: 'Knife',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_flip',
          class: 'knife',
          name: 'Flip Knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_gut',
          name: 'Gut Knife',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_karambit',
          name: 'Karambit',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_m9_bayonet',
          name: 'M9 Bayonet',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_tactical',
          name: 'Huntsman Knife',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_falchion',
          name: 'Falchion Knife',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_survival_bowie',
          name: 'Bowie Knife',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_butterfly',
          name: 'Butterfly Knife',
          class: 'knife',
          price: 0,
          kill_award: 1500
        },
        {
          id: 'knife_push',
          name: 'Shadow Dag',
          class: 'knife',
          price: 0,
          kill_award: 1500
        }
      ]
    }
  },
  replays: {
    uploader: {
      replay: null,
      status: 'ready',
      progress: 0,
      parsingProgress: 100,
      failedGroups: []
    },
    replaysById: {
      '5b8fabc90ec65e00513ad1d3': {
        id: '5b8fabc90ec65e00513ad1d3',
        source: 'aws://8ff6b7ee-afd6-4fe1-aef5-ab2168c45c6d.dem',
        status: 'parsed',
        error: null,
        map: 'de_inferno',
        timing: 2813,
        created_at: '2018-09-05T10:11:21+00:00',
        parsed_at: null,
        team_a: {
          name: 'team_1611843',
          displayName: 'team_1611843',
          profile: {},
          score: { total: 12, first: 7, second: 5 },
          players: [
            {
              nickname: 'Król Całek Oznaczonych',
              steamId: 'STEAM_1:1:208017641'
            },
            { nickname: 'AnonymousIG', steamId: 'STEAM_1:1:227437474' },
            { nickname: 'Elareon', steamId: 'STEAM_1:0:79295022' },
            { nickname: 'GaLi | マティウ', steamId: 'STEAM_1:1:35861504' },
            {
              nickname: 'Jean Lassalle [Trade]',
              steamId: 'STEAM_1:1:49287189'
            }
          ]
        },
        team_b: {
          name: 'team_161860',
          displayName: 'team_161860',
          profile: {},
          score: { total: 16, first: 8, second: 8 },
          players: [
            { nickname: 'Yvanoe', steamId: 'STEAM_1:0:27776013' },
            {
              nickname: 'Banded | Strata ^-^',
              steamId: 'STEAM_1:0:122694050'
            },
            { nickname: 'kawał sejwa', steamId: 'STEAM_1:0:26217115' },
            { nickname: 'psyXotrop', steamId: 'STEAM_1:0:144074579' },
            { nickname: 'Timmiekat', steamId: 'STEAM_1:0:53908971' }
          ]
        }
      }
    },
    playersBySteamId: {
      'STEAM_1:1:208017641': {
        nickname: 'Król Całek Oznaczonych',
        steamId: 'STEAM_1:1:208017641'
      },
      'STEAM_1:1:227437474': {
        nickname: 'AnonymousIG',
        steamId: 'STEAM_1:1:227437474'
      },
      'STEAM_1:0:79295022': {
        nickname: 'Elareon',
        steamId: 'STEAM_1:0:79295022'
      },
      'STEAM_1:1:35861504': {
        nickname: 'GaLi | マティウ',
        steamId: 'STEAM_1:1:35861504'
      },
      'STEAM_1:1:49287189': {
        nickname: 'Jean Lassalle [Trade]',
        steamId: 'STEAM_1:1:49287189'
      },
      'STEAM_1:0:27776013': {
        nickname: 'Yvanoe',
        steamId: 'STEAM_1:0:27776013'
      },
      'STEAM_1:0:122694050': {
        nickname: 'Banded | Strata ^-^',
        steamId: 'STEAM_1:0:122694050'
      },
      'STEAM_1:0:26217115': {
        nickname: 'kawał sejwa',
        steamId: 'STEAM_1:0:26217115'
      },
      'STEAM_1:0:144074579': {
        nickname: 'psyXotrop',
        steamId: 'STEAM_1:0:144074579'
      },
      'STEAM_1:0:53908971': {
        nickname: 'Timmiekat',
        steamId: 'STEAM_1:0:53908971'
      }
    },
    replayIds: [],
    teamsByReplay: {
      '5b8fabc90ec65e00513ad1d3': {
        userTeam: 'team_1611843',
        opponentTeam: 'team_161860'
      }
    },
    userTeamMembersByReplay: {
      '5b8fabc90ec65e00513ad1d3': [
        'STEAM_1:1:208017641',
        'STEAM_1:1:227437474',
        'STEAM_1:0:79295022',
        'STEAM_1:1:35861504',
        'STEAM_1:1:49287189'
      ]
    },
    opponentTeamMembersByReplay: {
      '5b8fabc90ec65e00513ad1d3': [
        'STEAM_1:0:27776013',
        'STEAM_1:0:122694050',
        'STEAM_1:0:26217115',
        'STEAM_1:0:144074579',
        'STEAM_1:0:53908971'
      ]
    }
  },
  entries: {
    filters: {
      side: 'all',
      team_a: 'all',
      team_b: 'all',
      players: playerFilters
    },
    data: {
      '5b8fabc90ec65e00513ad1d3': {
        entriesByRound: {
          '1': {
            round: 1,
            time: 33,
            player: {
              nickname: 'GaLi | マティウ',
              side: 'terrorist',
              steamId: 'STEAM_1:1:35861504',
              weapon: 'glock',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'kawał sejwa',
              side: 'ct',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'hkp2000',
              team: 'team_161860'
            },
            headshot: false
          },
          '2': {
            round: 2,
            time: 33,
            player: {
              nickname: 'Banded | Strata ^-^',
              side: 'ct',
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              team: 'team_161860'
            },
            victim: {
              nickname: 'GaLi | マティウ',
              side: 'terrorist',
              steamId: 'STEAM_1:1:35861504',
              weapon: 'p250',
              team: 'team_1611843'
            },
            headshot: false
          },
          '3': {
            round: 3,
            time: 30,
            player: {
              nickname: 'Jean Lassalle [Trade]',
              side: 'terrorist',
              steamId: 'STEAM_1:1:49287189',
              weapon: 'deagle',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'Banded | Strata ^-^',
              side: 'ct',
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              team: 'team_161860'
            },
            headshot: true
          },
          '4': {
            round: 4,
            time: 37,
            player: {
              nickname: 'Timmiekat',
              side: 'ct',
              steamId: 'STEAM_1:0:53908971',
              weapon: 'm4a1_silencer',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'terrorist',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'ssg08',
              team: 'team_1611843'
            },
            headshot: false
          },
          '5': {
            round: 5,
            time: 27,
            player: {
              nickname: 'Król Całek Oznaczonych',
              side: 'terrorist',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'deagle',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'kawał sejwa',
              side: 'ct',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'aug',
              team: 'team_161860'
            },
            headshot: true
          },
          '6': {
            round: 6,
            time: 25,
            player: {
              nickname: 'Elareon',
              side: 'terrorist',
              steamId: 'STEAM_1:0:79295022',
              weapon: 'awp',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'Yvanoe',
              side: 'ct',
              steamId: 'STEAM_1:0:27776013',
              weapon: 'm4a1',
              team: 'team_161860'
            },
            headshot: false
          },
          '7': {
            round: 7,
            time: 28,
            player: {
              nickname: 'Banded | Strata ^-^',
              side: 'ct',
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'terrorist',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'sg556',
              team: 'team_1611843'
            },
            headshot: true
          },
          '8': {
            round: 8,
            time: 31,
            player: {
              nickname: 'Król Całek Oznaczonych',
              side: 'terrorist',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'deagle',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'kawał sejwa',
              side: 'ct',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'm4a1',
              team: 'team_161860'
            },
            headshot: true
          },
          '9': {
            round: 9,
            time: 45,
            player: {
              nickname: 'AnonymousIG',
              side: 'terrorist',
              steamId: 'STEAM_1:1:227437474',
              weapon: 'ak47',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'kawał sejwa',
              side: 'ct',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'p250',
              team: 'team_161860'
            },
            headshot: false
          },
          '10': {
            round: 10,
            time: 47,
            player: {
              nickname: 'psyXotrop',
              side: 'ct',
              steamId: 'STEAM_1:0:144074579',
              weapon: 'awp',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'terrorist',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'awp',
              team: 'team_1611843'
            },
            headshot: false
          },
          '11': {
            round: 11,
            time: 37,
            player: {
              nickname: 'GaLi | マティウ',
              side: 'terrorist',
              steamId: 'STEAM_1:1:35861504',
              weapon: 'deagle',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'Timmiekat',
              side: 'ct',
              steamId: 'STEAM_1:0:53908971',
              weapon: 'm4a1',
              team: 'team_161860'
            },
            headshot: true
          },
          '12': {
            round: 12,
            time: 31,
            player: {
              nickname: 'Król Całek Oznaczonych',
              side: 'terrorist',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'g3sg1',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'kawał sejwa',
              side: 'ct',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'm4a1',
              team: 'team_161860'
            },
            headshot: false
          },
          '13': {
            round: 13,
            time: 39,
            player: {
              nickname: 'AnonymousIG',
              side: 'terrorist',
              steamId: 'STEAM_1:1:227437474',
              weapon: 'm4a1',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'psyXotrop',
              side: 'ct',
              steamId: 'STEAM_1:0:144074579',
              weapon: 'hkp2000',
              team: 'team_161860'
            },
            headshot: false
          },
          '14': {
            round: 14,
            time: 35,
            player: {
              nickname: 'kawał sejwa',
              side: 'ct',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'xm1014',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Elareon',
              side: 'terrorist',
              steamId: 'STEAM_1:0:79295022',
              weapon: 'ak47',
              team: 'team_1611843'
            },
            headshot: false
          },
          '15': {
            round: 15,
            time: 38,
            player: {
              nickname: 'Król Całek Oznaczonych',
              side: 'terrorist',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'g3sg1',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'kawał sejwa',
              side: 'ct',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              team: 'team_161860'
            },
            headshot: false
          },
          '16': {
            round: 16,
            time: 33,
            player: {
              nickname: 'Banded | Strata ^-^',
              side: 'terrorist',
              steamId: 'STEAM_1:0:122694050',
              weapon: 'glock',
              team: 'team_161860'
            },
            victim: {
              nickname: 'GaLi | マティウ',
              side: 'ct',
              steamId: 'STEAM_1:1:35861504',
              weapon: 'hkp2000',
              team: 'team_1611843'
            },
            headshot: true
          },
          '17': {
            round: 17,
            time: 27,
            player: {
              nickname: 'Elareon',
              side: 'ct',
              steamId: 'STEAM_1:0:79295022',
              weapon: 'bizon',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'psyXotrop',
              side: 'terrorist',
              steamId: 'STEAM_1:0:144074579',
              weapon: 'mp7',
              team: 'team_161860'
            },
            headshot: false
          },
          '18': {
            round: 18,
            time: 39,
            player: {
              nickname: 'kawał sejwa',
              side: 'terrorist',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'deagle',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'ct',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'deagle',
              team: 'team_1611843'
            },
            headshot: false
          },
          '19': {
            round: 19,
            time: 35,
            player: {
              nickname: 'Elareon',
              side: 'ct',
              steamId: 'STEAM_1:0:79295022',
              weapon: 'p90',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'psyXotrop',
              side: 'terrorist',
              steamId: 'STEAM_1:0:144074579',
              weapon: 'ak47',
              team: 'team_161860'
            },
            headshot: false
          },
          '20': {
            round: 20,
            time: 30,
            player: {
              nickname: 'GaLi | マティウ',
              side: 'ct',
              steamId: 'STEAM_1:1:35861504',
              weapon: 'fiveseven',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'kawał sejwa',
              side: 'terrorist',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              team: 'team_161860'
            },
            headshot: false
          },
          '21': {
            round: 21,
            time: 33,
            player: {
              nickname: 'Yvanoe',
              side: 'terrorist',
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'ct',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'p90',
              team: 'team_1611843'
            },
            headshot: true
          },
          '22': {
            round: 22,
            time: 30,
            player: {
              nickname: 'kawał sejwa',
              side: 'terrorist',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Jean Lassalle [Trade]',
              side: 'ct',
              steamId: 'STEAM_1:1:49287189',
              weapon: 'm4a1',
              team: 'team_1611843'
            },
            headshot: true
          },
          '23': {
            round: 23,
            time: 38,
            player: {
              nickname: 'Banded | Strata ^-^',
              side: 'terrorist',
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Elareon',
              side: 'ct',
              steamId: 'STEAM_1:0:79295022',
              weapon: 'negev',
              team: 'team_1611843'
            },
            headshot: false
          },
          '24': {
            round: 24,
            time: 32,
            player: {
              nickname: 'kawał sejwa',
              side: 'terrorist',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'ct',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'ak47',
              team: 'team_1611843'
            },
            headshot: true
          },
          '25': {
            round: 25,
            time: 36,
            player: {
              nickname: 'kawał sejwa',
              side: 'terrorist',
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'ct',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'm4a1',
              team: 'team_1611843'
            },
            headshot: true
          },
          '26': {
            round: 26,
            time: 27,
            player: {
              nickname: 'psyXotrop',
              side: 'terrorist',
              steamId: 'STEAM_1:0:144074579',
              weapon: 'ak47',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Król Całek Oznaczonych',
              side: 'ct',
              steamId: 'STEAM_1:1:208017641',
              weapon: 'deagle',
              team: 'team_1611843'
            },
            headshot: true
          },
          '27': {
            round: 27,
            time: 29,
            player: {
              nickname: 'Banded | Strata ^-^',
              side: 'terrorist',
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              team: 'team_161860'
            },
            victim: {
              nickname: 'Elareon',
              side: 'ct',
              steamId: 'STEAM_1:0:79295022',
              weapon: 'xm1014',
              team: 'team_1611843'
            },
            headshot: false
          },
          '28': {
            round: 28,
            time: 33,
            player: {
              nickname: 'Jean Lassalle [Trade]',
              side: 'ct',
              steamId: 'STEAM_1:1:49287189',
              weapon: 'p90',
              team: 'team_1611843'
            },
            victim: {
              nickname: 'Banded | Strata ^-^',
              side: 'terrorist',
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              team: 'team_161860'
            },
            headshot: false
          }
        },
        entryKillsByTeam: {
          team_1611843: [1, 3, 5, 6, 8, 9, 11, 12, 13, 15, 17, 19, 20, 28],
          team_161860: [2, 4, 7, 10, 14, 16, 18, 21, 22, 23, 24, 25, 26, 27]
        },
        entryDeathsByTeam: {
          team_1611843: [2, 4, 7, 10, 14, 16, 18, 21, 22, 23, 24, 25, 26, 27],
          team_161860: [1, 3, 5, 6, 8, 9, 11, 12, 13, 15, 17, 19, 20, 28]
        },
        entryKillsByPlayer: {
          'STEAM_1:1:208017641': [5, 8, 12, 15],
          'STEAM_1:1:227437474': [9, 13],
          'STEAM_1:0:79295022': [6, 17, 19],
          'STEAM_1:1:35861504': [1, 11, 20],
          'STEAM_1:1:49287189': [3, 28],
          'STEAM_1:0:27776013': [21],
          'STEAM_1:0:122694050': [2, 7, 16, 23, 27],
          'STEAM_1:0:26217115': [14, 18, 22, 24, 25],
          'STEAM_1:0:144074579': [10, 26],
          'STEAM_1:0:53908971': [4]
        },
        entryDeathsByPlayer: {
          'STEAM_1:1:208017641': [4, 7, 10, 18, 21, 24, 25, 26],
          'STEAM_1:1:227437474': [],
          'STEAM_1:0:79295022': [14, 23, 27],
          'STEAM_1:1:35861504': [2, 16],
          'STEAM_1:1:49287189': [22],
          'STEAM_1:0:27776013': [6],
          'STEAM_1:0:122694050': [3, 28],
          'STEAM_1:0:26217115': [1, 5, 8, 9, 12, 15, 20],
          'STEAM_1:0:144074579': [13, 17, 19],
          'STEAM_1:0:53908971': [11]
        }
      }
    }
  },
  clutches: {
    filters: {
      side: 'SIDE_ALL',
      players: {
        team_1611843: {
          'STEAM_1:1:208017641': true,
          'STEAM_1:1:227437474': true,
          'STEAM_1:0:79295022': true,
          'STEAM_1:1:35861504': true,
          'STEAM_1:1:49287189': true
        },
        team_161860: {
          'STEAM_1:0:27776013': true,
          'STEAM_1:0:122694050': true,
          'STEAM_1:0:26217115': true,
          'STEAM_1:0:144074579': true,
          'STEAM_1:0:53908971': true
        }
      }
    },
    data: {
      '5b8fabc90ec65e00513ad1d3': {
        clutchesByPlayers: {
          'STEAM_1:1:227437474': [
            {
              nickname: 'AnonymousIG',
              attacker: 'STEAM_1:0:27776013',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_1611843',
              time: 113.140625,
              weapon: 'glock',
              killedBy: 'fiveseven',
              steamId: 'STEAM_1:1:227437474',
              round: 1,
              opponents: 2,
              successful: false
            },
            {
              nickname: 'AnonymousIG',
              attacker: 'STEAM_1:0:27776013',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_1611843',
              time: 115.796875,
              weapon: 'deagle',
              killedBy: 'm4a1',
              steamId: 'STEAM_1:1:227437474',
              round: 5,
              opponents: 2,
              successful: false
            },
            {
              nickname: 'AnonymousIG',
              attacker: 'STEAM_1:0:27776013',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_1611843',
              time: 143.453125,
              weapon: 'ak47',
              killedBy: 'm4a1',
              steamId: 'STEAM_1:1:227437474',
              round: 7,
              opponents: 3,
              successful: false
            },
            {
              nickname: 'AnonymousIG',
              attacker: 'STEAM_1:0:26217115',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_1611843',
              time: 82.90625,
              weapon: 'm4a1',
              killedBy: 'ak47',
              steamId: 'STEAM_1:1:227437474',
              round: 14,
              opponents: 4,
              successful: false
            },
            {
              nickname: 'AnonymousIG',
              attacker: 'STEAM_1:0:53908971',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_1611843',
              time: 62.078125,
              weapon: 'm4a1',
              killedBy: 'ak47',
              steamId: 'STEAM_1:1:227437474',
              round: 22,
              opponents: 5,
              successful: false
            }
          ],
          'STEAM_1:0:27776013': [
            {
              nickname: 'Yvanoe',
              attacker: null,
              alive: true,
              headshot: null,
              side: 'ct',
              team: 'team_161860',
              time: null,
              weapon: null,
              killedBy: null,
              steamId: 'STEAM_1:0:27776013',
              round: 1,
              opponents: 1,
              successful: true
            },
            {
              nickname: 'Yvanoe',
              attacker: null,
              alive: true,
              headshot: null,
              side: 'ct',
              team: 'team_161860',
              time: null,
              weapon: null,
              killedBy: null,
              steamId: 'STEAM_1:0:27776013',
              round: 7,
              opponents: 1,
              successful: true
            },
            {
              nickname: 'Yvanoe',
              attacker: 'STEAM_1:1:208017641',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_161860',
              time: 96.6875,
              weapon: 'm4a1',
              killedBy: 'awp',
              steamId: 'STEAM_1:0:27776013',
              round: 9,
              opponents: 3,
              successful: false
            },
            {
              nickname: 'Yvanoe',
              attacker: 'STEAM_1:1:208017641',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_161860',
              time: 68.96875,
              weapon: 'fiveseven',
              killedBy: 'g3sg1',
              steamId: 'STEAM_1:0:27776013',
              round: 13,
              opponents: 4,
              successful: false
            },
            {
              nickname: 'Yvanoe',
              attacker: 'STEAM_1:1:35861504',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_161860',
              time: 72.15625,
              weapon: 'ak47',
              killedBy: 'ak47',
              steamId: 'STEAM_1:0:27776013',
              round: 17,
              opponents: 3,
              successful: false
            },
            {
              nickname: 'Yvanoe',
              attacker: 'STEAM_1:0:79295022',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_161860',
              time: 67.96875,
              weapon: 'p250',
              killedBy: 'p90',
              steamId: 'STEAM_1:0:27776013',
              round: 18,
              opponents: 2,
              successful: false
            },
            {
              nickname: 'Yvanoe',
              attacker: null,
              alive: true,
              headshot: null,
              side: 'terrorist',
              team: 'team_161860',
              time: null,
              weapon: null,
              killedBy: null,
              steamId: 'STEAM_1:0:27776013',
              round: 21,
              opponents: 1,
              successful: true
            },
            {
              nickname: 'Yvanoe',
              attacker: 'STEAM_1:1:35861504',
              alive: false,
              headshot: true,
              side: 'terrorist',
              team: 'team_161860',
              time: 84.59375,
              weapon: 'ak47',
              killedBy: 'm4a1',
              steamId: 'STEAM_1:0:27776013',
              round: 27,
              opponents: 3,
              successful: false
            }
          ],
          'STEAM_1:1:208017641': [
            {
              nickname: 'Król Całek Oznaczonych',
              attacker: 'STEAM_1:0:53908971',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_1611843',
              time: 50.828125,
              weapon: 'ssg08',
              killedBy: 'm4a1_silencer',
              steamId: 'STEAM_1:1:208017641',
              round: 2,
              opponents: 5,
              successful: false
            },
            {
              nickname: 'Król Całek Oznaczonych',
              attacker: null,
              alive: true,
              headshot: null,
              side: 'ct',
              team: 'team_1611843',
              time: null,
              weapon: null,
              killedBy: null,
              steamId: 'STEAM_1:1:208017641',
              round: 23,
              opponents: 2,
              successful: true
            },
            {
              nickname: 'Król Całek Oznaczonych',
              attacker: 'STEAM_1:0:27776013',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_1611843',
              time: 74.03125,
              weapon: 'usp_silencer',
              killedBy: 'ak47',
              steamId: 'STEAM_1:1:208017641',
              round: 28,
              opponents: 2,
              successful: false
            }
          ],
          'STEAM_1:1:49287189': [
            {
              nickname: 'Jean Lassalle [Trade]',
              attacker: 'STEAM_1:0:122694050',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_1611843',
              time: 110.40625,
              weapon: 'deagle',
              killedBy: 'm4a1_silencer',
              steamId: 'STEAM_1:1:49287189',
              round: 4,
              opponents: 3,
              successful: false
            },
            {
              nickname: 'Jean Lassalle [Trade]',
              attacker: 'STEAM_1:0:27776013',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_1611843',
              time: 110.71875,
              weapon: 'ak47',
              killedBy: 'ak47',
              steamId: 'STEAM_1:1:49287189',
              round: 21,
              opponents: 4,
              successful: false
            }
          ],
          'STEAM_1:0:144074579': [
            {
              nickname: 'psyXotrop',
              attacker: 'STEAM_1:0:79295022',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_161860',
              time: 79.15625,
              weapon: 'awp',
              killedBy: 'glock',
              steamId: 'STEAM_1:0:144074579',
              round: 6,
              opponents: 4,
              successful: false
            },
            {
              nickname: 'psyXotrop',
              attacker: 'STEAM_1:1:35861504',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_161860',
              time: 103.78125,
              weapon: 'awp',
              killedBy: 'm4a1_silencer',
              steamId: 'STEAM_1:0:144074579',
              round: 11,
              opponents: 4,
              successful: false
            }
          ],
          'STEAM_1:0:122694050': [
            {
              nickname: 'Banded | Strata ^-^',
              attacker: 'STEAM_1:0:79295022',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_161860',
              time: 101.5625,
              weapon: 'm4a1',
              killedBy: 'sg556',
              steamId: 'STEAM_1:0:122694050',
              round: 12,
              opponents: 4,
              successful: false
            },
            {
              nickname: 'Banded | Strata ^-^',
              attacker: 'STEAM_1:1:208017641',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_161860',
              time: 79.28125,
              weapon: 'ak47',
              killedBy: 'ak47',
              steamId: 'STEAM_1:0:122694050',
              round: 23,
              opponents: 1,
              successful: false
            },
            {
              nickname: 'Banded | Strata ^-^',
              attacker: 'STEAM_1:1:35861504',
              alive: false,
              headshot: true,
              side: 'terrorist',
              team: 'team_161860',
              time: 135.375,
              weapon: 'ak47',
              killedBy: 'ak47',
              steamId: 'STEAM_1:0:122694050',
              round: 24,
              opponents: 1,
              successful: true
            }
          ],
          'STEAM_1:0:79295022': [
            {
              nickname: 'Elareon',
              attacker: 'STEAM_1:0:122694050',
              alive: false,
              headshot: false,
              side: 'terrorist',
              team: 'team_1611843',
              time: 94,
              weapon: 'ak47',
              killedBy: 'ak47',
              steamId: 'STEAM_1:0:79295022',
              round: 15,
              opponents: 3,
              successful: false
            },
            {
              nickname: 'Elareon',
              attacker: null,
              alive: true,
              headshot: null,
              side: 'ct',
              team: 'team_1611843',
              time: null,
              weapon: null,
              killedBy: null,
              steamId: 'STEAM_1:0:79295022',
              round: 18,
              opponents: 1,
              successful: true
            },
            {
              nickname: 'Elareon',
              attacker: 'STEAM_1:0:26217115',
              alive: false,
              headshot: false,
              side: 'ct',
              team: 'team_1611843',
              time: 98.8125,
              weapon: 'knife',
              killedBy: 'ak47',
              steamId: 'STEAM_1:0:79295022',
              round: 25,
              opponents: 4,
              successful: false
            },
            {
              nickname: 'Elareon',
              attacker: 'STEAM_1:0:53908971',
              alive: false,
              headshot: true,
              side: 'ct',
              team: 'team_1611843',
              time: 92.25,
              weapon: 'aug',
              killedBy: 'ak47',
              steamId: 'STEAM_1:0:79295022',
              round: 26,
              opponents: 3,
              successful: false
            }
          ],
          'STEAM_1:1:35861504': [
            {
              nickname: 'GaLi | マティウ',
              attacker: null,
              alive: true,
              headshot: null,
              side: 'ct',
              team: 'team_1611843',
              time: null,
              weapon: null,
              killedBy: null,
              steamId: 'STEAM_1:1:35861504',
              round: 24,
              opponents: 2,
              successful: false
            }
          ]
        },
        clutchKills: [
          {
            opponentsCount: 2,
            firstKill: true,
            time: 110.921875,
            round: 1,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'glock',
              side: 'ct',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'p250',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: false,
            time: 113.140625,
            round: 1,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'fiveseven',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'glock',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 1,
            firstKill: true,
            time: 113.140625,
            round: 1,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'fiveseven',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'glock',
              side: 'ct'
            },
            successful: true
          },
          {
            opponentsCount: 5,
            firstKill: true,
            time: 45.296875,
            round: 2,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:208017641',
            fragger: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'ssg08',
              side: 'ct',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 5,
            firstKill: false,
            time: 50.828125,
            round: 2,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:208017641',
            fragger: {
              steamId: 'STEAM_1:0:53908971',
              weapon: 'm4a1_silencer',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'ssg08',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: true,
            time: 110.40625,
            round: 4,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:49287189',
            fragger: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1_silencer',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'deagle',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: true,
            time: 115.796875,
            round: 5,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'm4a1',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'deagle',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: true,
            time: 56.125,
            round: 6,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:144074579',
            fragger: {
              steamId: 'STEAM_1:0:144074579',
              weapon: 'awp',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'awp',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 71.65625,
            round: 6,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:144074579',
            fragger: {
              steamId: 'STEAM_1:0:144074579',
              weapon: 'awp',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 79.15625,
            round: 6,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:144074579',
            fragger: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'glock',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:144074579',
              weapon: 'awp',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: true,
            time: 106.890625,
            round: 7,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'ak47',
              side: 'ct',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: false,
            time: 134.109375,
            round: 7,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:144074579',
              weapon: 'awp',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: false,
            time: 143.453125,
            round: 7,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'm4a1',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 1,
            firstKill: true,
            time: 143.453125,
            round: 7,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'm4a1',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: true
          },
          {
            opponentsCount: 3,
            firstKill: true,
            time: 96.6875,
            round: 9,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'awp',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'm4a1',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: true,
            time: 103.78125,
            round: 11,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:144074579',
            fragger: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'm4a1_silencer',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:144074579',
              weapon: 'awp',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: true,
            time: 95.90625,
            round: 12,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:122694050',
            fragger: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'awp',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 101.5625,
            round: 12,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:122694050',
            fragger: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'sg556',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: true,
            time: 60.6875,
            round: 13,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'fiveseven',
              side: 't',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 68.96875,
            round: 13,
            team: 'team_161860',
            side: 'ct',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'g3sg1',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'fiveseven',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: true,
            time: 67.34375,
            round: 14,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'm4a1',
              side: 'ct',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'm4a1',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 82.90625,
            round: 14,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'm4a1',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: true,
            time: 88.65625,
            round: 15,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:0:79295022',
            fragger: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'ak47',
              side: 'ct',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'g3sg1',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: false,
            time: 94,
            round: 15,
            team: 'team_1611843',
            side: 'terrorist',
            initiator: 'STEAM_1:0:79295022',
            fragger: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: true,
            time: 41.65625,
            round: 17,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'ak47',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: false,
            time: 72.15625,
            round: 17,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'ak47',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: true,
            time: 67.375,
            round: 18,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'p250',
              side: 'ct',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'famas',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: false,
            time: 67.96875,
            round: 18,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'p90',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'p250',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 1,
            firstKill: true,
            time: 67.96875,
            round: 18,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:0:79295022',
            fragger: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'p90',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'p250',
              side: 'ct'
            },
            successful: true
          },
          {
            opponentsCount: 4,
            firstKill: true,
            time: 79,
            round: 21,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:49287189',
            fragger: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'ak47',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 79.84375,
            round: 21,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:49287189',
            fragger: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'ak47',
              side: 't',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 95.875,
            round: 21,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:49287189',
            fragger: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'ak47',
              side: 't',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:144074579',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 110.71875,
            round: 21,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:49287189',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'ak47',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 1,
            firstKill: true,
            time: 110.71875,
            round: 21,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'ak47',
              side: 't'
            },
            successful: true
          },
          {
            opponentsCount: 5,
            firstKill: true,
            time: 62.078125,
            round: 22,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:227437474',
            fragger: {
              steamId: 'STEAM_1:0:53908971',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'm4a1',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: true,
            time: 62.875,
            round: 23,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:208017641',
            fragger: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'deagle',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: true
          },
          {
            opponentsCount: 2,
            firstKill: false,
            time: 79.28125,
            round: 23,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:208017641',
            fragger: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'ak47',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: true
          },
          {
            opponentsCount: 1,
            firstKill: true,
            time: 79.28125,
            round: 23,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:122694050',
            fragger: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'ak47',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: true,
            time: 75.96875,
            round: 24,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:35861504',
            fragger: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'm4a1',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: false,
            time: 135.375,
            round: 24,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:35861504',
            fragger: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'ak47',
              side: 't',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 1,
            firstKill: true,
            time: 135.375,
            round: 24,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:122694050',
            fragger: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'ak47',
              side: 't',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:122694050',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: true
          },
          {
            opponentsCount: 4,
            firstKill: true,
            time: 71.625,
            round: 25,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:0:79295022',
            fragger: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'mp7',
              side: 't',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:53908971',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 4,
            firstKill: false,
            time: 98.8125,
            round: 25,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:0:79295022',
            fragger: {
              steamId: 'STEAM_1:0:26217115',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'knife',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: true,
            time: 84.40625,
            round: 26,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:0:79295022',
            fragger: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'aug',
              side: 't',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: false,
            time: 92.25,
            round: 26,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:0:79295022',
            fragger: {
              steamId: 'STEAM_1:0:53908971',
              weapon: 'ak47',
              side: 'ct',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:79295022',
              weapon: 'aug',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: true,
            time: 57.15625,
            round: 27,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:227437474',
              weapon: 'ump45',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: false,
            time: 79.46875,
            round: 27,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'hegrenade',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:49287189',
              weapon: 'p90',
              side: 't'
            },
            successful: false
          },
          {
            opponentsCount: 3,
            firstKill: false,
            time: 84.59375,
            round: 27,
            team: 'team_161860',
            side: 'terrorist',
            initiator: 'STEAM_1:0:27776013',
            fragger: {
              steamId: 'STEAM_1:1:35861504',
              weapon: 'm4a1',
              side: 't',
              headshot: true
            },
            victim: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct'
            },
            successful: false
          },
          {
            opponentsCount: 2,
            firstKill: true,
            time: 74.03125,
            round: 28,
            team: 'team_1611843',
            side: 'ct',
            initiator: 'STEAM_1:1:208017641',
            fragger: {
              steamId: 'STEAM_1:0:27776013',
              weapon: 'ak47',
              side: 'ct',
              headshot: false
            },
            victim: {
              steamId: 'STEAM_1:1:208017641',
              weapon: 'usp_silencer',
              side: 't'
            },
            successful: false
          }
        ]
      }
    }
  },
  economics: {
    teamsEconomyByReplayAndRounds: {
      '5b8fabc90ec65e00513ad1d3': {
        team_1611843: [
          null,
          {
            savedCash: 900,
            spentCash: 3100,
            totalCash: 4000,
            finalCash: 13400,
            equipmentpmentSaved: 0,
            roundType: 'pistol'
          },
          {
            savedCash: 8100,
            spentCash: 5300,
            totalCash: 13400,
            finalCash: 17900,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 7900,
            spentCash: 10000,
            totalCash: 17900,
            finalCash: 26250,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 11650,
            spentCash: 14600,
            totalCash: 26250,
            finalCash: 19050,
            equipmentpmentSaved: 7400,
            roundType: 'full'
          },
          {
            savedCash: 6300,
            spentCash: 12750,
            totalCash: 19050,
            finalCash: 20800,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 4600,
            spentCash: 16200,
            totalCash: 20800,
            finalCash: 22250,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 8450,
            spentCash: 13800,
            totalCash: 22250,
            finalCash: 20950,
            equipmentpmentSaved: 8900,
            roundType: 'full'
          },
          {
            savedCash: 6400,
            spentCash: 14550,
            totalCash: 20950,
            finalCash: 24550,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 13950,
            spentCash: 10600,
            totalCash: 24550,
            finalCash: 31600,
            equipmentpmentSaved: 15700,
            roundType: 'full'
          },
          {
            savedCash: 24850,
            spentCash: 6750,
            totalCash: 31600,
            finalCash: 31850,
            equipmentpmentSaved: 16900,
            roundType: 'full'
          },
          {
            savedCash: 8700,
            spentCash: 23150,
            totalCash: 31850,
            finalCash: 26750,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 20950,
            spentCash: 5800,
            totalCash: 26750,
            finalCash: 38600,
            equipmentpmentSaved: 24250,
            roundType: 'full'
          },
          {
            savedCash: 25450,
            spentCash: 13150,
            totalCash: 38600,
            finalCash: 43500,
            equipmentpmentSaved: 15500,
            roundType: 'full'
          },
          {
            savedCash: 33300,
            spentCash: 10200,
            totalCash: 43500,
            finalCash: 40350,
            equipmentpmentSaved: 19550,
            roundType: 'full'
          },
          {
            savedCash: 5700,
            spentCash: 12600,
            totalCash: 18300,
            finalCash: 4000,
            equipmentpmentSaved: 10450,
            roundType: 'full'
          },
          {
            savedCash: 1150,
            spentCash: 2050,
            totalCash: 3200,
            finalCash: 7050,
            equipmentpmentSaved: 0,
            roundType: 'pistol'
          },
          {
            savedCash: 2900,
            spentCash: 6650,
            totalCash: 9550,
            finalCash: 21550,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 11000,
            spentCash: 10550,
            totalCash: 21550,
            finalCash: 30300,
            equipmentpmentSaved: 4500,
            roundType: 'full'
          },
          {
            savedCash: 10200,
            spentCash: 20100,
            totalCash: 30300,
            finalCash: 17800,
            equipmentpmentSaved: 4450,
            roundType: 'full'
          },
          {
            savedCash: 6000,
            spentCash: 11800,
            totalCash: 17800,
            finalCash: 23350,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 8200,
            spentCash: 15150,
            totalCash: 23350,
            finalCash: 16400,
            equipmentpmentSaved: 3400,
            roundType: 'full'
          },
          {
            savedCash: 5450,
            spentCash: 10950,
            totalCash: 16400,
            finalCash: 14950,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 5650,
            spentCash: 9300,
            totalCash: 14950,
            finalCash: 25250,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 7650,
            spentCash: 17600,
            totalCash: 25250,
            finalCash: 16150,
            equipmentpmentSaved: 4800,
            roundType: 'full'
          },
          {
            savedCash: 4200,
            spentCash: 11950,
            totalCash: 16150,
            finalCash: 14600,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 3350,
            spentCash: 11250,
            totalCash: 14600,
            finalCash: 16250,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 1500,
            spentCash: 14750,
            totalCash: 16250,
            finalCash: 19250,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 4400,
            spentCash: 14850,
            totalCash: 19250,
            finalCash: 12900,
            equipmentpmentSaved: 4100,
            roundType: 'full'
          }
        ],
        team_161860: [
          null,
          {
            savedCash: 1550,
            spentCash: 2450,
            totalCash: 4000,
            finalCash: 20850,
            equipmentpmentSaved: 0,
            roundType: 'pistol'
          },
          {
            savedCash: 3750,
            spentCash: 17100,
            totalCash: 20850,
            finalCash: 21500,
            equipmentpmentSaved: 500,
            roundType: 'full'
          },
          {
            savedCash: 14800,
            spentCash: 6700,
            totalCash: 21500,
            finalCash: 22700,
            equipmentpmentSaved: 14200,
            roundType: 'full'
          },
          {
            savedCash: 6350,
            spentCash: 16350,
            totalCash: 22700,
            finalCash: 24100,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 10850,
            spentCash: 13250,
            totalCash: 24100,
            finalCash: 29750,
            equipmentpmentSaved: 13500,
            roundType: 'full'
          },
          {
            savedCash: 14550,
            spentCash: 15200,
            totalCash: 29750,
            finalCash: 22050,
            equipmentpmentSaved: 11850,
            roundType: 'full'
          },
          {
            savedCash: 8550,
            spentCash: 13500,
            totalCash: 22050,
            finalCash: 27850,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 8400,
            spentCash: 19450,
            totalCash: 27850,
            finalCash: 16000,
            equipmentpmentSaved: 5750,
            roundType: 'full'
          },
          {
            savedCash: 7800,
            spentCash: 8200,
            totalCash: 16000,
            finalCash: 18200,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 1150,
            spentCash: 17050,
            totalCash: 18200,
            finalCash: 19000,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 12550,
            spentCash: 6450,
            totalCash: 19000,
            finalCash: 19850,
            equipmentpmentSaved: 18500,
            roundType: 'full'
          },
          {
            savedCash: 650,
            spentCash: 19200,
            totalCash: 19850,
            finalCash: 10750,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 6800,
            spentCash: 3950,
            totalCash: 10750,
            finalCash: 19400,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 3500,
            spentCash: 15900,
            totalCash: 19400,
            finalCash: 21850,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 21250,
            spentCash: 22650,
            totalCash: 43900,
            finalCash: 4000,
            equipmentpmentSaved: 6100,
            roundType: 'full'
          },
          {
            savedCash: 3200,
            spentCash: 1600,
            totalCash: 4800,
            finalCash: 22950,
            equipmentpmentSaved: 0,
            roundType: 'pistol'
          },
          {
            savedCash: 2250,
            spentCash: 18200,
            totalCash: 20450,
            finalCash: 10150,
            equipmentpmentSaved: 1250,
            roundType: 'full'
          },
          {
            savedCash: 4950,
            spentCash: 5200,
            totalCash: 10150,
            finalCash: 20250,
            equipmentpmentSaved: 0,
            roundType: 'force'
          },
          {
            savedCash: 4750,
            spentCash: 15500,
            totalCash: 20250,
            finalCash: 23400,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 13850,
            spentCash: 9550,
            totalCash: 23400,
            finalCash: 22050,
            equipmentpmentSaved: 11100,
            roundType: 'full'
          },
          {
            savedCash: 4500,
            spentCash: 17550,
            totalCash: 22050,
            finalCash: 22550,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 7400,
            spentCash: 15150,
            totalCash: 22550,
            finalCash: 25450,
            equipmentpmentSaved: 3700,
            roundType: 'full'
          },
          {
            savedCash: 20600,
            spentCash: 4850,
            totalCash: 25450,
            finalCash: 33100,
            equipmentpmentSaved: 18650,
            roundType: 'full'
          },
          {
            savedCash: 11900,
            spentCash: 21200,
            totalCash: 33100,
            finalCash: 30900,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 11000,
            spentCash: 19900,
            totalCash: 30900,
            finalCash: 29050,
            equipmentpmentSaved: 0,
            roundType: 'full'
          },
          {
            savedCash: 17450,
            spentCash: 11600,
            totalCash: 29050,
            finalCash: 35500,
            equipmentpmentSaved: 10750,
            roundType: 'full'
          },
          {
            savedCash: 17850,
            spentCash: 17650,
            totalCash: 35500,
            finalCash: 25850,
            equipmentpmentSaved: 3700,
            roundType: 'full'
          },
          {
            savedCash: 6650,
            spentCash: 19200,
            totalCash: 25850,
            finalCash: 24700,
            equipmentpmentSaved: 0,
            roundType: 'full'
          }
        ]
      }
    },
    roundTypesByReplayAndRounds: {
      '5b8fabc90ec65e00513ad1d3': {
        team_1611843: [
          null,
          'pistol',
          'force',
          'force',
          'full',
          'force',
          'full',
          'full',
          'force',
          'full',
          'full',
          'full',
          'full',
          'full',
          'full',
          'full',
          'pistol',
          'force',
          'full',
          'full',
          'force',
          'full',
          'force',
          'force',
          'full',
          'force',
          'force',
          'force',
          'full'
        ],
        team_161860: [
          null,
          'pistol',
          'full',
          'full',
          'full',
          'full',
          'full',
          'force',
          'full',
          'force',
          'full',
          'full',
          'full',
          'force',
          'full',
          'full',
          'pistol',
          'full',
          'force',
          'full',
          'full',
          'full',
          'full',
          'full',
          'full',
          'full',
          'full',
          'full',
          'full'
        ]
      }
    }
  },
  rounds: {
    roundsByReplay: {
      '5b8fabc90ec65e00513ad1d3': {
        all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
        roundsByNumber: {
          '1': {
            number: 1,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'bomb_defused',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '2': {
            number: 2,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '3': {
            number: 3,
            winner_side: 'terrorist',
            winner_team: 'team_1611843',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '4': {
            number: 4,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '5': {
            number: 5,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'bomb_defused',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '6': {
            number: 6,
            winner_side: 'terrorist',
            winner_team: 'team_1611843',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '7': {
            number: 7,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'bomb_defused',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '8': {
            number: 8,
            winner_side: 'terrorist',
            winner_team: 'team_1611843',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '9': {
            number: 9,
            winner_side: 'terrorist',
            winner_team: 'team_1611843',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '10': {
            number: 10,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '11': {
            number: 11,
            winner_side: 'terrorist',
            winner_team: 'team_1611843',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '12': {
            number: 12,
            winner_side: 'terrorist',
            winner_team: 'team_1611843',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '13': {
            number: 13,
            winner_side: 'terrorist',
            winner_team: 'team_1611843',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '14': {
            number: 14,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '15': {
            number: 15,
            winner_side: 'ct',
            winner_team: 'team_161860',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
          },
          '16': {
            number: 16,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '17': {
            number: 17,
            winner_side: 'ct',
            winner_team: 'team_1611843',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '18': {
            number: 18,
            winner_side: 'ct',
            winner_team: 'team_1611843',
            reason: 'bomb_defused',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '19': {
            number: 19,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '20': {
            number: 20,
            winner_side: 'ct',
            winner_team: 'team_1611843',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '21': {
            number: 21,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '22': {
            number: 22,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '23': {
            number: 23,
            winner_side: 'ct',
            winner_team: 'team_1611843',
            reason: 'bomb_defused',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '24': {
            number: 24,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'target_bombed',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '25': {
            number: 25,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '26': {
            number: 26,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '27': {
            number: 27,
            winner_side: 'ct',
            winner_team: 'team_1611843',
            reason: 'ct_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          },
          '28': {
            number: 28,
            winner_side: 'terrorist',
            winner_team: 'team_161860',
            reason: 'terrorist_win',
            teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
          }
        },
        team_1611843: {
          all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
          ct: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
          t: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        },
        team_161860: {
          all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
          ct: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          t: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
        }
      }
    },
    data: {
      '5b8fabc90ec65e00513ad1d3': {
        '1': {
          number: 1,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'bomb_defused',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '2': {
          number: 2,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '3': {
          number: 3,
          winner_side: 'terrorist',
          winner_team: 'team_1611843',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '4': {
          number: 4,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '5': {
          number: 5,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'bomb_defused',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '6': {
          number: 6,
          winner_side: 'terrorist',
          winner_team: 'team_1611843',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '7': {
          number: 7,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'bomb_defused',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '8': {
          number: 8,
          winner_side: 'terrorist',
          winner_team: 'team_1611843',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '9': {
          number: 9,
          winner_side: 'terrorist',
          winner_team: 'team_1611843',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '10': {
          number: 10,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '11': {
          number: 11,
          winner_side: 'terrorist',
          winner_team: 'team_1611843',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '12': {
          number: 12,
          winner_side: 'terrorist',
          winner_team: 'team_1611843',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '13': {
          number: 13,
          winner_side: 'terrorist',
          winner_team: 'team_1611843',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '14': {
          number: 14,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '15': {
          number: 15,
          winner_side: 'ct',
          winner_team: 'team_161860',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_1611843' }, { side: 'ct', name: 'team_161860' }]
        },
        '16': {
          number: 16,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '17': {
          number: 17,
          winner_side: 'ct',
          winner_team: 'team_1611843',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '18': {
          number: 18,
          winner_side: 'ct',
          winner_team: 'team_1611843',
          reason: 'bomb_defused',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '19': {
          number: 19,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '20': {
          number: 20,
          winner_side: 'ct',
          winner_team: 'team_1611843',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '21': {
          number: 21,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '22': {
          number: 22,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '23': {
          number: 23,
          winner_side: 'ct',
          winner_team: 'team_1611843',
          reason: 'bomb_defused',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '24': {
          number: 24,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'target_bombed',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '25': {
          number: 25,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '26': {
          number: 26,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '27': {
          number: 27,
          winner_side: 'ct',
          winner_team: 'team_1611843',
          reason: 'ct_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        },
        '28': {
          number: 28,
          winner_side: 'terrorist',
          winner_team: 'team_161860',
          reason: 'terrorist_win',
          teams: [{ side: 'terrorist', name: 'team_161860' }, { side: 'ct', name: 'team_1611843' }]
        }
      }
    }
  },
  playerStats: {
    playerStatsByReplay: {
      '5b8fabc90ec65e00513ad1d3': {
        'STEAM_1:0:27776013': {
          success_1v1: {
            player: 'STEAM_1:0:27776013',
            key: 'success_1v1',
            value: 1,
            group: 'clutches'
          },
          success_side_ct_1v1: {
            player: 'STEAM_1:0:27776013',
            key: 'success_side_ct_1v1',
            value: 2,
            group: 'clutches'
          },
          failed_1v3: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_1v3',
            value: 2,
            group: 'clutches'
          },
          failed_side_ct_1v3: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_side_ct_1v3',
            value: 1,
            group: 'clutches'
          },
          failed_1v4: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v4: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_side_ct_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_side_terrorist_1v3: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_side_terrorist_1v3',
            value: 2,
            group: 'clutches'
          },
          success_side_terrorist_1v1: {
            player: 'STEAM_1:0:27776013',
            key: 'success_side_terrorist_1v1',
            value: 1,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:0:27776013',
            key: 'success',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:0:27776013',
            key: 'success_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_ak47: {
            player: 'STEAM_1:0:27776013',
            key: 'success_use_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_ak47: {
            player: 'STEAM_1:0:27776013',
            key: 'success_on_terrorist_side_use_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:0:27776013',
            key: 'failed',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_awp: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_killed_with_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_awp: {
            player: 'STEAM_1:0:27776013',
            key: 'failed_on_ct_side_killed_with_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:0:27776013',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:0:27776013',
            key: 'kills',
            value: 31,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:0:27776013',
            key: 'deaths',
            value: 16,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:0:27776013',
            key: 'assists',
            value: 3,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:0:27776013',
            key: 'mvp',
            value: 5,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:0:27776013',
            key: 'damage_health',
            value: 3544,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'damage_armor',
            value: 226,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:0:27776013',
            key: 'actual_damage_health',
            value: 2855,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:0:27776013',
            key: 'kd_ratio',
            value: 1.9375,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:0:27776013',
            key: 'kr_ratio',
            value: 1.1071428571428572,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:0:27776013',
            key: 'average_damage_health',
            value: 126.57142857142857,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'average_damage_armor',
            value: 8.071428571428571,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:0:27776013',
            key: 'actual_average_damage_health',
            value: 101.96428571428571,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:0:27776013',
            key: 'total_shots',
            value: 416,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:0:27776013',
            key: 'total_kills',
            value: 30,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'total_kills_accuracy',
            value: 7.211538461538461,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits',
            value: 113,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_accuracy',
            value: 27.163461538461537,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:0:27776013',
            key: 'total_damage_to_health',
            value: 3529,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'total_damage_to_armor',
            value: 227,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_head',
            value: 4,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_head_accuracy',
            value: 0.9615384615384616,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_chest',
            value: 26,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_chest_accuracy',
            value: 6.25,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_belly',
            value: 39,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_belly_accuracy',
            value: 9.375,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_arms',
            value: 12,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_arms_accuracy',
            value: 2.8846153846153846,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_legs',
            value: 31,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'total_hits_to_legs_accuracy',
            value: 7.451923076923077,
            group: 'accuracy'
          },
          weapon_fiveseven_shots: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_shots',
            value: 65,
            group: 'accuracy'
          },
          weapon_fiveseven_kills: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_kills',
            value: 6,
            group: 'accuracy'
          },
          weapon_fiveseven_kills_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_kills_accuracy',
            value: 9.230769230769232,
            group: 'accuracy'
          },
          weapon_fiveseven_hits: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits',
            value: 22,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_accuracy',
            value: 33.84615384615385,
            group: 'accuracy'
          },
          weapon_fiveseven_damage_to_health: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_damage_to_health',
            value: 604,
            group: 'accuracy'
          },
          weapon_fiveseven_damage_to_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_damage_to_armor',
            value: 20,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_head: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_head_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_head_accuracy',
            value: 3.076923076923077,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_chest: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_chest',
            value: 8,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_chest_accuracy',
            value: 12.307692307692308,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_belly: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_belly',
            value: 6,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_belly_accuracy',
            value: 9.230769230769232,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_arms: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_arms',
            value: 5,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_arms_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_legs: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_fiveseven_hits_to_legs_accuracy',
            value: 1.5384615384615385,
            group: 'accuracy'
          },
          weapon_mp9_shots: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_shots',
            value: 17,
            group: 'accuracy'
          },
          weapon_mp9_kills: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp9_kills_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_kills_accuracy',
            value: 5.88235294117647,
            group: 'accuracy'
          },
          weapon_mp9_hits: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_hits',
            value: 7,
            group: 'accuracy'
          },
          weapon_mp9_hits_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_hits_accuracy',
            value: 41.17647058823529,
            group: 'accuracy'
          },
          weapon_mp9_damage_to_health: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_damage_to_health',
            value: 102,
            group: 'accuracy'
          },
          weapon_mp9_damage_to_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_damage_to_armor',
            value: 30,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_chest: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_hits_to_chest',
            value: 6,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_hits_to_chest_accuracy',
            value: 35.294117647058826,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_belly: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_mp9_hits_to_belly_accuracy',
            value: 5.88235294117647,
            group: 'accuracy'
          },
          weapon_m4a1_shots: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_shots',
            value: 71,
            group: 'accuracy'
          },
          weapon_m4a1_kills: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_kills',
            value: 5,
            group: 'accuracy'
          },
          weapon_m4a1_kills_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_kills_accuracy',
            value: 7.042253521126761,
            group: 'accuracy'
          },
          weapon_m4a1_hits: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_hits',
            value: 21,
            group: 'accuracy'
          },
          weapon_m4a1_hits_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_hits_accuracy',
            value: 29.577464788732392,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_health: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_damage_to_health',
            value: 543,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_damage_to_armor',
            value: 41,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_hits_to_belly',
            value: 10,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_hits_to_belly_accuracy',
            value: 14.084507042253522,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_hits_to_legs',
            value: 11,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_m4a1_hits_to_legs_accuracy',
            value: 15.492957746478872,
            group: 'accuracy'
          },
          weapon_g3sg1_shots: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_shots',
            value: 13,
            group: 'accuracy'
          },
          weapon_g3sg1_kills: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_g3sg1_kills_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_kills_accuracy',
            value: 23.076923076923077,
            group: 'accuracy'
          },
          weapon_g3sg1_hits: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits',
            value: 6,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits_accuracy',
            value: 46.15384615384615,
            group: 'accuracy'
          },
          weapon_g3sg1_damage_to_health: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_damage_to_health',
            value: 429,
            group: 'accuracy'
          },
          weapon_g3sg1_damage_to_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_damage_to_armor',
            value: 42,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_chest: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits_to_chest_accuracy',
            value: 15.384615384615385,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_belly: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits_to_belly_accuracy',
            value: 23.076923076923077,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_arms: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_g3sg1_hits_to_arms_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_shots',
            value: 203,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_kills',
            value: 13,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_kills_accuracy',
            value: 6.403940886699508,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits',
            value: 48,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_accuracy',
            value: 23.645320197044335,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_damage_to_health',
            value: 1454,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_damage_to_armor',
            value: 73,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 0.49261083743842365,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_chest',
            value: 7,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 3.4482758620689653,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_belly',
            value: 15,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 7.389162561576355,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_arms',
            value: 5,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_arms_accuracy',
            value: 2.4630541871921183,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_legs',
            value: 19,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 9.35960591133005,
            group: 'accuracy'
          },
          weapon_p250_shots: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_shots',
            value: 47,
            group: 'accuracy'
          },
          weapon_p250_kills: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_p250_kills_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_kills_accuracy',
            value: 4.25531914893617,
            group: 'accuracy'
          },
          weapon_p250_hits: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits',
            value: 9,
            group: 'accuracy'
          },
          weapon_p250_hits_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_accuracy',
            value: 19.148936170212767,
            group: 'accuracy'
          },
          weapon_p250_damage_to_health: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_damage_to_health',
            value: 397,
            group: 'accuracy'
          },
          weapon_p250_damage_to_armor: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_damage_to_armor',
            value: 21,
            group: 'accuracy'
          },
          weapon_p250_hits_to_head: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_head_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_head_accuracy',
            value: 2.127659574468085,
            group: 'accuracy'
          },
          weapon_p250_hits_to_chest: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_chest',
            value: 3,
            group: 'accuracy'
          },
          weapon_p250_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_chest_accuracy',
            value: 6.382978723404255,
            group: 'accuracy'
          },
          weapon_p250_hits_to_belly: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_belly',
            value: 4,
            group: 'accuracy'
          },
          weapon_p250_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_belly_accuracy',
            value: 8.51063829787234,
            group: 'accuracy'
          },
          weapon_p250_hits_to_arms: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:27776013',
            key: 'weapon_p250_hits_to_arms_accuracy',
            value: 2.127659574468085,
            group: 'accuracy'
          }
        },
        'STEAM_1:0:144074579': {
          failed_1v4: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_1v4',
            value: 2,
            group: 'clutches'
          },
          failed_side_ct_1v4: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_side_ct_1v4',
            value: 2,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:0:144074579',
            key: 'success',
            value: 2,
            group: 'entry_frags'
          },
          success_on_ct_side: {
            player: 'STEAM_1:0:144074579',
            key: 'success_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:0:144074579',
            key: 'success_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_awp: {
            player: 'STEAM_1:0:144074579',
            key: 'success_use_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_ak47: {
            player: 'STEAM_1:0:144074579',
            key: 'success_use_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_awp: {
            player: 'STEAM_1:0:144074579',
            key: 'success_on_ct_side_use_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_ak47: {
            player: 'STEAM_1:0:144074579',
            key: 'success_on_terrorist_side_use_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:0:144074579',
            key: 'failed',
            value: 3,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_on_terrorist_side',
            value: 2,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_m4a1: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_killed_with_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_bizon: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_killed_with_weapon_bizon',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_p90: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_killed_with_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_m4a1: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_on_ct_side_killed_with_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_bizon: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_on_terrorist_side_killed_with_weapon_bizon',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_p90: {
            player: 'STEAM_1:0:144074579',
            key: 'failed_on_terrorist_side_killed_with_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:0:144074579',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:0:144074579',
            key: 'kills',
            value: 11,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:0:144074579',
            key: 'deaths',
            value: 19,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:0:144074579',
            key: 'assists',
            value: 6,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:0:144074579',
            key: 'mvp',
            value: 0,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:0:144074579',
            key: 'damage_health',
            value: 2138,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'damage_armor',
            value: 222,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:0:144074579',
            key: 'actual_damage_health',
            value: 1787,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:0:144074579',
            key: 'kd_ratio',
            value: 0.5789473684210527,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:0:144074579',
            key: 'kr_ratio',
            value: 0.39285714285714285,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:0:144074579',
            key: 'average_damage_health',
            value: 76.35714285714286,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'average_damage_armor',
            value: 7.928571428571429,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:0:144074579',
            key: 'actual_average_damage_health',
            value: 63.82142857142857,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'total_shots',
            value: 520,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:0:144074579',
            key: 'total_kills',
            value: 11,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'total_kills_accuracy',
            value: 2.1153846153846154,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits',
            value: 85,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_accuracy',
            value: 16.346153846153847,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:0:144074579',
            key: 'total_damage_to_health',
            value: 2101,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'total_damage_to_armor',
            value: 190,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_head',
            value: 6,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_head_accuracy',
            value: 1.153846153846154,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_chest',
            value: 23,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_chest_accuracy',
            value: 4.423076923076923,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_belly',
            value: 17,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_belly_accuracy',
            value: 3.2692307692307696,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_arms',
            value: 7,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_arms_accuracy',
            value: 1.3461538461538463,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_legs',
            value: 2,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'total_hits_to_legs_accuracy',
            value: 0.38461538461538464,
            group: 'accuracy'
          },
          weapon_p90_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_p90_shots',
            value: 13,
            group: 'accuracy'
          },
          weapon_sg556_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_sg556_shots',
            value: 13,
            group: 'accuracy'
          },
          weapon_mp7_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_shots',
            value: 141,
            group: 'accuracy'
          },
          weapon_mp7_kills: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_mp7_kills_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_kills_accuracy',
            value: 1.4184397163120568,
            group: 'accuracy'
          },
          weapon_mp7_hits: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits',
            value: 41,
            group: 'accuracy'
          },
          weapon_mp7_hits_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits_accuracy',
            value: 29.078014184397162,
            group: 'accuracy'
          },
          weapon_mp7_damage_to_health: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_damage_to_health',
            value: 469,
            group: 'accuracy'
          },
          weapon_mp7_damage_to_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_damage_to_armor',
            value: 73,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_chest: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits_to_chest',
            value: 6,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits_to_chest_accuracy',
            value: 4.25531914893617,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_belly: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits_to_belly',
            value: 10,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits_to_belly_accuracy',
            value: 7.092198581560284,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_arms: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_mp7_hits_to_arms_accuracy',
            value: 1.4184397163120568,
            group: 'accuracy'
          },
          weapon_awp_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_shots',
            value: 17,
            group: 'accuracy'
          },
          weapon_awp_kills: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_kills',
            value: 5,
            group: 'accuracy'
          },
          weapon_awp_kills_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_kills_accuracy',
            value: 29.411764705882355,
            group: 'accuracy'
          },
          weapon_awp_hits: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits',
            value: 6,
            group: 'accuracy'
          },
          weapon_awp_hits_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits_accuracy',
            value: 35.294117647058826,
            group: 'accuracy'
          },
          weapon_awp_damage_to_health: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_damage_to_health',
            value: 642,
            group: 'accuracy'
          },
          weapon_awp_damage_to_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_damage_to_armor',
            value: 5,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits_to_chest_accuracy',
            value: 11.76470588235294,
            group: 'accuracy'
          },
          weapon_awp_hits_to_belly: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_awp_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits_to_belly_accuracy',
            value: 17.647058823529413,
            group: 'accuracy'
          },
          weapon_awp_hits_to_arms: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_awp_hits_to_arms_accuracy',
            value: 5.88235294117647,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_deagle_shots',
            value: 5,
            group: 'accuracy'
          },
          weapon_p250_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_p250_shots',
            value: 5,
            group: 'accuracy'
          },
          weapon_bayonet_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_bayonet_shots',
            value: 4,
            group: 'accuracy'
          },
          weapon_aug_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_aug_shots',
            value: 53,
            group: 'accuracy'
          },
          weapon_aug_hits: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_aug_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_aug_hits_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_aug_hits_accuracy',
            value: 5.660377358490567,
            group: 'accuracy'
          },
          weapon_aug_damage_to_health: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_aug_damage_to_health',
            value: 60,
            group: 'accuracy'
          },
          weapon_aug_damage_to_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_aug_damage_to_armor',
            value: 2,
            group: 'accuracy'
          },
          weapon_aug_hits_to_chest: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_aug_hits_to_chest',
            value: 3,
            group: 'accuracy'
          },
          weapon_aug_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_aug_hits_to_chest_accuracy',
            value: 5.660377358490567,
            group: 'accuracy'
          },
          weapon_glock_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_shots',
            value: 52,
            group: 'accuracy'
          },
          weapon_glock_hits: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits',
            value: 7,
            group: 'accuracy'
          },
          weapon_glock_hits_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits_accuracy',
            value: 13.461538461538462,
            group: 'accuracy'
          },
          weapon_glock_damage_to_health: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_damage_to_health',
            value: 79,
            group: 'accuracy'
          },
          weapon_glock_damage_to_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_damage_to_armor',
            value: 39,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits_to_head_accuracy',
            value: 1.9230769230769231,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits_to_chest_accuracy',
            value: 3.8461538461538463,
            group: 'accuracy'
          },
          weapon_glock_hits_to_arms: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits_to_arms',
            value: 4,
            group: 'accuracy'
          },
          weapon_glock_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_glock_hits_to_arms_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_shots',
            value: 191,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_kills_accuracy',
            value: 1.5706806282722512,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits',
            value: 25,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_accuracy',
            value: 13.089005235602095,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_damage_to_health',
            value: 681,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_damage_to_armor',
            value: 64,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_head',
            value: 4,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 2.094240837696335,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_chest',
            value: 8,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 4.18848167539267,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_belly',
            value: 4,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 2.094240837696335,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_legs',
            value: 2,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 1.0471204188481675,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_shots',
            value: 26,
            group: 'accuracy'
          },
          weapon_usp_silencer_kills: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_kills_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_kills_accuracy',
            value: 3.8461538461538463,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 11.538461538461538,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 170,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_armor: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_damage_to_armor',
            value: 7,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_head: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_head_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_hits_to_head_accuracy',
            value: 3.8461538461538463,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:144074579',
            key: 'weapon_usp_silencer_hits_to_chest_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          }
        },
        'STEAM_1:0:122694050': {
          failed_1v4: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v4: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_side_ct_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_1v1: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_1v1',
            value: 1,
            group: 'clutches'
          },
          failed_side_terrorist_1v1: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_side_terrorist_1v1',
            value: 1,
            group: 'clutches'
          },
          success_1v1: {
            player: 'STEAM_1:0:122694050',
            key: 'success_1v1',
            value: 1,
            group: 'clutches'
          },
          success_side_terrorist_1v1: {
            player: 'STEAM_1:0:122694050',
            key: 'success_side_terrorist_1v1',
            value: 1,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:0:122694050',
            key: 'success',
            value: 5,
            group: 'entry_frags'
          },
          success_on_ct_side: {
            player: 'STEAM_1:0:122694050',
            key: 'success_on_ct_side',
            value: 2,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:0:122694050',
            key: 'success_on_terrorist_side',
            value: 3,
            group: 'entry_frags'
          },
          success_use_weapon_m4a1: {
            player: 'STEAM_1:0:122694050',
            key: 'success_use_weapon_m4a1',
            value: 2,
            group: 'entry_frags'
          },
          success_use_weapon_glock: {
            player: 'STEAM_1:0:122694050',
            key: 'success_use_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_ak47: {
            player: 'STEAM_1:0:122694050',
            key: 'success_use_weapon_ak47',
            value: 2,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_m4a1: {
            player: 'STEAM_1:0:122694050',
            key: 'success_on_ct_side_use_weapon_m4a1',
            value: 2,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_glock: {
            player: 'STEAM_1:0:122694050',
            key: 'success_on_terrorist_side_use_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_ak47: {
            player: 'STEAM_1:0:122694050',
            key: 'success_on_terrorist_side_use_weapon_ak47',
            value: 2,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:0:122694050',
            key: 'failed',
            value: 2,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_deagle: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_killed_with_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_p90: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_killed_with_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_deagle: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_on_ct_side_killed_with_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_p90: {
            player: 'STEAM_1:0:122694050',
            key: 'failed_on_terrorist_side_killed_with_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:0:122694050',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:0:122694050',
            key: 'kills',
            value: 27,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:0:122694050',
            key: 'deaths',
            value: 21,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:0:122694050',
            key: 'assists',
            value: 5,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:0:122694050',
            key: 'mvp',
            value: 4,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:0:122694050',
            key: 'damage_health',
            value: 3468,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'damage_armor',
            value: 340,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:0:122694050',
            key: 'actual_damage_health',
            value: 2825,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:0:122694050',
            key: 'kd_ratio',
            value: 1.2857142857142858,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:0:122694050',
            key: 'kr_ratio',
            value: 0.9642857142857143,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:0:122694050',
            key: 'average_damage_health',
            value: 123.85714285714286,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'average_damage_armor',
            value: 12.142857142857142,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:0:122694050',
            key: 'actual_average_damage_health',
            value: 100.89285714285714,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:0:122694050',
            key: 'total_shots',
            value: 472,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:0:122694050',
            key: 'total_kills',
            value: 28,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'total_kills_accuracy',
            value: 5.932203389830509,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits',
            value: 117,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_accuracy',
            value: 24.78813559322034,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:0:122694050',
            key: 'total_damage_to_health',
            value: 3518,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'total_damage_to_armor',
            value: 341,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_head',
            value: 7,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_head_accuracy',
            value: 1.4830508474576272,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_chest',
            value: 37,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_chest_accuracy',
            value: 7.838983050847458,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_belly',
            value: 35,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_belly_accuracy',
            value: 7.415254237288135,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_arms',
            value: 11,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_arms_accuracy',
            value: 2.330508474576271,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_legs',
            value: 13,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'total_hits_to_legs_accuracy',
            value: 2.754237288135593,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_shots: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_shots',
            value: 25,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_kills_accuracy',
            value: 8,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits',
            value: 7,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits_accuracy',
            value: 28.000000000000004,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_health: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_damage_to_health',
            value: 162,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_damage_to_armor',
            value: 26,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits_to_chest_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits_to_belly_accuracy',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_legs: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_silencer_hits_to_legs_accuracy',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_shots: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_shots',
            value: 172,
            group: 'accuracy'
          },
          weapon_m4a1_kills: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_kills',
            value: 10,
            group: 'accuracy'
          },
          weapon_m4a1_kills_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_kills_accuracy',
            value: 5.813953488372093,
            group: 'accuracy'
          },
          weapon_m4a1_hits: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits',
            value: 51,
            group: 'accuracy'
          },
          weapon_m4a1_hits_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_accuracy',
            value: 29.651162790697676,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_health: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_damage_to_health',
            value: 1402,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_damage_to_armor',
            value: 180,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_head: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_head_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_head_accuracy',
            value: 1.1627906976744187,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_chest',
            value: 18,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_chest_accuracy',
            value: 10.465116279069768,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_belly',
            value: 18,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_belly_accuracy',
            value: 10.465116279069768,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_arms',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_arms_accuracy',
            value: 1.744186046511628,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_legs',
            value: 9,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_m4a1_hits_to_legs_accuracy',
            value: 5.232558139534884,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_shots',
            value: 45,
            group: 'accuracy'
          },
          weapon_usp_silencer_kills: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_usp_silencer_kills_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_kills_accuracy',
            value: 4.444444444444445,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits',
            value: 10,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 22.22222222222222,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 281,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_damage_to_armor',
            value: 40,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_head: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_head_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_head_accuracy',
            value: 2.2222222222222223,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_chest_accuracy',
            value: 11.11111111111111,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_belly_accuracy',
            value: 2.2222222222222223,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_arms: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_arms_accuracy',
            value: 4.444444444444445,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_legs: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_usp_silencer_hits_to_legs_accuracy',
            value: 2.2222222222222223,
            group: 'accuracy'
          },
          weapon_awp_shots: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_shots',
            value: 7,
            group: 'accuracy'
          },
          weapon_awp_kills: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_kills_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_kills_accuracy',
            value: 28.57142857142857,
            group: 'accuracy'
          },
          weapon_awp_hits: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_hits_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_hits_accuracy',
            value: 28.57142857142857,
            group: 'accuracy'
          },
          weapon_awp_damage_to_health: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_damage_to_health',
            value: 247,
            group: 'accuracy'
          },
          weapon_awp_damage_to_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_damage_to_armor',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_hits_to_chest_accuracy',
            value: 14.285714285714285,
            group: 'accuracy'
          },
          weapon_awp_hits_to_belly: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_awp_hits_to_belly_accuracy',
            value: 14.285714285714285,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_shots',
            value: 211,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_kills',
            value: 10,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_kills_accuracy',
            value: 4.739336492890995,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits',
            value: 45,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_accuracy',
            value: 21.32701421800948,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_damage_to_health',
            value: 1219,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_damage_to_armor',
            value: 93,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 0.9478672985781991,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_chest',
            value: 8,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 3.7914691943127963,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_belly',
            value: 14,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 6.6350710900473935,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_arms',
            value: 6,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_arms_accuracy',
            value: 2.843601895734597,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_legs',
            value: 2,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 0.9478672985781991,
            group: 'accuracy'
          },
          weapon_glock_shots: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_shots',
            value: 12,
            group: 'accuracy'
          },
          weapon_glock_kills: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_kills_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_kills_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_glock_hits: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_hits_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_glock_damage_to_health: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_damage_to_health',
            value: 207,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head_accuracy: {
            player: 'STEAM_1:0:122694050',
            key: 'weapon_glock_hits_to_head_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          }
        },
        'STEAM_1:0:79295022': {
          success_1v1: {
            player: 'STEAM_1:0:79295022',
            key: 'success_1v1',
            value: 1,
            group: 'clutches'
          },
          success_side_ct_1v1: {
            player: 'STEAM_1:0:79295022',
            key: 'success_side_ct_1v1',
            value: 1,
            group: 'clutches'
          },
          failed_1v4: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v4: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_side_ct_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_1v3: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_1v3',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v3: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_side_ct_1v3',
            value: 1,
            group: 'clutches'
          },
          failed_side_terrorist_1v3: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_side_terrorist_1v3',
            value: 1,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:0:79295022',
            key: 'success',
            value: 3,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:0:79295022',
            key: 'success_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side: {
            player: 'STEAM_1:0:79295022',
            key: 'success_on_ct_side',
            value: 2,
            group: 'entry_frags'
          },
          success_use_weapon_awp: {
            player: 'STEAM_1:0:79295022',
            key: 'success_use_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_bizon: {
            player: 'STEAM_1:0:79295022',
            key: 'success_use_weapon_bizon',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_p90: {
            player: 'STEAM_1:0:79295022',
            key: 'success_use_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_awp: {
            player: 'STEAM_1:0:79295022',
            key: 'success_on_terrorist_side_use_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_bizon: {
            player: 'STEAM_1:0:79295022',
            key: 'success_on_ct_side_use_weapon_bizon',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_p90: {
            player: 'STEAM_1:0:79295022',
            key: 'success_on_ct_side_use_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:0:79295022',
            key: 'failed',
            value: 3,
            group: 'entry_frags'
          },
          failed_on_terrorist_side: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_on_ct_side',
            value: 2,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_xm1014: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_killed_with_weapon_xm1014',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_ak47: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_killed_with_weapon_ak47',
            value: 2,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_xm1014: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_on_terrorist_side_killed_with_weapon_xm1014',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_ak47: {
            player: 'STEAM_1:0:79295022',
            key: 'failed_on_ct_side_killed_with_weapon_ak47',
            value: 2,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:0:79295022',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:0:79295022',
            key: 'kills',
            value: 25,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:0:79295022',
            key: 'deaths',
            value: 22,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:0:79295022',
            key: 'assists',
            value: 1,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:0:79295022',
            key: 'mvp',
            value: 5,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:0:79295022',
            key: 'damage_health',
            value: 3133,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'damage_armor',
            value: 311,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:0:79295022',
            key: 'actual_damage_health',
            value: 2585,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:0:79295022',
            key: 'kd_ratio',
            value: 1.1363636363636365,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:0:79295022',
            key: 'kr_ratio',
            value: 0.8928571428571429,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:0:79295022',
            key: 'average_damage_health',
            value: 111.89285714285714,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'average_damage_armor',
            value: 11.107142857142858,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:0:79295022',
            key: 'actual_average_damage_health',
            value: 92.32142857142857,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'total_shots',
            value: 417,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'total_kills',
            value: 25,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'total_kills_accuracy',
            value: 5.995203836930456,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits',
            value: 103,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_accuracy',
            value: 24.700239808153476,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'total_damage_to_health',
            value: 3109,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'total_damage_to_armor',
            value: 308,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_head',
            value: 5,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_head_accuracy',
            value: 1.1990407673860912,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_chest',
            value: 38,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_chest_accuracy',
            value: 9.112709832134293,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_belly',
            value: 34,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_belly_accuracy',
            value: 8.15347721822542,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_arms',
            value: 19,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_arms_accuracy',
            value: 4.556354916067146,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_legs',
            value: 6,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'total_hits_to_legs_accuracy',
            value: 1.4388489208633095,
            group: 'accuracy'
          },
          weapon_glock_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_shots',
            value: 43,
            group: 'accuracy'
          },
          weapon_glock_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_kills_accuracy',
            value: 4.651162790697675,
            group: 'accuracy'
          },
          weapon_glock_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits',
            value: 9,
            group: 'accuracy'
          },
          weapon_glock_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits_accuracy',
            value: 20.930232558139537,
            group: 'accuracy'
          },
          weapon_glock_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_damage_to_health',
            value: 120,
            group: 'accuracy'
          },
          weapon_glock_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_damage_to_armor',
            value: 66,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits_to_chest',
            value: 4,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits_to_chest_accuracy',
            value: 9.30232558139535,
            group: 'accuracy'
          },
          weapon_glock_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits_to_belly',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits_to_belly_accuracy',
            value: 4.651162790697675,
            group: 'accuracy'
          },
          weapon_glock_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits_to_arms',
            value: 3,
            group: 'accuracy'
          },
          weapon_glock_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_glock_hits_to_arms_accuracy',
            value: 6.976744186046512,
            group: 'accuracy'
          },
          weapon_tec9_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_tec9_shots',
            value: 19,
            group: 'accuracy'
          },
          weapon_tec9_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_tec9_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_tec9_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_tec9_hits_accuracy',
            value: 5.263157894736842,
            group: 'accuracy'
          },
          weapon_tec9_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_tec9_damage_to_health',
            value: 19,
            group: 'accuracy'
          },
          weapon_tec9_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_tec9_damage_to_armor',
            value: 1,
            group: 'accuracy'
          },
          weapon_tec9_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_tec9_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_tec9_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_tec9_hits_to_chest_accuracy',
            value: 5.263157894736842,
            group: 'accuracy'
          },
          weapon_xm1014_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_xm1014_shots',
            value: 2,
            group: 'accuracy'
          },
          weapon_sg556_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_shots',
            value: 31,
            group: 'accuracy'
          },
          weapon_sg556_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_sg556_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_kills_accuracy',
            value: 9.67741935483871,
            group: 'accuracy'
          },
          weapon_sg556_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits',
            value: 7,
            group: 'accuracy'
          },
          weapon_sg556_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits_accuracy',
            value: 22.58064516129032,
            group: 'accuracy'
          },
          weapon_sg556_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_damage_to_health',
            value: 344,
            group: 'accuracy'
          },
          weapon_sg556_hits_to_head: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_sg556_hits_to_head_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits_to_head_accuracy',
            value: 3.225806451612903,
            group: 'accuracy'
          },
          weapon_sg556_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_sg556_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits_to_chest_accuracy',
            value: 3.225806451612903,
            group: 'accuracy'
          },
          weapon_sg556_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits_to_belly',
            value: 4,
            group: 'accuracy'
          },
          weapon_sg556_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_sg556_hits_to_belly_accuracy',
            value: 12.903225806451612,
            group: 'accuracy'
          },
          weapon_aug_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_shots',
            value: 31,
            group: 'accuracy'
          },
          weapon_aug_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_aug_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_kills_accuracy',
            value: 9.67741935483871,
            group: 'accuracy'
          },
          weapon_aug_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits',
            value: 14,
            group: 'accuracy'
          },
          weapon_aug_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits_accuracy',
            value: 45.16129032258064,
            group: 'accuracy'
          },
          weapon_aug_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_damage_to_health',
            value: 329,
            group: 'accuracy'
          },
          weapon_aug_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_damage_to_armor',
            value: 12,
            group: 'accuracy'
          },
          weapon_aug_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits_to_chest',
            value: 9,
            group: 'accuracy'
          },
          weapon_aug_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits_to_chest_accuracy',
            value: 29.03225806451613,
            group: 'accuracy'
          },
          weapon_aug_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits_to_belly',
            value: 4,
            group: 'accuracy'
          },
          weapon_aug_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits_to_belly_accuracy',
            value: 12.903225806451612,
            group: 'accuracy'
          },
          weapon_aug_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_aug_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_aug_hits_to_arms_accuracy',
            value: 3.225806451612903,
            group: 'accuracy'
          },
          weapon_awp_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_shots',
            value: 16,
            group: 'accuracy'
          },
          weapon_awp_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_kills',
            value: 6,
            group: 'accuracy'
          },
          weapon_awp_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_kills_accuracy',
            value: 37.5,
            group: 'accuracy'
          },
          weapon_awp_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits',
            value: 7,
            group: 'accuracy'
          },
          weapon_awp_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_accuracy',
            value: 43.75,
            group: 'accuracy'
          },
          weapon_awp_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_damage_to_health',
            value: 877,
            group: 'accuracy'
          },
          weapon_awp_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_damage_to_armor',
            value: 9,
            group: 'accuracy'
          },
          weapon_awp_hits_to_head: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_head_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_head_accuracy',
            value: 6.25,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_chest',
            value: 4,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_chest_accuracy',
            value: 25,
            group: 'accuracy'
          },
          weapon_awp_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_arms_accuracy',
            value: 6.25,
            group: 'accuracy'
          },
          weapon_awp_hits_to_legs: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_awp_hits_to_legs_accuracy',
            value: 6.25,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_shots',
            value: 9,
            group: 'accuracy'
          },
          weapon_deagle_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_kills_accuracy',
            value: 22.22222222222222,
            group: 'accuracy'
          },
          weapon_deagle_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_deagle_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits_accuracy',
            value: 55.55555555555556,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_damage_to_health',
            value: 292,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_damage_to_armor',
            value: 3,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits_to_chest_accuracy',
            value: 22.22222222222222,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits_to_belly',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits_to_belly_accuracy',
            value: 22.22222222222222,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_deagle_hits_to_arms_accuracy',
            value: 11.11111111111111,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_shots',
            value: 12,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_kills_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_hits_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_damage_to_health',
            value: 108,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_damage_to_armor',
            value: 15,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_shots',
            value: 16,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_kills_accuracy',
            value: 6.25,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits',
            value: 7,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits_accuracy',
            value: 43.75,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_damage_to_health',
            value: 180,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_damage_to_armor',
            value: 20,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits_to_chest',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits_to_chest_accuracy',
            value: 18.75,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits_to_belly_accuracy',
            value: 18.75,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_m4a1_silencer_hits_to_arms_accuracy',
            value: 6.25,
            group: 'accuracy'
          },
          weapon_negev_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_negev_shots',
            value: 52,
            group: 'accuracy'
          },
          weapon_mp7_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_shots',
            value: 22,
            group: 'accuracy'
          },
          weapon_mp7_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp7_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_kills_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_mp7_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_mp7_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits_accuracy',
            value: 22.727272727272727,
            group: 'accuracy'
          },
          weapon_mp7_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_damage_to_health',
            value: 124,
            group: 'accuracy'
          },
          weapon_mp7_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_damage_to_armor',
            value: 30,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_head: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_head_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits_to_head_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits_to_chest',
            value: 3,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits_to_chest_accuracy',
            value: 13.636363636363635,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_legs: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp7_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_mp7_hits_to_legs_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_p250_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p250_shots',
            value: 3,
            group: 'accuracy'
          },
          weapon_bizon_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_shots',
            value: 87,
            group: 'accuracy'
          },
          weapon_bizon_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_bizon_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_kills_accuracy',
            value: 2.2988505747126435,
            group: 'accuracy'
          },
          weapon_bizon_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits',
            value: 26,
            group: 'accuracy'
          },
          weapon_bizon_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_accuracy',
            value: 29.88505747126437,
            group: 'accuracy'
          },
          weapon_bizon_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_damage_to_health',
            value: 298,
            group: 'accuracy'
          },
          weapon_bizon_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_damage_to_armor',
            value: 93,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_head: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_head_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_head_accuracy',
            value: 1.1494252873563218,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_chest',
            value: 7,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_chest_accuracy',
            value: 8.045977011494253,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_belly',
            value: 9,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_belly_accuracy',
            value: 10.344827586206897,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_arms',
            value: 7,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_arms_accuracy',
            value: 8.045977011494253,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_legs: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_legs',
            value: 2,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_bizon_hits_to_legs_accuracy',
            value: 2.2988505747126435,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_shots',
            value: 11,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 18.181818181818183,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 42,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_damage_to_armor',
            value: 9,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_hits_to_belly_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_legs: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_usp_silencer_hits_to_legs_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_p90_shots: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_shots',
            value: 63,
            group: 'accuracy'
          },
          weapon_p90_kills: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_kills',
            value: 4,
            group: 'accuracy'
          },
          weapon_p90_kills_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_kills_accuracy',
            value: 6.349206349206349,
            group: 'accuracy'
          },
          weapon_p90_hits: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits',
            value: 19,
            group: 'accuracy'
          },
          weapon_p90_hits_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_accuracy',
            value: 30.158730158730158,
            group: 'accuracy'
          },
          weapon_p90_damage_to_health: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_damage_to_health',
            value: 376,
            group: 'accuracy'
          },
          weapon_p90_damage_to_armor: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_damage_to_armor',
            value: 50,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_chest',
            value: 4,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_chest_accuracy',
            value: 6.349206349206349,
            group: 'accuracy'
          },
          weapon_p90_hits_to_belly: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_belly',
            value: 9,
            group: 'accuracy'
          },
          weapon_p90_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_belly_accuracy',
            value: 14.285714285714285,
            group: 'accuracy'
          },
          weapon_p90_hits_to_arms: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_arms',
            value: 5,
            group: 'accuracy'
          },
          weapon_p90_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_arms_accuracy',
            value: 7.936507936507936,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:79295022',
            key: 'weapon_p90_hits_to_legs_accuracy',
            value: 1.5873015873015872,
            group: 'accuracy'
          }
        },
        'STEAM_1:1:49287189': {
          success_1v2: {
            player: 'STEAM_1:1:49287189',
            key: 'success_1v2',
            value: 1,
            group: 'clutches'
          },
          success_side_ct_1v2: {
            player: 'STEAM_1:1:49287189',
            key: 'success_side_ct_1v2',
            value: 1,
            group: 'clutches'
          },
          failed_1v4: {
            player: 'STEAM_1:1:49287189',
            key: 'failed_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v4: {
            player: 'STEAM_1:1:49287189',
            key: 'failed_side_ct_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_1v3: {
            player: 'STEAM_1:1:49287189',
            key: 'failed_1v3',
            value: 1,
            group: 'clutches'
          },
          failed_side_terrorist_1v3: {
            player: 'STEAM_1:1:49287189',
            key: 'failed_side_terrorist_1v3',
            value: 1,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:1:49287189',
            key: 'success',
            value: 2,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:1:49287189',
            key: 'success_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side: {
            player: 'STEAM_1:1:49287189',
            key: 'success_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_deagle: {
            player: 'STEAM_1:1:49287189',
            key: 'success_use_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_p90: {
            player: 'STEAM_1:1:49287189',
            key: 'success_use_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_deagle: {
            player: 'STEAM_1:1:49287189',
            key: 'success_on_terrorist_side_use_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_p90: {
            player: 'STEAM_1:1:49287189',
            key: 'success_on_ct_side_use_weapon_p90',
            value: 1,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:1:49287189',
            key: 'failed',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:1:49287189',
            key: 'failed_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_ak47: {
            player: 'STEAM_1:1:49287189',
            key: 'failed_killed_with_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_ak47: {
            player: 'STEAM_1:1:49287189',
            key: 'failed_on_ct_side_killed_with_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:1:49287189',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:1:49287189',
            key: 'kills',
            value: 25,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:1:49287189',
            key: 'deaths',
            value: 22,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:1:49287189',
            key: 'assists',
            value: 5,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:1:49287189',
            key: 'mvp',
            value: 4,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:1:49287189',
            key: 'damage_health',
            value: 4106,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'damage_armor',
            value: 273,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:1:49287189',
            key: 'actual_damage_health',
            value: 2570,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:1:49287189',
            key: 'kd_ratio',
            value: 1.1363636363636365,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:1:49287189',
            key: 'kr_ratio',
            value: 0.8928571428571429,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:1:49287189',
            key: 'average_damage_health',
            value: 146.64285714285714,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'average_damage_armor',
            value: 9.75,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:1:49287189',
            key: 'actual_average_damage_health',
            value: 91.78571428571429,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'total_shots',
            value: 474,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'total_kills',
            value: 25,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'total_kills_accuracy',
            value: 5.274261603375527,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits',
            value: 118,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_accuracy',
            value: 24.894514767932492,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'total_damage_to_health',
            value: 4114,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'total_damage_to_armor',
            value: 274,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_head',
            value: 9,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_head_accuracy',
            value: 1.89873417721519,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_chest',
            value: 32,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_chest_accuracy',
            value: 6.751054852320674,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_belly',
            value: 39,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_belly_accuracy',
            value: 8.227848101265822,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_arms',
            value: 11,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_arms_accuracy',
            value: 2.320675105485232,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_legs',
            value: 20,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'total_hits_to_legs_accuracy',
            value: 4.219409282700422,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_shots',
            value: 96,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_kills',
            value: 7,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_kills_accuracy',
            value: 7.291666666666667,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits',
            value: 25,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_accuracy',
            value: 26.041666666666668,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_damage_to_health',
            value: 1154,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_damage_to_armor',
            value: 44,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_head',
            value: 4,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 4.166666666666666,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 5.208333333333334,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_belly',
            value: 8,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_arms_accuracy',
            value: 2.083333333333333,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 1.0416666666666665,
            group: 'accuracy'
          },
          weapon_p250_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_shots',
            value: 27,
            group: 'accuracy'
          },
          weapon_p250_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_p250_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_kills_accuracy',
            value: 7.4074074074074066,
            group: 'accuracy'
          },
          weapon_p250_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits',
            value: 8,
            group: 'accuracy'
          },
          weapon_p250_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits_accuracy',
            value: 29.629629629629626,
            group: 'accuracy'
          },
          weapon_p250_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_damage_to_health',
            value: 244,
            group: 'accuracy'
          },
          weapon_p250_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_damage_to_armor',
            value: 12,
            group: 'accuracy'
          },
          weapon_p250_hits_to_head: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_head_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits_to_head_accuracy',
            value: 3.7037037037037033,
            group: 'accuracy'
          },
          weapon_p250_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits_to_chest',
            value: 4,
            group: 'accuracy'
          },
          weapon_p250_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits_to_chest_accuracy',
            value: 14.814814814814813,
            group: 'accuracy'
          },
          weapon_p250_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p250_hits_to_belly_accuracy',
            value: 3.7037037037037033,
            group: 'accuracy'
          },
          weapon_awp_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_shots',
            value: 9,
            group: 'accuracy'
          },
          weapon_awp_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_awp_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_kills_accuracy',
            value: 33.33333333333333,
            group: 'accuracy'
          },
          weapon_awp_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_awp_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_hits_accuracy',
            value: 33.33333333333333,
            group: 'accuracy'
          },
          weapon_awp_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_damage_to_health',
            value: 996,
            group: 'accuracy'
          },
          weapon_awp_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_damage_to_armor',
            value: 6,
            group: 'accuracy'
          },
          weapon_awp_hits_to_head: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_hits_to_head_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_hits_to_head_accuracy',
            value: 22.22222222222222,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_awp_hits_to_chest_accuracy',
            value: 11.11111111111111,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_shots',
            value: 5,
            group: 'accuracy'
          },
          weapon_deagle_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_kills_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_deagle_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_hits_accuracy',
            value: 40,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_damage_to_health',
            value: 237,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_hits_to_head_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_deagle_hits_to_chest_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_mac10_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_shots',
            value: 50,
            group: 'accuracy'
          },
          weapon_mac10_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_mac10_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_kills_accuracy',
            value: 4,
            group: 'accuracy'
          },
          weapon_mac10_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits',
            value: 10,
            group: 'accuracy'
          },
          weapon_mac10_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_mac10_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_damage_to_health',
            value: 152,
            group: 'accuracy'
          },
          weapon_mac10_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_damage_to_armor',
            value: 29,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_chest_accuracy',
            value: 4,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_belly_accuracy',
            value: 6,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_arms_accuracy',
            value: 2,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_legs: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_legs',
            value: 4,
            group: 'accuracy'
          },
          weapon_mac10_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mac10_hits_to_legs_accuracy',
            value: 8,
            group: 'accuracy'
          },
          weapon_m4a1_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_shots',
            value: 36,
            group: 'accuracy'
          },
          weapon_m4a1_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_kills_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_m4a1_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits',
            value: 17,
            group: 'accuracy'
          },
          weapon_m4a1_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_accuracy',
            value: 47.22222222222222,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_damage_to_health',
            value: 337,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_damage_to_armor',
            value: 36,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_chest',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_chest_accuracy',
            value: 11.11111111111111,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_belly',
            value: 5,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_belly_accuracy',
            value: 13.88888888888889,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_arms_accuracy',
            value: 5.555555555555555,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_legs',
            value: 6,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_m4a1_hits_to_legs_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_bizon_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_shots',
            value: 34,
            group: 'accuracy'
          },
          weapon_bizon_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_bizon_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits_accuracy',
            value: 8.823529411764707,
            group: 'accuracy'
          },
          weapon_bizon_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_damage_to_health',
            value: 43,
            group: 'accuracy'
          },
          weapon_bizon_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_damage_to_armor',
            value: 9,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits_to_belly_accuracy',
            value: 2.941176470588235,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits_to_arms_accuracy',
            value: 2.941176470588235,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_legs: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_bizon_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_bizon_hits_to_legs_accuracy',
            value: 2.941176470588235,
            group: 'accuracy'
          },
          weapon_cz75a_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_shots',
            value: 2,
            group: 'accuracy'
          },
          weapon_cz75a_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_cz75a_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_hits_accuracy',
            value: 100,
            group: 'accuracy'
          },
          weapon_cz75a_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_damage_to_health',
            value: 49,
            group: 'accuracy'
          },
          weapon_cz75a_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_damage_to_armor',
            value: 6,
            group: 'accuracy'
          },
          weapon_cz75a_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_cz75a_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_hits_to_chest_accuracy',
            value: 50,
            group: 'accuracy'
          },
          weapon_cz75a_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_cz75a_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_cz75a_hits_to_belly_accuracy',
            value: 50,
            group: 'accuracy'
          },
          weapon_mp7_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp7_shots',
            value: 5,
            group: 'accuracy'
          },
          weapon_mp9_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_shots',
            value: 24,
            group: 'accuracy'
          },
          weapon_mp9_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp9_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_kills_accuracy',
            value: 4.166666666666666,
            group: 'accuracy'
          },
          weapon_mp9_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_mp9_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits_accuracy',
            value: 20.833333333333336,
            group: 'accuracy'
          },
          weapon_mp9_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_damage_to_health',
            value: 72,
            group: 'accuracy'
          },
          weapon_mp9_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_damage_to_armor',
            value: 8,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits_to_chest_accuracy',
            value: 4.166666666666666,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits_to_arms_accuracy',
            value: 4.166666666666666,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_legs: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits_to_legs',
            value: 3,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_mp9_hits_to_legs_accuracy',
            value: 12.5,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_shots',
            value: 12,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 41.66666666666667,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 97,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_damage_to_armor',
            value: 29,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_hits_to_chest',
            value: 3,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_hits_to_chest_accuracy',
            value: 25,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_usp_silencer_hits_to_arms_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_p90_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_shots',
            value: 170,
            group: 'accuracy'
          },
          weapon_p90_kills: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_kills',
            value: 6,
            group: 'accuracy'
          },
          weapon_p90_kills_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_kills_accuracy',
            value: 3.5294117647058822,
            group: 'accuracy'
          },
          weapon_p90_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits',
            value: 34,
            group: 'accuracy'
          },
          weapon_p90_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_p90_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_damage_to_health',
            value: 645,
            group: 'accuracy'
          },
          weapon_p90_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_damage_to_armor',
            value: 75,
            group: 'accuracy'
          },
          weapon_p90_hits_to_head: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_p90_hits_to_head_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_head_accuracy',
            value: 0.5882352941176471,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_chest',
            value: 10,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_chest_accuracy',
            value: 5.88235294117647,
            group: 'accuracy'
          },
          weapon_p90_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_belly',
            value: 16,
            group: 'accuracy'
          },
          weapon_p90_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_belly_accuracy',
            value: 9.411764705882353,
            group: 'accuracy'
          },
          weapon_p90_hits_to_arms: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_p90_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_arms_accuracy',
            value: 1.1764705882352942,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_legs',
            value: 5,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_p90_hits_to_legs_accuracy',
            value: 2.941176470588235,
            group: 'accuracy'
          },
          weapon_ump45_shots: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ump45_shots',
            value: 4,
            group: 'accuracy'
          },
          weapon_ump45_hits: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ump45_hits',
            value: 4,
            group: 'accuracy'
          },
          weapon_ump45_hits_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ump45_hits_accuracy',
            value: 100,
            group: 'accuracy'
          },
          weapon_ump45_damage_to_health: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ump45_damage_to_health',
            value: 88,
            group: 'accuracy'
          },
          weapon_ump45_damage_to_armor: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ump45_damage_to_armor',
            value: 20,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_belly: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ump45_hits_to_belly',
            value: 4,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:49287189',
            key: 'weapon_ump45_hits_to_belly_accuracy',
            value: 100,
            group: 'accuracy'
          }
        },
        'STEAM_1:1:227437474': {
          failed_1v5: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_1v5',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v5: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_side_ct_1v5',
            value: 1,
            group: 'clutches'
          },
          failed_1v2: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_1v2',
            value: 2,
            group: 'clutches'
          },
          failed_side_terrorist_1v2: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_side_terrorist_1v2',
            value: 2,
            group: 'clutches'
          },
          failed_1v3: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_1v3',
            value: 1,
            group: 'clutches'
          },
          failed_side_terrorist_1v3: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_side_terrorist_1v3',
            value: 1,
            group: 'clutches'
          },
          failed_1v4: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_1v4',
            value: 1,
            group: 'clutches'
          },
          failed_side_terrorist_1v4: {
            player: 'STEAM_1:1:227437474',
            key: 'failed_side_terrorist_1v4',
            value: 1,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:1:227437474',
            key: 'success',
            value: 2,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:1:227437474',
            key: 'success_on_terrorist_side',
            value: 2,
            group: 'entry_frags'
          },
          success_use_weapon_ak47: {
            player: 'STEAM_1:1:227437474',
            key: 'success_use_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_m4a1: {
            player: 'STEAM_1:1:227437474',
            key: 'success_use_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_ak47: {
            player: 'STEAM_1:1:227437474',
            key: 'success_on_terrorist_side_use_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_m4a1: {
            player: 'STEAM_1:1:227437474',
            key: 'success_on_terrorist_side_use_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:1:227437474',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:1:227437474',
            key: 'kills',
            value: 17,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:1:227437474',
            key: 'deaths',
            value: 23,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:1:227437474',
            key: 'assists',
            value: 3,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:1:227437474',
            key: 'mvp',
            value: 0,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:1:227437474',
            key: 'damage_health',
            value: 2387,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'damage_armor',
            value: 273,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:1:227437474',
            key: 'actual_damage_health',
            value: 1962,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:1:227437474',
            key: 'kd_ratio',
            value: 0.7391304347826086,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:1:227437474',
            key: 'kr_ratio',
            value: 0.6071428571428571,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:1:227437474',
            key: 'average_damage_health',
            value: 85.25,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'average_damage_armor',
            value: 9.75,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:1:227437474',
            key: 'actual_average_damage_health',
            value: 70.07142857142857,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'total_shots',
            value: 330,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:1:227437474',
            key: 'total_kills',
            value: 17,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'total_kills_accuracy',
            value: 5.151515151515151,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits',
            value: 76,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_accuracy',
            value: 23.03030303030303,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'total_damage_to_health',
            value: 2408,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'total_damage_to_armor',
            value: 278,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_head',
            value: 6,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_head_accuracy',
            value: 1.8181818181818181,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_chest',
            value: 36,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_chest_accuracy',
            value: 10.909090909090908,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_belly',
            value: 18,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_belly_accuracy',
            value: 5.454545454545454,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_arms',
            value: 8,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_arms_accuracy',
            value: 2.4242424242424243,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_legs',
            value: 5,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'total_hits_to_legs_accuracy',
            value: 1.5151515151515151,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_shots',
            value: 22,
            group: 'accuracy'
          },
          weapon_deagle_kills: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_kills_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_kills_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_deagle_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits',
            value: 9,
            group: 'accuracy'
          },
          weapon_deagle_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits_accuracy',
            value: 40.909090909090914,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_damage_to_health',
            value: 488,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_damage_to_armor',
            value: 18,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits_to_head_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits_to_chest_accuracy',
            value: 22.727272727272727,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_arms: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_deagle_hits_to_arms_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_shots',
            value: 91,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_kills',
            value: 6,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_kills_accuracy',
            value: 6.593406593406594,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits',
            value: 18,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_accuracy',
            value: 19.78021978021978,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_damage_to_health',
            value: 711,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_damage_to_armor',
            value: 66,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 2.197802197802198,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 5.4945054945054945,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_belly',
            value: 7,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_arms_accuracy',
            value: 2.197802197802198,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 1.098901098901099,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_usp_silencer_shots',
            value: 3,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_usp_silencer_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 33.33333333333333,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 40,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_usp_silencer_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_usp_silencer_hits_to_belly_accuracy',
            value: 33.33333333333333,
            group: 'accuracy'
          },
          weapon_awp_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_awp_shots',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_shots',
            value: 23,
            group: 'accuracy'
          },
          weapon_glock_kills: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_kills_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_kills_accuracy',
            value: 4.3478260869565215,
            group: 'accuracy'
          },
          weapon_glock_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_glock_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits_accuracy',
            value: 21.73913043478261,
            group: 'accuracy'
          },
          weapon_glock_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_damage_to_health',
            value: 160,
            group: 'accuracy'
          },
          weapon_glock_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_damage_to_armor',
            value: 16,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits_to_head_accuracy',
            value: 4.3478260869565215,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits_to_chest_accuracy',
            value: 8.695652173913043,
            group: 'accuracy'
          },
          weapon_glock_hits_to_arms: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_glock_hits_to_arms_accuracy',
            value: 8.695652173913043,
            group: 'accuracy'
          },
          weapon_mp9_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_shots',
            value: 53,
            group: 'accuracy'
          },
          weapon_mp9_kills: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_mp9_kills_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_kills_accuracy',
            value: 3.7735849056603774,
            group: 'accuracy'
          },
          weapon_mp9_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits',
            value: 12,
            group: 'accuracy'
          },
          weapon_mp9_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_accuracy',
            value: 22.641509433962266,
            group: 'accuracy'
          },
          weapon_mp9_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_damage_to_health',
            value: 170,
            group: 'accuracy'
          },
          weapon_mp9_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_damage_to_armor',
            value: 41,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_chest',
            value: 8,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_chest_accuracy',
            value: 15.09433962264151,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_belly: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_belly_accuracy',
            value: 1.8867924528301887,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_arms: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_arms_accuracy',
            value: 1.8867924528301887,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_legs: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_legs',
            value: 2,
            group: 'accuracy'
          },
          weapon_mp9_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_mp9_hits_to_legs_accuracy',
            value: 3.7735849056603774,
            group: 'accuracy'
          },
          weapon_m4a1_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_shots',
            value: 75,
            group: 'accuracy'
          },
          weapon_m4a1_kills: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_kills_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_kills_accuracy',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits',
            value: 15,
            group: 'accuracy'
          },
          weapon_m4a1_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_damage_to_health',
            value: 449,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_damage_to_armor',
            value: 60,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_head: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_head_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_head_accuracy',
            value: 1.3333333333333335,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_chest',
            value: 8,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_chest_accuracy',
            value: 10.666666666666668,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_belly',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_belly_accuracy',
            value: 5.333333333333334,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_arms_accuracy',
            value: 1.3333333333333335,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_m4a1_hits_to_legs_accuracy',
            value: 1.3333333333333335,
            group: 'accuracy'
          },
          weapon_ump45_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ump45_shots',
            value: 8,
            group: 'accuracy'
          },
          weapon_ump45_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ump45_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_ump45_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ump45_hits_accuracy',
            value: 12.5,
            group: 'accuracy'
          },
          weapon_ump45_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ump45_damage_to_health',
            value: 16,
            group: 'accuracy'
          },
          weapon_ump45_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ump45_damage_to_armor',
            value: 4,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ump45_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_ump45_hits_to_chest_accuracy',
            value: 12.5,
            group: 'accuracy'
          },
          weapon_hkp2000_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_hkp2000_shots',
            value: 1,
            group: 'accuracy'
          },
          weapon_famas_shots: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_shots',
            value: 53,
            group: 'accuracy'
          },
          weapon_famas_kills: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_famas_kills_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_kills_accuracy',
            value: 5.660377358490567,
            group: 'accuracy'
          },
          weapon_famas_hits: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits',
            value: 15,
            group: 'accuracy'
          },
          weapon_famas_hits_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_accuracy',
            value: 28.30188679245283,
            group: 'accuracy'
          },
          weapon_famas_damage_to_health: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_damage_to_health',
            value: 374,
            group: 'accuracy'
          },
          weapon_famas_damage_to_armor: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_damage_to_armor',
            value: 73,
            group: 'accuracy'
          },
          weapon_famas_hits_to_head: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_famas_hits_to_head_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_head_accuracy',
            value: 1.8867924528301887,
            group: 'accuracy'
          },
          weapon_famas_hits_to_chest: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_chest',
            value: 7,
            group: 'accuracy'
          },
          weapon_famas_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_chest_accuracy',
            value: 13.20754716981132,
            group: 'accuracy'
          },
          weapon_famas_hits_to_belly: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_belly',
            value: 5,
            group: 'accuracy'
          },
          weapon_famas_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_belly_accuracy',
            value: 9.433962264150944,
            group: 'accuracy'
          },
          weapon_famas_hits_to_arms: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_famas_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_arms_accuracy',
            value: 1.8867924528301887,
            group: 'accuracy'
          },
          weapon_famas_hits_to_legs: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_famas_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:227437474',
            key: 'weapon_famas_hits_to_legs_accuracy',
            value: 1.8867924528301887,
            group: 'accuracy'
          }
        },
        'STEAM_1:1:208017641': {
          success_1v2: {
            player: 'STEAM_1:1:208017641',
            key: 'success_1v2',
            value: 1,
            group: 'clutches'
          },
          success_side_ct_1v2: {
            player: 'STEAM_1:1:208017641',
            key: 'success_side_ct_1v2',
            value: 1,
            group: 'clutches'
          },
          failed_1v2: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_1v2',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v2: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_side_ct_1v2',
            value: 1,
            group: 'clutches'
          },
          failed_1v5: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_1v5',
            value: 1,
            group: 'clutches'
          },
          failed_side_terrorist_1v5: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_side_terrorist_1v5',
            value: 1,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:1:208017641',
            key: 'success',
            value: 4,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:1:208017641',
            key: 'success_on_terrorist_side',
            value: 4,
            group: 'entry_frags'
          },
          success_use_weapon_deagle: {
            player: 'STEAM_1:1:208017641',
            key: 'success_use_weapon_deagle',
            value: 2,
            group: 'entry_frags'
          },
          success_use_weapon_g3sg1: {
            player: 'STEAM_1:1:208017641',
            key: 'success_use_weapon_g3sg1',
            value: 2,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_deagle: {
            player: 'STEAM_1:1:208017641',
            key: 'success_on_terrorist_side_use_weapon_deagle',
            value: 2,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_g3sg1: {
            player: 'STEAM_1:1:208017641',
            key: 'success_on_terrorist_side_use_weapon_g3sg1',
            value: 2,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:1:208017641',
            key: 'failed',
            value: 8,
            group: 'entry_frags'
          },
          failed_on_terrorist_side: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_on_terrorist_side',
            value: 3,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_on_ct_side',
            value: 5,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_m4a1_silencer: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_killed_with_weapon_m4a1_silencer',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_m4a1: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_killed_with_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_awp: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_killed_with_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_deagle: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_killed_with_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_ak47: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_killed_with_weapon_ak47',
            value: 4,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_m4a1_silencer: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_on_terrorist_side_killed_with_weapon_m4a1_silencer',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_m4a1: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_on_terrorist_side_killed_with_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_awp: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_on_terrorist_side_killed_with_weapon_awp',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_deagle: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_on_ct_side_killed_with_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_ak47: {
            player: 'STEAM_1:1:208017641',
            key: 'failed_on_ct_side_killed_with_weapon_ak47',
            value: 4,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:1:208017641',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:1:208017641',
            key: 'kills',
            value: 15,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:1:208017641',
            key: 'deaths',
            value: 22,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:1:208017641',
            key: 'assists',
            value: 1,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:1:208017641',
            key: 'mvp',
            value: 3,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:1:208017641',
            key: 'damage_health',
            value: 2373,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'damage_armor',
            value: 186,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:1:208017641',
            key: 'actual_damage_health',
            value: 1648,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:1:208017641',
            key: 'kd_ratio',
            value: 0.6818181818181818,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:1:208017641',
            key: 'kr_ratio',
            value: 0.5357142857142857,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:1:208017641',
            key: 'average_damage_health',
            value: 84.75,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'average_damage_armor',
            value: 6.642857142857143,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:1:208017641',
            key: 'actual_average_damage_health',
            value: 58.857142857142854,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'total_shots',
            value: 166,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'total_kills',
            value: 15,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'total_kills_accuracy',
            value: 9.036144578313253,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits',
            value: 39,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_accuracy',
            value: 23.49397590361446,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'total_damage_to_health',
            value: 2373,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'total_damage_to_armor',
            value: 186,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_head',
            value: 5,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_head_accuracy',
            value: 3.0120481927710845,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_chest',
            value: 22,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_chest_accuracy',
            value: 13.253012048192772,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_belly',
            value: 6,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_belly_accuracy',
            value: 3.614457831325301,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_arms',
            value: 3,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_arms_accuracy',
            value: 1.8072289156626504,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'total_hits_to_legs_accuracy',
            value: 0.6024096385542169,
            group: 'accuracy'
          },
          weapon_p250_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p250_shots',
            value: 6,
            group: 'accuracy'
          },
          weapon_p250_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p250_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p250_hits_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_p250_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p250_damage_to_health',
            value: 18,
            group: 'accuracy'
          },
          weapon_p250_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p250_damage_to_armor',
            value: 5,
            group: 'accuracy'
          },
          weapon_p250_hits_to_arms: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p250_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p250_hits_to_arms_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_shots',
            value: 12,
            group: 'accuracy'
          },
          weapon_deagle_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_deagle_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_kills_accuracy',
            value: 25,
            group: 'accuracy'
          },
          weapon_deagle_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_deagle_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits_accuracy',
            value: 41.66666666666667,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_damage_to_health',
            value: 455,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_damage_to_armor',
            value: 3,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits_to_head_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits_to_chest_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_deagle_hits_to_belly_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_shots',
            value: 10,
            group: 'accuracy'
          },
          weapon_usp_silencer_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_kills_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 30,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 161,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_damage_to_armor',
            value: 16,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_head: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_head_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_hits_to_head_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_usp_silencer_hits_to_chest_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_ump45_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_shots',
            value: 9,
            group: 'accuracy'
          },
          weapon_ump45_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_ump45_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_kills_accuracy',
            value: 11.11111111111111,
            group: 'accuracy'
          },
          weapon_ump45_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_ump45_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_hits_accuracy',
            value: 22.22222222222222,
            group: 'accuracy'
          },
          weapon_ump45_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_damage_to_health',
            value: 108,
            group: 'accuracy'
          },
          weapon_ump45_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_damage_to_armor',
            value: 28,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_head: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_head_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_hits_to_head_accuracy',
            value: 11.11111111111111,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_ump45_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ump45_hits_to_chest_accuracy',
            value: 11.11111111111111,
            group: 'accuracy'
          },
          weapon_p90_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_shots',
            value: 26,
            group: 'accuracy'
          },
          weapon_p90_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_p90_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_hits_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_p90_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_damage_to_health',
            value: 27,
            group: 'accuracy'
          },
          weapon_p90_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_damage_to_armor',
            value: 3,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_hits_to_chest_accuracy',
            value: 3.8461538461538463,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_p90_hits_to_legs_accuracy',
            value: 3.8461538461538463,
            group: 'accuracy'
          },
          weapon_awp_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_shots',
            value: 5,
            group: 'accuracy'
          },
          weapon_awp_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_kills_accuracy',
            value: 40,
            group: 'accuracy'
          },
          weapon_awp_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_hits_accuracy',
            value: 40,
            group: 'accuracy'
          },
          weapon_awp_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_damage_to_health',
            value: 221,
            group: 'accuracy'
          },
          weapon_awp_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_damage_to_armor',
            value: 1,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_awp_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_awp_hits_to_chest_accuracy',
            value: 40,
            group: 'accuracy'
          },
          weapon_m4a1_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_shots',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_hits_accuracy',
            value: 100,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_damage_to_health',
            value: 22,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_damage_to_armor',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_hits_to_chest_accuracy',
            value: 100,
            group: 'accuracy'
          },
          weapon_ssg08_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_shots',
            value: 11,
            group: 'accuracy'
          },
          weapon_ssg08_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_ssg08_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_kills_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_ssg08_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_ssg08_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_hits_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_ssg08_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_damage_to_health',
            value: 290,
            group: 'accuracy'
          },
          weapon_ssg08_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_damage_to_armor',
            value: 25,
            group: 'accuracy'
          },
          weapon_ssg08_hits_to_head: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_ssg08_hits_to_head_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ssg08_hits_to_head_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_silencer_shots',
            value: 15,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_silencer_hits',
            value: 6,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_silencer_hits_accuracy',
            value: 40,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_silencer_damage_to_health',
            value: 97,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_silencer_damage_to_armor',
            value: 17,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_silencer_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_m4a1_silencer_hits_to_chest_accuracy',
            value: 33.33333333333333,
            group: 'accuracy'
          },
          weapon_g3sg1_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_shots',
            value: 61,
            group: 'accuracy'
          },
          weapon_g3sg1_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_kills',
            value: 6,
            group: 'accuracy'
          },
          weapon_g3sg1_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_kills_accuracy',
            value: 9.836065573770492,
            group: 'accuracy'
          },
          weapon_g3sg1_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits',
            value: 13,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits_accuracy',
            value: 21.311475409836063,
            group: 'accuracy'
          },
          weapon_g3sg1_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_damage_to_health',
            value: 879,
            group: 'accuracy'
          },
          weapon_g3sg1_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_damage_to_armor',
            value: 70,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_chest: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits_to_chest',
            value: 9,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits_to_chest_accuracy',
            value: 14.754098360655737,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_belly: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits_to_belly_accuracy',
            value: 4.918032786885246,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_arms: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_g3sg1_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_g3sg1_hits_to_arms_accuracy',
            value: 1.639344262295082,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_shots',
            value: 10,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_kills_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_hits_accuracy',
            value: 30,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_damage_to_health',
            value: 95,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_damage_to_armor',
            value: 14,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_hits_to_belly',
            value: 2,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:208017641',
            key: 'weapon_ak47_hits_to_arms_accuracy',
            value: 10,
            group: 'accuracy'
          }
        },
        'STEAM_1:1:35861504': {
          failed_1v2: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_1v2',
            value: 1,
            group: 'clutches'
          },
          failed_side_ct_1v2: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_side_ct_1v2',
            value: 1,
            group: 'clutches'
          },
          success_1v1: {
            player: 'STEAM_1:1:35861504',
            key: 'success_1v1',
            value: 1,
            group: 'clutches'
          },
          success_side_ct_1v1: {
            player: 'STEAM_1:1:35861504',
            key: 'success_side_ct_1v1',
            value: 1,
            group: 'clutches'
          },
          success: {
            player: 'STEAM_1:1:35861504',
            key: 'success',
            value: 3,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:1:35861504',
            key: 'success_on_terrorist_side',
            value: 2,
            group: 'entry_frags'
          },
          success_on_ct_side: {
            player: 'STEAM_1:1:35861504',
            key: 'success_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_glock: {
            player: 'STEAM_1:1:35861504',
            key: 'success_use_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_deagle: {
            player: 'STEAM_1:1:35861504',
            key: 'success_use_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_fiveseven: {
            player: 'STEAM_1:1:35861504',
            key: 'success_use_weapon_fiveseven',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_glock: {
            player: 'STEAM_1:1:35861504',
            key: 'success_on_terrorist_side_use_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_deagle: {
            player: 'STEAM_1:1:35861504',
            key: 'success_on_terrorist_side_use_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_fiveseven: {
            player: 'STEAM_1:1:35861504',
            key: 'success_on_ct_side_use_weapon_fiveseven',
            value: 1,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:1:35861504',
            key: 'failed',
            value: 2,
            group: 'entry_frags'
          },
          failed_on_terrorist_side: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_m4a1: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_killed_with_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_glock: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_killed_with_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_m4a1: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_on_terrorist_side_killed_with_weapon_m4a1',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_glock: {
            player: 'STEAM_1:1:35861504',
            key: 'failed_on_ct_side_killed_with_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:1:35861504',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:1:35861504',
            key: 'kills',
            value: 17,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:1:35861504',
            key: 'deaths',
            value: 24,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:1:35861504',
            key: 'assists',
            value: 7,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:1:35861504',
            key: 'mvp',
            value: 0,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:1:35861504',
            key: 'damage_health',
            value: 2901,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'damage_armor',
            value: 301,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:1:35861504',
            key: 'actual_damage_health',
            value: 2323,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:1:35861504',
            key: 'kd_ratio',
            value: 0.7083333333333334,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:1:35861504',
            key: 'kr_ratio',
            value: 0.6071428571428571,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:1:35861504',
            key: 'average_damage_health',
            value: 103.60714285714286,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'average_damage_armor',
            value: 10.75,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:1:35861504',
            key: 'actual_average_damage_health',
            value: 82.96428571428571,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'total_shots',
            value: 253,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'total_kills',
            value: 17,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'total_kills_accuracy',
            value: 6.719367588932807,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits',
            value: 68,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_accuracy',
            value: 26.877470355731226,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'total_damage_to_health',
            value: 2901,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'total_damage_to_armor',
            value: 301,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_head',
            value: 13,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_head_accuracy',
            value: 5.138339920948617,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_chest',
            value: 34,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_chest_accuracy',
            value: 13.438735177865613,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_belly',
            value: 11,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_belly_accuracy',
            value: 4.3478260869565215,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_arms',
            value: 5,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_arms_accuracy',
            value: 1.9762845849802373,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_legs',
            value: 5,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'total_hits_to_legs_accuracy',
            value: 1.9762845849802373,
            group: 'accuracy'
          },
          weapon_galilar_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_shots',
            value: 24,
            group: 'accuracy'
          },
          weapon_galilar_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_galilar_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_kills_accuracy',
            value: 4.166666666666666,
            group: 'accuracy'
          },
          weapon_galilar_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits',
            value: 7,
            group: 'accuracy'
          },
          weapon_galilar_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_accuracy',
            value: 29.166666666666668,
            group: 'accuracy'
          },
          weapon_galilar_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_damage_to_health',
            value: 183,
            group: 'accuracy'
          },
          weapon_galilar_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_damage_to_armor',
            value: 9,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_chest_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_belly: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_belly_accuracy',
            value: 4.166666666666666,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_arms: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_arms',
            value: 3,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_arms_accuracy',
            value: 12.5,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_legs: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_galilar_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_galilar_hits_to_legs_accuracy',
            value: 4.166666666666666,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_usp_silencer_shots',
            value: 4,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_usp_silencer_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 25,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 32,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_usp_silencer_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_usp_silencer_hits_to_chest_accuracy',
            value: 25,
            group: 'accuracy'
          },
          weapon_glock_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_shots',
            value: 10,
            group: 'accuracy'
          },
          weapon_glock_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_kills_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_glock_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_hits_accuracy',
            value: 20,
            group: 'accuracy'
          },
          weapon_glock_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_damage_to_health',
            value: 89,
            group: 'accuracy'
          },
          weapon_glock_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_damage_to_armor',
            value: 5,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_hits_to_head_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_glock_hits_to_chest_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_shots',
            value: 89,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_kills',
            value: 6,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_kills_accuracy',
            value: 6.741573033707865,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits',
            value: 22,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_accuracy',
            value: 24.719101123595504,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_damage_to_health',
            value: 933,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_damage_to_armor',
            value: 73,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_head',
            value: 3,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 3.3707865168539324,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_chest',
            value: 14,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 15.730337078651685,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_belly',
            value: 4,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 4.49438202247191,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 1.1235955056179776,
            group: 'accuracy'
          },
          weapon_p250_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_shots',
            value: 13,
            group: 'accuracy'
          },
          weapon_p250_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_kills_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_p250_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_hits_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_p250_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_damage_to_health',
            value: 84,
            group: 'accuracy'
          },
          weapon_p250_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_damage_to_armor',
            value: 23,
            group: 'accuracy'
          },
          weapon_p250_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_p250_hits_to_head_accuracy',
            value: 7.6923076923076925,
            group: 'accuracy'
          },
          weapon_m4a1_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_shots',
            value: 67,
            group: 'accuracy'
          },
          weapon_m4a1_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_kills',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_kills_accuracy',
            value: 5.970149253731343,
            group: 'accuracy'
          },
          weapon_m4a1_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits',
            value: 21,
            group: 'accuracy'
          },
          weapon_m4a1_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_accuracy',
            value: 31.343283582089555,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_damage_to_health',
            value: 734,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_damage_to_armor',
            value: 134,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_head',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_head_accuracy',
            value: 5.970149253731343,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_chest',
            value: 9,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_chest_accuracy',
            value: 13.432835820895523,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_belly_accuracy',
            value: 4.477611940298507,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_arms_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_arms_accuracy',
            value: 2.9850746268656714,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_legs',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_hits_to_legs_accuracy',
            value: 4.477611940298507,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_shots',
            value: 20,
            group: 'accuracy'
          },
          weapon_deagle_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_kills_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_deagle_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_deagle_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits_accuracy',
            value: 25,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_damage_to_health',
            value: 496,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_damage_to_armor',
            value: 10,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits_to_head',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits_to_head_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits_to_chest',
            value: 2,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits_to_chest_accuracy',
            value: 10,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_deagle_hits_to_belly_accuracy',
            value: 5,
            group: 'accuracy'
          },
          weapon_fiveseven_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_shots',
            value: 11,
            group: 'accuracy'
          },
          weapon_fiveseven_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_fiveseven_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_kills_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_fiveseven_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits_accuracy',
            value: 27.27272727272727,
            group: 'accuracy'
          },
          weapon_fiveseven_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_damage_to_health',
            value: 143,
            group: 'accuracy'
          },
          weapon_fiveseven_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_damage_to_armor',
            value: 6,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits_to_head_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits_to_chest_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_belly: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_fiveseven_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_fiveseven_hits_to_belly_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_hkp2000_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_hkp2000_shots',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_shots: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_shots',
            value: 14,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_kills_accuracy',
            value: 7.142857142857142,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits',
            value: 6,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits_accuracy',
            value: 42.857142857142854,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_health: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_damage_to_health',
            value: 207,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_armor: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_damage_to_armor',
            value: 41,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_head: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_head_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits_to_head_accuracy',
            value: 7.142857142857142,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits_to_chest',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits_to_chest_accuracy',
            value: 28.57142857142857,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:1:35861504',
            key: 'weapon_m4a1_silencer_hits_to_belly_accuracy',
            value: 7.142857142857142,
            group: 'accuracy'
          }
        },
        'STEAM_1:0:53908971': {
          success: {
            player: 'STEAM_1:0:53908971',
            key: 'success',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side: {
            player: 'STEAM_1:0:53908971',
            key: 'success_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_m4a1_silencer: {
            player: 'STEAM_1:0:53908971',
            key: 'success_use_weapon_m4a1_silencer',
            value: 1,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_m4a1_silencer: {
            player: 'STEAM_1:0:53908971',
            key: 'success_on_ct_side_use_weapon_m4a1_silencer',
            value: 1,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:0:53908971',
            key: 'failed',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:0:53908971',
            key: 'failed_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_deagle: {
            player: 'STEAM_1:0:53908971',
            key: 'failed_killed_with_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_deagle: {
            player: 'STEAM_1:0:53908971',
            key: 'failed_on_ct_side_killed_with_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:0:53908971',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:0:53908971',
            key: 'kills',
            value: 22,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:0:53908971',
            key: 'deaths',
            value: 23,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:0:53908971',
            key: 'assists',
            value: 4,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:0:53908971',
            key: 'mvp',
            value: 3,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:0:53908971',
            key: 'damage_health',
            value: 2816,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:0:53908971',
            key: 'damage_armor',
            value: 370,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:0:53908971',
            key: 'actual_damage_health',
            value: 2198,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:0:53908971',
            key: 'kd_ratio',
            value: 0.9565217391304348,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:0:53908971',
            key: 'kr_ratio',
            value: 0.7857142857142857,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:0:53908971',
            key: 'average_damage_health',
            value: 100.57142857142857,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:0:53908971',
            key: 'average_damage_armor',
            value: 13.214285714285714,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:0:53908971',
            key: 'actual_average_damage_health',
            value: 78.5,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:0:53908971',
            key: 'total_shots',
            value: 304,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:0:53908971',
            key: 'total_kills',
            value: 22,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'total_kills_accuracy',
            value: 7.236842105263158,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits',
            value: 84,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_accuracy',
            value: 27.631578947368425,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:0:53908971',
            key: 'total_damage_to_health',
            value: 2861,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:0:53908971',
            key: 'total_damage_to_armor',
            value: 376,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_head',
            value: 10,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_head_accuracy',
            value: 3.289473684210526,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_chest',
            value: 36,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_chest_accuracy',
            value: 11.842105263157894,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_belly',
            value: 24,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_belly_accuracy',
            value: 7.894736842105263,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_arms',
            value: 9,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_arms_accuracy',
            value: 2.9605263157894735,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_legs',
            value: 5,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'total_hits_to_legs_accuracy',
            value: 1.644736842105263,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_usp_silencer_shots',
            value: 6,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_shots: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_shots',
            value: 90,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_kills',
            value: 7,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_kills_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_kills_accuracy',
            value: 7.777777777777778,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits',
            value: 32,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_accuracy',
            value: 35.55555555555556,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_health: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_damage_to_health',
            value: 1039,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_damage_to_armor: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_damage_to_armor',
            value: 204,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_head: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_head',
            value: 4,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_head_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_head_accuracy',
            value: 4.444444444444445,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_chest',
            value: 14,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_chest_accuracy',
            value: 15.555555555555555,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_belly',
            value: 11,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_belly_accuracy',
            value: 12.222222222222221,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_arms: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_arms_accuracy',
            value: 2.2222222222222223,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_legs: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_silencer_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_m4a1_silencer_hits_to_legs_accuracy',
            value: 1.1111111111111112,
            group: 'accuracy'
          },
          weapon_glock_shots: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_shots',
            value: 22,
            group: 'accuracy'
          },
          weapon_glock_kills: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_kills_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_kills_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_glock_hits: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits',
            value: 9,
            group: 'accuracy'
          },
          weapon_glock_hits_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_accuracy',
            value: 40.909090909090914,
            group: 'accuracy'
          },
          weapon_glock_damage_to_health: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_damage_to_health',
            value: 261,
            group: 'accuracy'
          },
          weapon_glock_damage_to_armor: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_damage_to_armor',
            value: 28,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_hits_to_head_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_head_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_glock_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_chest_accuracy',
            value: 22.727272727272727,
            group: 'accuracy'
          },
          weapon_glock_hits_to_belly: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_belly',
            value: 2,
            group: 'accuracy'
          },
          weapon_glock_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_belly_accuracy',
            value: 9.090909090909092,
            group: 'accuracy'
          },
          weapon_glock_hits_to_legs: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_glock_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_glock_hits_to_legs_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_deagle_shots',
            value: 2,
            group: 'accuracy'
          },
          weapon_famas_shots: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_famas_shots',
            value: 6,
            group: 'accuracy'
          },
          weapon_famas_hits: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_famas_hits',
            value: 2,
            group: 'accuracy'
          },
          weapon_famas_hits_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_famas_hits_accuracy',
            value: 33.33333333333333,
            group: 'accuracy'
          },
          weapon_famas_damage_to_health: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_famas_damage_to_health',
            value: 40,
            group: 'accuracy'
          },
          weapon_famas_damage_to_armor: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_famas_damage_to_armor',
            value: 8,
            group: 'accuracy'
          },
          weapon_famas_hits_to_arms: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_famas_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_famas_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_famas_hits_to_arms_accuracy',
            value: 33.33333333333333,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_shots',
            value: 178,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_kills',
            value: 13,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_kills_accuracy',
            value: 7.303370786516854,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits',
            value: 41,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_accuracy',
            value: 23.03370786516854,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_damage_to_health',
            value: 1521,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_damage_to_armor',
            value: 136,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_head',
            value: 5,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 2.8089887640449436,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_chest',
            value: 17,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 9.550561797752808,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_belly',
            value: 11,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 6.179775280898876,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_arms',
            value: 5,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_arms_accuracy',
            value: 2.8089887640449436,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_legs',
            value: 3,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:53908971',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 1.6853932584269662,
            group: 'accuracy'
          }
        },
        'STEAM_1:0:26217115': {
          success: {
            player: 'STEAM_1:0:26217115',
            key: 'success',
            value: 5,
            group: 'entry_frags'
          },
          success_on_ct_side: {
            player: 'STEAM_1:0:26217115',
            key: 'success_on_ct_side',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side: {
            player: 'STEAM_1:0:26217115',
            key: 'success_on_terrorist_side',
            value: 4,
            group: 'entry_frags'
          },
          success_use_weapon_xm1014: {
            player: 'STEAM_1:0:26217115',
            key: 'success_use_weapon_xm1014',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_deagle: {
            player: 'STEAM_1:0:26217115',
            key: 'success_use_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          success_use_weapon_ak47: {
            player: 'STEAM_1:0:26217115',
            key: 'success_use_weapon_ak47',
            value: 3,
            group: 'entry_frags'
          },
          success_on_ct_side_use_weapon_xm1014: {
            player: 'STEAM_1:0:26217115',
            key: 'success_on_ct_side_use_weapon_xm1014',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_deagle: {
            player: 'STEAM_1:0:26217115',
            key: 'success_on_terrorist_side_use_weapon_deagle',
            value: 1,
            group: 'entry_frags'
          },
          success_on_terrorist_side_use_weapon_ak47: {
            player: 'STEAM_1:0:26217115',
            key: 'success_on_terrorist_side_use_weapon_ak47',
            value: 3,
            group: 'entry_frags'
          },
          failed: {
            player: 'STEAM_1:0:26217115',
            key: 'failed',
            value: 7,
            group: 'entry_frags'
          },
          failed_on_ct_side: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_on_ct_side',
            value: 6,
            group: 'entry_frags'
          },
          failed_on_terrorist_side: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_on_terrorist_side',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_glock: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_killed_with_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_deagle: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_killed_with_weapon_deagle',
            value: 2,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_ak47: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_killed_with_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_g3sg1: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_killed_with_weapon_g3sg1',
            value: 2,
            group: 'entry_frags'
          },
          failed_killed_with_weapon_fiveseven: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_killed_with_weapon_fiveseven',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_glock: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_on_ct_side_killed_with_weapon_glock',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_deagle: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_on_ct_side_killed_with_weapon_deagle',
            value: 2,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_ak47: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_on_ct_side_killed_with_weapon_ak47',
            value: 1,
            group: 'entry_frags'
          },
          failed_on_ct_side_killed_with_weapon_g3sg1: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_on_ct_side_killed_with_weapon_g3sg1',
            value: 2,
            group: 'entry_frags'
          },
          failed_on_terrorist_side_killed_with_weapon_fiveseven: {
            player: 'STEAM_1:0:26217115',
            key: 'failed_on_terrorist_side_killed_with_weapon_fiveseven',
            value: 1,
            group: 'entry_frags'
          },
          rounds: {
            player: 'STEAM_1:0:26217115',
            key: 'rounds',
            value: 28,
            group: 'general'
          },
          kills: {
            player: 'STEAM_1:0:26217115',
            key: 'kills',
            value: 22,
            group: 'general'
          },
          deaths: {
            player: 'STEAM_1:0:26217115',
            key: 'deaths',
            value: 21,
            group: 'general'
          },
          assists: {
            player: 'STEAM_1:0:26217115',
            key: 'assists',
            value: 6,
            group: 'general'
          },
          mvp: {
            player: 'STEAM_1:0:26217115',
            key: 'mvp',
            value: 4,
            group: 'general'
          },
          damage_health: {
            player: 'STEAM_1:0:26217115',
            key: 'damage_health',
            value: 2741,
            group: 'general'
          },
          damage_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'damage_armor',
            value: 220,
            group: 'general'
          },
          actual_damage_health: {
            player: 'STEAM_1:0:26217115',
            key: 'actual_damage_health',
            value: 2299,
            group: 'general'
          },
          kd_ratio: {
            player: 'STEAM_1:0:26217115',
            key: 'kd_ratio',
            value: 1.0476190476190477,
            group: 'general'
          },
          kr_ratio: {
            player: 'STEAM_1:0:26217115',
            key: 'kr_ratio',
            value: 0.7857142857142857,
            group: 'general'
          },
          average_damage_health: {
            player: 'STEAM_1:0:26217115',
            key: 'average_damage_health',
            value: 97.89285714285714,
            group: 'general'
          },
          average_damage_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'average_damage_armor',
            value: 7.857142857142857,
            group: 'general'
          },
          actual_average_damage_health: {
            player: 'STEAM_1:0:26217115',
            key: 'actual_average_damage_health',
            value: 82.10714285714286,
            group: 'general'
          },
          total_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'total_shots',
            value: 304,
            group: 'accuracy'
          },
          total_kills: {
            player: 'STEAM_1:0:26217115',
            key: 'total_kills',
            value: 22,
            group: 'accuracy'
          },
          total_kills_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'total_kills_accuracy',
            value: 7.236842105263158,
            group: 'accuracy'
          },
          total_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits',
            value: 86,
            group: 'accuracy'
          },
          total_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_accuracy',
            value: 28.289473684210524,
            group: 'accuracy'
          },
          total_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'total_damage_to_health',
            value: 2760,
            group: 'accuracy'
          },
          total_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'total_damage_to_armor',
            value: 222,
            group: 'accuracy'
          },
          total_hits_to_head: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_head',
            value: 10,
            group: 'accuracy'
          },
          total_hits_to_head_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_head_accuracy',
            value: 3.289473684210526,
            group: 'accuracy'
          },
          total_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_chest',
            value: 28,
            group: 'accuracy'
          },
          total_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_chest_accuracy',
            value: 9.210526315789473,
            group: 'accuracy'
          },
          total_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_belly',
            value: 29,
            group: 'accuracy'
          },
          total_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_belly_accuracy',
            value: 9.539473684210527,
            group: 'accuracy'
          },
          total_hits_to_arms: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_arms',
            value: 6,
            group: 'accuracy'
          },
          total_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_arms_accuracy',
            value: 1.9736842105263157,
            group: 'accuracy'
          },
          total_hits_to_legs: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_legs',
            value: 7,
            group: 'accuracy'
          },
          total_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'total_hits_to_legs_accuracy',
            value: 2.302631578947368,
            group: 'accuracy'
          },
          weapon_ak47_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_shots',
            value: 147,
            group: 'accuracy'
          },
          weapon_ak47_kills: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_kills',
            value: 14,
            group: 'accuracy'
          },
          weapon_ak47_kills_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_kills_accuracy',
            value: 9.523809523809524,
            group: 'accuracy'
          },
          weapon_ak47_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits',
            value: 37,
            group: 'accuracy'
          },
          weapon_ak47_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_accuracy',
            value: 25.170068027210885,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_damage_to_health',
            value: 1636,
            group: 'accuracy'
          },
          weapon_ak47_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_damage_to_armor',
            value: 161,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_head',
            value: 9,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_head_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_head_accuracy',
            value: 6.122448979591836,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_chest',
            value: 13,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_chest_accuracy',
            value: 8.843537414965986,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_belly',
            value: 5,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_belly_accuracy',
            value: 3.4013605442176873,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_arms_accuracy',
            value: 0.6802721088435374,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_legs',
            value: 3,
            group: 'accuracy'
          },
          weapon_ak47_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_ak47_hits_to_legs_accuracy',
            value: 2.0408163265306123,
            group: 'accuracy'
          },
          weapon_usp_silencer_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_shots',
            value: 17,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits',
            value: 5,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits_accuracy',
            value: 29.411764705882355,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_damage_to_health',
            value: 125,
            group: 'accuracy'
          },
          weapon_usp_silencer_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_damage_to_armor',
            value: 14,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits_to_chest_accuracy',
            value: 5.88235294117647,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits_to_belly_accuracy',
            value: 17.647058823529413,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_arms: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_usp_silencer_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_usp_silencer_hits_to_arms_accuracy',
            value: 5.88235294117647,
            group: 'accuracy'
          },
          weapon_p90_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_shots',
            value: 66,
            group: 'accuracy'
          },
          weapon_p90_kills: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_kills',
            value: 3,
            group: 'accuracy'
          },
          weapon_p90_kills_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_kills_accuracy',
            value: 4.545454545454546,
            group: 'accuracy'
          },
          weapon_p90_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits',
            value: 14,
            group: 'accuracy'
          },
          weapon_p90_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_accuracy',
            value: 21.21212121212121,
            group: 'accuracy'
          },
          weapon_p90_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_damage_to_health',
            value: 370,
            group: 'accuracy'
          },
          weapon_p90_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_damage_to_armor',
            value: 7,
            group: 'accuracy'
          },
          weapon_p90_hits_to_head: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_head',
            value: 1,
            group: 'accuracy'
          },
          weapon_p90_hits_to_head_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_head_accuracy',
            value: 1.5151515151515151,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_chest',
            value: 4,
            group: 'accuracy'
          },
          weapon_p90_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_chest_accuracy',
            value: 6.0606060606060606,
            group: 'accuracy'
          },
          weapon_p90_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_belly',
            value: 7,
            group: 'accuracy'
          },
          weapon_p90_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_belly_accuracy',
            value: 10.606060606060606,
            group: 'accuracy'
          },
          weapon_p90_hits_to_arms: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_p90_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_arms_accuracy',
            value: 1.5151515151515151,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_p90_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p90_hits_to_legs_accuracy',
            value: 1.5151515151515151,
            group: 'accuracy'
          },
          weapon_p250_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p250_shots',
            value: 14,
            group: 'accuracy'
          },
          weapon_p250_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p250_hits',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p250_hits_accuracy',
            value: 7.142857142857142,
            group: 'accuracy'
          },
          weapon_p250_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p250_damage_to_health',
            value: 3,
            group: 'accuracy'
          },
          weapon_p250_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p250_damage_to_armor',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p250_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_p250_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_p250_hits_to_chest_accuracy',
            value: 7.142857142857142,
            group: 'accuracy'
          },
          weapon_aug_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_shots',
            value: 28,
            group: 'accuracy'
          },
          weapon_aug_kills: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_aug_kills_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_kills_accuracy',
            value: 7.142857142857142,
            group: 'accuracy'
          },
          weapon_aug_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits',
            value: 8,
            group: 'accuracy'
          },
          weapon_aug_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits_accuracy',
            value: 28.57142857142857,
            group: 'accuracy'
          },
          weapon_aug_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_damage_to_health',
            value: 207,
            group: 'accuracy'
          },
          weapon_aug_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_damage_to_armor',
            value: 8,
            group: 'accuracy'
          },
          weapon_aug_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits_to_chest',
            value: 3,
            group: 'accuracy'
          },
          weapon_aug_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits_to_chest_accuracy',
            value: 10.714285714285714,
            group: 'accuracy'
          },
          weapon_aug_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits_to_belly',
            value: 3,
            group: 'accuracy'
          },
          weapon_aug_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits_to_belly_accuracy',
            value: 10.714285714285714,
            group: 'accuracy'
          },
          weapon_aug_hits_to_arms: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits_to_arms',
            value: 2,
            group: 'accuracy'
          },
          weapon_aug_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_aug_hits_to_arms_accuracy',
            value: 7.142857142857142,
            group: 'accuracy'
          },
          weapon_glock_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_glock_shots',
            value: 6,
            group: 'accuracy'
          },
          weapon_galilar_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_galilar_shots',
            value: 2,
            group: 'accuracy'
          },
          weapon_m4a1_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_shots',
            value: 12,
            group: 'accuracy'
          },
          weapon_m4a1_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_m4a1_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_hits_accuracy',
            value: 25,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_damage_to_health',
            value: 76,
            group: 'accuracy'
          },
          weapon_m4a1_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_damage_to_armor',
            value: 10,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_hits_to_belly',
            value: 2,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_hits_to_belly_accuracy',
            value: 16.666666666666664,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_hits_to_legs',
            value: 1,
            group: 'accuracy'
          },
          weapon_m4a1_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_m4a1_hits_to_legs_accuracy',
            value: 8.333333333333332,
            group: 'accuracy'
          },
          weapon_deagle_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_shots',
            value: 7,
            group: 'accuracy'
          },
          weapon_deagle_kills: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_kills',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_kills_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_kills_accuracy',
            value: 14.285714285714285,
            group: 'accuracy'
          },
          weapon_deagle_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits',
            value: 3,
            group: 'accuracy'
          },
          weapon_deagle_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits_accuracy',
            value: 42.857142857142854,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_damage_to_health',
            value: 123,
            group: 'accuracy'
          },
          weapon_deagle_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_damage_to_armor',
            value: 3,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits_to_chest',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits_to_chest_accuracy',
            value: 14.285714285714285,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits_to_belly',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits_to_belly_accuracy',
            value: 14.285714285714285,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_arms: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits_to_arms',
            value: 1,
            group: 'accuracy'
          },
          weapon_deagle_hits_to_arms_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_deagle_hits_to_arms_accuracy',
            value: 14.285714285714285,
            group: 'accuracy'
          },
          weapon_xm1014_shots: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_shots',
            value: 5,
            group: 'accuracy'
          },
          weapon_xm1014_kills: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_kills',
            value: 2,
            group: 'accuracy'
          },
          weapon_xm1014_kills_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_kills_accuracy',
            value: 40,
            group: 'accuracy'
          },
          weapon_xm1014_hits: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits',
            value: 15,
            group: 'accuracy'
          },
          weapon_xm1014_hits_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits_accuracy',
            value: 300,
            group: 'accuracy'
          },
          weapon_xm1014_damage_to_health: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_damage_to_health',
            value: 220,
            group: 'accuracy'
          },
          weapon_xm1014_damage_to_armor: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_damage_to_armor',
            value: 18,
            group: 'accuracy'
          },
          weapon_xm1014_hits_to_chest: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits_to_chest',
            value: 5,
            group: 'accuracy'
          },
          weapon_xm1014_hits_to_chest_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits_to_chest_accuracy',
            value: 100,
            group: 'accuracy'
          },
          weapon_xm1014_hits_to_belly: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits_to_belly',
            value: 8,
            group: 'accuracy'
          },
          weapon_xm1014_hits_to_belly_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits_to_belly_accuracy',
            value: 160,
            group: 'accuracy'
          },
          weapon_xm1014_hits_to_legs: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits_to_legs',
            value: 2,
            group: 'accuracy'
          },
          weapon_xm1014_hits_to_legs_accuracy: {
            player: 'STEAM_1:0:26217115',
            key: 'weapon_xm1014_hits_to_legs_accuracy',
            value: 40,
            group: 'accuracy'
          }
        }
      }
    }
  },
  replayPlayers: {
    playersBySteamId: {
      'STEAM_1:1:208017641': {
        team: 'team_1611843',
        steamId: 'STEAM_1:1:208017641',
        nickname: 'Król Całek Oznaczonych',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:1:227437474': {
        team: 'team_1611843',
        steamId: 'STEAM_1:1:227437474',
        nickname: 'AnonymousIG',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:0:79295022': {
        team: 'team_1611843',
        steamId: 'STEAM_1:0:79295022',
        nickname: 'Elareon',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:1:35861504': {
        team: 'team_1611843',
        steamId: 'STEAM_1:1:35861504',
        nickname: 'GaLi | マティウ',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:1:49287189': {
        team: 'team_1611843',
        steamId: 'STEAM_1:1:49287189',
        nickname: 'Jean Lassalle [Trade]',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:0:27776013': {
        team: 'team_161860',
        steamId: 'STEAM_1:0:27776013',
        nickname: 'Yvanoe',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:0:122694050': {
        team: 'team_161860',
        steamId: 'STEAM_1:0:122694050',
        nickname: 'Banded | Strata ^-^',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:0:26217115': {
        team: 'team_161860',
        steamId: 'STEAM_1:0:26217115',
        nickname: 'kawał sejwa',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:0:144074579': {
        team: 'team_161860',
        steamId: 'STEAM_1:0:144074579',
        nickname: 'psyXotrop',
        isDTPlayer: false,
        user: {},
        profile: {}
      },
      'STEAM_1:0:53908971': {
        team: 'team_161860',
        steamId: 'STEAM_1:0:53908971',
        nickname: 'Timmiekat',
        isDTPlayer: false,
        user: {},
        profile: {}
      }
    },
    teamsByName: {
      team_1611843: {
        '5b8fabc90ec65e00513ad1d3': [
          'STEAM_1:1:49287189',
          'STEAM_1:0:79295022',
          'STEAM_1:1:35861504',
          'STEAM_1:1:227437474',
          'STEAM_1:1:208017641'
        ]
      },
      team_161860: {
        '5b8fabc90ec65e00513ad1d3': [
          'STEAM_1:0:27776013',
          'STEAM_1:0:122694050',
          'STEAM_1:0:26217115',
          'STEAM_1:0:53908971',
          'STEAM_1:0:144074579'
        ]
      }
    },
    userTeamPlayersByReplay: {},
    opponentTeamPlayersByReplay: {}
  },
  weaponStats: {
    heatmaps: [],
    filters: {
      side: 'SIDE_ALL',
      selectedWeapon: 'all',
      rounds: {
        total: true
      },
      weapons: [
        'all',
        'awp',
        'weapon_ak47',
        'deagle',
        'ak47',
        'galilar',
        'm4a1',
        'usp_silencer',
        'm4a1_silencer',
        'glock',
        'fiveseven',
        'bayonet',
        'ssg08',
        'g3sg1',
        'aug',
        'p250',
        'mp7',
        'mac10',
        'famas',
        'p90',
        'xm1014',
        'mp9',
        'negev',
        'tec9',
        'ump45',
        'sg556',
        'cz75a',
        'bizon'
      ],
      players: playerFilters
    },
    data: {
      '5b8fabc90ec65e00513ad1d3': {
        weaponsByPlayers: {
          'STEAM_1:0:79295022': [
            {
              round: 25,
              shots: 22,
              hits: {
                head: 1,
                chest: 3,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 5
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 30,
              damageToHealth: 100,
              killsDistance: [491.7641711227039],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'mp7',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 3,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 5
                  },
                  killsDistance: [491.7641711227039]
                }
              }
            },
            {
              round: 25,
              shots: 3,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 3,
              damageToHealth: 100,
              killsDistance: [654.6120988799397],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [654.6120988799397]
                }
              }
            },
            {
              round: 27,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'xm1014',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 26,
              shots: 31,
              hits: {
                head: 0,
                chest: 8,
                belly: 4,
                arms: 1,
                legs: 0,
                total: 13
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 3
              },
              damageToArmor: 12,
              damageToHealth: 287,
              killsDistance: [225.28426487440262, 430.81086337277986, 1129.572042855169],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'aug',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 0,
                    chest: 8,
                    belly: 4,
                    arms: 1,
                    legs: 0,
                    total: 13
                  },
                  killsDistance: [225.28426487440262, 430.81086337277986, 1129.572042855169]
                }
              }
            },
            {
              round: 24,
              shots: 47,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'negev',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 8,
              shots: 32,
              hits: {
                head: 0,
                chest: 4,
                belly: 1,
                arms: 3,
                legs: 0,
                total: 8
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              damageToArmor: 58,
              damageToHealth: 100,
              killsDistance: [281.9804957794067],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'glock',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 4,
                    belly: 1,
                    arms: 3,
                    legs: 0,
                    total: 8
                  },
                  killsDistance: [281.9804957794067]
                }
              }
            },
            {
              round: 11,
              shots: 8,
              hits: {
                head: 0,
                chest: 1,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 92,
              killsDistance: [528.0587088572634],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'sg553',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [528.0587088572634]
                }
              }
            },
            {
              round: 1,
              shots: 5,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 100,
              killsDistance: [185.75790696495264],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [185.75790696495264]
                }
              }
            },
            {
              round: 20,
              shots: 4,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 3
              },
              kills: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 2,
              damageToHealth: 251,
              killsDistance: [1113.3507982662068, 225.3464000156204],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 3
                  },
                  killsDistance: [1113.3507982662068, 225.3464000156204]
                }
              }
            },
            {
              round: 9,
              shots: 3,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'p250',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 8,
              shots: 2,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 1,
              damageToHealth: 108,
              killsDistance: [1770.3169207800054],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [1770.3169207800054]
                }
              }
            },
            {
              round: 5,
              shots: 4,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 1,
              damageToHealth: 68,
              killsDistance: [912.5206846970648],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [912.5206846970648]
                }
              }
            },
            {
              round: 21,
              shots: 29,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 3,
              damageToHealth: 8,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'bizon',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 17,
              shots: 58,
              hits: {
                head: 1,
                chest: 6,
                belly: 9,
                arms: 7,
                legs: 2,
                total: 25
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              damageToArmor: 90,
              damageToHealth: 274,
              killsDistance: [337.8638779153522, 444.53346330731955],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'bizon',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 6,
                    belly: 9,
                    arms: 7,
                    legs: 2,
                    total: 25
                  },
                  killsDistance: [337.8638779153522, 444.53346330731955]
                }
              }
            },
            {
              round: 2,
              shots: 6,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 1,
              damageToHealth: 19,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'tec9',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 3,
              shots: 13,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'tec9',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 4,
              shots: 16,
              hits: {
                head: 0,
                chest: 3,
                belly: 3,
                arms: 1,
                legs: 0,
                total: 7
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 20,
              damageToHealth: 180,
              killsDistance: [689.3257575341285],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'm4a1_silencer',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 3,
                    arms: 1,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [689.3257575341285]
                }
              }
            },
            {
              round: 7,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 12,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 43,
              killsDistance: [666.2987318012845],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'sg553',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [666.2987318012845]
                }
              }
            },
            {
              round: 10,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 12,
              shots: 8,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'glock',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 16,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 61,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 18,
              shots: 41,
              hits: {
                head: 0,
                chest: 2,
                belly: 3,
                arms: 3,
                legs: 1,
                total: 9
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 1,
                legs: 0,
                total: 3
              },
              damageToArmor: 14,
              damageToHealth: 143,
              killsDistance: [658.6918854821274, 306.8370903264467, 201.12682565983087],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'p90',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 3,
                    arms: 3,
                    legs: 1,
                    total: 9
                  },
                  killsDistance: [658.6918854821274, 306.8370903264467, 201.12682565983087]
                }
              }
            },
            {
              round: 13,
              shots: 17,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 114,
              killsDistance: [1269.2017176162346],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'sg553',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [1269.2017176162346]
                }
              }
            },
            {
              round: 15,
              shots: 10,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 48,
              killsDistance: [803.6224237787295],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [803.6224237787295]
                }
              }
            },
            {
              round: 19,
              shots: 22,
              hits: {
                head: 0,
                chest: 2,
                belly: 6,
                arms: 2,
                legs: 0,
                total: 10
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 36,
              damageToHealth: 180,
              killsDistance: [117.2433366976563],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'p90',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 6,
                    arms: 2,
                    legs: 0,
                    total: 10
                  },
                  killsDistance: [117.2433366976563]
                }
              }
            },
            {
              round: 6,
              shots: 3,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 8,
              damageToHealth: 12,
              killsDistance: [343.2346136391259],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'glock',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [343.2346136391259]
                }
              }
            },
            {
              round: 6,
              shots: 2,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              damageToArmor: 5,
              damageToHealth: 437,
              killsDistance: [1965.538603029714, 1253.237008709845],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1965.538603029714, 1253.237008709845]
                }
              }
            },
            {
              round: 23,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'negev',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 22,
              shots: 11,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 9,
              damageToHealth: 42,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:79295022',
                nickname: 'Elareon',
                weapon: 'usp_silencer',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            }
          ],
          'STEAM_1:1:49287189': [
            {
              round: 25,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'mp7',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 28,
              shots: 50,
              hits: {
                head: 0,
                chest: 2,
                belly: 3,
                arms: 1,
                legs: 2,
                total: 8
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 21,
              damageToHealth: 130,
              killsDistance: [432.87411565026616],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'p90',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 3,
                    arms: 1,
                    legs: 2,
                    total: 8
                  },
                  killsDistance: [432.87411565026616]
                }
              }
            },
            {
              round: 27,
              shots: 98,
              hits: {
                head: 1,
                chest: 8,
                belly: 10,
                arms: 1,
                legs: 0,
                total: 20
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 4
              },
              damageToArmor: 45,
              damageToHealth: 400,
              killsDistance: [518.440932026012, 581.9725079417411, 574.2290483770391, 386.5682345977227],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'p90',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  hits: {
                    head: 1,
                    chest: 8,
                    belly: 10,
                    arms: 1,
                    legs: 0,
                    total: 20
                  },
                  killsDistance: [518.440932026012, 581.9725079417411, 574.2290483770391, 386.5682345977227]
                }
              }
            },
            {
              round: 24,
              shots: 22,
              hits: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 0,
                legs: 2,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 8,
              damageToHealth: 58,
              killsDistance: [583.1886487235498],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'p90',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 0,
                    legs: 2,
                    total: 4
                  },
                  killsDistance: [583.1886487235498]
                }
              }
            },
            {
              round: 20,
              shots: 17,
              hits: {
                head: 1,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 7,
              damageToHealth: 114,
              killsDistance: [700.332778041982, 626.918655010361],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [700.332778041982, 626.918655010361]
                }
              }
            },
            {
              round: 6,
              shots: 2,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 6,
              damageToHealth: 49,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'cz75a',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 26,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 4,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 20,
              damageToHealth: 88,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ump45',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 4,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 8,
              shots: 49,
              hits: {
                head: 0,
                chest: 2,
                belly: 3,
                arms: 1,
                legs: 4,
                total: 10
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              damageToArmor: 29,
              damageToHealth: 146,
              killsDistance: [630.0134919190223, 346.41737831696605],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'mac10',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 3,
                    arms: 1,
                    legs: 4,
                    total: 10
                  },
                  killsDistance: [630.0134919190223, 346.41737831696605]
                }
              }
            },
            {
              round: 15,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 3,
              damageToHealth: 52,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 16,
              shots: 8,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 68,
              killsDistance: [470.6506135128265],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'p250',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [470.6506135128265]
                }
              }
            },
            {
              round: 10,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 3,
              shots: 30,
              hits: {
                head: 0,
                chest: 4,
                belly: 4,
                arms: 0,
                legs: 6,
                total: 14
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 2,
                total: 3
              },
              damageToArmor: 28,
              damageToHealth: 246,
              killsDistance: [619.6821766034585, 566.2508278139644, 955.9738490147103],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 2,
                    total: 3
                  },
                  hits: {
                    head: 0,
                    chest: 4,
                    belly: 4,
                    arms: 0,
                    legs: 6,
                    total: 14
                  },
                  killsDistance: [619.6821766034585, 566.2508278139644, 955.9738490147103]
                }
              }
            },
            {
              round: 22,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 2,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 8,
              damageToHealth: 46,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 2,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 4,
              shots: 3,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 5,
              damageToHealth: 14,
              killsDistance: [1156.9814173097163],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [1156.9814173097163]
                }
              }
            },
            {
              round: 1,
              shots: 13,
              hits: {
                head: 1,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 6,
              damageToHealth: 115,
              killsDistance: [1166.4428832994781],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'p250',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [1166.4428832994781]
                }
              }
            },
            {
              round: 3,
              shots: 5,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 100,
              killsDistance: [436.0974661701212],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [436.0974661701212]
                }
              }
            },
            {
              round: 12,
              shots: 3,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 1,
              damageToHealth: 558,
              killsDistance: [1135.2911520839048, 1241.9649753515596],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1135.2911520839048, 1241.9649753515596]
                }
              }
            },
            {
              round: 23,
              shots: 24,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 3,
                total: 5
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              damageToArmor: 8,
              damageToHealth: 69,
              killsDistance: [667.5028089828536],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'mp9',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 3,
                    total: 5
                  },
                  killsDistance: [667.5028089828536]
                }
              }
            },
            {
              round: 25,
              shots: 3,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 4,
              damageToHealth: 27,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 2,
              shots: 6,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 5,
              damageToHealth: 19,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'p250',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 5,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'mac10',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 9,
              shots: 29,
              hits: {
                head: 1,
                chest: 2,
                belly: 4,
                arms: 0,
                legs: 0,
                total: 7
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 5,
              damageToHealth: 152,
              killsDistance: [604.0736710037941, 543.8575181056156],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 4,
                    arms: 0,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [604.0736710037941, 543.8575181056156]
                }
              }
            },
            {
              round: 21,
              shots: 36,
              hits: {
                head: 2,
                chest: 1,
                belly: 3,
                arms: 1,
                legs: 0,
                total: 7
              },
              kills: {
                head: 2,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 3
              },
              damageToArmor: 19,
              damageToHealth: 202,
              killsDistance: [1187.9701174692905, 445.7387127006134, 309.3056740507681],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 2,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 2,
                    chest: 1,
                    belly: 3,
                    arms: 1,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [1187.9701174692905, 445.7387127006134, 309.3056740507681]
                }
              }
            },
            {
              round: 13,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 17,
              shots: 34,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 1,
                legs: 1,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 9,
              damageToHealth: 43,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'bizon',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 1,
                    legs: 1,
                    total: 3
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 18,
              shots: 12,
              hits: {
                head: 0,
                chest: 3,
                belly: 0,
                arms: 2,
                legs: 0,
                total: 5
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 29,
              damageToHealth: 97,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'usp_silencer',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 0,
                    arms: 2,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 7,
              shots: 7,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 19,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:49287189',
                nickname: 'Jean Lassalle [Trade]',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            }
          ],
          'STEAM_1:0:53908971': [
            {
              round: 25,
              shots: 20,
              hits: {
                head: 1,
                chest: 2,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 4
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 5,
              damageToHealth: 187,
              killsDistance: [361.4553914385564],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [361.4553914385564]
                }
              }
            },
            {
              round: 20,
              shots: 3,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 5,
              damageToHealth: 34,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 27,
              shots: 8,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 28,
              shots: 23,
              hits: {
                head: 1,
                chest: 0,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 23,
              damageToHealth: 156,
              killsDistance: [805.0993727484826, 460.5920103518948],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [805.0993727484826, 460.5920103518948]
                }
              }
            },
            {
              round: 15,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 2,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 8,
              damageToHealth: 40,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'famas',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 2,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 26,
              shots: 32,
              hits: {
                head: 1,
                chest: 4,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 7
              },
              kills: {
                head: 1,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 3
              },
              damageToArmor: 31,
              damageToHealth: 174,
              killsDistance: [463.3983167858942, 364.4063665744604, 154.57684173251826],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 1,
                    chest: 4,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [463.3983167858942, 364.4063665744604, 154.57684173251826]
                }
              }
            },
            {
              round: 22,
              shots: 29,
              hits: {
                head: 0,
                chest: 3,
                belly: 1,
                arms: 1,
                legs: 3,
                total: 8
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 0,
              damageToHealth: 174,
              killsDistance: [451.33801080786446, 367.7240813436074],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 1,
                    arms: 1,
                    legs: 3,
                    total: 8
                  },
                  killsDistance: [451.33801080786446, 367.7240813436074]
                }
              }
            },
            {
              round: 6,
              shots: 3,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 19,
              damageToHealth: 91,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 8,
              shots: 21,
              hits: {
                head: 0,
                chest: 2,
                belly: 2,
                arms: 1,
                legs: 1,
                total: 6
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 24,
              damageToHealth: 122,
              killsDistance: [529.8575280205048],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 2,
                    arms: 1,
                    legs: 1,
                    total: 6
                  },
                  killsDistance: [529.8575280205048]
                }
              }
            },
            {
              round: 7,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 2,
              shots: 8,
              hits: {
                head: 0,
                chest: 1,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 16,
              damageToHealth: 54,
              killsDistance: [471.48382793050285],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [471.48382793050285]
                }
              }
            },
            {
              round: 4,
              shots: 7,
              hits: {
                head: 1,
                chest: 3,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 5
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 35,
              damageToHealth: 166,
              killsDistance: [1395.3315018302999],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 3,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [1395.3315018302999]
                }
              }
            },
            {
              round: 3,
              shots: 24,
              hits: {
                head: 1,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 37,
              damageToHealth: 151,
              killsDistance: [706.9674674268965, 964.8170811091603],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [706.9674674268965, 964.8170811091603]
                }
              }
            },
            {
              round: 24,
              shots: 16,
              hits: {
                head: 1,
                chest: 0,
                belly: 3,
                arms: 1,
                legs: 0,
                total: 5
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 30,
              damageToHealth: 195,
              killsDistance: [374.1256473432422, 839.4921083607636],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 3,
                    arms: 1,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [374.1256473432422, 839.4921083607636]
                }
              }
            },
            {
              round: 1,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 9,
              hits: {
                head: 0,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 18,
              damageToHealth: 84,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 17,
              shots: 23,
              hits: {
                head: 0,
                chest: 5,
                belly: 1,
                arms: 2,
                legs: 0,
                total: 8
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              damageToArmor: 25,
              damageToHealth: 200,
              killsDistance: [339.5173044190826, 527.0607175648742],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 5,
                    belly: 1,
                    arms: 2,
                    legs: 0,
                    total: 8
                  },
                  killsDistance: [339.5173044190826, 527.0607175648742]
                }
              }
            },
            {
              round: 12,
              shots: 11,
              hits: {
                head: 1,
                chest: 4,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 5
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 35,
              damageToHealth: 100,
              killsDistance: [623.6842149677992],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 4,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [623.6842149677992]
                }
              }
            },
            {
              round: 21,
              shots: 20,
              hits: {
                head: 0,
                chest: 2,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 11,
              damageToHealth: 59,
              killsDistance: [754.5389320638134],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [754.5389320638134]
                }
              }
            },
            {
              round: 16,
              shots: 15,
              hits: {
                head: 1,
                chest: 5,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 7
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 20,
              damageToHealth: 136,
              killsDistance: [373.90640540113776],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'glock',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 5,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [373.90640540113776]
                }
              }
            },
            {
              round: 18,
              shots: 7,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 8,
              damageToHealth: 25,
              killsDistance: [538.436625797317],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'glock',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [538.436625797317]
                }
              }
            },
            {
              round: 18,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'deagle',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 10,
              shots: 7,
              hits: {
                head: 0,
                chest: 4,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 5
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 20,
              damageToHealth: 100,
              killsDistance: [742.049189744184],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 4,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [742.049189744184]
                }
              }
            },
            {
              round: 19,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:53908971',
                nickname: 'Timmiekat',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            }
          ],
          'STEAM_1:0:144074579': [
            {
              round: 25,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 20,
              shots: 11,
              hits: {
                head: 1,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 18,
              damageToHealth: 101,
              killsDistance: [1208.1812777890575],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [1208.1812777890575]
                }
              }
            },
            {
              round: 27,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 27,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 1,
              damageToHealth: 207,
              killsDistance: [860.8931408717344],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [860.8931408717344]
                }
              }
            },
            {
              round: 28,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 28,
              shots: 13,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'p90',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 26,
              shots: 17,
              hits: {
                head: 1,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 19,
              damageToHealth: 115,
              killsDistance: [580.6083016974525],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [580.6083016974525]
                }
              }
            },
            {
              round: 13,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 16,
              shots: 3,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 128,
              killsDistance: [466.8757864785879],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [466.8757864785879]
                }
              }
            },
            {
              round: 6,
              shots: 3,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              damageToArmor: 2,
              damageToHealth: 98,
              killsDistance: [1297.5538524469803, 530.1197977815958],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1297.5538524469803, 530.1197977815958]
                }
              }
            },
            {
              round: 7,
              shots: 9,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 7,
              damageToHealth: 14,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 5,
              shots: 53,
              hits: {
                head: 0,
                chest: 3,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 2,
              damageToHealth: 60,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'aug',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 8,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 3,
              shots: 51,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 4,
              damageToHealth: 35,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'mp7',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 7,
              shots: 13,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'sg553',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'deagle',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 11,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 1,
              shots: 9,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 28,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 23,
              shots: 24,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 35,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 22,
              shots: 102,
              hits: {
                head: 0,
                chest: 2,
                belly: 2,
                arms: 0,
                legs: 1,
                total: 5
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 14,
              damageToHealth: 126,
              killsDistance: [548.7421981222147],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 2,
                    arms: 0,
                    legs: 1,
                    total: 5
                  },
                  killsDistance: [548.7421981222147]
                }
              }
            },
            {
              round: 21,
              shots: 23,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 26,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 9,
              shots: 31,
              hits: {
                head: 0,
                chest: 3,
                belly: 3,
                arms: 1,
                legs: 0,
                total: 7
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 31,
              damageToHealth: 110,
              killsDistance: [719.5783487571038],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'mp7',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 3,
                    arms: 1,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [719.5783487571038]
                }
              }
            },
            {
              round: 15,
              shots: 3,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 1,
              damageToHealth: 110,
              killsDistance: [700.3042196074504],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [700.3042196074504]
                }
              }
            },
            {
              round: 4,
              shots: 9,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'mp7',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 16,
              shots: 10,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'glock',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 18,
              shots: 50,
              hits: {
                head: 0,
                chest: 1,
                belly: 7,
                arms: 1,
                legs: 0,
                total: 9
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 25,
              damageToHealth: 168,
              killsDistance: [508.3905978674271],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'mp7',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 7,
                    arms: 1,
                    legs: 0,
                    total: 9
                  },
                  killsDistance: [508.3905978674271]
                }
              }
            },
            {
              round: 16,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'p250',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 10,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 1,
              damageToHealth: 94,
              killsDistance: [800.4604924666801],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [800.4604924666801]
                }
              }
            },
            {
              round: 28,
              shots: 34,
              hits: {
                head: 1,
                chest: 2,
                belly: 0,
                arms: 3,
                legs: 0,
                total: 6
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 39,
              damageToHealth: 70,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'glock',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 0,
                    arms: 3,
                    legs: 0,
                    total: 6
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 22,
              shots: 8,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:144074579',
                nickname: 'psyXotrop',
                weapon: 'glock',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            }
          ],
          'STEAM_1:0:26217115': [
            {
              round: 25,
              shots: 22,
              hits: {
                head: 2,
                chest: 2,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 6
              },
              kills: {
                head: 2,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 3
              },
              damageToArmor: 31,
              damageToHealth: 276,
              killsDistance: [450.64176459800086, 734.6849664992473, 71.66589146867567],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 2,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 2,
                    chest: 2,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 6
                  },
                  killsDistance: [450.64176459800086, 734.6849664992473, 71.66589146867567]
                }
              }
            },
            {
              round: 27,
              shots: 10,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 28,
              shots: 28,
              hits: {
                head: 1,
                chest: 2,
                belly: 1,
                arms: 1,
                legs: 2,
                total: 7
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 10,
              damageToHealth: 240,
              killsDistance: [123.95967086113129],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 1,
                    arms: 1,
                    legs: 2,
                    total: 7
                  },
                  killsDistance: [123.95967086113129]
                }
              }
            },
            {
              round: 24,
              shots: 14,
              hits: {
                head: 1,
                chest: 4,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 6
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 2
              },
              damageToArmor: 27,
              damageToHealth: 200,
              killsDistance: [712.1706256228208, 621.7845285949145],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 4,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 6
                  },
                  killsDistance: [712.1706256228208, 621.7845285949145]
                }
              }
            },
            {
              round: 22,
              shots: 16,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 106,
              killsDistance: [1145.4959624546916],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [1145.4959624546916]
                }
              }
            },
            {
              round: 26,
              shots: 4,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 109,
              killsDistance: [457.9050119839266],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [457.9050119839266]
                }
              }
            },
            {
              round: 16,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'glock',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 11,
              shots: 3,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'deagle',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 3,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'p90',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 5,
              shots: 15,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 1,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 3,
              damageToHealth: 75,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'aug',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 8,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 10,
              damageToHealth: 54,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 4,
              shots: 13,
              hits: {
                head: 0,
                chest: 2,
                belly: 2,
                arms: 1,
                legs: 0,
                total: 5
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              damageToArmor: 5,
              damageToHealth: 94,
              killsDistance: [1018.6137638967972, 1125.9733567007702],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'aug',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 2,
                    arms: 1,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [1018.6137638967972, 1125.9733567007702]
                }
              }
            },
            {
              round: 14,
              shots: 3,
              hits: {
                head: 0,
                chest: 2,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 8,
              damageToHealth: 100,
              killsDistance: [313.0399335548102],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'xm1014',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [313.0399335548102]
                }
              }
            },
            {
              round: 1,
              shots: 17,
              hits: {
                head: 0,
                chest: 1,
                belly: 3,
                arms: 1,
                legs: 0,
                total: 5
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 14,
              damageToHealth: 125,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 3,
                    arms: 1,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 2,
              shots: 52,
              hits: {
                head: 1,
                chest: 3,
                belly: 4,
                arms: 1,
                legs: 1,
                total: 10
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 7,
              damageToHealth: 227,
              killsDistance: [146.98979556418195, 1025.219488694982],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'p90',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 3,
                    belly: 4,
                    arms: 1,
                    legs: 1,
                    total: 10
                  },
                  killsDistance: [146.98979556418195, 1025.219488694982]
                }
              }
            },
            {
              round: 13,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 1,
              damageToHealth: 43,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'deagle',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 9,
              shots: 14,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 1,
              damageToHealth: 3,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'p250',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 6,
              shots: 9,
              hits: {
                head: 0,
                chest: 1,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 100,
              killsDistance: [251.99206336708306],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'p90',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [251.99206336708306]
                }
              }
            },
            {
              round: 12,
              shots: 7,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 22,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 15,
              shots: 3,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 13,
              hits: {
                head: 1,
                chest: 1,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 1,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 3
              },
              damageToArmor: 27,
              damageToHealth: 177,
              killsDistance: [921.1867345983658, 210.03809178337153, 466.6701190348489],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [921.1867345983658, 210.03809178337153, 466.6701190348489]
                }
              }
            },
            {
              round: 17,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'galilar',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 18,
              shots: 2,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 2,
              damageToHealth: 80,
              killsDistance: [890.0483132954075],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'deagle',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [890.0483132954075]
                }
              }
            },
            {
              round: 19,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 10,
              damageToHealth: 100,
              killsDistance: [169.08577704821894],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'xm1014',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [169.08577704821894]
                }
              }
            },
            {
              round: 21,
              shots: 3,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 73,
              killsDistance: [470.29139902830457],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [470.29139902830457]
                }
              }
            },
            {
              round: 19,
              shots: 14,
              hits: {
                head: 1,
                chest: 3,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 19,
              damageToHealth: 124,
              killsDistance: [1014.7004484082975, 1019.1727037161072],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 3,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [1014.7004484082975, 1019.1727037161072]
                }
              }
            },
            {
              round: 23,
              shots: 20,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 35,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:26217115',
                nickname: 'kawał sejwa',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            }
          ],
          'STEAM_1:1:208017641': [
            {
              round: 25,
              shots: 4,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 8,
              damageToHealth: 44,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'm4a1_silencer',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 20,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 28,
              shots: 7,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'ssg08',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 15,
              shots: 4,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 12,
              damageToHealth: 100,
              killsDistance: [1146.5404484796861],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'g3sg1',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1146.5404484796861]
                }
              }
            },
            {
              round: 11,
              shots: 9,
              hits: {
                head: 0,
                chest: 2,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 28,
              damageToHealth: 200,
              killsDistance: [1140.1955972551377, 715.9811450031349],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'g3sg1',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [1140.1955972551377, 715.9811450031349]
                }
              }
            },
            {
              round: 8,
              shots: 1,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 183,
              killsDistance: [795.3923560105414],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [795.3923560105414]
                }
              }
            },
            {
              round: 5,
              shots: 3,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 150,
              killsDistance: [1240.13346055979],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [1240.13346055979]
                }
              }
            },
            {
              round: 1,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 5,
              damageToHealth: 18,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'p250',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 2,
              shots: 3,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 25,
              damageToHealth: 81,
              killsDistance: [708.0974509204224],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'ssg08',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [708.0974509204224]
                }
              }
            },
            {
              round: 6,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 19,
              shots: 12,
              hits: {
                head: 0,
                chest: 4,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 13,
              damageToHealth: 74,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'm4a1_silencer',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 4,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 23,
              shots: 3,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 3,
              damageToHealth: 100,
              killsDistance: [215.6246739127969],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [215.6246739127969]
                }
              }
            },
            {
              round: 3,
              shots: 9,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 28,
              damageToHealth: 100,
              killsDistance: [120.9710709219357],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'ump45',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [120.9710709219357]
                }
              }
            },
            {
              round: 3,
              shots: 4,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 3,
              damageToHealth: 27,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'p90',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 28,
              shots: 4,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 16,
              damageToHealth: 32,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'usp_silencer',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 9,
              shots: 4,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 1,
              damageToHealth: 160,
              killsDistance: [1298.9784447788193, 1355.2287629769373],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1298.9784447788193, 1355.2287629769373]
                }
              }
            },
            {
              round: 12,
              shots: 10,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 12,
              damageToHealth: 100,
              killsDistance: [1284.9175070797346],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'g3sg1',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1284.9175070797346]
                }
              }
            },
            {
              round: 4,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'ssg08',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 10,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 16,
              shots: 6,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 129,
              killsDistance: [437.4357095619881],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'usp_silencer',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [437.4357095619881]
                }
              }
            },
            {
              round: 14,
              shots: 15,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 6,
              damageToHealth: 63,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'g3sg1',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 22,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 18,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 13,
              shots: 23,
              hits: {
                head: 0,
                chest: 3,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              damageToArmor: 12,
              damageToHealth: 174,
              killsDistance: [908.8327678951722, 980.8771584658296],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'g3sg1',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [908.8327678951722, 980.8771584658296]
                }
              }
            },
            {
              round: 21,
              shots: 22,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'p90',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 23,
              shots: 10,
              hits: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 1,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 14,
              damageToHealth: 85,
              killsDistance: [275.3379741336091],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:208017641',
                nickname: 'Król Całek Oznaczonych',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [275.3379741336091]
                }
              }
            }
          ],
          'STEAM_1:0:27776013': [
            {
              round: 20,
              shots: 30,
              hits: {
                head: 0,
                chest: 1,
                belly: 5,
                arms: 1,
                legs: 5,
                total: 12
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 3
              },
              damageToArmor: 21,
              damageToHealth: 311,
              killsDistance: [289.21445330411825, 711.2889708128477, 476.9758903760231],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 5,
                    arms: 1,
                    legs: 5,
                    total: 12
                  },
                  killsDistance: [289.21445330411825, 711.2889708128477, 476.9758903760231]
                }
              }
            },
            {
              round: 27,
              shots: 20,
              hits: {
                head: 0,
                chest: 3,
                belly: 0,
                arms: 0,
                legs: 3,
                total: 6
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              damageToArmor: 3,
              damageToHealth: 153,
              killsDistance: [602.2980989510095],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 0,
                    arms: 0,
                    legs: 3,
                    total: 6
                  },
                  killsDistance: [602.2980989510095]
                }
              }
            },
            {
              round: 28,
              shots: 18,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              damageToArmor: 5,
              damageToHealth: 43,
              killsDistance: [272.42797213208485, 247.59644585494357],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [272.42797213208485, 247.59644585494357]
                }
              }
            },
            {
              round: 26,
              shots: 18,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 2,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 51,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 2,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 22,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 8,
              hits: {
                head: 0,
                chest: 2,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 4,
              damageToHealth: 100,
              killsDistance: [397.8002011060326],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'fiveseven',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [397.8002011060326]
                }
              }
            },
            {
              round: 18,
              shots: 33,
              hits: {
                head: 1,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 21,
              damageToHealth: 127,
              killsDistance: [711.8672629079103],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'p250',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [711.8672629079103]
                }
              }
            },
            {
              round: 7,
              shots: 8,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 2,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              damageToArmor: 6,
              damageToHealth: 55,
              killsDistance: [317.5830600016317],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 2,
                    total: 3
                  },
                  killsDistance: [317.5830600016317]
                }
              }
            },
            {
              round: 23,
              shots: 28,
              hits: {
                head: 0,
                chest: 1,
                belly: 2,
                arms: 1,
                legs: 1,
                total: 5
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 18,
              damageToHealth: 134,
              killsDistance: [269.04646438858845],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 2,
                    arms: 1,
                    legs: 1,
                    total: 5
                  },
                  killsDistance: [269.04646438858845]
                }
              }
            },
            {
              round: 9,
              shots: 12,
              hits: {
                head: 0,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 1,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 100,
              killsDistance: [1360.9191746757042],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 1,
                    total: 4
                  },
                  killsDistance: [1360.9191746757042]
                }
              }
            },
            {
              round: 3,
              shots: 7,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              damageToArmor: 5,
              damageToHealth: 35,
              killsDistance: [1144.6073562580314],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [1144.6073562580314]
                }
              }
            },
            {
              round: 8,
              shots: 12,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 5,
              damageToHealth: 50,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 2,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 25,
              shots: 7,
              hits: {
                head: 0,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 100,
              killsDistance: [269.5867207412116],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [269.5867207412116]
                }
              }
            },
            {
              round: 1,
              shots: 23,
              hits: {
                head: 0,
                chest: 1,
                belly: 2,
                arms: 3,
                legs: 0,
                total: 6
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 1,
                legs: 0,
                total: 3
              },
              damageToArmor: 4,
              damageToHealth: 114,
              killsDistance: [335.26258365645276, 981.4856086565916, 323.5258876813415],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'fiveseven',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 2,
                    arms: 3,
                    legs: 0,
                    total: 6
                  },
                  killsDistance: [335.26258365645276, 981.4856086565916, 323.5258876813415]
                }
              }
            },
            {
              round: 15,
              shots: 13,
              hits: {
                head: 0,
                chest: 2,
                belly: 3,
                arms: 1,
                legs: 0,
                total: 6
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 1,
                legs: 0,
                total: 3
              },
              damageToArmor: 42,
              damageToHealth: 323,
              killsDistance: [560.4016416821064, 623.9014345231144, 940.7831843735304],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'g3sg1',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 3,
                    arms: 1,
                    legs: 0,
                    total: 6
                  },
                  killsDistance: [560.4016416821064, 623.9014345231144, 940.7831843735304]
                }
              }
            },
            {
              round: 11,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              damageToArmor: 3,
              damageToHealth: 30,
              killsDistance: [359.6512199339799],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [359.6512199339799]
                }
              }
            },
            {
              round: 5,
              shots: 25,
              hits: {
                head: 0,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 6,
                total: 9
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 10,
              damageToHealth: 190,
              killsDistance: [1299.4164074691378, 370.0554012577036],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 6,
                    total: 9
                  },
                  killsDistance: [1299.4164074691378, 370.0554012577036]
                }
              }
            },
            {
              round: 16,
              shots: 5,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 100,
              killsDistance: [92.57969539807311],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'p250',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [92.57969539807311]
                }
              }
            },
            {
              round: 17,
              shots: 17,
              hits: {
                head: 0,
                chest: 1,
                belly: 2,
                arms: 1,
                legs: 2,
                total: 6
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 142,
              killsDistance: [249.17062427180295],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 2,
                    arms: 1,
                    legs: 2,
                    total: 6
                  },
                  killsDistance: [249.17062427180295]
                }
              }
            },
            {
              round: 6,
              shots: 3,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 36,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 10,
              shots: 17,
              hits: {
                head: 0,
                chest: 6,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 7
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 30,
              damageToHealth: 100,
              killsDistance: [350.9786318282069],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'mp9',
                team: 'team_161860'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 6,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [350.9786318282069]
                }
              }
            },
            {
              round: 21,
              shots: 54,
              hits: {
                head: 1,
                chest: 1,
                belly: 2,
                arms: 0,
                legs: 3,
                total: 7
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 22,
              damageToHealth: 218,
              killsDistance: [340.63910521254013, 343.50836962146934],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 2,
                    arms: 0,
                    legs: 3,
                    total: 7
                  },
                  killsDistance: [340.63910521254013, 343.50836962146934]
                }
              }
            },
            {
              round: 13,
              shots: 34,
              hits: {
                head: 2,
                chest: 5,
                belly: 2,
                arms: 2,
                legs: 1,
                total: 12
              },
              kills: {
                head: 2,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 12,
              damageToHealth: 225,
              killsDistance: [1025.0121950494054, 587.8316085410855],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'fiveseven',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 2,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 2,
                    chest: 5,
                    belly: 2,
                    arms: 2,
                    legs: 1,
                    total: 12
                  },
                  killsDistance: [1025.0121950494054, 587.8316085410855]
                }
              }
            },
            {
              round: 19,
              shots: 9,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 76,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:27776013',
                nickname: 'Yvanoe',
                weapon: 'p250',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            }
          ],
          'STEAM_1:1:35861504': [
            {
              round: 20,
              shots: 6,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 5,
              damageToHealth: 100,
              killsDistance: [560.290103428572],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'fiveseven',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [560.290103428572]
                }
              }
            },
            {
              round: 27,
              shots: 12,
              hits: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 2,
                total: 4
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 25,
              damageToHealth: 84,
              killsDistance: [392.587569849072],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 2,
                    total: 4
                  },
                  killsDistance: [392.587569849072]
                }
              }
            },
            {
              round: 24,
              shots: 5,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 43,
              killsDistance: [598.9215307534034],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [598.9215307534034]
                }
              }
            },
            {
              round: 24,
              shots: 35,
              hits: {
                head: 1,
                chest: 7,
                belly: 0,
                arms: 2,
                legs: 0,
                total: 10
              },
              kills: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 52,
              damageToHealth: 254,
              killsDistance: [851.7828361736341, 1219.7048823383466],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 7,
                    belly: 0,
                    arms: 2,
                    legs: 0,
                    total: 10
                  },
                  killsDistance: [851.7828361736341, 1219.7048823383466]
                }
              }
            },
            {
              round: 26,
              shots: 5,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 1,
              damageToHealth: 29,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'fiveseven',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 6,
              shots: 18,
              hits: {
                head: 0,
                chest: 5,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 6
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 10,
              damageToHealth: 188,
              killsDistance: [613.1386466371207],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 5,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 6
                  },
                  killsDistance: [613.1386466371207]
                }
              }
            },
            {
              round: 22,
              shots: 9,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 1,
              damageToHealth: 45,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 13,
              shots: 25,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 165,
              killsDistance: [866.6781409496838],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [866.6781409496838]
                }
              }
            },
            {
              round: 2,
              shots: 6,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'p250',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 4,
              shots: 2,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 18,
              damageToHealth: 86,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 18,
              shots: 8,
              hits: {
                head: 0,
                chest: 4,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 6,
              damageToHealth: 121,
              killsDistance: [727.3987902107069],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 4,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [727.3987902107069]
                }
              }
            },
            {
              round: 11,
              shots: 3,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 8,
              damageToHealth: 100,
              killsDistance: [238.6755119403748],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [238.6755119403748]
                }
              }
            },
            {
              round: 9,
              shots: 11,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 6,
              damageToHealth: 52,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 7,
              shots: 18,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 2,
                legs: 1,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 100,
              killsDistance: [147.09520726386702],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'galilar',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 2,
                    legs: 1,
                    total: 4
                  },
                  killsDistance: [147.09520726386702]
                }
              }
            },
            {
              round: 1,
              shots: 10,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 5,
              damageToHealth: 82,
              killsDistance: [1246.982357533578],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'glock',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1246.982357533578]
                }
              }
            },
            {
              round: 5,
              shots: 7,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 1,
              damageToHealth: 184,
              killsDistance: [1227.2628080407228],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [1227.2628080407228]
                }
              }
            },
            {
              round: 3,
              shots: 3,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 3,
              damageToHealth: 27,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 17,
              shots: 9,
              hits: {
                head: 0,
                chest: 1,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 100,
              killsDistance: [323.0882232456021],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [323.0882232456021]
                }
              }
            },
            {
              round: 10,
              shots: 6,
              hits: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 9,
              damageToHealth: 66,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'galilar',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 11,
              shots: 6,
              hits: {
                head: 1,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 25,
              damageToHealth: 100,
              killsDistance: [629.6427558544607],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'm4a1_silencer',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [629.6427558544607]
                }
              }
            },
            {
              round: 15,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 19,
              shots: 5,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 4,
              damageToHealth: 22,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 12,
              shots: 8,
              hits: {
                head: 0,
                chest: 4,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 16,
              damageToHealth: 88,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'm4a1_silencer',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 4,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 16,
              shots: 5,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 32,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'usp_silencer',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 10,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 18,
              damageToHealth: 100,
              killsDistance: [746.5661390660575],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [746.5661390660575]
                }
              }
            },
            {
              round: 17,
              shots: 7,
              hits: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 23,
              damageToHealth: 57,
              killsDistance: [693.4219494651146],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'p250',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [693.4219494651146]
                }
              }
            },
            {
              round: 21,
              shots: 13,
              hits: {
                head: 1,
                chest: 1,
                belly: 2,
                arms: 0,
                legs: 1,
                total: 5
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 35,
              damageToHealth: 189,
              killsDistance: [281.69842030086005],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:35861504',
                nickname: 'GaLi | マティウ',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 2,
                    arms: 0,
                    legs: 1,
                    total: 5
                  },
                  killsDistance: [281.69842030086005]
                }
              }
            }
          ],
          'STEAM_1:1:227437474': [
            {
              round: 27,
              shots: 8,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 4,
              damageToHealth: 16,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ump45',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 28,
              shots: 53,
              hits: {
                head: 0,
                chest: 8,
                belly: 1,
                arms: 1,
                legs: 2,
                total: 12
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              damageToArmor: 41,
              damageToHealth: 170,
              killsDistance: [325.7253444237952, 485.90636958163043],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'mp9',
                team: 'team_1611843'
              },
              groups: {
                smg: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 8,
                    belly: 1,
                    arms: 1,
                    legs: 2,
                    total: 12
                  },
                  killsDistance: [325.7253444237952, 485.90636958163043]
                }
              }
            },
            {
              round: 24,
              shots: 5,
              hits: {
                head: 1,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 24,
              damageToHealth: 100,
              killsDistance: [1008.2965833523389],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'famas',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [1008.2965833523389]
                }
              }
            },
            {
              round: 26,
              shots: 14,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 15,
              shots: 10,
              hits: {
                head: 0,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 12,
              damageToHealth: 100,
              killsDistance: [545.5694272959217],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [545.5694272959217]
                }
              }
            },
            {
              round: 22,
              shots: 11,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 1,
                legs: 1,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 14,
              damageToHealth: 83,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 1,
                    legs: 1,
                    total: 4
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 13,
              shots: 30,
              hits: {
                head: 0,
                chest: 3,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 0,
              damageToHealth: 100,
              killsDistance: [462.562428219154],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [462.562428219154]
                }
              }
            },
            {
              round: 6,
              shots: 9,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              damageToArmor: 4,
              damageToHealth: 51,
              killsDistance: [268.7489534863345],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [268.7489534863345]
                }
              }
            },
            {
              round: 20,
              shots: 2,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 1,
              damageToHealth: 48,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 25,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 26,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 3,
              shots: 2,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 1,
              shots: 23,
              hits: {
                head: 1,
                chest: 2,
                belly: 0,
                arms: 2,
                legs: 0,
                total: 5
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 16,
              damageToHealth: 106,
              killsDistance: [464.0183186039103],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'glock',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 2,
                    belly: 0,
                    arms: 2,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [464.0183186039103]
                }
              }
            },
            {
              round: 3,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 19,
              shots: 19,
              hits: {
                head: 0,
                chest: 0,
                belly: 4,
                arms: 0,
                legs: 1,
                total: 5
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 20,
              damageToHealth: 100,
              killsDistance: [509.8950872483476],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'famas',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 4,
                    arms: 0,
                    legs: 1,
                    total: 5
                  },
                  killsDistance: [509.8950872483476]
                }
              }
            },
            {
              round: 7,
              shots: 35,
              hits: {
                head: 2,
                chest: 2,
                belly: 2,
                arms: 1,
                legs: 0,
                total: 7
              },
              kills: {
                head: 2,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 3
              },
              damageToArmor: 36,
              damageToHealth: 336,
              killsDistance: [604.61640731955, 706.3398615397548, 956.949319452185],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 2,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 2,
                    chest: 2,
                    belly: 2,
                    arms: 1,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [604.61640731955, 706.3398615397548, 956.949319452185]
                }
              }
            },
            {
              round: 8,
              shots: 5,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 6,
              damageToHealth: 54,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 9,
              shots: 14,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 7,
              damageToHealth: 37,
              killsDistance: [505.98913031803363],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'ak47',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [505.98913031803363]
                }
              }
            },
            {
              round: 4,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 12,
              shots: 4,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 4,
              damageToHealth: 12,
              killsDistance: [964.6766297573504],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: [964.6766297573504]
                }
              }
            },
            {
              round: 2,
              shots: 5,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 1,
              damageToHealth: 38,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 14,
              shots: 30,
              hits: {
                head: 1,
                chest: 3,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 6
              },
              kills: {
                head: 1,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 42,
              damageToHealth: 158,
              killsDistance: [694.6725847476637],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'm4a1',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 1,
                    chest: 3,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 6
                  },
                  killsDistance: [694.6725847476637]
                }
              }
            },
            {
              round: 16,
              shots: 4,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 40,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'usp_silencer',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 18,
              shots: 29,
              hits: {
                head: 0,
                chest: 5,
                belly: 1,
                arms: 1,
                legs: 0,
                total: 7
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 29,
              damageToHealth: 138,
              killsDistance: [669.0418522035823],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'famas',
                team: 'team_1611843'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 5,
                    belly: 1,
                    arms: 1,
                    legs: 0,
                    total: 7
                  },
                  killsDistance: [669.0418522035823]
                }
              }
            },
            {
              round: 21,
              shots: 3,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 10,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'awp',
                team: 'team_1611843'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 23,
              shots: 7,
              hits: {
                head: 1,
                chest: 3,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 5
              },
              kills: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 11,
              damageToHealth: 237,
              killsDistance: [317.1072373819305, 476.115532197806],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:1:227437474',
                nickname: 'AnonymousIG',
                weapon: 'deagle',
                team: 'team_1611843'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 3,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [317.1072373819305, 476.115532197806]
                }
              }
            }
          ],
          'STEAM_1:0:122694050': [
            {
              round: 27,
              shots: 14,
              hits: {
                head: 0,
                chest: 0,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 15,
              damageToHealth: 100,
              killsDistance: [220.71248265560334],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 3
                  },
                  killsDistance: [220.71248265560334]
                }
              }
            },
            {
              round: 28,
              shots: 12,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 24,
              shots: 11,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 4,
              damageToHealth: 34,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 22,
              shots: 30,
              hits: {
                head: 0,
                chest: 2,
                belly: 2,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 14,
              damageToHealth: 100,
              killsDistance: [618.9038697568468],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 2,
                    belly: 2,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [618.9038697568468]
                }
              }
            },
            {
              round: 11,
              shots: 7,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 3,
                total: 3
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 70,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 3,
                    total: 3
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 16,
              shots: 12,
              hits: {
                head: 2,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 2,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 0,
              damageToHealth: 162,
              killsDistance: [475.02947276984827, 452.2233961218725],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'glock',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 2,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 2,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [475.02947276984827, 452.2233961218725]
                }
              }
            },
            {
              round: 1,
              shots: 30,
              hits: {
                head: 1,
                chest: 4,
                belly: 1,
                arms: 1,
                legs: 1,
                total: 8
              },
              kills: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 26,
              damageToHealth: 246,
              killsDistance: [972.1013321665597, 1139.361663388759],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 4,
                    belly: 1,
                    arms: 1,
                    legs: 1,
                    total: 8
                  },
                  killsDistance: [972.1013321665597, 1139.361663388759]
                }
              }
            },
            {
              round: 15,
              shots: 10,
              hits: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              damageToArmor: 4,
              damageToHealth: 37,
              killsDistance: [548.417724002425],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 2
                  },
                  killsDistance: [548.417724002425]
                }
              }
            },
            {
              round: 23,
              shots: 39,
              hits: {
                head: 1,
                chest: 4,
                belly: 2,
                arms: 2,
                legs: 0,
                total: 9
              },
              kills: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 3
              },
              damageToArmor: 22,
              damageToHealth: 227,
              killsDistance: [239.02510328415298, 424.19924563817887, 753.0531189763442],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 3
                  },
                  hits: {
                    head: 1,
                    chest: 4,
                    belly: 2,
                    arms: 2,
                    legs: 0,
                    total: 9
                  },
                  killsDistance: [239.02510328415298, 424.19924563817887, 753.0531189763442]
                }
              }
            },
            {
              round: 8,
              shots: 30,
              hits: {
                head: 0,
                chest: 1,
                belly: 3,
                arms: 0,
                legs: 2,
                total: 6
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 16,
              damageToHealth: 164,
              killsDistance: [301.6968677331603],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 3,
                    arms: 0,
                    legs: 2,
                    total: 6
                  },
                  killsDistance: [301.6968677331603]
                }
              }
            },
            {
              round: 13,
              shots: 6,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 7,
              damageToHealth: 14,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 2,
              shots: 30,
              hits: {
                head: 0,
                chest: 3,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 6
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 0,
              damageToHealth: 173,
              killsDistance: [750.7449633530684, 1169.7602318424063],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 3,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 6
                  },
                  killsDistance: [750.7449633530684, 1169.7602318424063]
                }
              }
            },
            {
              round: 25,
              shots: 9,
              hits: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 2,
              damageToHealth: 17,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 5,
              shots: 6,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 2,
              damageToHealth: 114,
              killsDistance: [694.7143297787948, 891.0129067527586],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: [694.7143297787948, 891.0129067527586]
                }
              }
            },
            {
              round: 4,
              shots: 25,
              hits: {
                head: 0,
                chest: 5,
                belly: 1,
                arms: 0,
                legs: 1,
                total: 7
              },
              kills: {
                head: 0,
                chest: 2,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 26,
              damageToHealth: 134,
              killsDistance: [619.0420018060164, 699.7278042210414],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1_silencer',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 2,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 5,
                    belly: 1,
                    arms: 0,
                    legs: 1,
                    total: 7
                  },
                  killsDistance: [619.0420018060164, 699.7278042210414]
                }
              }
            },
            {
              round: 4,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 19,
              shots: 30,
              hits: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 3,
                legs: 0,
                total: 5
              },
              kills: {
                head: 1,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 2
              },
              damageToArmor: 27,
              damageToHealth: 208,
              killsDistance: [635.4549551305741, 416.7085312301633],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 1,
                    chest: 1,
                    belly: 0,
                    arms: 3,
                    legs: 0,
                    total: 5
                  },
                  killsDistance: [635.4549551305741, 416.7085312301633]
                }
              }
            },
            {
              round: 6,
              shots: 1,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 0,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'awp',
                team: 'team_161860'
              },
              groups: {
                'sniper-rifle': {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 3,
              shots: 10,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 9,
              damageToHealth: 49,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 7,
              shots: 57,
              hits: {
                head: 2,
                chest: 6,
                belly: 5,
                arms: 1,
                legs: 3,
                total: 17
              },
              kills: {
                head: 2,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 4
              },
              damageToArmor: 92,
              damageToHealth: 431,
              killsDistance: [734.4371994935987, 413.0205806010156, 309.0954545120326, 767.6835285454547],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 2,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  hits: {
                    head: 2,
                    chest: 6,
                    belly: 5,
                    arms: 1,
                    legs: 3,
                    total: 17
                  },
                  killsDistance: [734.4371994935987, 413.0205806010156, 309.0954545120326, 767.6835285454547]
                }
              }
            },
            {
              round: 12,
              shots: 8,
              hits: {
                head: 0,
                chest: 1,
                belly: 3,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 19,
              damageToHealth: 100,
              killsDistance: [1088.9269947980902],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 3,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [1088.9269947980902]
                }
              }
            },
            {
              round: 14,
              shots: 7,
              hits: {
                head: 0,
                chest: 1,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 2
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 9,
              damageToHealth: 49,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 1,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 2
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 26,
              shots: 21,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 1,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 26,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 1,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 10,
              shots: 23,
              hits: {
                head: 0,
                chest: 5,
                belly: 2,
                arms: 2,
                legs: 1,
                total: 10
              },
              kills: {
                head: 0,
                chest: 1,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 2
              },
              damageToArmor: 35,
              damageToHealth: 200,
              killsDistance: [313.25069832324397, 218.68241813186538],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'm4a1',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 1,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 2
                  },
                  hits: {
                    head: 0,
                    chest: 5,
                    belly: 2,
                    arms: 2,
                    legs: 1,
                    total: 10
                  },
                  killsDistance: [313.25069832324397, 218.68241813186538]
                }
              }
            },
            {
              round: 17,
              shots: 12,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 0,
              damageToHealth: 35,
              killsDistance: [],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 9,
              shots: 8,
              hits: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 1,
                legs: 0,
                total: 1
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 0,
                arms: 0,
                legs: 0,
                total: 0
              },
              damageToArmor: 7,
              damageToHealth: 15,
              killsDistance: [],
              player: {
                side: 'ct',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'usp_silencer',
                team: 'team_161860'
              },
              groups: {
                pistol: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 0,
                    legs: 0,
                    total: 0
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 0,
                    arms: 1,
                    legs: 0,
                    total: 1
                  },
                  killsDistance: []
                }
              }
            },
            {
              round: 21,
              shots: 23,
              hits: {
                head: 0,
                chest: 0,
                belly: 4,
                arms: 0,
                legs: 0,
                total: 4
              },
              kills: {
                head: 0,
                chest: 0,
                belly: 1,
                arms: 0,
                legs: 0,
                total: 1
              },
              damageToArmor: 4,
              damageToHealth: 134,
              killsDistance: [151.04304022363957],
              player: {
                side: 'terrorist',
                steamId: 'STEAM_1:0:122694050',
                nickname: 'Banded | Strata ^-^',
                weapon: 'ak47',
                team: 'team_161860'
              },
              groups: {
                rifle: {
                  kills: {
                    head: 0,
                    chest: 0,
                    belly: 1,
                    arms: 0,
                    legs: 0,
                    total: 1
                  },
                  hits: {
                    head: 0,
                    chest: 0,
                    belly: 4,
                    arms: 0,
                    legs: 0,
                    total: 4
                  },
                  killsDistance: [151.04304022363957]
                }
              }
            }
          ]
        }
      }
    }
  },
  premium: { pricesLoaded: false, prices: [] },
  review: { canLeaveReview: {} },
  loadingBar: 0,
  reduxAsyncConnect: { loaded: true, loadState: {} },
  intl: {
    locale: 'en',
    messages: {
      'SERVERS.brazil': 'Brazil',
      'SERVERS.europe_nordic_east': 'Europe Nordic and East',
      'SERVERS.europe_west': 'Europe West',
      'SERVERS.republic_of_korea': 'Republic of Korea',
      'SERVERS.latin_america_north': 'Latin America North',
      'SERVERS.latin_america_south': 'Latin America South',
      'SERVERS.north_america': 'North America',
      'SERVERS.oceania': 'Oceania',
      'SERVERS.russia': 'Russia',
      'SERVERS.turkey': 'Turkey',
      'SERVERS.eu_west': 'EU West',
      'SERVERS.eu_east': 'EU East',
      'SERVERS.eu_north': 'EU North',
      'SERVERS.us_northwest': 'US Northwest',
      'SERVERS.us_northeast': 'US Northeast',
      'SERVERS.us_northcentral': 'US Northcentral',
      'SERVERS.us_southwest': 'US Southwest',
      'SERVERS.us_southeast': 'US Southeast',
      'SERVERS.china_shanghai': 'China Shanghai',
      'SERVERS.china_guangzhou': 'China Guangzhou',
      'SERVERS.china_tianjin': 'China Tianjin',
      'SERVERS.australia': 'Australia',
      'SERVERS.chile': 'Chile',
      'SERVERS.emirates': 'Emirates',
      'SERVERS.india': 'India',
      'SERVERS.india_east': 'India East',
      'SERVERS.poland': 'Poland',
      'SERVERS.japan': 'Japan',
      'SERVERS.hong_kong': 'Hong Kong',
      'SERVERS.singapore': 'Singapore',
      'SERVERS.south_africa': 'South Africa',
      'SERVERS.spain': 'Spain',
      'GOALS.placeholder_any': 'Any',
      'GOALS.play_for_fun': 'To have fun',
      'GOALS.play_in_amateur_leagues': 'To play competitively',
      'GOALS.become_professional': 'To become a pro team',
      'COUNTRIES.br': 'Brazil',
      'COUNTRIES.de': 'Germany',
      'COUNTRIES.pl': 'Poland',
      'COUNTRIES.ru': 'Russia',
      'COUNTRIES.gb': 'United Kingdom',
      'COUNTRIES.us': 'United States',
      'COUNTRIES.af': 'Afghanistan',
      'COUNTRIES.al': 'Albania',
      'COUNTRIES.dz': 'Algeria',
      'COUNTRIES.as': 'American Samoa',
      'COUNTRIES.ad': 'Andorra',
      'COUNTRIES.ao': 'Angola',
      'COUNTRIES.ai': 'Anguilla',
      'COUNTRIES.aq': 'Antarctica',
      'COUNTRIES.ag': 'Antigua and Barbuda',
      'COUNTRIES.ar': 'Argentina',
      'COUNTRIES.am': 'Armenia',
      'COUNTRIES.aw': 'Aruba',
      'COUNTRIES.au': 'Australia',
      'COUNTRIES.at': 'Austria',
      'COUNTRIES.az': 'Azerbaijan',
      'COUNTRIES.bs': 'Bahamas, The',
      'COUNTRIES.bh': 'Bahrain',
      'COUNTRIES.bd': 'Bangladesh',
      'COUNTRIES.bb': 'Barbados',
      'COUNTRIES.by': 'Belarus',
      'COUNTRIES.be': 'Belgium',
      'COUNTRIES.bz': 'Belize',
      'COUNTRIES.bj': 'Benin',
      'COUNTRIES.bm': 'Bermuda',
      'COUNTRIES.bt': 'Bhutan',
      'COUNTRIES.bo': 'Bolivia',
      'COUNTRIES.ba': 'Bosnia and Herzegovina',
      'COUNTRIES.bw': 'Botswana',
      'COUNTRIES.bv': 'Bouvet Island',
      'COUNTRIES.io': 'British Indian Ocean Territory',
      'COUNTRIES.vg': 'British Virgin Islands',
      'COUNTRIES.bn': 'Brunei',
      'COUNTRIES.bg': 'Bulgaria',
      'COUNTRIES.bf': 'Burkina Faso',
      'COUNTRIES.bi': 'Burundi',
      'COUNTRIES.kh': 'Cambodia',
      'COUNTRIES.cm': 'Cameroon',
      'COUNTRIES.ca': 'Canada',
      'COUNTRIES.cv': 'Cape Verde',
      'COUNTRIES.ky': 'Cayman Islands',
      'COUNTRIES.cf': 'Central African Republic',
      'COUNTRIES.td': 'Chad',
      'COUNTRIES.cl': 'Chile',
      'COUNTRIES.cn': 'China',
      'COUNTRIES.cx': 'Christmas Island',
      'COUNTRIES.cc': 'Cocos (Keeling) Islands',
      'COUNTRIES.co': 'Colombia',
      'COUNTRIES.km': 'Comoros',
      'COUNTRIES.cd': 'Congo, Democratic Republic of the',
      'COUNTRIES.cg': 'Congo, Republic of the',
      'COUNTRIES.ck': 'Cook Islands',
      'COUNTRIES.cr': 'Costa Rica',
      'COUNTRIES.ci': "Cote d'Ivoire",
      'COUNTRIES.hr': 'Croatia',
      'COUNTRIES.cu': 'Cuba',
      'COUNTRIES.cw': 'Curacao',
      'COUNTRIES.cy': 'Cyprus',
      'COUNTRIES.cz': 'Czech Republic',
      'COUNTRIES.dk': 'Denmark',
      'COUNTRIES.dj': 'Djibouti',
      'COUNTRIES.dm': 'Dominica',
      'COUNTRIES.do': 'Dominican Republic',
      'COUNTRIES.tl': 'East Timor',
      'COUNTRIES.ec': 'Ecuador',
      'COUNTRIES.eg': 'Egypt',
      'COUNTRIES.sv': 'El Salvador',
      'COUNTRIES.gq': 'Equatorial Guinea',
      'COUNTRIES.er': 'Eritrea',
      'COUNTRIES.ee': 'Estonia',
      'COUNTRIES.et': 'Ethiopia',
      'COUNTRIES.fk': 'Falkland Islands (Islas Malvinas)',
      'COUNTRIES.fo': 'Faroe Islands',
      'COUNTRIES.fj': 'Fiji',
      'COUNTRIES.fi': 'Finland',
      'COUNTRIES.fr': 'France',
      'COUNTRIES.gf': 'French Guiana',
      'COUNTRIES.pf': 'French Polynesia',
      'COUNTRIES.tf': 'French Southern and Antarctic Lands',
      'COUNTRIES.ga': 'Gabon',
      'COUNTRIES.gm': 'Gambia, The',
      'COUNTRIES.ge': 'Georgia',
      'COUNTRIES.gh': 'Ghana',
      'COUNTRIES.gi': 'Gibraltar',
      'COUNTRIES.gr': 'Greece',
      'COUNTRIES.gl': 'Greenland',
      'COUNTRIES.gd': 'Grenada',
      'COUNTRIES.gp': 'Guadeloupe',
      'COUNTRIES.gu': 'Guam',
      'COUNTRIES.gt': 'Guatemala',
      'COUNTRIES.gg': 'Guernsey',
      'COUNTRIES.gn': 'Guinea',
      'COUNTRIES.gw': 'Guinea-Bissau',
      'COUNTRIES.gy': 'Guyana',
      'COUNTRIES.ht': 'Haiti',
      'COUNTRIES.hm': 'Heard Island and McDonald Islands',
      'COUNTRIES.va': 'Holy See (Vatican City)',
      'COUNTRIES.hn': 'Honduras',
      'COUNTRIES.hk': 'Hong Kong',
      'COUNTRIES.hu': 'Hungary',
      'COUNTRIES.is': 'Iceland',
      'COUNTRIES.in': 'India',
      'COUNTRIES.id': 'Indonesia',
      'COUNTRIES.ir': 'Iran',
      'COUNTRIES.iq': 'Iraq',
      'COUNTRIES.ie': 'Ireland',
      'COUNTRIES.im': 'Isle of Man',
      'COUNTRIES.il': 'Israel',
      'COUNTRIES.it': 'Italy',
      'COUNTRIES.jm': 'Jamaica',
      'COUNTRIES.jp': 'Japan',
      'COUNTRIES.je': 'Jersey',
      'COUNTRIES.jo': 'Jordan',
      'COUNTRIES.kz': 'Kazakhstan',
      'COUNTRIES.ke': 'Kenya',
      'COUNTRIES.ki': 'Kiribati',
      'COUNTRIES.kp': 'Korea, North',
      'COUNTRIES.kr': 'Korea, South',
      'COUNTRIES.xk': 'Kosovo',
      'COUNTRIES.kw': 'Kuwait',
      'COUNTRIES.kg': 'Kyrgyzstan',
      'COUNTRIES.la': 'Laos',
      'COUNTRIES.lv': 'Latvia',
      'COUNTRIES.lb': 'Lebanon',
      'COUNTRIES.ls': 'Lesotho',
      'COUNTRIES.lr': 'Liberia',
      'COUNTRIES.ly': 'Libyan Arab',
      'COUNTRIES.li': 'Liechtenstein',
      'COUNTRIES.lt': 'Lithuania',
      'COUNTRIES.lu': 'Luxembourg',
      'COUNTRIES.mo': 'Macau',
      'COUNTRIES.mg': 'Madagascar',
      'COUNTRIES.mw': 'Malawi',
      'COUNTRIES.my': 'Malaysia',
      'COUNTRIES.mv': 'Maldives',
      'COUNTRIES.ml': 'Mali',
      'COUNTRIES.mt': 'Malta',
      'COUNTRIES.mh': 'Marshall Islands',
      'COUNTRIES.mq': 'Martinique',
      'COUNTRIES.mr': 'Mauritania',
      'COUNTRIES.mu': 'Mauritius',
      'COUNTRIES.yt': 'Mayotte',
      'COUNTRIES.mx': 'Mexico',
      'COUNTRIES.fm': 'Micronesia, Federated States of',
      'COUNTRIES.md': 'Moldova, Republic of',
      'COUNTRIES.mc': 'Monaco',
      'COUNTRIES.mn': 'Mongolia',
      'COUNTRIES.me': 'Montenegro',
      'COUNTRIES.ms': 'Montserrat',
      'COUNTRIES.ma': 'Morocco',
      'COUNTRIES.mz': 'Mozambique',
      'COUNTRIES.mm': 'Myanmar',
      'COUNTRIES.na': 'Namibia',
      'COUNTRIES.nr': 'Nauru',
      'COUNTRIES.np': 'Nepal',
      'COUNTRIES.nl': 'Netherlands',
      'COUNTRIES.nc': 'New Caledonia',
      'COUNTRIES.nz': 'New Zealand',
      'COUNTRIES.ni': 'Nicaragua',
      'COUNTRIES.ne': 'Niger',
      'COUNTRIES.ng': 'Nigeria',
      'COUNTRIES.nu': 'Niue',
      'COUNTRIES.nf': 'Norfolk Island',
      'COUNTRIES.mp': 'Northern Mariana Islands',
      'COUNTRIES.no': 'Norway',
      'COUNTRIES.om': 'Oman',
      'COUNTRIES.pk': 'Pakistan',
      'COUNTRIES.pw': 'Palau',
      'COUNTRIES.ps': 'Palestine, State of',
      'COUNTRIES.pa': 'Panama',
      'COUNTRIES.pg': 'Papua New Guinea',
      'COUNTRIES.py': 'Paraguay',
      'COUNTRIES.pe': 'Peru',
      'COUNTRIES.ph': 'Philippines',
      'COUNTRIES.pn': 'Pitcairn Islands',
      'COUNTRIES.pt': 'Portugal',
      'COUNTRIES.pr': 'Puerto Rico',
      'COUNTRIES.qa': 'Qatar',
      'COUNTRIES.re': 'Reunion',
      'COUNTRIES.ro': 'Romania',
      'COUNTRIES.rw': 'Rwanda',
      'COUNTRIES.bl': 'Saint Barthelemy',
      'COUNTRIES.sh': 'Saint Helena',
      'COUNTRIES.kn': 'Saint Kitts and Nevis',
      'COUNTRIES.lc': 'Saint Lucia',
      'COUNTRIES.mf': 'Saint Martin',
      'COUNTRIES.pm': 'Saint Pierre and Miquelon',
      'COUNTRIES.vc': 'Saint Vincent and the Grenadines',
      'COUNTRIES.ws': 'Samoa',
      'COUNTRIES.sm': 'San Marino',
      'COUNTRIES.st': 'Sao Tome and Principe',
      'COUNTRIES.sa': 'Saudi Arabia',
      'COUNTRIES.sn': 'Senegal',
      'COUNTRIES.rs': 'Serbia',
      'COUNTRIES.sc': 'Seychelles',
      'COUNTRIES.sl': 'Sierra Leone',
      'COUNTRIES.sg': 'Singapore',
      'COUNTRIES.sx': 'Sint Maarten',
      'COUNTRIES.sk': 'Slovakia',
      'COUNTRIES.si': 'Slovenia',
      'COUNTRIES.sb': 'Solomon Islands',
      'COUNTRIES.so': 'Somalia',
      'COUNTRIES.za': 'South Africa',
      'COUNTRIES.gs': 'South Georgia and the Islands',
      'COUNTRIES.es': 'Spain',
      'COUNTRIES.lk': 'Sri Lanka',
      'COUNTRIES.sd': 'Sudan',
      'COUNTRIES.sr': 'Suriname',
      'COUNTRIES.sj': 'Svalbard',
      'COUNTRIES.sz': 'Swaziland',
      'COUNTRIES.se': 'Sweden',
      'COUNTRIES.ch': 'Switzerland',
      'COUNTRIES.sy': 'Syrian Arab Republic',
      'COUNTRIES.tw': 'Taiwan',
      'COUNTRIES.tj': 'Tajikistan',
      'COUNTRIES.tz': 'Tanzania, United Republic of',
      'COUNTRIES.th': 'Thailand',
      'COUNTRIES.mk': 'The Former Yugoslav Republic of Macedonia',
      'COUNTRIES.tg': 'Togo',
      'COUNTRIES.tk': 'Tokelau',
      'COUNTRIES.to': 'Tonga',
      'COUNTRIES.tt': 'Trinidad and Tobago',
      'COUNTRIES.tn': 'Tunisia',
      'COUNTRIES.tr': 'Turkey',
      'COUNTRIES.tm': 'Turkmenistan',
      'COUNTRIES.tc': 'Turks and Caicos Islands',
      'COUNTRIES.tv': 'Tuvalu',
      'COUNTRIES.ug': 'Uganda',
      'COUNTRIES.ua': 'Ukraine',
      'COUNTRIES.ae': 'United Arab Emirates',
      'COUNTRIES.uy': 'Uruguay',
      'COUNTRIES.uz': 'Uzbekistan',
      'COUNTRIES.vu': 'Vanuatu',
      'COUNTRIES.ve': 'Venezuela',
      'COUNTRIES.vn': 'Vietnam',
      'COUNTRIES.vi': 'Virgin Islands (US)',
      'COUNTRIES.wf': 'Wallis and Futuna',
      'COUNTRIES.eh': 'Western Sahara',
      'COUNTRIES.ye': 'Yemen',
      'COUNTRIES.zm': 'Zambia',
      'COUNTRIES.zw': 'Zimbabwe',
      'LANGUAGES.en': 'English',
      'LANGUAGES.es': 'Spanish',
      'LANGUAGES.de': 'German',
      'LANGUAGES.ru': 'Russian',
      'LANGUAGES.it': 'Italian',
      'LANGUAGES.zh': 'Chinese',
      'LANGUAGES.ab': 'Abkhazian',
      'LANGUAGES.aa': 'Afar',
      'LANGUAGES.af': 'Afrikaans',
      'LANGUAGES.ak': 'Akan',
      'LANGUAGES.sq': 'Albanian',
      'LANGUAGES.am': 'Amharic',
      'LANGUAGES.ar': 'Arabic',
      'LANGUAGES.an': 'Aragonese',
      'LANGUAGES.hy': 'Armenian',
      'LANGUAGES.as': 'Assamese',
      'LANGUAGES.av': 'Avaric',
      'LANGUAGES.ae': 'Avestan',
      'LANGUAGES.ay': 'Aymara',
      'LANGUAGES.az': 'Azerbaijani',
      'LANGUAGES.bm': 'Bambara',
      'LANGUAGES.ba': 'Bashkir',
      'LANGUAGES.eu': 'Basque',
      'LANGUAGES.be': 'Belarusian',
      'LANGUAGES.bn': 'Bengali',
      'LANGUAGES.bh': 'Bihari languages',
      'LANGUAGES.bi': 'Bislama',
      'LANGUAGES.nb': 'Bokmål',
      'LANGUAGES.bs': 'Bosnian',
      'LANGUAGES.br': 'Breton',
      'LANGUAGES.bg': 'Bulgarian',
      'LANGUAGES.my': 'Burmese',
      'LANGUAGES.ca': 'Catalan; Valencian',
      'LANGUAGES.km': 'Central Khmer',
      'LANGUAGES.ch': 'Chamorro',
      'LANGUAGES.ce': 'Chechen',
      'LANGUAGES.cv': 'Chuvash',
      'LANGUAGES.kw': 'Cornish',
      'LANGUAGES.co': 'Corsican',
      'LANGUAGES.cr': 'Cree',
      'LANGUAGES.hr': 'Croatian',
      'LANGUAGES.cs': 'Czech',
      'LANGUAGES.da': 'Danish',
      'LANGUAGES.nl': 'Dutch; Flemish',
      'LANGUAGES.dz': 'Dzongkha',
      'LANGUAGES.eo': 'Esperanto',
      'LANGUAGES.et': 'Estonian',
      'LANGUAGES.ee': 'Ewe',
      'LANGUAGES.fo': 'Faroese',
      'LANGUAGES.fj': 'Fijian',
      'LANGUAGES.fi': 'Finnish',
      'LANGUAGES.fr': 'French',
      'LANGUAGES.ff': 'Fulah',
      'LANGUAGES.gd': 'Gaelic',
      'LANGUAGES.gl': 'Galician',
      'LANGUAGES.lg': 'Ganda',
      'LANGUAGES.ka': 'Georgian',
      'LANGUAGES.el': 'Greek',
      'LANGUAGES.gn': 'Guarani',
      'LANGUAGES.gu': 'Gujarati',
      'LANGUAGES.ht': 'Haitian Creole',
      'LANGUAGES.ha': 'Hausa',
      'LANGUAGES.he': 'Hebrew',
      'LANGUAGES.hz': 'Herero',
      'LANGUAGES.hi': 'Hindi',
      'LANGUAGES.ho': 'Hiri Motu',
      'LANGUAGES.hu': 'Hungarian',
      'LANGUAGES.is': 'Icelandic',
      'LANGUAGES.io': 'Ido',
      'LANGUAGES.ig': 'Igbo',
      'LANGUAGES.id': 'Indonesian',
      'LANGUAGES.ia': 'Interlingua',
      'LANGUAGES.iu': 'Inuktitut',
      'LANGUAGES.ik': 'Inupiaq',
      'LANGUAGES.ga': 'Irish',
      'LANGUAGES.ja': 'Japanese',
      'LANGUAGES.jv': 'Javanese',
      'LANGUAGES.kl': 'Kalaallisut',
      'LANGUAGES.kn': 'Kannada',
      'LANGUAGES.kr': 'Kanuri',
      'LANGUAGES.ks': 'Kashmiri',
      'LANGUAGES.kk': 'Kazakh',
      'LANGUAGES.ki': 'Kikuyu',
      'LANGUAGES.rw': 'Kinyarwanda',
      'LANGUAGES.kv': 'Komi',
      'LANGUAGES.kg': 'Kongo',
      'LANGUAGES.ko': 'Korean',
      'LANGUAGES.ku': 'Kurdish',
      'LANGUAGES.kj': 'Kwanyama',
      'LANGUAGES.ky': 'Kyrgyz',
      'LANGUAGES.lo': 'Lao',
      'LANGUAGES.la': 'Latin',
      'LANGUAGES.lv': 'Latvian',
      'LANGUAGES.li': 'Limburgish',
      'LANGUAGES.ln': 'Lingala',
      'LANGUAGES.lt': 'Lithuanian',
      'LANGUAGES.lu': 'Luba-Katanga',
      'LANGUAGES.lb': 'Luxembourgish',
      'LANGUAGES.mk': 'Macedonian',
      'LANGUAGES.mg': 'Malagasy',
      'LANGUAGES.ms': 'Malay',
      'LANGUAGES.ml': 'Malayalam',
      'LANGUAGES.dv': 'Maldivian',
      'LANGUAGES.mt': 'Maltese',
      'LANGUAGES.gv': 'Manx',
      'LANGUAGES.mi': 'Maori',
      'LANGUAGES.mr': 'Marathi',
      'LANGUAGES.mh': 'Marshallese',
      'LANGUAGES.mn': 'Mongolian',
      'LANGUAGES.na': 'Nauru',
      'LANGUAGES.nv': 'Navajo; Navaho',
      'LANGUAGES.nd': 'Ndebele, North',
      'LANGUAGES.nr': 'Ndebele, South',
      'LANGUAGES.ng': 'Ndonga',
      'LANGUAGES.ne': 'Nepali',
      'LANGUAGES.se': 'Northern Sami',
      'LANGUAGES.no': 'Norwegian',
      'LANGUAGES.ny': 'Nyanja',
      'LANGUAGES.nn': 'Nynorsk',
      'LANGUAGES.oc': 'Occitan',
      'LANGUAGES.oj': 'Ojibwa',
      'LANGUAGES.or': 'Oriya',
      'LANGUAGES.om': 'Oromo',
      'LANGUAGES.os': 'Ossetian',
      'LANGUAGES.pi': 'Pali',
      'LANGUAGES.ps': 'Pashto',
      'LANGUAGES.fa': 'Persian',
      'LANGUAGES.pl': 'Polish',
      'LANGUAGES.pt': 'Portuguese',
      'LANGUAGES.pa': 'Punjabi',
      'LANGUAGES.qu': 'Quechua',
      'LANGUAGES.ro': 'Romanian; Moldovan',
      'LANGUAGES.rm': 'Romansh',
      'LANGUAGES.rn': 'Rundi',
      'LANGUAGES.sm': 'Samoan',
      'LANGUAGES.sg': 'Sango',
      'LANGUAGES.sa': 'Sanskrit',
      'LANGUAGES.sc': 'Sardinian',
      'LANGUAGES.sr': 'Serbian',
      'LANGUAGES.sn': 'Shona',
      'LANGUAGES.ii': 'Sichuan Yi; Nuosu',
      'LANGUAGES.sd': 'Sindhi',
      'LANGUAGES.si': 'Sinhala; Sinhalese',
      'LANGUAGES.sk': 'Slovak',
      'LANGUAGES.sl': 'Slovenian',
      'LANGUAGES.so': 'Somali',
      'LANGUAGES.st': 'Sotho, Southern',
      'LANGUAGES.su': 'Sundanese',
      'LANGUAGES.sw': 'Swahili',
      'LANGUAGES.ss': 'Swati',
      'LANGUAGES.sv': 'Swedish',
      'LANGUAGES.tl': 'Tagalog',
      'LANGUAGES.ty': 'Tahitian',
      'LANGUAGES.tg': 'Tajik',
      'LANGUAGES.ta': 'Tamil',
      'LANGUAGES.tt': 'Tatar',
      'LANGUAGES.te': 'Telugu',
      'LANGUAGES.th': 'Thai',
      'LANGUAGES.bo': 'Tibetan',
      'LANGUAGES.ti': 'Tigrinya',
      'LANGUAGES.to': 'Tonga (Tonga Islands)',
      'LANGUAGES.ts': 'Tsonga',
      'LANGUAGES.tn': 'Tswana',
      'LANGUAGES.tr': 'Turkish',
      'LANGUAGES.tk': 'Turkmen',
      'LANGUAGES.tw': 'Twi',
      'LANGUAGES.ug': 'Uighur; Uyghur',
      'LANGUAGES.uk': 'Ukrainian',
      'LANGUAGES.ur': 'Urdu',
      'LANGUAGES.uz': 'Uzbek',
      'LANGUAGES.ve': 'Venda',
      'LANGUAGES.vi': 'Vietnamese',
      'LANGUAGES.vo': 'Volapük',
      'LANGUAGES.wa': 'Walloon',
      'LANGUAGES.cy': 'Welsh',
      'LANGUAGES.fy': 'Western Frisian',
      'LANGUAGES.wo': 'Wolof',
      'LANGUAGES.xh': 'Xhosa',
      'LANGUAGES.yi': 'Yiddish',
      'LANGUAGES.yo': 'Yoruba',
      'LANGUAGES.za': 'Zhuang; Chuang',
      'LANGUAGES.zu': 'Zulu',
      'MAPS.de_mirage': 'Mirage',
      'MAPS.de_cache': 'Cache',
      'MAPS.de_inferno': 'Inferno',
      'MAPS.de_overpass': 'Overpass',
      'MAPS.de_train': 'Train',
      'MAPS.de_nuke': 'Nuke',
      'MAPS.de_dust2': 'Dust II',
      'MAPS.de_dust': 'Dust',
      'ROLES.CSGO.sniper': 'Sniper',
      'ROLES.CSGO.assault': 'Assault',
      'ROLES.CSGO.support': 'Support',
      'ROLES.CSGO.captain': 'Captain',
      'ROLES.CSGO.strategist': 'Strategist',
      'ROLES.CSGO.coach': 'Coach',
      'ROLES.LOL.ad_carry': 'ADC',
      'ROLES.LOL.support': 'Support',
      'ROLES.LOL.jungler': 'Jungler',
      'ROLES.LOL.top_lane': 'Top Lane',
      'ROLES.LOL.mid_lane': 'Mid Lane',
      'ROLES.LOL.drafter': 'Drafter',
      'ROLES.LOL.shot_caller': 'Shot Caller',
      'ROLES.LOL.in_game_leader_coordinator': 'Captain / IGL',
      'RANKS.CSGO.silver_i': 'Silver I',
      'RANKS.CSGO.silver_ii': 'Silver II',
      'RANKS.CSGO.silver_iii': 'Silver III',
      'RANKS.CSGO.silver_iv': 'Silver IV',
      'RANKS.CSGO.silver_elite': 'Silver Elite',
      'RANKS.CSGO.silver_elite_master': 'Silver Elite Master',
      'RANKS.CSGO.goals_nova_i': 'Gold Nova I',
      'RANKS.CSGO.goals_nova_ii': 'Gold Nova II',
      'RANKS.CSGO.goals_nova_iii': 'Gold Nova III',
      'RANKS.CSGO.goals_nova_master': 'Gold Nova Master',
      'RANKS.CSGO.master_guardian_i': 'Master Guardian I',
      'RANKS.CSGO.master_guardian_ii': 'Master Guardian II',
      'RANKS.CSGO.master_guardian_elite': 'Master Guardian Elite',
      'RANKS.CSGO.distinguished_master_guardian': 'Distinguished Master Guardian',
      'RANKS.CSGO.legendary_eagle': 'Legendary Eagle',
      'RANKS.CSGO.legendary_eagle_master': 'Legendary Eagle Master',
      'RANKS.CSGO.supreme_master_first_class': 'Supreme Master First Class',
      'RANKS.CSGO.global_elite': 'The Global Elite',
      'RANKS.LOL.unranked': 'Unranked',
      'RANKS.LOL.placeholder_from': 'From',
      'RANKS.LOL.placeholder_to': 'To',
      'RANKS.LOL.iron_i': 'Iron I',
      'RANKS.LOL.iron_ii': 'Iron II',
      'RANKS.LOL.iron_iii': 'Iron III',
      'RANKS.LOL.iron_iv': 'Iron IV',
      'RANKS.LOL.bronze_i': 'Bronze I',
      'RANKS.LOL.bronze_ii': 'Bronze II',
      'RANKS.LOL.bronze_iii': 'Bronze III',
      'RANKS.LOL.bronze_iv': 'Bronze IV',
      'RANKS.LOL.silver_i': 'Silver I',
      'RANKS.LOL.silver_ii': 'Silver II',
      'RANKS.LOL.silver_iii': 'Silver III',
      'RANKS.LOL.silver_iv': 'Silver IV',
      'RANKS.LOL.gold_i': 'Gold I',
      'RANKS.LOL.gold_ii': 'Gold II',
      'RANKS.LOL.gold_iii': 'Gold III',
      'RANKS.LOL.gold_iv': 'Gold IV',
      'RANKS.LOL.platinum_i': 'Platinum I',
      'RANKS.LOL.platinum_ii': 'Platinum II',
      'RANKS.LOL.platinum_iii': 'Platinum III',
      'RANKS.LOL.platinum_iv': 'Platinum IV',
      'RANKS.LOL.diamond_i': 'Diamond I',
      'RANKS.LOL.diamond_ii': 'Diamond II',
      'RANKS.LOL.diamond_iii': 'Diamond III',
      'RANKS.LOL.diamond_iv': 'Diamond IV',
      'RANKS.LOL.master_i': 'Master',
      'RANKS.LOL.challenger_i': 'Challenger',
      'RANKS.LOL.grandmaster_i': 'GrandMaster'
    },
    localeData: [
      {
        locale: 'en',
        fields: {
          year: {
            displayName: 'year',
            relative: { '0': 'this year', '1': 'next year', '-1': 'last year' },
            relativeTime: {
              future: { one: 'in {0} year', other: 'in {0} years' },
              past: { one: '{0} year ago', other: '{0} years ago' }
            }
          },
          month: {
            displayName: 'month',
            relative: {
              '0': 'this month',
              '1': 'next month',
              '-1': 'last month'
            },
            relativeTime: {
              future: { one: 'in {0} month', other: 'in {0} months' },
              past: { one: '{0} month ago', other: '{0} months ago' }
            }
          },
          day: {
            displayName: 'day',
            relative: { '0': 'today', '1': 'tomorrow', '-1': 'yesterday' },
            relativeTime: {
              future: { one: 'in {0} day', other: 'in {0} days' },
              past: { one: '{0} day ago', other: '{0} days ago' }
            }
          },
          hour: {
            displayName: 'hour',
            relative: { '0': 'this hour' },
            relativeTime: {
              future: { one: 'in {0} hour', other: 'in {0} hours' },
              past: { one: '{0} hour ago', other: '{0} hours ago' }
            }
          },
          minute: {
            displayName: 'minute',
            relative: { '0': 'this minute' },
            relativeTime: {
              future: { one: 'in {0} minute', other: 'in {0} minutes' },
              past: { one: '{0} minute ago', other: '{0} minutes ago' }
            }
          },
          second: {
            displayName: 'second',
            relative: { '0': 'now' },
            relativeTime: {
              future: { one: 'in {0} second', other: 'in {0} seconds' },
              past: { one: '{0} second ago', other: '{0} seconds ago' }
            }
          }
        }
      },
      { locale: 'en-001', parentLocale: 'en' },
      { locale: 'en-150', parentLocale: 'en-001' },
      { locale: 'en-AG', parentLocale: 'en-001' },
      { locale: 'en-AI', parentLocale: 'en-001' },
      { locale: 'en-AS', parentLocale: 'en' },
      { locale: 'en-AT', parentLocale: 'en-150' },
      { locale: 'en-AU', parentLocale: 'en-001' },
      { locale: 'en-BB', parentLocale: 'en-001' },
      { locale: 'en-BE', parentLocale: 'en-001' },
      { locale: 'en-BI', parentLocale: 'en' },
      { locale: 'en-BM', parentLocale: 'en-001' },
      { locale: 'en-BS', parentLocale: 'en-001' },
      { locale: 'en-BW', parentLocale: 'en-001' },
      { locale: 'en-BZ', parentLocale: 'en-001' },
      { locale: 'en-CA', parentLocale: 'en-001' },
      { locale: 'en-CC', parentLocale: 'en-001' },
      { locale: 'en-CH', parentLocale: 'en-150' },
      { locale: 'en-CK', parentLocale: 'en-001' },
      { locale: 'en-CM', parentLocale: 'en-001' },
      { locale: 'en-CX', parentLocale: 'en-001' },
      { locale: 'en-CY', parentLocale: 'en-001' },
      { locale: 'en-DE', parentLocale: 'en-150' },
      { locale: 'en-DG', parentLocale: 'en-001' },
      { locale: 'en-DK', parentLocale: 'en-150' },
      { locale: 'en-DM', parentLocale: 'en-001' },
      {
        locale: 'en-Dsrt',
        fields: {
          year: {
            displayName: 'Year',
            relative: { '0': 'this year', '1': 'next year', '-1': 'last year' },
            relativeTime: {
              future: { other: '+{0} y' },
              past: { other: '-{0} y' }
            }
          },
          month: {
            displayName: 'Month',
            relative: {
              '0': 'this month',
              '1': 'next month',
              '-1': 'last month'
            },
            relativeTime: {
              future: { other: '+{0} m' },
              past: { other: '-{0} m' }
            }
          },
          day: {
            displayName: 'Day',
            relative: { '0': 'today', '1': 'tomorrow', '-1': 'yesterday' },
            relativeTime: {
              future: { other: '+{0} d' },
              past: { other: '-{0} d' }
            }
          },
          hour: {
            displayName: 'Hour',
            relative: { '0': 'this hour' },
            relativeTime: {
              future: { other: '+{0} h' },
              past: { other: '-{0} h' }
            }
          },
          minute: {
            displayName: 'Minute',
            relative: { '0': 'this minute' },
            relativeTime: {
              future: { other: '+{0} min' },
              past: { other: '-{0} min' }
            }
          },
          second: {
            displayName: 'Second',
            relative: { '0': 'now' },
            relativeTime: {
              future: { other: '+{0} s' },
              past: { other: '-{0} s' }
            }
          }
        }
      },
      { locale: 'en-ER', parentLocale: 'en-001' },
      { locale: 'en-FI', parentLocale: 'en-150' },
      { locale: 'en-FJ', parentLocale: 'en-001' },
      { locale: 'en-FK', parentLocale: 'en-001' },
      { locale: 'en-FM', parentLocale: 'en-001' },
      { locale: 'en-GB', parentLocale: 'en-001' },
      { locale: 'en-GD', parentLocale: 'en-001' },
      { locale: 'en-GG', parentLocale: 'en-001' },
      { locale: 'en-GH', parentLocale: 'en-001' },
      { locale: 'en-GI', parentLocale: 'en-001' },
      { locale: 'en-GM', parentLocale: 'en-001' },
      { locale: 'en-GU', parentLocale: 'en' },
      { locale: 'en-GY', parentLocale: 'en-001' },
      { locale: 'en-HK', parentLocale: 'en-001' },
      { locale: 'en-IE', parentLocale: 'en-001' },
      { locale: 'en-IL', parentLocale: 'en-001' },
      { locale: 'en-IM', parentLocale: 'en-001' },
      { locale: 'en-IN', parentLocale: 'en-001' },
      { locale: 'en-IO', parentLocale: 'en-001' },
      { locale: 'en-JE', parentLocale: 'en-001' },
      { locale: 'en-JM', parentLocale: 'en-001' },
      { locale: 'en-KE', parentLocale: 'en-001' },
      { locale: 'en-KI', parentLocale: 'en-001' },
      { locale: 'en-KN', parentLocale: 'en-001' },
      { locale: 'en-KY', parentLocale: 'en-001' },
      { locale: 'en-LC', parentLocale: 'en-001' },
      { locale: 'en-LR', parentLocale: 'en-001' },
      { locale: 'en-LS', parentLocale: 'en-001' },
      { locale: 'en-MG', parentLocale: 'en-001' },
      { locale: 'en-MH', parentLocale: 'en' },
      { locale: 'en-MO', parentLocale: 'en-001' },
      { locale: 'en-MP', parentLocale: 'en' },
      { locale: 'en-MS', parentLocale: 'en-001' },
      { locale: 'en-MT', parentLocale: 'en-001' },
      { locale: 'en-MU', parentLocale: 'en-001' },
      { locale: 'en-MW', parentLocale: 'en-001' },
      { locale: 'en-MY', parentLocale: 'en-001' },
      { locale: 'en-NA', parentLocale: 'en-001' },
      { locale: 'en-NF', parentLocale: 'en-001' },
      { locale: 'en-NG', parentLocale: 'en-001' },
      { locale: 'en-NL', parentLocale: 'en-150' },
      { locale: 'en-NR', parentLocale: 'en-001' },
      { locale: 'en-NU', parentLocale: 'en-001' },
      { locale: 'en-NZ', parentLocale: 'en-001' },
      { locale: 'en-PG', parentLocale: 'en-001' },
      { locale: 'en-PH', parentLocale: 'en-001' },
      { locale: 'en-PK', parentLocale: 'en-001' },
      { locale: 'en-PN', parentLocale: 'en-001' },
      { locale: 'en-PR', parentLocale: 'en' },
      { locale: 'en-PW', parentLocale: 'en-001' },
      { locale: 'en-RW', parentLocale: 'en-001' },
      { locale: 'en-SB', parentLocale: 'en-001' },
      { locale: 'en-SC', parentLocale: 'en-001' },
      { locale: 'en-SD', parentLocale: 'en-001' },
      { locale: 'en-SE', parentLocale: 'en-150' },
      { locale: 'en-SG', parentLocale: 'en-001' },
      { locale: 'en-SH', parentLocale: 'en-001' },
      { locale: 'en-SI', parentLocale: 'en-150' },
      { locale: 'en-SL', parentLocale: 'en-001' },
      { locale: 'en-SS', parentLocale: 'en-001' },
      { locale: 'en-SX', parentLocale: 'en-001' },
      { locale: 'en-SZ', parentLocale: 'en-001' },
      {
        locale: 'en-Shaw',
        fields: {
          year: {
            displayName: 'Year',
            relative: { '0': 'this year', '1': 'next year', '-1': 'last year' },
            relativeTime: {
              future: { other: '+{0} y' },
              past: { other: '-{0} y' }
            }
          },
          month: {
            displayName: 'Month',
            relative: {
              '0': 'this month',
              '1': 'next month',
              '-1': 'last month'
            },
            relativeTime: {
              future: { other: '+{0} m' },
              past: { other: '-{0} m' }
            }
          },
          day: {
            displayName: 'Day',
            relative: { '0': 'today', '1': 'tomorrow', '-1': 'yesterday' },
            relativeTime: {
              future: { other: '+{0} d' },
              past: { other: '-{0} d' }
            }
          },
          hour: {
            displayName: 'Hour',
            relative: { '0': 'this hour' },
            relativeTime: {
              future: { other: '+{0} h' },
              past: { other: '-{0} h' }
            }
          },
          minute: {
            displayName: 'Minute',
            relative: { '0': 'this minute' },
            relativeTime: {
              future: { other: '+{0} min' },
              past: { other: '-{0} min' }
            }
          },
          second: {
            displayName: 'Second',
            relative: { '0': 'now' },
            relativeTime: {
              future: { other: '+{0} s' },
              past: { other: '-{0} s' }
            }
          }
        }
      },
      { locale: 'en-TC', parentLocale: 'en-001' },
      { locale: 'en-TK', parentLocale: 'en-001' },
      { locale: 'en-TO', parentLocale: 'en-001' },
      { locale: 'en-TT', parentLocale: 'en-001' },
      { locale: 'en-TV', parentLocale: 'en-001' },
      { locale: 'en-TZ', parentLocale: 'en-001' },
      { locale: 'en-UG', parentLocale: 'en-001' },
      { locale: 'en-UM', parentLocale: 'en' },
      { locale: 'en-US', parentLocale: 'en' },
      { locale: 'en-VC', parentLocale: 'en-001' },
      { locale: 'en-VG', parentLocale: 'en-001' },
      { locale: 'en-VI', parentLocale: 'en' },
      { locale: 'en-VU', parentLocale: 'en-001' },
      { locale: 'en-WS', parentLocale: 'en-001' },
      { locale: 'en-ZA', parentLocale: 'en-001' },
      { locale: 'en-ZM', parentLocale: 'en-001' },
      { locale: 'en-ZW', parentLocale: 'en-001' }
    ]
  },
  heatmaps: {
    map: 'de_inferno',
    entry: [],
    weapon: [],
    nade: []
  }
}
