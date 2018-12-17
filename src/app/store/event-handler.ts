import {isUndefined} from 'lodash';
import {ClientEvent} from './client-event';

export interface EventHandlerDictionary<VIEW> {
    [eventName: string]: (view: VIEW, event: ClientEvent) => VIEW;
}

export abstract class EventHandler<VIEW> {
    private readonly _eventHandlers: EventHandlerDictionary<VIEW> = {};

    constructor() {
        this._eventHandlers = this.initializeHandlers();
    }

    public abstract getInitialState();

    public handle(view: VIEW, event: ClientEvent): VIEW {
        const currentView = this.fallbackToInitialStateIfUndefined(view);

        if (this._eventHandlers[event.type]) {
            return this._eventHandlers[event.type](currentView, event);
        }

        return currentView;
    }

    protected abstract initializeHandlers(): EventHandlerDictionary<VIEW>;

    private fallbackToInitialStateIfUndefined(currentView: VIEW) {
        return isUndefined(currentView) ? this.getInitialState() : currentView;
    }
}
