import {forEach} from 'lodash';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {combineReducers, ReducersMapObject} from 'redux';
import {routerReducer} from '@angular-redux/router';
import {AppView, viewNames} from '../app-state';
import {RecipeEventHandler} from '../domain/recipe/app-state/recipe-event-handler';
import {EventHandler} from './event-handler';

interface EventHandlerMap {
    [viewName: string]: EventHandler<AppView<any>>;
}

const appEventHandlers: EventHandlerMap = {
    [viewNames.recipes]: new RecipeEventHandler()
};

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        ...getAppReducers(appEventHandlers),
        router: routerReducer
    })
);

function getAppReducers(eventHandlers: EventHandlerMap): ReducersMapObject {
    const handlerMap: ReducersMapObject = {};
    forEach(eventHandlers, (handler: EventHandler<any>, viewName: string) => {
        handlerMap[viewName] = (view, event) => handler.handle(view, event);
    });

    return handlerMap;
}
