// here you can define memoized state selectors for the client
import { reselect } from '@midgard/modules/store/index';
import { BlueprintClientState } from './blueprint-client.reducer';
import { BlueprintClient } from './blueprint-client.model';

const getClients = state => state.clientsReducer;

/**
 * selector that selects the current client state
 * @returns {MemoizedSelector<any, any>}
 */
export const getClientState = reselect.createSelector(
  getClients,
  (clientState: BlueprintClientState) => {
    if (clientState) {
      return clientState;
    }
  }
);
