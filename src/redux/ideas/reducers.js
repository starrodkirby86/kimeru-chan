/**
 * reducers.js
 * Reducers to implement the actions for ideas.js.
 */

import _ from 'lodash';

export function reduceAddIdea(state, { idea }) {
  return [
    ...state,
    idea,
  ];
}

export function reduceUpdateIdea(state, { idea }) {
  const ideaIndex = _.findIndex(idea.id);
  return [
    ..._.slice(state, ideaIndex),
    idea,
    ..._.slice(ideaIndex + 1, state.length),
  ];
}

export function reduceRemoveIdea(state, { idea }) {
  return _.filter(state, i => i.id !== idea.id);
}
