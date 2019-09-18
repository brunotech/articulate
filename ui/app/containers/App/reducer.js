import material from 'material-colors';
import Immutable from 'seamless-immutable';

import { DEFAULT_LOCALE } from '../../i18n';
import {
  ADD_ACTION,
  ADD_ACTION_ERROR,
  ADD_ACTION_NEW_SAYING,
  ADD_ACTION_RESPONSE,
  ADD_ACTION_SAYING,
  ADD_ACTION_SUCCESS,
  ADD_AGENT,
  ADD_AGENT_ERROR,
  ADD_AGENT_FALLBACK,
  ADD_AGENT_PARAMETER,
  ADD_AGENT_SUCCESS,
  ADD_CATEGORY_PARAMETER,
  ADD_FALLBACK,
  ADD_HEADER_ACTION_WEBHOOK,
  ADD_HEADER_AGENT_WEBHOOK,
  ADD_KEYWORD_EXAMPLE,
  ADD_MODIFIER_SAYING,
  ADD_MODIFIER_SAYING_SUCCESS,
  ADD_NEW_MODIFIER,
  ADD_NEW_QUICK_RESPONSE,
  ADD_NEW_SLOT,
  ADD_SAYING,
  ADD_SAYING_ERROR,
  ADD_SLOT_TEXT_PROMPT_SLOT,
  CHAIN_ACTION_TO_RESPONSE,
  CHANGE_ACTION_DATA,
  CHANGE_ACTION_NAME,
  CHANGE_ACTION_POST_FORMAT_DATA,
  CHANGE_ACTION_WEBHOOK_DATA,
  CHANGE_ACTION_WEBHOOK_PAYLOAD_TYPE,
  CHANGE_AGENT_DATA,
  CHANGE_AGENT_NAME,
  CHANGE_AGENT_PARAMETER_NAME,
  CHANGE_AGENT_PARAMETER_VALUE,
  CHANGE_AGENT_SETTINGS_DATA,
  CHANGE_CATEGORY_DATA,
  CHANGE_CATEGORY_PARAMETER_NAME,
  CHANGE_CATEGORY_PARAMETER_VALUE,
  CHANGE_CONNECTION_DATA,
  CHANGE_DETAIL_VALUE,
  CHANGE_EXAMPLE_NAME,
  CHANGE_EXAMPLE_SYNONYMS,
  CHANGE_HEADER_KEY_ACTION_WEBHOOK,
  CHANGE_HEADER_KEY_AGENT_WEBHOOK,
  CHANGE_HEADER_VALUE_ACTION_WEBHOOK,
  CHANGE_HEADER_VALUE_AGENT_WEBHOOK,
  CHANGE_KEYWORD_DATA,
  CHANGE_LOCALE,
  CHANGE_MODIFIER_DATA,
  CHANGE_MODIFIER_NAME,
  CHANGE_POST_FORMAT_DATA,
  CHANGE_QUICK_RESPONSE,
  CHANGE_SETTINGS_DATA,
  CHANGE_SLOT_DATA,
  CHANGE_SLOT_NAME,
  CHANGE_WEBHOOK_DATA,
  CHANGE_WEBHOOK_PAYLOAD_TYPE,
  CHECK_API,
  CLEAR_SAYING_TO_ACTION,
  CLOSE_NOTIFICATION,
  COPY_RESPONSE,
  COPY_SAYING_ERROR,
  COPY_SAYING_SUCCESS,
  CREATE_CATEGORY,
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CONNECTION,
  CREATE_CONNECTION_ERROR,
  CREATE_CONNECTION_SUCCESS,
  CREATE_KEYWORD,
  CREATE_KEYWORD_ERROR,
  CREATE_KEYWORD_SUCCESS,
  DELETE_ACTION,
  DELETE_ACTION_ERROR,
  DELETE_ACTION_NEW_SAYING,
  DELETE_ACTION_RESPONSE,
  DELETE_ACTION_SAYING,
  DELETE_ACTION_SUCCESS,
  DELETE_AGENT,
  DELETE_AGENT_ERROR,
  DELETE_AGENT_FALLBACK,
  DELETE_AGENT_PARAMETER,
  DELETE_AGENT_SUCCESS,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
  DELETE_CATEGORY_PARAMETER,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CONNECTION,
  DELETE_CONNECTION_ERROR,
  DELETE_CONNECTION_SUCCESS,
  DELETE_FALLBACK,
  DELETE_HEADER_ACTION_WEBHOOK,
  DELETE_HEADER_AGENT_WEBHOOK,
  DELETE_KEYWORD,
  DELETE_KEYWORD_ERROR,
  DELETE_KEYWORD_EXAMPLE,
  DELETE_KEYWORD_SUCCESS,
  DELETE_MODIFIER,
  DELETE_MODIFIER_SAYING,
  DELETE_QUICK_RESPONSE,
  DELETE_SAYING,
  DELETE_SAYING_ERROR,
  DELETE_SESSION,
  DELETE_SESSION_ERROR,
  DELETE_SESSION_SUCCESS,
  DELETE_SLOT,
  DELETE_SLOT_TEXT_PROMPT_SLOT,
  DELETE_USER,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  EDIT_ACTION_RESPONSE,
  EDIT_SLOT_TEXT_PROMPT,
  EXPORT_AGENT,
  EXPORT_AGENT_ERROR,
  EXPORT_AGENT_SUCCESS,
  IMPORT_AGENT,
  IMPORT_AGENT_ERROR,
  IMPORT_AGENT_SUCCESS,
  IMPORT_CATEGORY,
  IMPORT_CATEGORY_ERROR,
  IMPORT_CATEGORY_SUCCESS,
  LOAD_ACCESS_CONTROL,
  LOAD_ACCESS_CONTROL_ERROR,
  LOAD_ACCESS_CONTROL_SUCCESS,
  LOAD_ACTION,
  LOAD_ACTION_ERROR,
  LOAD_ACTION_SUCCESS,
  LOAD_ACTIONS,
  LOAD_ACTIONS_ERROR,
  LOAD_ACTIONS_PAGE,
  LOAD_ACTIONS_PAGE_ERROR,
  LOAD_ACTIONS_PAGE_SUCCESS,
  LOAD_ACTIONS_SUCCESS,
  LOAD_AGENT,
  LOAD_AGENT_DOCUMENTS_ERROR,
  LOAD_AGENT_DOCUMENTS_SUCCESS,
  LOAD_LOGS,
  LOAD_LOGS_ERROR,
  LOAD_LOGS_SUCCESS,
  LOAD_AGENT_STATS_ERROR,
  LOAD_AGENT_STATS_SUCCESS,
  LOAD_AGENT_ERROR,
  LOAD_AGENT_SESSIONS_ERROR,
  LOAD_AGENT_SESSIONS_SUCCESS,
  LOAD_AGENT_SUCCESS,
  LOAD_AGENTS,
  LOAD_AGENTS_ERROR,
  LOAD_AGENTS_SUCCESS,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_ERROR,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORY,
  LOAD_CATEGORY_ERROR,
  LOAD_CATEGORY_SUCCESS,
  LOAD_CHANNELS,
  LOAD_CHANNELS_ERROR,
  LOAD_CHANNELS_SUCCESS,
  LOAD_CONNECTION,
  LOAD_CONNECTION_ERROR,
  LOAD_CONNECTION_SUCCESS,
  LOAD_CONNECTIONS,
  LOAD_CONNECTIONS_ERROR,
  LOAD_CONNECTIONS_SUCCESS,
  LOAD_FILTERED_ACTIONS,
  LOAD_FILTERED_ACTIONS_ERROR,
  LOAD_FILTERED_ACTIONS_SUCCESS,
  LOAD_FILTERED_CATEGORIES,
  LOAD_FILTERED_CATEGORIES_ERROR,
  LOAD_FILTERED_CATEGORIES_SUCCESS,
  LOAD_KEYWORD,
  LOAD_KEYWORD_ERROR,
  LOAD_KEYWORD_SUCCESS,
  LOAD_KEYWORDS,
  LOAD_KEYWORDS_ERROR,
  LOAD_KEYWORDS_SUCCESS,
  LOAD_PREBUILT_CATEGORIES,
  LOAD_PREBUILT_CATEGORIES_ERROR,
  LOAD_PREBUILT_CATEGORIES_SUCCESS,
  LOAD_SAYINGS,
  LOAD_SAYINGS_ERROR,
  LOAD_SAYINGS_SUCCESS,
  LOAD_SERVER_INFO,
  LOAD_SERVER_INFO_ERROR,
  LOAD_SERVER_INFO_SUCCESS,
  LOAD_SESSION,
  LOAD_SESSION_ERROR,
  LOAD_SESSION_SUCCESS,
  LOAD_SETTINGS,
  LOAD_SETTINGS_ERROR,
  LOAD_SETTINGS_SUCCESS,
  LOAD_STARRED_SAYING,
  LOAD_STARRED_SAYING_ERROR,
  LOAD_STARRED_SAYING_SUCCESS,
  LOAD_STARRED_SAYINGS,
  LOAD_STARRED_SAYINGS_ERROR,
  LOAD_STARRED_SAYINGS_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  LOAD_USERS_SUCCESS,
  LOGIN_USER_ERROR,
  MISSING_API,
  REFRESH_SERVER_INFO,
  RESET_ACTION_DATA,
  RESET_ACTIONS,
  RESET_AGENT_DATA,
  RESET_CATEGORY_DATA,
  RESET_CONNECTION_DATA,
  RESET_KEYWORD_DATA,
  RESET_MISSING_API,
  RESET_SAYINGS,
  RESET_SESSION_SUCCESS,
  RESET_STATUS_FLAGS,
  RESET_SUCCESS_AGENT,
  RESPOND_MESSAGE,
  SELECT_CATEGORY,
  SEND_MESSAGE,
  SEND_SAYING_TO_ACTION,
  SET_AGENT_DEFAULTS,
  SHOW_WARNING,
  SORT_MODIFIERS,
  SORT_SLOTS,
  STORE_SOURCE_DATA,
  TAG_KEYWORD,
  TAG_MODIFIER_KEYWORD,
  TOGGLE_CHAT_BUTTON,
  TOGGLE_CONVERSATION_BAR,
  TRAIN_AGENT,
  TRAIN_AGENT_ERROR,
  UNCHAIN_ACTION_FROM_RESPONSE,
  UNTAG_KEYWORD,
  UNTAG_MODIFIER_KEYWORD,
  UPDATE_ACCESS_CONTROL,
  UPDATE_ACCESS_CONTROL_ERROR,
  UPDATE_ACCESS_CONTROL_SUCCESS,
  UPDATE_ACTION,
  UPDATE_ACTION_ERROR,
  UPDATE_ACTION_SUCCESS,
  UPDATE_AGENT,
  UPDATE_AGENT_ERROR,
  UPDATE_AGENT_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CONNECTION,
  UPDATE_CONNECTION_ERROR,
  UPDATE_CONNECTION_SUCCESS,
  UPDATE_KEYWORD,
  UPDATE_KEYWORD_ERROR,
  UPDATE_KEYWORD_SUCCESS,
  UPDATE_NEW_RESPONSE,
  UPDATE_SAYING,
  UPDATE_SAYING_ERROR,
  UPDATE_SAYING_SUCCESS,
  UPDATE_SETTINGS_TOUCHED,
  UPDATE_SETTING,
  UPDATE_SETTING_ERROR,
  UPDATE_SETTING_SUCCESS,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_ERROR,
  UPDATE_SETTINGS_SUCCESS,
  LOAD_CURRENT_USER,
  LOAD_CURRENT_USER_ERROR,
  LOAD_CURRENT_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REFRESH_KEYWORD_EXAMPLE_UPDATE,
  ADD_NEW_ACTION_RESPONSE_QUICK_RESPONSE,
  DELETE_NEW_ACTION_RESPONSE_QUICK_RESPONSE
} from './constants';
const happyEmojies = [
  '😀',
  '😁',
  '😃',
  '😄',
  '😉',
  '😎',
  '🙂',
  '🤩',
  '😛',
  '😜',
  '🙃',
  '😬',
  '🤓',
  '😺',
  '😸',
  '💪',
  '🤙',
  '👌',
  '👍',
  '🤚',
  '👏',
  '🙌',
  '🎖',
  '🏆',
  '🏅',
  '🥇',
  '🎉',
  '🎊',
];
const errorEmojies = [
  '😣',
  '😥',
  '😮',
  '😯',
  '😫',
  '😓',
  '😕',
  '😖',
  '😦',
  '😧',
  '😨',
  '😩',
  '🤯',
  '😱',
  '😵',
  '🤕',
  '💀',
  '🙀',
  '😿',
  '🚫',
  '❌',
  '💣',
  '🚑',
  '🚒',
  '🚨',
];

