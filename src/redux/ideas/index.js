/**
 * ideas.js
 * Redux actions related to management of ideas, the central object for kimeru-chan.
 * Based off organization from: https://github.com/erikras/ducks-modular-redux
 */

// Actions
const IDEAS_GET = 'ideas/IDEAS_GET';
const IDEA_ADD = 'ideas/IDEA_ADD';
const IDEA_UPDATE = 'ideas/IDEA_UPDATE';
const IDEA_REMOVE = 'ideas/IDEA_REMOVE';

// TODO: Replace IDEAS_GET with loading from a file (populate the store in file opening).

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case IDEAS_GET:
      return state; // TODO: Implement.
    case IDEA_ADD:
      return state;
    case IDEA_UPDATE:
      return state;
    case IDEA_REMOVE:
      return state;
    default:
      return state;
  }
}

// Action Creators
export function getIdeas() {
  return { type: IDEAS_GET };
}

export function addIdea(idea) {
  return { type: IDEA_ADD, idea };
}

export function updateIdea(idea) {
  return { type: IDEA_UPDATE, idea };
}

export function removeIdea(idea) {
  return { type: IDEA_REMOVE, idea };
}
