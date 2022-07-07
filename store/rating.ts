import { computed, action, Action, Computed } from 'easy-peasy';
import moment from 'moment';

export interface Rating {
  created?: Date | undefined;
}

export interface IRating {
  lastAsked: Rating | undefined;
  canAsk: Computed<IRating, boolean>;
  setLastAsked: Action<IRating>;
}

const store: IRating = {
  lastAsked: undefined,
  canAsk: computed((state) => {
    if (
      (state.lastAsked?.created && moment(state.lastAsked.created) < moment().subtract(14, 'd')) ||
      !state.lastAsked
    ) {
      return true;
    }
    return false;
  }),
  setLastAsked: action((state) => {
    state.lastAsked = { created: new Date() };
  }),
};

export default store;
