// here you can define the client reducer
// PLEASE REPLACE THE PLACEHOLDER STRINGS "CLIENT/BlueprintClient/client" WITH YOUR OWN CLIENT NAME
import { addAll, deleteOne, upsertOne } from '@midgard/modules/store/reducer.utils';
import {
  CREATE_CLIENT_COMMIT, DELETE_CLIENT_COMMIT, LOAD_ALL_CLIENTS_COMMIT, LOAD_ONE_CLIENT_COMMIT,
  UPDATE_CLIENT_COMMIT
} from './blueprint-client.actions';
import { BlueprintClient } from './blueprint-client.model';

export interface BlueprintClientState {
  data: BlueprintClient[];
  loaded: false;
  created: false;
  updated: false;
  deleted: false;
}
const initialState: BlueprintClientState = {
  data: [],
  loaded: false,
  created: false,
  updated: false,
  deleted: false
};

export function blueprintClientReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CLIENTS_COMMIT:
      return addAll(state, action);
    case LOAD_ONE_CLIENT_COMMIT:
      return upsertOne(state, action, 'uuid');
    case CREATE_CLIENT_COMMIT:
      return upsertOne(state, action, 'uuid');
    case UPDATE_CLIENT_COMMIT:
      return upsertOne(state, action, 'uuid');
    case DELETE_CLIENT_COMMIT:
      return deleteOne(state, action, 'uuid');
    default:
      return state;
  }
}
