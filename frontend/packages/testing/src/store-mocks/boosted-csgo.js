/* eslint-disable */
import { teamInitial } from '@messenger/game/lib/teams/modules/team/team.mocks'
import intl from './intl'
import profiles from './profiles'
import dictionaries from './dictionaries'

export default {
  loadingStatus: {},
  activities: { tokens: {}, data: { practice_poc: {} } },
  app: { locale: 'en', activeGame: 'csgo' },
  auth: {
    authToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJ1c2VySWQiOjQ1Mzc2MCwic3ViIjoiYXV0aG9yaXphdGlvbiIsImV4cCI6IjE1MzUwMjMwMjAuNjIwMzQ0IiwiaXNzIjoiQXV0aCBTZXJ2ZXIifQ.syMrVJNfraQfoRDSMRyOG0g2jRdtGlD333LAiXlj-GVG_dId1zNCyUnpDsoBrWPypiOqGnv7gPd6ufZTqqGUMibQ_bZHjr1Klpq-jtlB_qfAxDxH14sg3n8Ug8sXV-H69CUxW6DmiZ1p6-3EjHh_unJb5ui6PyD0839lq0ccWGtkyljHZhpGR2qWEDmnjLv6_NDIRkyWEjkls1gdV8JMjWIl6J2oRDjNJbnRDbQRHO3AFGJAExJSX6upWnsCt2L_FaNv0OulPu9mDTdzbXj02padiQn0WG_lVwIgp3MMuJC-QaQvZlk5_JUErCxU0VhsQYBTGjmbzu0HDYT7dwYx3HpmmQVaE89MUuKLZecDiKqUGMMyj-qQ3P_7mCL_O_EimpkBgyeRHgWWtYt0r8jGyWVO4enwMLVcjP4DOyp375qopOc2gg_U7oqVtA49pvI-e6E_IB7GsUQsQd8inGLOQ-pJOS-hKtJVpUBwmURLLSx1fCBJMuD5sb22-bxYDosQKHjGULgQbZRSSRQrX4FQmdqVdbU1DmGzcC_dXKNurmyEokPSgL_QXu3EekK9Oasq50r7AvDHMcNtat4H3CMeOyhNGWGDAV4SSnxF_NuwoQ8Of6YaFozeSrHkAVIXVr5tvD4FKdR8pYPBryzFThpvzelef5jJ-tDtWsXXlVyp8m0',
    refreshToken: '4699e1b969b4c57830c5c50751231d6d',
    resendToken: null
  },
  dictionaries,
  modal: {},
  notification: {
    notifications: [
      {
        message: { key: null, ref: null, props: {}, _owner: null },
        type: 'alert',
        intent: 'warning',
        size: 's',
        id: 'CONFIRM_EMAIL'
      },
      {
        message: { key: null, ref: null, props: {}, _owner: null },
        type: 'alert',
        intent: 'warning',
        close: true,
        size: 'm',
        id: 'STEAM_PRIVATE'
      }
    ],
    isLoaded: false
  },
  user: {
    isLoaded: true,
    isLoggedIn: true,
    isTeamLoaded: false,
    new_teams: [],
    wallet: { balance: 0 },
    id: 453760,
    avatar: null,
    name: 'skoch1',
    country: 'br',
    birthday: '2004-02-01',
    gender: 'd',
    city_id: null,
    verified: false,
    use_cookies: true,
    created_at: '2018-08-18T16:18:52+00:00',
    languages: ['en', 'es'],
    profiles: [
      {
        about: null,
        created_at: '2018-08-18T16:19:59+00:00',
        ext_id: '411526',
        game: 'csgo',
        id: '5b78472f3b0926005254b2e7',
        main_goal: 'play_for_fun',
        main_roles: ['assault'],
        nickname: 'garegenarss',
        pro: false,
        rank: 'silver_iii',
        secondary_roles: [],
        servers: ['eu_west'],
        tactical_roles: [],
        type: 'player',
        updated_at: '2018-08-18T16:19:59+00:00',
        steam_id: '76561198313261551'
      },
      {
        about: null,
        account_id: '1988626447363712',
        created_at: '2018-08-22T15:05:34+00:00',
        ext_id: '411790',
        game: 'lol',
        id: '5b7d7bbee07964004d372953',
        main_goal: 'play_for_fun',
        main_roles: ['top_lane'],
        nickname: 'asdasdasd',
        pro: false,
        rank: 'unranked',
        secondary_roles: ['jungler'],
        servers: ['republic_of_korea'],
        summoner_id: '73920652',
        tactical_roles: [],
        type: 'player',
        updated_at: '2018-08-22T15:05:34+00:00'
      }
    ],
    teams: [
      {
        id: 411681,
        owner_id: 453760,
        game: 'csgo',
        name: 'skoch team1',
        avatar: '',
        country: 'us',
        rating: 2.1,
        vacancy_count: 0,
        member_count: 1
      },
      {
        id: 411789,
        owner_id: 453760,
        game: 'lol',
        name: 'asdasd',
        avatar: '',
        country: 'us',
        rating: 2,
        vacancy_count: 0,
        member_count: 1
      }
    ]
  },
  profile: { player: { isLoaded: false }, team: { isLoaded: false } },
  cookiesAgreement: { show: false },
  player: { playersById: {}, playersByExtId: {}, actions: {
    apply: {}
  } },
  users: {
    skoch1: {
      id: 453760,
      name: 'skoch1',
      avatar: null,
      gender: 'd',
      age: 14,
      country: 'br',
      region: 'South America',
      city_id: null,
      languages: ['en', 'es'],
      profiles: [
        {
          ext_id: '411526',
          steam_id: '76561198313261551',
          steam: 'STEAM_0:1:176497911',
          rank: 'silver_iii',
          main_roles: ['assault'],
          tactical_roles: [],
          servers: ['eu_west'],
          nickname: 'garegenarss',
          main_goal: 'play_for_fun',
          pro: false,
          id: '5b78472f3b0926005254b2e7',
          user_id: '453760',
          about: null,
          game: 'csgo',
          type: 'player',
          created_at: '2018-08-18T16:19:59+00:00',
          updated_at: '2018-08-18T16:19:59+00:00'
        },
        {
          ext_id: '411790',
          summoner_id: '73920652',
          account_id: '1988626447363712',
          rank: 'unranked',
          main_roles: ['top_lane'],
          secondary_roles: ['jungler'],
          tactical_roles: null,
          servers: ['republic_of_korea'],
          nickname: 'asdasdasd',
          main_goal: 'play_for_fun',
          pro: false,
          id: '5b7d7bbee07964004d372953',
          user_id: '453760',
          about: null,
          game: 'lol',
          type: 'player',
          created_at: '2018-08-22T15:05:34+00:00',
          updated_at: '2018-08-22T15:05:34+00:00'
        }
      ],
      activity_level: 4,
      is_online: true
    }
  },
  profiles,
  players: {
    allPlayers: { isLoaded: false, ids: [], data: {}, total: 0 },
    players: { isLoaded: false, ids: [], data: {}, total: 0 }
  },
  teams: {
    allTeams: { isLoaded: false, ids: [], data: {}, total: 0 },
    vacancies: { isLoaded: false, ids: [], data: {}, total: 0 },
    teams: {}
  },
  team: teamInitial,
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
      { id: '5b2b67818ecce300261201ce', name: 'de_cache' },
      { id: '5b2b67818ecce300261201cd', name: 'de_overpass' }
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
    ]
  },
  replays: {
    uploader: { replay: null, status: 'initial', progress: 0 },
    replaysById: {},
    playersBySteamId: {},
    teams: { userTeam: null, opponentTeam: null },
    userTeamMembersByReplay: {},
    opponentTeamMembersByReplay: {}
  },
  entries: { filters: { side: 'all', team_a: 'all', team_b: 'all' }, data: {} },
  economics: {
    teamsEconomyByReplayAndRounds: {},
    roundTypesByReplayAndRounds: {}
  },
  rounds: { roundsByReplay: {}, data: {} },
  playerStats: { playerStatsByReplay: {} },
  replayPlayers: {
    playersBySteamId: {},
    userTeamPlayersByReplay: {},
    opponentTeamPlayersByReplay: {}
  },
  review: { canLeaveReview: { '411526': false } },
  loadingBar: 0,
  reduxAsyncConnect: { loaded: true, loadState: {} },
  intl,
  premium: {
    excludedCurrencies: [],
    excludedCurrenciesLoaded: true,
    packages: {},
    services: {},
    servicesLoaded: true,
    packagesLoaded: true
  },
  news: {
    data: [],
    isLoaded: true
  },
  subscriptions: {
    isLoaded: true,
    ids: ['1', '2', '3'],
    data: {
      '1': {
        id: '1',
        type: 'team',
        status: 'active',
        game: 'cs:go',
        expiryDate: 'Sep 19 2018'
      },
      '2': {
        id: '2',
        type: 'team',
        status: 'pending-cancel',
        game: 'lol',
        expiryDate: 'Sep 19 2018'
      },
      '3': {
        id: '3',
        type: 'player',
        status: 'expired',
        expiryDate: 'Sep 19 2018'
      }
    }
  }
}
