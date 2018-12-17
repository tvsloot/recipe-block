import {Dictionary} from './utils/dictionary';

export const viewNames = {
    recipes: 'recipes'
};

export interface AppView<T> {
    data: T;
}

export type AppState = Dictionary<AppView<any>>;

export const initialState: AppState = {
    [viewNames.recipes]: {
        data: {}
    }
};
