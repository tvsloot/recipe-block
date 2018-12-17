import {Action} from 'redux';

export abstract class ClientEvent implements Action {
    public readonly abstract type: string;
}
