// client epics goes here

import { HttpService } from '@libs/midgard-angular/src/lib/modules/http/http.service';
import { ofType } from 'redux-observable';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  createClientCommit, createClientFail, deleteClientCommit, deleteClientFail,
  loadOneClientFail, loadClientsCommit,
  updateClientCommit, updateClientFail, loadClientsFail
} from '@libs/clients/src/lib/state/clients.actions';
import { environment } from '@env/environment';
import { reduxObservable } from '@libs/midgard-angular/src/lib/modules/store';
import { Action } from '@libs/midgard-angular/src/lib/state/action.type';
import {
  CREATE_CLIENT, DELETE_CLIENT, LOAD_ALL_CLIENTS, LOAD_ONE_CLIENT, loadOneClientCommit,
  UPDATE_CLIENT
} from './client.actions';

const httpService = new HttpService();

/**
 * this is here to handle asynchronous actions and will be triggered when LOAD_DATA_CLIENTS action is dispatched
 * @param {Observable} action$ - the current action
 */
const loadAllClientsEpic = action$ => {
  return action$.pipe(
    ofType(LOAD_ALL_CLIENTS),
    switchMap((action: any) => {
      return httpService.makeRequest('get', `${environment.API_URL}/client`, {}, true).pipe(
        // If successful, dispatch success action with result
        map(res => loadClientsCommit(res.data)),
        // If request fails, dispatch failed action
        catchError((error) => of(loadClientsFail(error)))
      );
    })
  );
};

/**
 * this is here to handle asynchronous actions and will be triggered when LOAD_ONE_CLIENT action is dispatched
 * @param {Observable} action$ - the current action
 */
const loadOneClientEpic = action$ => {
  return action$.pipe(
    reduxObservable.ofType(LOAD_ONE_CLIENT),
    switchMap((action: Action) => {
      return httpService.makeRequest('get', `${environment.API_URL}/client/${action.id}/`, {}, true).pipe(
        // If successful, dispatch success action with result
        map((res: Action) => loadOneClientCommit(res.data)),
        // If request fails, dispatch failed action
        catchError((error) => of(loadOneClientFail(error)))
      );
    })
  );
};

/**
 * this is here to handle asynchronous actions and will be triggered when CREATE_CLIENT action is dispatched
 * @param {Observable} action$ - the current action
 */
const createClientEpic = action$ => {
  return action$.pipe(
    reduxObservable.ofType(CREATE_CLIENT),
    switchMap((action: Action) => {
      return httpService.makeRequest('post', `${environment.API_URL}/client/`, action.data, true).pipe(
        // If successful, dispatch success action with result
        map((res: Action) => createClientCommit(res.data, action.index)),
        // If request fails, dispatch failed action
        catchError((error) => of(createClientFail(error)))
      );
    })
  );
};

/**
 * this is here to handle asynchronous actions and will be triggered when UPDATE_CLIENT action is dispatched
 * @param {Observable} action$ - the current action
 */
const updateClientEpic = action$ => {
  return action$.pipe(
    reduxObservable.ofType(UPDATE_CLIENT),
    switchMap((action: Action) => {
      const payload = {...action.data};
      delete payload['id']; // remove id from payload because we already send it in the url
      return httpService.makeRequest('patch', `${environment.API_URL}/client/${action.data.id}/`, payload, true).pipe(
        // If successful, dispatch success action with result
        map((res: Action) => updateClientCommit(res.data)),
        // If request fails, dispatch failed action
        catchError((error) => of(updateClientFail(error)))
      );
    })
  );
};

/**
 * this is here to handle asynchronous actions and will be triggered when DELETE_CLIENT action is dispatched
 * @param {Observable} action$ - the current action
 */
const deleteClientEpic = action$ => {
  return action$.pipe(
    reduxObservable.ofType(DELETE_CLIENT),
    switchMap((action: Action) => {
      return httpService.makeRequest('delete', `${environment.API_URL}/client/${action.data.id}/`, {},  true).pipe(
        // If successful, dispatch success action with result
        map(res => deleteClientCommit(action.data)),
        // If request fails, dispatch failed action
        catchError((error) => of(deleteClientFail(error)))
      );
    })
  );
};
// combine the modules epics into one
export const clientsEpics = reduxObservable.combineEpics(
  loadAllClientsEpic,
  loadOneClientEpic,
  updateClientEpic,
  deleteClientEpic,
  createClientEpic,
);
