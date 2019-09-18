export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const ACTION_INTENT_SPLIT_SYMBOL = '+__+';
export const PROXY_ROUTE_PREFIX = '/api';

// ROUTES
export const ROUTE_ACTION = 'action';
export const ROUTE_AGENT = 'agent';
export const ROUTE_CONNECTION = 'connection';
export const ROUTE_CHANNEL = 'channel';
export const ROUTE_SESSION = 'session';
export const ROUTE_CONTEXT = 'context';
export const ROUTE_DOCUMENT = 'doc';
export const ROUTE_LOG = 'log';
export const ROUTE_CATEGORY = 'category';
export const ROUTE_POST_FORMAT = 'postFormat';
export const ROUTE_KEYWORD = 'keyword';
export const ROUTE_SAYING = 'saying';
export const ROUTE_SETTINGS = 'settings';
export const ROUTE_WEBHOOK = 'webhook';
export const ROUTE_TRAIN = 'train';
export const ROUTE_PARSE = 'parse';
export const ROUTE_IDENTIFY_KEYWORDS = 'identifyKeywords';
export const ROUTE_RECOGNIZE_UPDATED_KEYWORDS = 'recognizeUpdatedKeywords';
export const ROUTE_CONVERSE = 'converse';
export const ROUTE_EXPORT = 'export';
export const ROUTE_IMPORT = 'import';
export const ROUTE_BULK = 'bulk';
export const ROUTE_USER = 'user';
export const ROUTE_SEARCH = 'search';
export const ROUTE_CURRENT = 'current';
export const ROUTE_DELETE_BY_QUERY = '_delete_by_query?refresh';
export const ROUTE_ACCESS_CONTROL = 'ac';
export const ROUTE_GROUP = 'group';

export const AGENT_ACCESS_POLICIES = {
  [`agent:read`]: false,
  [`agent:write`]: false,
  [`agent:converse`]: false,
};
