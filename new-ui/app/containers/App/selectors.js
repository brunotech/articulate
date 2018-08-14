import { createSelector } from 'reselect';

const selectGlobalDomain = state => state.global;
const selectRouteDomain = state => state.route;

/* Global */
const makeSelectLocation = () => createSelector(
  selectRouteDomain,
  (routeState) => {
    return routeState.location;
  }
);

const makeSelectMissingAPI = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.missingAPI;
  }
);

/* Agents */
const makeSelectAgents = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
      return globalState.agents;
  }
);

/* Agent */
const makeSelectAgent = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
      return globalState.agent;
  }
);

const makeSelectAgentWebhook = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
      return globalState.agentWebhook;
  }
);

const makeSelectAgentPostFormat = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
      return globalState.agentPostFormat;
  }
);

const makeSelectSettings = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
      return globalState.agentSettings;
  }
);

/* Keyword */
const makeSelectKeyword = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.keyword;
  }
);

/* Keywords */
const makeSelectKeywords = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.keywords;
  }
);

const makeSelectTotalKeywords = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.totalKeywords;
  }
);

/* Sayings */
const makeSelectSayings = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.sayings;
  }
);

const makeSelectTotalSayings = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.totalSayings;
  }
);


/* Action */
const makeSelectAction = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.action;
  }
);

const makeSelectActionWebhook = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    return globalState.actionWebhook;
  }
);

const makeSelectActionPostFormat = () => createSelector(
  selectGlobalDomain,
  (globalState) => {
    globalState.actionPostFormat
  }
);


export {
  makeSelectLocation,
  makeSelectMissingAPI,

  makeSelectAgents,

  makeSelectAgent,
  makeSelectAgentWebhook,
  makeSelectAgentPostFormat,
  makeSelectSettings,

  makeSelectKeyword,

  makeSelectKeywords,
  makeSelectTotalKeywords,

  makeSelectSayings,
  makeSelectTotalSayings,

  makeSelectAction,
  makeSelectActionWebhook,
  makeSelectActionPostFormat
};