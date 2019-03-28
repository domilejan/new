// here you can define the client reducer
import { addAll, deleteOne, upsertOne } from '../../../../../midgard/modules/store/reducer.utils';
import {
  CREATE_CLIENT_COMMIT, DELETE_CLIENT_COMMIT, LOAD_ALL_CLIENTS_COMMIT, LOAD_ONE_CLIENT_COMMIT,
  UPDATE_CLIENT_COMMIT
} from './client.actions';
import {Client} from './client.model';

export interface ClientState {
  data: Client[];
  loaded: false;
  created: false;
  updated: false;
  deleted: false;
}
const initialState: ClientState = {
  data: [],
  loaded: false,
  created: false,
  updated: false,
  deleted: false
};

export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CLIENTS_COMMIT:
      return addAll(state, action);
    case LOAD_ONE_CLIENT_COMMIT:
      return upsertOne(state, action);
    case CREATE_CLIENT_COMMIT:
      return upsertOne(state, action);
    case UPDATE_CLIENT_COMMIT:
      return upsertOne(state, action);
    case DELETE_CLIENT_COMMIT:
      return deleteOne(state, action);
    default:
      return state;
  }
}