const agentColors = [material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100'], material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100'], material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100'], material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100'], material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100'], material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100'], material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100'], material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100'], material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100'], '#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100'], material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100'], material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100'], material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100'], material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100'], material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100'], material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100'], material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100'], material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100'], '#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF',];
const keywordColors = ['#FFB5E8', '#FF9CEE', '#FFCCF9', '#FCC2FF', '#F6A6FF', '#B28DFF', '#C5A3FF', '#D5AAFF', '#ECD4FF', '#FBE4FF', '#DCD3FF', '#A79AFF', '#B5B9FF', '#97A2FF', '#AFCBFF', '#AFF8DB', '#C4FAF8', '#85E3FF', '#ACE7FF', '#6EB5FF', '#BFFCC6', '#DBFFD6', '#F3FFE3', '#E7FFAC', '#FFFFD1', '#FFC9DE', '#FFABAB', '#FFBEBC', '#FFCBC1', '#FFF5BA'];

// The initial state of the App
const initialState = Immutable({
  currentUser: undefined,
  loadingCurrentUser: false,
  locale: DEFAULT_LOCALE,
  sessionLoaded: false,
  sessionId: '',
  conversationBarOpen: false,
  showChatButton: false,
  waitingResponse: false,
  notifications: [],
  messages: [],
  category: {
    categoryName: '',
    enabled: true,
    actionThreshold: 50,
    extraTrainingData: false,
    parameters: {},
  },
  categories: [],
  prebuiltCategories: {},
  filteredCategories: [],
  filteredActions: [],
  channels: false,
  connections: false,
  agents: false,
  currentAgent: {
    gravatar: '',
    uiColor: '',
    agentName: '',
    description: '',
    language: 'en',
    timezone: 'UTC',
    useWebhook: false,
    usePostFormat: false,
    extraTrainingData: false,
    enableModelsPerCategory: false,
    multiCategory: false,
    fallbackAction: '',
    categoryClassifierThreshold: 50,
    parameters: {},
  },
  agentExport: null,
  agent: {
    gravatar: Math.floor(Math.random() * 16) + 1,
    uiColor: agentColors[Math.floor(Math.random() * (agentColors.length - 1))],
    agentName: '',
    description: '',
    language: 'en',
    timezone: 'UTC',
    useWebhook: false,
    usePostFormat: false,
    extraTrainingData: false,
    enableModelsPerCategory: false,
    multiCategory: false,
    fallbackAction: '',
    categoryClassifierThreshold: 50,
    parameters: {},
  },
  agentWebhook: {
    agent: '',
    webhookKey: '',
    webhookUrl: '',
    webhookVerb: 'GET',
    webhookPayloadType: 'None',
    webhookPayload: '',
    postScript: '',
    webhookHeaders: [],
    webhookUser: '',
    webhookPassword: '',
  },
  agentPostFormat: {
    agent: '',
    postFormatPayload:
      '{\n\t"textResponse" : "{{ textResponse }}",\n\t"docId" : "{{ docId }}"\n}',
  },
  agentSettings: {
    rasaURL: '',
    ducklingURL: '',
    ducklingDimension: '[]',
    spacyPretrainedEntities: '[]',
    categoryClassifierPipeline: '[]',
    sayingClassifierPipeline: '[]',
    keywordClassifierPipeline: '[]',
    generateSlotsQuickResponses: false,
    generateSlotsQuickResponsesMax: 1,
    generateActionsQuickResponses: false,
    generateActionsQuickResponsesMax: 1,
  },
  keyword: {
    type: 'learned',
    regex: '',
    agent: '',
    uiColor: keywordColors[Math.floor(Math.random() * (keywordColors.length - 1))],
    keywordName: '',
    examples: [],
    modifiers: [],
  },
  keywordExamplesUpdate: [],
  connection: {
    channel: '',
    agent: '',
    enabled: true,
    details: {},
  },
  keywords: [],
  totalKeywords: 0,
  actionsPage: [],
  totalActionsPage: 0,
  selectedCategory: '',
  sayings: [],
  totalSayings: 0,
  agentOldPayloadJSON:
    '{\n\t"text": "{{text}}",\n\t"action": {{{JSONstringify action}}},\n\t"slots": {{{JSONstringify slots}}}\n}',
  agentOldPayloadXML:
    '<?xml version="1.0" encoding="UTF-8"?>\n<data>\n\t<text>{{text}}</text>\n\t<action>{{{toXML action}}}</action>\n\t<slots>{{{toXML slots}}}</slots>\n</data>',
  missingAPI: false,
  sayingForAction: {
    agent: '',
    category: '',
    userSays: '',
    keywords: [],
    actions: [],
  },
  action: {
    agent: '',
    actionName: '',
    useWebhook: false,
    usePostFormat: false,
    slots: [],
    responses: [],
    responsesQuickResponses: []
  },
  actionWebhook: {
    webhookKey: '',
    webhookUrl: '',
    webhookVerb: 'GET',
    webhookPayloadType: 'None',
    webhookPayload: '',
    postScript: '',
    webhookHeaders: [],
    webhookUser: '',
    webhookPassword: '',
  },
  actionPostFormat: {
    postFormatPayload:
      '{\n\t"textResponse" : "{{ textResponse }}",\n\t"docId" : "{{ docId }}"\n}',
  },
  actionOldPayloadJSON:
    '{\n\t"text": "{{text}}",\n\t"action": {{{JSONstringify action}}},\n\t"slots": {{{JSONstringify slots}}}\n}',
  actionOldPayloadXML:
    '<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<data>\n\t<text>{{text}}</text>\n\t<action>{{{toXML action}}}</action>\n\t<slots>{{{toXML slots}}}</slots>\n</data>',
  actions: [],
  newSayingActions: [],
  agentJustEdited: false,
  agentTouched: false,
  actionTouched: false,
  keywordTouched: false,
  categoryTouched: false,
  newSlot: {
    slotName: 'Slot',
    uiColor: '#4e4e4e',
    keyword: '',
    keywordId: '0',
    isList: false,
    isRequired: false,
    quickResponses: [],
    textPrompts: [],
    freeText: false,
  },
  newModifier: {
    modifierName: 'Modifier',
    action: 'SET',
    valueSource: 'keyword',
    staticValue: '',
    sayings: [],
  },
  totalActions: 0,
  currentAction: {
    agent: '',
    category: '',
    actionName: '',
    useWebhook: false,
    usePostFormat: false,
    slots: [],
    responses: [],
  },
  settings: {
    rasaURL: '',
    uiLanguage: '',
    ducklingURL: '',
    defaultTimezone: '',
    defaultAgentLanguage: '',
    defaultUISessionId: '',
    timezones: [],
    uiLanguages: [],
    agentLanguages: [],
    ducklingDimension: [],
    spacyPretrainedEntities: [],
    categoryClassifierPipeline: [],
    sayingClassifierPipeline: [],
    keywordClassifierPipeline: [],
    defaultAgentFallbackResponses: [],
  },
  settingsTouched: false,
  loading: false,
  loadingImportCategory: false,
  loadingKeywordExamplesUpdate: false,
  error: false,
  success: false,
  successKeyword: false,
  successCategory: false,
  successAction: false,
  successAgent: false,
  successKeywordExamplesUpdate: false,
  CSO: {},
  newActionResponse: 'hello',
  documents: [],
  totalDocuments: null,
  documentsAnalytics: [],
  totalDocumentsAnalytics: null,
  documentsAnalyticsRequestCount: null,
  documentsAnalyticsSessionsCount: null,
  documentsAnalyticsFallbacksCount: null,
  documentsAnalyticsTopActions: [],
  documentsAnalyticsRequestsOverTime: [],
  logs: [],
  totalLogs: null,
  sessions: [],
  totalSessions: null,
  serverStatus: '',
  starredSayings: [],
  starredSaying: null,
  users: [],
  totalUsers: null,
  accessPolicyGroups: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    /* Global */
    case LOAD_SERVER_INFO:
      return state.set('loading', true).set('error', false);
    case LOAD_SERVER_INFO_ERROR:
      return state
        .set('serverStatus', initialState.serverStatus)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_SERVER_INFO_SUCCESS:
      return state
        .set('serverStatus', action.server.status)
        .set('loading', false)
        .set('error', false);
    case REFRESH_SERVER_INFO:
      return state.set('serverStatus', action.server.status);
    case LOAD_SESSION:
      return state
        .set('sessionId', '')
        .set('messages', [])
        .set('sessionLoaded', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_SESSION_SUCCESS:
      return state
        .set('sessionId', action.sessionId)
        .set('sessionLoaded', true)
        .set('loading', false)
        .set('error', false);
    case LOAD_SESSION_ERROR:
      return state
        .set('sessionId', '')
        .set('loading', false)
        .set('error', action.error);
    case DELETE_SESSION:
      return state.set('loading', true).set('error', false);
    case DELETE_SESSION_SUCCESS:
      return state.set('loading', false).set('error', false);
    case DELETE_SESSION_ERROR:
      return state.set('loading', false).set('error', action.error);
    case CHECK_API:
      return state;
    case MISSING_API:
      return state.set('missingAPI', true);
    case RESET_MISSING_API:
      return state.set('missingAPI', false);
    case RESET_STATUS_FLAGS:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', false);
    case TOGGLE_CONVERSATION_BAR:
      return state.set('conversationBarOpen', action.value);
    case TOGGLE_CHAT_BUTTON:
      return state.set('showChatButton', action.value);
    case CLOSE_NOTIFICATION:
      return state.update('notifications', notifications =>
        notifications.filter((item, index) => index !== action.index),
      );
    case SEND_MESSAGE:
      return state
        .update('messages', messages => messages.concat(action.message))
        .set('waitingResponse', true);
    case RESPOND_MESSAGE:
      return state
        .update('messages', messages => messages.concat(action.message))
        .set('waitingResponse', false);
    case STORE_SOURCE_DATA:
      return state.set(
        'CSO',
        action.CSO,
      );
    case RESET_SESSION_SUCCESS:
      return state
        .set('messages', [])
        .set('notifications', []);
    case SHOW_WARNING:
      return state.update('notifications', notifications =>
        notifications.concat({
          template: action.message,
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );

    /* Connections */
    case LOAD_CONNECTIONS:
      return state
        .set('connections', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_CONNECTIONS_ERROR:
      return state
        .set('connections', false)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_CONNECTIONS_SUCCESS:
      return state
        .set('connections', action.connections)
        .set('loading', false)
        .set('error', false);
    case LOAD_CHANNELS:
      return state
        .set('channels', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_CHANNELS_ERROR:
      return state
        .set('channels', false)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_CHANNELS_SUCCESS:
      return state
        .set('channels', action.channels)
        .set('loading', false)
        .set('error', false);

    /* Agents */
    case LOAD_AGENTS:
      return state
        .set('agents', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_AGENTS_ERROR:
      return state
        .set('agents', false)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_AGENTS_SUCCESS:
      return state
        .set('agents', action.agents)
        .set('loading', false)
        .set('error', false);
    case EXPORT_AGENT:
      return state
        .set('agentExport', null)
        .set('loading', true)
        .set('error', false);
    case EXPORT_AGENT_ERROR:
      return state
        .set('agentExport', null)
        .set('loading', false)
        .set('error', action.error);
    case EXPORT_AGENT_SUCCESS:
      return state
        .set('agentExport', action.agent)
        .set('loading', false)
        .set('error', false);
    case IMPORT_AGENT:
      return state.set('loading', true).set('error', false);
    case IMPORT_AGENT_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case IMPORT_AGENT_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    case DELETE_AGENT:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case DELETE_AGENT_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case DELETE_AGENT_SUCCESS:
      return state
        .set('agent', initialState.agent)
        .set('currentAgent', initialState.currentAgent)
        .set('agentWebhook', initialState.agentWebhook)
        .set('agentPostFormat', initialState.agentPostFormat)
        .set('agentSettings', initialState.agentSettings)
        .set('loading', false)
        .set('success', true)
        .set('error', false);

    /* Agent */
    case RESET_SUCCESS_AGENT:
      return state
        .set('successAgent', false);
    case RESET_AGENT_DATA:
      if (action.ref !== 'mainTab') {
        return state
          .set('agent', initialState.agent)
          .set('currentAgent', initialState.currentAgent)
          .set('agentWebhook', initialState.agentWebhook)
          .set('agentPostFormat', initialState.agentPostFormat)
          .set('agentSettings', initialState.agentSettings)
          .set('agentTouched', false)
          .set('successAgent', false)
          .set('actions', [])
          .set('messages', [])
          .set('documents', [])
          .set('sessionId', '')
          .set('sessionLoaded', false)
          .set('conversationBarOpen', false)
          .set('newSayingActions', [])
          .set('sayings', [])
          .setIn(['agent', 'gravatar'], Math.floor(Math.random() * 16) + 1)
          .setIn(
            ['agent', 'uiColor'],
            agentColors[Math.floor(Math.random() * (agentColors.length - 1))],
          );
      }
      else {
        return state;
      }
    case LOAD_AGENT:
      return state.set('loading', true).set('error', false);
    case LOAD_AGENT_ERROR:
      return state
        .set('agent', initialState.agent)
        .set('currentAgent', initialState.currentAgent)
        .set('loading', false)
        .set('error', action.error)
        .set('agentTouched', false);
    case LOAD_AGENT_SUCCESS:
      const isATrainingUpdate =
        state.agent.agentName === action.payload.agent.agentName &&
        state.agent.status !== action.payload.agent.status;
      if (isATrainingUpdate) {
        if (action.payload.agent.status === 'Ready') {
          state = state.update('notifications', notifications =>
            notifications.concat({
              template: 'agentFinishedTrainingTemplate',
              agentName: action.payload.agent.agentName,
              emoji:
                happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
              type: 'success',
              datetime: new Date(),
            }),
          );
        }
        if (action.payload.agent.status === 'Error') {
          state = state.update('notifications', notifications =>
            notifications.concat({
              template: 'agentTrainingErrorTemplate',
              agentName: action.payload.agent.agentName,
              emoji:
                errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
              type: 'error',
            }),
          );
        }
        if (action.payload.agent.status === 'Out of Date') {
          state = state.update('notifications', notifications =>
            notifications.concat({
              template: 'agentIsOutOfDateTemplate',
              agentName: action.payload.agent.agentName,
              type: 'success',
              datetime: new Date(),
            }),
          );
        }
      }
      let agentWebhook, agentPostFormat;
      if (!action.payload.agent.useWebhook) {
        agentWebhook = initialState.agentWebhook;
        agentWebhook = agentWebhook.set(
          'agent',
          action.payload.agent.agentName,
        );
      }
      else {
        agentWebhook = action.payload.webhook;
      }
      if (!action.payload.agent.usePostFormat) {
        agentPostFormat = initialState.agentPostFormat;
        agentPostFormat = agentPostFormat.set(
          'agent',
          action.payload.agent.agentName,
        );
      }
      else {
        agentPostFormat = action.payload.postFormat;
      }
      return state
        .set('agent', action.payload.agent)
        .set('currentAgent', action.payload.agent)
        .set('agentSettings', action.payload.agent.settings)
        .set('agentWebhook', agentWebhook)
        .set('agentPostFormat', agentPostFormat)
        .set('loading', false)
        .set('error', false)
        .set('agentTouched', false)
        .set(
          'successAgent',
          action.payload.socket ? state.successAgent : false,
        );
    case SET_AGENT_DEFAULTS:
      return state
        .setIn(['agent', 'language'], state.settings.defaultAgentLanguage)
        .setIn(['agent', 'timezone'], state.settings.defaultTimezone)
        .setIn(
          ['agent', 'fallbackAction'],
          state.settings.defaultaFallbackActionName,
        )
        .setIn(['agentSettings', 'rasaURL'], state.settings.rasaURL)
        .setIn(
          ['agentSettings', 'categoryClassifierPipeline'],
          state.settings.categoryClassifierPipeline,
        )
        .setIn(
          ['agentSettings', 'sayingClassifierPipeline'],
          state.settings.sayingClassifierPipeline,
        )
        .setIn(
          ['agentSettings', 'keywordClassifierPipeline'],
          state.settings.keywordClassifierPipeline,
        )
        .setIn(
          ['agentSettings', 'spacyPretrainedEntities'],
          state.settings.spacyPretrainedEntities,
        )
        .setIn(['agentSettings', 'ducklingURL'], state.settings.ducklingURL)
        .setIn(
          ['agentSettings', 'ducklingDimension'],
          state.settings.ducklingDimension,
        )
    case CHANGE_AGENT_NAME:
      return state
        .setIn(['agent', action.payload.field], action.payload.value)
        .setIn(['agentWebhook', 'agent'], action.payload.value)
        .setIn(['agentPostFormat', 'agent'], action.payload.value)
        .set('agentTouched', true);
    case CHANGE_AGENT_DATA:
      return state
        .setIn(['agent', action.payload.field], action.payload.value)
        .set('agentTouched', true);
    case CHANGE_WEBHOOK_DATA:
      return state
        .setIn(['agentWebhook', action.payload.field], action.payload.value)
        .set('agentTouched', true);
    case CHANGE_WEBHOOK_PAYLOAD_TYPE:
      if (action.payload.value === 'None') {
        if (state.agentWebhook.webhookPayloadType === 'JSON') {
          state = state.set(
            'agentOldPayloadJSON',
            state.agentWebhook.webhookPayload,
          );
        }
        if (state.agentWebhook.webhookPayloadType === 'XML') {
          state = state.set(
            'agentOldPayloadXML',
            state.agentWebhook.webhookPayload,
          );
        }
        return state
          .setIn(['agentWebhook', 'webhookPayload'], '')
          .setIn(['agentWebhook', action.payload.field], action.payload.value)
          .set('agentTouched', true);
      }

      if (
        action.payload.value === 'JSON' &&
        state.agentWebhook.webhookPayloadType !== 'JSON'
      ) {
        if (state.agentWebhook.webhookPayloadType === 'XML') {
          state = state.set(
            'agentOldPayloadXML',
            state.agentWebhook.webhookPayload,
          );
        }
        state = state.setIn(
          ['agentWebhook', 'webhookPayload'],
          state.agentOldPayloadJSON,
        );
      }
      if (
        action.payload.value === 'XML' &&
        state.agentWebhook.webhookPayloadType !== 'XML'
      ) {
        if (state.agentWebhook.webhookPayloadType === 'JSON') {
          state = state.set(
            'agentOldPayloadJSON',
            state.agentWebhook.webhookPayload,
          );
        }
        state = state.setIn(
          ['agentWebhook', 'webhookPayload'],
          state.agentOldPayloadXML,
        );
      }
      return state
        .setIn(['agentWebhook', action.payload.field], action.payload.value)
        .set('agentTouched', true);

    case CHANGE_POST_FORMAT_DATA:
      return state
        .setIn(['agentPostFormat', action.payload.field], action.payload.value)
        .set('agentTouched', true);
    case CHANGE_AGENT_SETTINGS_DATA:
      return state
        .setIn(['agentSettings', action.payload.field], action.payload.value)
        .set('agentTouched', true);
    case ADD_AGENT_FALLBACK:
      return state
        .updateIn(['agent', 'fallbackResponses'], fallbackResponses =>
          fallbackResponses.concat(action.newFallback),
        )
        .set('agentTouched', true);
    case DELETE_AGENT_FALLBACK:
      return state
        .updateIn(['agent', 'fallbackResponses'], fallbackResponses =>
          fallbackResponses.filter(
            (item, index) => index !== action.fallbackIndex,
          ),
        )
        .set('agentTouched', true);
    case ADD_AGENT:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case ADD_AGENT_ERROR:
      if (action.error.indexOf('is already using')) {
        state = state.update('notifications', notifications =>
          notifications.concat({
            template: 'errorMessageTemplate',
            error: action.error,
            emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
            type: 'error',
          }),
        );
      }
      else {
        state = state.update('notifications', notifications =>
          notifications.concat({
            template: 'negativeNotificationTemplate',
            instanceType: 'agent',
            action: 'creating',
            emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
            type: 'error',
          }),
        );
      }
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case ADD_AGENT_SUCCESS:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'positiveNotificationTemplate',
          instanceType: 'Agent',
          action: 'created',
          instanceName: action.agent.agentName,
          emoji: happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
          type: 'success',
          datetime: new Date(),
        }),
      );
      return state
        .set('agent', action.agent)
        .set('currentAgent', action.agent)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('agentTouched', false)
        .set('successAgent', true);
    case UPDATE_AGENT:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_AGENT_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'agent',
          action: 'updating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case UPDATE_AGENT_SUCCESS:
      return state
        .set('agent', action.agent)
        .set('currentAgent', action.agent)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('agentTouched', false)
        .set('successAgent', true);
    case TRAIN_AGENT:
      return state.set('error', false);
    case TRAIN_AGENT_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'errorMessageTemplate',
          error: action.error,
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state.set('error', action.error);
    case ADD_HEADER_AGENT_WEBHOOK:
      return state.updateIn(
        ['agentWebhook', 'webhookHeaders'],
        webhookHeaders => webhookHeaders.concat(action.payload),
      );
    case DELETE_HEADER_AGENT_WEBHOOK:
      return state.updateIn(
        ['agentWebhook', 'webhookHeaders'],
        webhookHeaders =>
          webhookHeaders.filter((item, index) => index !== action.headerIndex),
      );
    case CHANGE_HEADER_KEY_AGENT_WEBHOOK:
      return state.updateIn(
        ['agentWebhook', 'webhookHeaders'],
        webhookHeaders =>
          webhookHeaders.map((header, index) => {
            if (index === action.headerIndex) {
              return header.set('key', action.value);
            }
            return header;
          }),
      );
    case CHANGE_HEADER_VALUE_AGENT_WEBHOOK:
      return state.updateIn(
        ['agentWebhook', 'webhookHeaders'],
        webhookHeaders =>
          webhookHeaders.map((header, index) => {
            if (index === action.headerIndex) {
              return header.set('value', action.value);
            }
            return header;
          }),
      );
    case ADD_AGENT_PARAMETER:
      return state
        .setIn(
          ['agent', 'parameters', action.payload.name],
          action.payload.value,
        )
        .set('agentTouched', true);
    case DELETE_AGENT_PARAMETER:
      return state
        .setIn(
          ['agent', 'parameters'],
          state.agent.parameters.without(action.parameterName),
        )
        .set('agentTouched', true);
    case CHANGE_AGENT_PARAMETER_NAME:
      let mutableAgentParameters = Immutable.asMutable(state.agent.parameters, {
        deep: true,
      });
      let jsonMutableAgentParameters = JSON.stringify(mutableAgentParameters);
      jsonMutableAgentParameters = jsonMutableAgentParameters.replace(
        `"${action.oldParameterName}":`,
        `"${action.newParameterName}":`,
      );
      mutableAgentParameters = JSON.parse(jsonMutableAgentParameters);
      return state
        .setIn(['agent', 'parameters'], mutableAgentParameters)
        .set('agentTouched', true);
    case CHANGE_AGENT_PARAMETER_VALUE:
      return state
        .setIn(['agent', 'parameters', action.parameterName], action.value)
        .set('agentTouched', true);
    case LOAD_AGENT_SESSIONS_SUCCESS:
      return state
        .set('sessions', action.sessions.sessions)
        .set('totalSessions', action.sessions.total)
        .set('loading', false)
        .set('error', false);
    case LOAD_AGENT_SESSIONS_ERROR:
      return state
        .set('sessions', [])
        .set('loading', false)
        .set('error', action.error);
    case LOAD_AGENT_DOCUMENTS_SUCCESS:
      if (action.documents.analytics) {
        return state
          .set('documentsAnalytics', action.documents.documents)
          .set('totalDocumentsAnalytics', action.documents.total)
          .set('loading', false)
          .set('error', false);
      }
      else {
        return state
          .set('documents', action.documents.documents)
          .set('totalDocuments', action.documents.total)
          .set('loading', false)
          .set('error', false);
      }
    case LOAD_AGENT_DOCUMENTS_ERROR:
      return state
        .set('documentsAnalytics', initialState.documents)
        .set('totalDocumentsAnalytics', initialState.totalDocuments)
        .set('documents', initialState.documents)
        .set('totalDocuments', initialState.totalDocuments)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_LOGS:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case LOAD_LOGS_SUCCESS:
      return state
        .set('logs', action.logs.logs)
        .set('totalLogs', action.logs.total)
        .set('loading', false)
        .set('error', false);
    case LOAD_LOGS_ERROR:
      return state
        .set('logs', initialState.logs)
        .set('totalLogs', initialState.totalLogs)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_AGENT_STATS_SUCCESS:
      if (action.stats.statsName === "documentsAnalyticsRequestCount") {
        return state
          .set('documentsAnalyticsRequestCount', action.stats.stats.hits.total.value)
          .set('loading', false)
          .set('error', false);
      } else if (action.stats.statsName === "documentsAnalyticsSessionsCount") {
        return state
          .set('documentsAnalyticsSessionsCount', action.stats.stats.aggregations.unique_sessions.value)
          .set('loading', false)
          .set('error', false);
      } else if (action.stats.statsName === "filterdocumentsAnalyticsFallbacksCount") {
        return state
          .set('documentsAnalyticsFallbacksCount', action.stats.stats.hits.total.value)
          .set('loading', false)
          .set('error', false);
      } else if (action.stats.statsName === "filterdocumentsAnalyticsTopActions") {
        return state
          .set('documentsAnalyticsTopActions', action.stats.stats.aggregations.actions_count.buckets)
          .set('loading', false)
          .set('error', false);
      } else if (action.stats.statsName === "filterdocumentsAnalyticsRequestsOverTime") {
        return state
          .set('documentsAnalyticsRequestsOverTime', action.stats.stats.aggregations.start_time.buckets)
          .set('loading', false)
          .set('error', false);
      }
    case LOAD_AGENT_STATS_ERROR:
      return state
        .set('documentsAnalytics', initialState.documents)
        .set('totalDocumentsAnalytics', initialState.totalDocuments)
        .set('documents', initialState.documents)
        .set('totalDocuments', initialState.totalDocuments)
        .set('loading', false)
        .set('error', action.error);
    /* Sayings */
    case RESET_SAYINGS:
      return state
        .set('sayings', initialState.sayings)
        .set('totalSayings', initialState.totalSayings);
    case LOAD_SAYINGS:
      return state.set('loading', true).set('error', false);
    case LOAD_SAYINGS_ERROR:
      return state
        .set('sayings', [])
        .set('totalSayings', 0)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_SAYINGS_SUCCESS:
      return state
        .set('sayings', action.sayings.sayings)
        .set('totalSayings', action.sayings.total)
        .set('loading', false)
        .set('error', false);
    case ADD_SAYING:
      return state.set('loading', true).set('error', false);
    case ADD_SAYING_ERROR:
      return state.set('loading', false).set('error', action.error);
    case DELETE_SAYING:
      return state.set('loading', true).set('error', false);
    case DELETE_SAYING_ERROR:
      return state.set('loading', false).set('error', action.error);
    case TAG_KEYWORD:
      return state.set('loading', true).set('error', false);
    case UNTAG_KEYWORD:
      return state.set('loading', true).set('error', false);
    case ADD_ACTION_SAYING:
      return state.set('loading', true).set('error', false);
    case DELETE_ACTION_SAYING:
      return state.set('loading', true).set('error', false);
    case ADD_ACTION_NEW_SAYING:
      return state.update('newSayingActions', newSayingActions =>
        newSayingActions.concat(action.actionName),
      );
    case DELETE_ACTION_NEW_SAYING:
      return state.update('newSayingActions', newSayingActions =>
        newSayingActions.filter(item => item !== action.actionName),
      );
    case UPDATE_SAYING:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_SAYING_SUCCESS:
      return state.update('sayings', sayings =>
        sayings.map(tempSaying => {
          if (tempSaying.id === action.saying.id) {
            return action.saying;
          }
          return tempSaying;
        }),
      )
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    case UPDATE_SAYING_ERROR:
      return state.set('loading', false).set('success', false).set('error', action.error);
    case SEND_SAYING_TO_ACTION:
      return state.set('sayingForAction', action.saying);
    case CLEAR_SAYING_TO_ACTION:
      return state.set('sayingForAction', initialState.sayingForAction);
    case LOAD_CATEGORIES:
      return state
        .set('categories', [])
        .set('loading', true)
        .set('error', false);
    case LOAD_CATEGORIES_ERROR:
      return state
        .set('categories', [])
        .set('loading', false)
        .set('error', action.error);
    case LOAD_CATEGORIES_SUCCESS:
      return state
        .set('categories', action.categories.categories)
        .set('loading', false)
        .set('error', false);
    case LOAD_PREBUILT_CATEGORIES:
      return state
        .set('prebuiltCategories', {})
        .set('loading', true)
        .set('loadingImportCategory', false)
        .set('error', false);
    case LOAD_PREBUILT_CATEGORIES_ERROR:
      return state
        .set('prebuiltCategories', {})
        .set('loading', false)
        .set('error', action.error);
    case LOAD_PREBUILT_CATEGORIES_SUCCESS:
      return state
        .set('prebuiltCategories', action.prebuiltCategories)
        .set('loading', false)
        .set('error', false);
    case IMPORT_CATEGORY:
      return state.set('loadingImportCategory', true).set('error', false);
    case IMPORT_CATEGORY_ERROR:
      return state
        .set('loadingImportCategory', false)
        .set('error', action.error);
    case IMPORT_CATEGORY_SUCCESS:
      return state.set('loadingImportCategory', false).set('error', false);
    case LOAD_FILTERED_CATEGORIES:
      return state
        .set('filteredCategories', [])
        .set('loading', true)
        .set('error', false);
    case LOAD_FILTERED_CATEGORIES_ERROR:
      return state
        .set('filteredCategories', [])
        .set('loading', false)
        .set('error', action.error);
    case LOAD_FILTERED_CATEGORIES_SUCCESS:
      return state
        .set('filteredCategories', action.categories.categories)
        .set('loading', false)
        .set('error', false);
    case LOAD_FILTERED_ACTIONS:
      return state
        .set('filteredActions', [])
        .set('loading', true)
        .set('error', false);
    case LOAD_FILTERED_ACTIONS_ERROR:
      return state
        .set('filteredActions', [])
        .set('loading', false)
        .set('error', action.error);
    case LOAD_FILTERED_ACTIONS_SUCCESS:
      return state
        .set('filteredActions', action.actions.actions)
        .set('loading', false)
        .set('error', false);
    case SELECT_CATEGORY:
      return state.set('selectedCategory', action.categoryName);

    /* Keywords */
    case LOAD_KEYWORDS:
      return state.set('loading', true).set('error', false);
    case LOAD_KEYWORDS_ERROR:
      return state
        .set('keywords', [])
        .set('totalKeywords', 0)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_KEYWORDS_SUCCESS:
      return state
        .set('keywords', action.keywords.keywords)
        .set('totalKeywords', action.keywords.total)
        .set('loading', false)
        .set('error', false);

    /* Settings */
    case LOAD_SETTINGS:
      return state.set('loading', true).set('error', false);
    case LOAD_SETTINGS_ERROR:
      return state
        .set('settings', initialState.settings)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_SETTINGS_SUCCESS:
      return state
        .set('settings', action.settings)
        .set('loading', false)
        .set('error', false)
        .set('success', false);
    case UPDATE_SETTINGS:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_SETTINGS_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error)
        .set('settingsTouched', false);
    case UPDATE_SETTINGS_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('settingsTouched', false);
    case UPDATE_SETTINGS_TOUCHED:
      return state
        .set('settingsTouched', action.touched);
    case UPDATE_SETTING:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_SETTING_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case UPDATE_SETTING_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .setIn(['settings', action.payload.name], action.payload.value);
    case CHANGE_SETTINGS_DATA:
      return state
        .setIn(['settings', action.payload.field], action.payload.value)
        .set('settingsTouched', true);
    case ADD_FALLBACK:
      return state.updateIn(
        ['settings', 'defaultAgentFallbackResponses'],
        defaultAgentFallbackResponses =>
          defaultAgentFallbackResponses.concat(action.newFallback),
      );
    case DELETE_FALLBACK:
      return state.updateIn(
        ['settings', 'defaultAgentFallbackResponses'],
        defaultAgentFallbackResponses =>
          defaultAgentFallbackResponses.filter(
            (item, index) => index !== action.fallbackIndex,
          ),
      );

    /* Actions */
    case LOAD_ACTIONS_PAGE:
      return state.set('loading', true).set('error', false);
    case LOAD_ACTIONS_PAGE_ERROR:
      return state
        .set('actionsPage', [])
        .set('totalActionsPage', 0)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_ACTIONS_PAGE_SUCCESS:
      return state
        .set('actionsPage', action.actions.actions)
        .set('totalActionsPage', action.actions.total)
        .set('loading', false)
        .set('error', false);
    case RESET_ACTION_DATA:
      return state
        .set('action', initialState.action)
        .set('actionWebhook', initialState.actionWebhook)
        .set('actionPostFormat', initialState.actionPostFormat)
        .set('successAction', false);
    case RESET_ACTIONS:
      return state
        .set('actions', [])
        .set('totalActions', 0)
        .set('loading', false)
        .set('error', false);
    case LOAD_ACTIONS:
      return state
        .set('actions', [])
        .set('totalActions', 0)
        .set('loading', true)
        .set('error', false);
    case LOAD_ACTIONS_ERROR:
      return state
        .set('actions', [])
        .set('totalActions', 0)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_ACTIONS_SUCCESS:
      return state
        .set('actions', action.actions.actions)
        .set('totalActions', action.actions.total)
        .set('loading', false)
        .set('error', false);
    case LOAD_ACTION:
      return state.set('loading', true).set('error', false);
    case LOAD_ACTION_ERROR:
      return state
        .set('action', initialState.action)
        .set('currentAction', initialState.currentAction)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_ACTION_SUCCESS:
      let actionWebhook, actionPostFormat;
      if (
        !action.payload.action.useWebhook ||
        (action.payload.action.useWebhook && !action.payload.webhook)
      ) {
        actionWebhook = initialState.actionWebhook;
      }
      else {
        actionWebhook = action.payload.webhook;
      }
      if (
        !action.payload.action.usePostFormat ||
        (action.payload.action.usePostFormat && !action.payload.postFormat)
      ) {
        actionPostFormat = initialState.actionPostFormat;
      }
      else {
        actionPostFormat = action.payload.postFormat;
      }
      return state
        .set('action', action.payload.action)
        .setIn(
          ['action', 'actionName'],
          action.payload.isDuplicate
            ? `${action.payload.action.actionName} - 01`
            : action.payload.action.actionName,
        )
        .set('currentAction', action.payload.action)
        .set('actionSettings', action.payload.settings)
        .set('actionWebhook', actionWebhook)
        .set('actionPostFormat', actionPostFormat)
        .set('loading', false)
        .set('error', false)
        .set('actionTouched', action.payload.isDuplicate ? true : false)
        .set('successAction', false);
    case CHANGE_ACTION_NAME:
      return state
        .setIn(['action', action.payload.field], action.payload.value)
        .set('actionTouched', true);
    case CHANGE_ACTION_DATA:
      return state
        .setIn(['action', action.payload.field], action.payload.value)
        .set('actionTouched', true);
    case ADD_ACTION_RESPONSE:
      return state
        .updateIn(['action', 'responses'], responses =>
          responses.concat({ textResponse: action.newResponse, actions: [] }),
        )
        .set('newActionResponse', '')
        .set('actionTouched', true);
    case DELETE_ACTION_RESPONSE:
      return state
        .updateIn(['action', 'responses'], responses =>
          responses.filter((item, index) => index !== action.responseIndex),
        )
        .set('actionTouched', true);
    case CHAIN_ACTION_TO_RESPONSE:
      return state
        .updateIn(['action', 'responses'], responses =>
          responses.map((tempResponse, index) => {
            if (index === action.responseIndex) {
              return tempResponse.update('actions', actions =>
                actions.concat(action.actionName),
              );
            }
            return tempResponse;
          }),
        )
        .set('actionTouched', true);
    case UNCHAIN_ACTION_FROM_RESPONSE:
      return state
        .updateIn(['action', 'responses'], responses =>
          responses.map((tempResponse, index) => {
            if (index === action.responseIndex) {
              return tempResponse.update('actions', actions =>
                actions.filter((item, index) => index !== action.actionIndex),
              );
            }
            return tempResponse;
          }),
        )
        .set('actionTouched', true);
    case UPDATE_NEW_RESPONSE:
      return state.set('newActionResponse', action.response);
    case COPY_RESPONSE:
      return state.set('newActionResponse', action.response);
    case CHANGE_ACTION_WEBHOOK_DATA:
      return state
        .setIn(['actionWebhook', action.payload.field], action.payload.value)
        .set('actionTouched', true);
    case CHANGE_ACTION_WEBHOOK_PAYLOAD_TYPE:
      if (action.payload.value === 'None') {
        if (state.actionWebhook.webhookPayloadType === 'JSON') {
          state = state.set(
            'actionOldPayloadJSON',
            state.actionWebhook.webhookPayload,
          );
        }
        if (state.actionWebhook.webhookPayloadType === 'XML') {
          state = state.set(
            'actionOldPayloadXML',
            state.actionWebhook.webhookPayload,
          );
        }
        return state
          .setIn(['actionWebhook', 'webhookPayload'], '')
          .setIn(['actionWebhook', action.payload.field], action.payload.value)
          .set('actionTouched', true);
      }

      if (
        action.payload.value === 'JSON' &&
        state.actionWebhook.webhookPayloadType !== 'JSON'
      ) {
        if (state.actionWebhook.webhookPayloadType === 'XML') {
          state = state.set(
            'actionOldPayloadXML',
            state.actionWebhook.webhookPayload,
          );
        }
        state = state.setIn(
          ['actionWebhook', 'webhookPayload'],
          state.actionOldPayloadJSON,
        );
      }
      if (
        action.payload.value === 'XML' &&
        state.actionWebhook.webhookPayloadType !== 'XML'
      ) {
        if (state.actionWebhook.webhookPayloadType === 'JSON') {
          state = state.set(
            'actionOldPayloadJSON',
            state.actionWebhook.webhookPayload,
          );
        }
        state = state.setIn(
          ['actionWebhook', 'webhookPayload'],
          state.actionOldPayloadXML,
        );
      }
      return state
        .setIn(['actionWebhook', action.payload.field], action.payload.value)
        .set('actionTouched', true);
    case CHANGE_ACTION_POST_FORMAT_DATA:
      return state
        .setIn(['actionPostFormat', action.payload.field], action.payload.value)
        .set('actionTouched', true);
    case ADD_ACTION:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case ADD_ACTION_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'action',
          action: 'creating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case ADD_ACTION_SUCCESS:
      if (action.payload.addToNewSayingActions) {
        state = state.update('newSayingActions', newSayingActions =>
          newSayingActions.concat(action.payload.action.actionName),
        );
      }
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'positiveNotificationTemplate',
          instanceType: 'Action',
          action: 'created',
          instanceName: action.payload.action.actionName,
          emoji: happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
          type: 'success',
          datetime: new Date(),
        }),
      );
      return state
        .set('action', action.payload.action)
        .set('currentAction', action.payload.action)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('actionTouched', false)
        .set('successAction', true);
    case UPDATE_ACTION:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_ACTION_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'action',
          action: 'updating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case UPDATE_ACTION_SUCCESS:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'positiveNotificationTemplate',
          instanceType: 'Action',
          action: 'updated',
          instanceName: action.action.actionName,
          emoji: happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
          type: 'success',
          datetime: new Date(),
        }),
      );
      return state
        .set('action', action.action)
        .set('currentAction', action.action)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('actionTouched', false)
        .set('successAction', true)
        .update('newSayingActions', newSayingActions =>
          newSayingActions.map(item => {
            return item === action.oldActionName
              ? action.action.actionName
              : item;
          }),
        );
    case DELETE_ACTION:
      state = state.update('newSayingActions', newSayingActions =>
        newSayingActions.filter(item => item !== action.actionName),
      );
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case DELETE_ACTION_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'errorMessageTemplate',
          error: action.error,
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case DELETE_ACTION_SUCCESS:
      return state
        .set('action', initialState.action)
        .set('currentAction', initialState.currentAction)
        .set('actionWebhook', initialState.actionWebhook)
        .set('actionPostFormat', initialState.actionPostFormat)
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    case ADD_HEADER_ACTION_WEBHOOK:
      return state
        .updateIn(['actionWebhook', 'webhookHeaders'], webhookHeaders =>
          webhookHeaders.concat(action.payload),
        )
        .set('actionTouched', true);
    case DELETE_HEADER_ACTION_WEBHOOK:
      return state
        .updateIn(['actionWebhook', 'webhookHeaders'], webhookHeaders =>
          webhookHeaders.filter((item, index) => index !== action.headerIndex),
        )
        .set('actionTouched', true);
    case CHANGE_HEADER_KEY_ACTION_WEBHOOK:
      return state
        .updateIn(['actionWebhook', 'webhookHeaders'], webhookHeaders =>
          webhookHeaders.map((header, index) => {
            if (index === action.headerIndex) {
              return header.set('key', action.value);
            }
            return header;
          }),
        )
        .set('actionTouched', true);
    case CHANGE_HEADER_VALUE_ACTION_WEBHOOK:
      return state
        .updateIn(['actionWebhook', 'webhookHeaders'], webhookHeaders =>
          webhookHeaders.map((header, index) => {
            if (index === action.headerIndex) {
              return header.set('value', action.value);
            }
            return header;
          }),
        )
        .set('actionTouched', true);
    case ADD_NEW_SLOT:
      return state
        .updateIn(['action', 'slots'], slots => slots.concat(state.newSlot))
        .set('actionTouched', true);
    case CHANGE_SLOT_NAME:
      return state
        .updateIn(['action', 'slots'], slots =>
          slots.map((slot, index) => {
            if (index === action.payload.slotIndex) {
              const slotName = action.payload.slotName;
              return slot.set('slotName', slotName);
            }

            return slot;
          }),
        )
        .set('actionTouched', true);
    case CHANGE_SLOT_DATA:
      return state
        .updateIn(['action', 'slots'], slots =>
          slots.map((slot, index) => {
            if (index === action.payload.slotIndex) {
              return slot.set(action.payload.field, action.payload.value);
            }

            return slot;
          }),
        )
        .set('actionTouched', true);
    case ADD_SLOT_TEXT_PROMPT_SLOT:
      return state
        .updateIn(['action', 'slots'], slots =>
          slots.map((slot, index) => {
            if (index === action.payload.slotIndex) {
              return slot.update('textPrompts', textPrompts =>
                textPrompts.concat(action.payload.newTextPrompt),
              );
            }

            return slot;
          }),
        )
        .set('actionTouched', true);
    case DELETE_SLOT_TEXT_PROMPT_SLOT:
      return state
        .updateIn(['action', 'slots'], slots =>
          slots.map((slot, index) => {
            if (index === action.payload.slotIndex) {
              return slot.update('textPrompts', textPrompts =>
                textPrompts.filter(
                  (item, index) => index !== action.payload.textPromptIndex,
                ),
              );
            }

            return slot;
          }),
        )
        .set('actionTouched', true);
    case SORT_SLOTS:
      const tempSlots = Immutable.asMutable(state.action.slots, { deep: true });
      tempSlots.splice(
        action.newIndex,
        0,
        tempSlots.splice(action.oldIndex, 1)[0],
      );
      return state
        .setIn(['action', 'slots'], Immutable(tempSlots))
        .set('actionTouched', true);
    case DELETE_SLOT:
      const oldSlots = Immutable.asMutable(state.action.slots, { deep: true });
      oldSlots.splice(action.slotIndex, 1);
      return state
        .setIn(['action', 'slots'], Immutable(oldSlots))
        .set('actionTouched', true);
    case EDIT_ACTION_RESPONSE:
      return state
        .updateIn(['action', 'responses'], responses =>
          responses.map((response, index) => {
            if (index === action.responseIndex) {
              return response.set('textResponse', action.newResponse);
            }
            return response;
          }),
        )
        .set('actionTouched', true);
    case ADD_NEW_QUICK_RESPONSE:
      if (!state.action.slots[action.slotIndex].quickResponses) {
        state = state.setIn(['action', 'slots'], state.action.slots.map((slot, index) => {

          if (index === action.slotIndex) {
            if (!slot.quickResponses) {
              return slot.set('quickResponses', []);
            }
            return slot;
          }
          return slot;
        }));
      }
      return state.updateIn(
        ['action', 'slots'],
        slots => slots.map((slot, index) => {

          if (index === action.slotIndex) {
            return slot.update('quickResponses', quickResponses => quickResponses.concat(action.response));
          }
          return slot;
        }),
      )
        .set('actionTouched', true);
      ;
    case DELETE_QUICK_RESPONSE:
      return state.updateIn(
        ['action', 'slots'],
        slots => slots.map((slot, index) => {

          if (index === action.slotIndex) {
            return slot.set('quickResponses', slot.quickResponses.filter((quickResponse, index) => {
              return index !== action.quickResponseIndex;
            }));
          }
          return slot;
        }),
      )
        .set('actionTouched', true);
    case CHANGE_QUICK_RESPONSE:
      return state.updateIn(
        ['action', 'slots'],
        slots => slots.map((slot, index) => {

          if (index === action.slotIndex) {
            return slot.set('quickResponses', slot.quickResponses.map((quickResponse, index) => {
              if (index === action.quickResponseIndex) {
                return action.response;
              }
              return quickResponse;
            }));
          }
          return slot;
        }),
      )
        .set('actionTouched', true);
    case EDIT_SLOT_TEXT_PROMPT:
      return state
        .updateIn(['action', 'slots'], slots =>
          slots.map((slot, index) => {
            if (index === action.slotIndex) {
              return slot.update('textPrompts', textPrompts => textPrompts.map((textPrompt, textPromptIndex) => {

                if (action.textPromptIndex === textPromptIndex) {
                  return action.textPrompt;
                }
                return textPrompt;
              }));
            }

            return slot;
          }),
        )
        .set('actionTouched', true);

    case ADD_NEW_MODIFIER:
      return state.updateIn(['keyword', 'modifiers'], modifiers =>
        modifiers.concat(state.newModifier),
      );
    case CHANGE_MODIFIER_NAME:
      return state
        .updateIn(['keyword', 'modifiers'], modifiers =>
          modifiers.map((modifier, index) => {
            if (index === action.payload.modifierIndex) {
              const modifierName = action.payload.modifierName;
              return modifier.set('modifierName', modifierName);
            }

            return modifier;
          }),
        )
        .set('keywordTouched', true);
    case CHANGE_MODIFIER_DATA:
      return state
        .updateIn(['keyword', 'modifiers'], modifiers =>
          modifiers.map((modifier, index) => {
            if (index === action.payload.modifierIndex) {
              return modifier.set(action.payload.field, action.payload.value);
            }

            return modifier;
          }),
        )
        .set('keywordTouched', true);
    case ADD_MODIFIER_SAYING:
      return state.set('loading', true);
    case ADD_MODIFIER_SAYING_SUCCESS:
      return state
        .updateIn(['keyword', 'modifiers'], modifiers =>
          modifiers.map((modifier, index) => {
            if (index === action.modifierIndex) {
              const oldModifierSayings = Immutable.asMutable(modifier.sayings, {
                deep: true,
              });
              oldModifierSayings.unshift({
                userSays: action.newSaying,
                keywords: action.keywords,
              });
              return modifier.set('sayings', oldModifierSayings);
            }

            return modifier;
          }),
        )
        .set('keywordTouched', true)
        .set('loading', false);
    case DELETE_MODIFIER_SAYING:
      return state
        .updateIn(['keyword', 'modifiers'], modifiers =>
          modifiers.map((modifier, index) => {
            if (index === action.payload.modifierIndex) {
              return modifier.update('sayings', sayings =>
                sayings.filter(
                  (item, index) => index !== action.payload.sayingIndex,
                ),
              );
            }

            return modifier;
          }),
        )
        .set('keywordTouched', true);
    case SORT_MODIFIERS:
      const tempModifiers = Immutable.asMutable(state.keyword.modifiers, {
        deep: true,
      });
      tempModifiers.splice(
        action.newIndex,
        0,
        tempModifiers.splice(action.oldIndex, 1)[0],
      );
      return state.setIn(['keyword', 'modifiers'], Immutable(tempModifiers));
    case DELETE_MODIFIER:
      const oldModifiers = Immutable.asMutable(state.keyword.modifiers, {
        deep: true,
      });
      oldModifiers.splice(action.modifierIndex, 1);
      return state.setIn(['keyword', 'modifiers'], Immutable(oldModifiers));
    case TAG_MODIFIER_KEYWORD:
      const keywordToAdd = {
        value: action.value,
        keyword: action.keywordName,
        start: action.start,
        end: action.end,
        keywordId: action.keywordId,
      };
      return state
        .updateIn(['keyword', 'modifiers'], modifiers =>
          modifiers.map((modifier, index) => {
            if (index === action.modifierIndex) {
              return modifier.update('sayings', sayings =>
                sayings.map((saying, index) => {
                  if (index === action.sayingIndex) {
                    return saying.update('keywords', keywords =>
                      keywords.concat(keywordToAdd),
                    );
                  }
                  return saying;
                }),
              );
            }
            return modifier;
          }),
        )
        .set('keywordTouched', true);
    case UNTAG_MODIFIER_KEYWORD:
      return state
        .updateIn(['keyword', 'modifiers'], modifiers =>
          modifiers.map((modifier, modifierIndex) => {
            if (modifierIndex === action.modifierIndex) {
              return modifier.update('sayings', sayings =>
                sayings.map((saying, sayingIndex) => {
                  if (sayingIndex === action.sayingIndex) {
                    return saying.update('keywords', keywords =>
                      keywords.filter(keyword => {
                        return (
                          keyword.start !== action.start ||
                          keyword.end !== action.end
                        );
                      }),
                    );
                  }
                  return saying;
                }),
              );
            }
            return modifier;
          }),
        )
        .set('keywordTouched', true);

    case ADD_NEW_ACTION_RESPONSE_QUICK_RESPONSE:
      if (!state.action.responsesQuickResponses) {
        var tempAction = { ...state.action };
        tempAction.responsesQuickResponses = [];
        return state.set('action', tempAction)
          .updateIn(['action', 'responsesQuickResponses'], quickResponses => quickResponses.concat([action.response]))
          .set('actionTouched', true);
      }
      return state.updateIn(['action', 'responsesQuickResponses'], quickResponses => quickResponses.concat([action.response]))
        .set('actionTouched', true);
    case DELETE_NEW_ACTION_RESPONSE_QUICK_RESPONSE:
      return state.updateIn(
        ['action', 'responsesQuickResponses'],
        quickResponses => [
          ...quickResponses.slice(0, action.index),
          ...quickResponses.slice(action.index + 1)
        ])
        .set('actionTouched', true);

    /* Keyword */
    case CHANGE_KEYWORD_DATA:
      return state
        .setIn(['keyword', action.payload.field], action.payload.value)
        .set('keywordTouched', true);
    case CREATE_KEYWORD:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false)
        .set('loadingKeywordExamplesUpdate', true)
        .set('successKeywordExamplesUpdate', false);
    case CREATE_KEYWORD_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'errorMessageTemplate',
          error: action.error,
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case CREATE_KEYWORD_SUCCESS:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'positiveNotificationTemplate',
          instanceType: 'Keyword',
          action: 'created',
          instanceName: action.keyword.keywordName,
          emoji: happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
          type: 'success',
          datetime: new Date(),
        }),
      );
      return state
        .set('keyword', action.keyword)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('successKeyword', true)
        .set('keywordTouched', false)
        .set('loadingKeywordExamplesUpdate', false)
        .set('successKeywordExamplesUpdate', true);
    case RESET_KEYWORD_DATA:
      return state
        .set('keyword', initialState.keyword)
        .set('successKeyword', false)
        .setIn(
          ['keyword', 'uiColor'],
          keywordColors[Math.floor(Math.random() * (keywordColors.length - 1))],
        );
    case UPDATE_KEYWORD:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false)
        .set('loadingKeywordExamplesUpdate', true)
        .set('successKeywordExamplesUpdate', false);
    case UPDATE_KEYWORD_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'keyword',
          action: 'updating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('successKeyword', false)
        .set('error', action.error);
    case UPDATE_KEYWORD_SUCCESS:
      return state
        .set('keyword', action.keyword)
        .set('loading', false)
        .set('error', false)
        .set('successKeyword', true)
        .set('keywordTouched', false)
        .set('loadingKeywordExamplesUpdate', false)
        .set('successKeywordExamplesUpdate', true);
    case ADD_KEYWORD_EXAMPLE:
      return state
        .updateIn(['keyword', 'examples'], examples =>
          examples.concat(action.newExample),
        )
        .set('keywordTouched', true)
        .updateIn(
          ['keywordExamplesUpdate'], updates => {
            return updates.map((update) => {
              if (update.index >= state.keyword.examples.length) {
                return update.set('index', update.index + 1);
              }
              return update;
            }).concat([{
              'index': state.keyword.examples.length,
              'synonym': action.newExample.synonyms[0],
              'count': 1
            }])
          });
    case DELETE_KEYWORD_EXAMPLE:
      return state
        .updateIn(['keyword', 'examples'], examples =>
          examples.filter((item, index) => index !== action.exampleIndex),
        )
        .set('keywordTouched', true)
        .updateIn(
          ['keywordExamplesUpdate'], updates => {
            return updates.map((update) => {
              if (update.index === action.exampleIndex) {
                return update.set('index', - 1).set('count', update.count - 1);
              }
              return update;
            }).map((update) => {
              if (update.index > action.exampleIndex
                && update.index < state.keyword.examples.length) {
                return update.set('index', update.index - 1);
              }
              return update;
            }).map((update) => {
              if (update.index === -1) {
                return update.set('index', state.keyword.examples.length - 1);
              }
              return update;
            }).concat(state.keyword.examples[action.exampleIndex].synonyms.filter((synonym) => {
              var exists = state.keywordExamplesUpdate.find(function (update) {
                return update.index === action.exampleIndex && update.synonym === synonym;
              });
              return !exists;
            }).map((update) => {
              return {
                'index': state.keyword.examples.length - 1,
                'synonym': update,
                'count': -1
              }
            }))
          });
    case CHANGE_EXAMPLE_SYNONYMS:
      var synonym = state.keywordExamplesUpdate.find(function (update) {
        return update.index === action.exampleIndex && update.synonym === action.synonymChanged;
      });
      let countUpdate = action.action === 'add' ? 1 : -1;

      return state
        .updateIn(['keyword', 'examples'], examples =>
          examples.map((example, index) => {
            if (index === action.exampleIndex) {
              return example.set('synonyms', action.synonyms);
            }
            return example;
          })
        )
        .set('keywordTouched', true)
        .updateIn(
          ['keywordExamplesUpdate'], updates => {
            if (synonym) {
              return updates.map((update) => {
                if (update.index === action.exampleIndex && update.synonym === action.synonymChanged) {
                  if (update.count < 0 && countUpdate === 1) {
                    return update.set('count', 1);
                  } else {
                    return update.set('count', update.count + countUpdate);
                  }
                }
                return update;
              });
            } else {
              return updates.concat([{
                'index': action.exampleIndex,
                'synonym': action.synonymChanged,
                'count': countUpdate
              }])
            }
          });
    case REFRESH_KEYWORD_EXAMPLE_UPDATE:
      return state
        .set('keywordExamplesUpdate', initialState.keywordExamplesUpdate);
    case CHANGE_EXAMPLE_NAME:
      return state
        .updateIn(['keyword', 'examples'], examples =>
          examples.map((example, index) => {
            if (index === action.exampleIndex) {
              return example.set('value', action.name);
            }
            return example;
          }),
        )
        .set('keywordTouched', true);
    case LOAD_KEYWORD:
      return state
        .set('keyword', initialState.keyword)
        .set('loading', true)
        .set('error', false)
        .set('keywordTouched', false)
        .set('successKeyword', false);
    case LOAD_KEYWORD_ERROR:
      return state
        .set('keyword', initialState.keyword)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_KEYWORD_SUCCESS:
      return state
        .set('keyword', action.keyword)
        .set('loading', false)
        .set('error', false);
    case DELETE_KEYWORD:
      return state.set('loading', true).set('error', false);
    case DELETE_KEYWORD_SUCCESS:
      return state
        .set('keyword', initialState.keyword)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('keywordTouched', false);
    case DELETE_KEYWORD_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'errorMessageTemplate',
          error: action.error,
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state.set('loading', false).set('error', action.error);

    /* Category */
    case LOAD_CATEGORY:
      return state
        .set('category', initialState.category)
        .set('loading', true)
        .set('error', false)
        .set('successCategory', false)
        .set('categoryTouched', false);
    case LOAD_CATEGORY_ERROR:
      return state
        .set('category', initialState.category)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_CATEGORY_SUCCESS:
      return state
        .set('category', action.category)
        .set('loading', false)
        .set('error', false);
    case CHANGE_CATEGORY_DATA:
      return state
        .setIn(['category', action.payload.field], action.payload.value)
        .set('categoryTouched', true);
    case CREATE_CATEGORY:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case CREATE_CATEGORY_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'category',
          action: 'creating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case CREATE_CATEGORY_SUCCESS:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'positiveNotificationTemplate',
          instanceType: 'Category',
          action: 'created',
          instanceName: action.category.categoryName,
          emoji: happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
          type: 'success',
          datetime: new Date(),
        }),
      );
      return state
        .set('category', action.category)
        .set('selectedCategory', action.category.id)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('successCategory', true)
        .set('categoryTouched', false);
    case RESET_CATEGORY_DATA:
      return state
        .set('category', initialState.category)
        .set('successCategory', false);
    case UPDATE_CATEGORY:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_CATEGORY_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'category',
          action: 'updating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error)
        .set('successCategory', false);
    case UPDATE_CATEGORY_SUCCESS:
      return state
        .set('category', action.category)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('successCategory', true)
        .set('categoryTouched', false);
    case DELETE_CATEGORY:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case DELETE_CATEGORY_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'errorMessageTemplate',
          error: action.error,
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case DELETE_CATEGORY_SUCCESS:
      return state
        .set('category', initialState.category)
        .set('categories', initialState.categories)
        .set('filteredCategories', initialState.filteredCategories)
        .set('selectedCategory', initialState.selectedCategory)
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    case ADD_CATEGORY_PARAMETER:
      return state
        .setIn(
          ['category', 'parameters', action.payload.name],
          action.payload.value,
        )
        .set('categoryTouched', true);
    case DELETE_CATEGORY_PARAMETER:
      return state
        .setIn(
          ['category', 'parameters'],
          state.category.parameters.without(action.parameterName),
        )
        .set('categoryTouched', true);
    case CHANGE_CATEGORY_PARAMETER_NAME:
      let mutableCategoryParameters = Immutable.asMutable(
        state.category.parameters,
        { deep: true },
      );
      let jsonMutableCategoryParameters = JSON.stringify(
        mutableCategoryParameters,
      );
      jsonMutableCategoryParameters = jsonMutableCategoryParameters.replace(
        `"${action.oldParameterName}":`,
        `"${action.newParameterName}":`,
      );
      mutableCategoryParameters = JSON.parse(jsonMutableCategoryParameters);
      return state
        .setIn(['category', 'parameters'], mutableCategoryParameters)
        .set('categoryTouched', true);
    case CHANGE_CATEGORY_PARAMETER_VALUE:
      return state
        .setIn(['category', 'parameters', action.parameterName], action.value)
        .set('categoryTouched', true);

    /* Review */
    case COPY_SAYING_ERROR:
      return state
        .update('notifications', notifications =>
          notifications.concat({
            template: 'errorCopyingSayingTemplate',
            emoji:
              errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
            type: 'error',
          }),
        )
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case COPY_SAYING_SUCCESS:
      return state
        .update('notifications', notifications =>
          notifications.concat({
            template: 'positiveNotificationTemplate',
            instanceType: 'Saying',
            action: 'created',
            instanceName: action.saying.userSays,
            emoji:
              happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
            type: 'success',
            datetime: new Date(),
          }),
        )
        .set('loading', false)
        .set('success', false);

    /* Locale */
    case CHANGE_LOCALE:
      return state.set('locale', action.locale);

    /* Connection */
    case CHANGE_CONNECTION_DATA:
      const details = action.payload.field === 'channel' ? {} : Immutable.asMutable(state.connection.details, { deep: true });
      if (action.payload.value === 'chat-widget' || state.connection.channel === 'chat-widget') {
        const connectionAgent = action.payload.field === 'agent' ? action.payload.value : state.connection.agent;
        const agentData = state.agents.filter((agent) => {

          return parseInt(agent.id) === connectionAgent;
        })[0];
        details.title = agentData.agentName;
        details.subtitle = agentData.description;
      }
      if (action.payload.field === 'channel') {
        return state
          .setIn(['connection', action.payload.field], action.payload.value)
          .setIn(['connection', 'details'], details)
          .set('connectionTouched', true);
      }
      else {
        return state
          .setIn(['connection', action.payload.field], action.payload.value)
          .setIn(['connection', 'details'], details)
          .set('connectionTouched', true);
      }
    case CREATE_CONNECTION:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case CREATE_CONNECTION_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'connection',
          action: 'creating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case CREATE_CONNECTION_SUCCESS:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'positiveNotificationTemplate',
          instanceType: 'Connection',
          action: 'created',
          instanceName: action.connection.connectionName,
          emoji: happyEmojies[Math.floor(Math.random() * happyEmojies.length)],
          type: 'success',
          datetime: new Date(),
        }),
      );
      return state
        .set('connection', action.connection)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('successConnection', true)
        .set('connectionTouched', false);
    case RESET_CONNECTION_DATA:
      return state
        .set('connection', initialState.connection)
        .set('successConnection', false);
    case UPDATE_CONNECTION:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_CONNECTION_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          template: 'negativeNotificationTemplate',
          instanceType: 'connection',
          action: 'updating',
          emoji: errorEmojies[Math.floor(Math.random() * errorEmojies.length)],
          type: 'error',
        }),
      );
      return state
        .set('loading', false)
        .set('successConnection', false)
        .set('error', action.error);
    case UPDATE_CONNECTION_SUCCESS:
      return state
        .set('connection', action.connection)
        .set('loading', false)
        .set('error', false)
        .set('successConnection', true)
        .set('connectionTouched', false);
    case CHANGE_DETAIL_VALUE:
      return state
        .setIn(['connection', 'details', action.detail], action.value)
        .set('connectionTouched', true);
    case LOAD_CONNECTION:
      return state
        .set('connection', initialState.connection)
        .set('loading', true)
        .set('error', false)
        .set('connectionTouched', false)
        .set('successConnection', false);
    case LOAD_CONNECTION_ERROR:
      return state
        .set('connection', initialState.connection)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_CONNECTION_SUCCESS:
      return state
        .set('connection', action.connection)
        .set('loading', false)
        .set('error', false);
    case DELETE_CONNECTION:
      return state.set('loading', true).set('error', false);
    case DELETE_CONNECTION_SUCCESS:
      return state
        .set('connection', initialState.connection)
        .set('loading', false)
        .set('success', true)
        .set('error', false)
        .set('connectionTouched', false);
    case DELETE_CONNECTION_ERROR:
      state = state.update('notifications', notifications =>
        notifications.concat({
          message: `Error: ${action.error}. ${
            errorEmojies[Math.floor(Math.random() * errorEmojies.length)]
            }`,
          type: 'error',
        }),
      );
      return state.set('loading', false).set('error', action.error);
    case LOGIN_USER:
      return state.set('loading', true).set('error', false);
    case LOGIN_USER_SUCCESS:
      return state.set('loading', false).set('error', false);
    case LOGIN_USER_ERROR:
      return state.set('loading', false).set('error', action.error);

    /* Cheat sheet*/
    case LOAD_STARRED_SAYINGS:
      return state
        .set('starredSayings', initialState.starredSayings)
        .set('loading', true)
        .set('error', false);
    case LOAD_STARRED_SAYINGS_ERROR:
      return state
        .set('starredSayings', initialState.starredSayings)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_STARRED_SAYINGS_SUCCESS:
      return state
        .set('starredSayings', action.sayings)
        .set('loading', false)
        .set('error', false);
    case LOAD_STARRED_SAYING:
      return state
        .set('starredSaying', initialState.starredSaying)
        .set('loading', true)
        .set('error', false);
    case LOAD_STARRED_SAYING_ERROR:
      return state
        .set('starredSaying', initialState.starredSaying)
        .set('loading', false)
        .set('error', action.error);
    case LOAD_STARRED_SAYING_SUCCESS:
      return state
        .set('starredSaying', action.saying)
        .set('loading', false)
        .set('error', false);
    /* Users */
    case LOAD_USERS:
      return state
        .set('users', initialState.users)
        .set('totalUsers', initialState.totalUsers)
        .set('loading', true)
        .set('error', false);
    case LOAD_USERS_SUCCESS:
      return state
        .set('users', action.users.data)
        .set('totalUsers', action.users.totalCount)
        .set('loading', false)
        .set('error', false);
    case LOAD_USERS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case DELETE_USER:
      return state
        .set('loading', true)
        .set('error', false);
    case DELETE_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false);
    case DELETE_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case LOAD_CURRENT_USER:
      return state
        .set('loadingCurrentUser', false);
    case LOAD_CURRENT_USER_SUCCESS:
      return state
        .set('currentUser', action.user)
        .set('loadingCurrentUser', true);
    case LOAD_CURRENT_USER_ERROR:
      return state
        .set('currentUser', null)
        .set('loadingCurrentUser', true)
        .set('error', false);
    /* Access Policy Group */
    case LOAD_ACCESS_CONTROL:
      return state.set('loading', true).set('error', false);
    case LOAD_ACCESS_CONTROL_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case LOAD_ACCESS_CONTROL_SUCCESS:
      return state
        .set('accessPolicyGroups', action.accessPolicyGroups)
        .set('loading', false)
        .set('error', false);
    case UPDATE_ACCESS_CONTROL:
      return state
        .set('loading', true)
        .set('success', false)
        .set('error', false);
    case UPDATE_ACCESS_CONTROL_ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    case UPDATE_ACCESS_CONTROL_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('error', false);
    default:
      return state;
  }
}

export default appReducer;
