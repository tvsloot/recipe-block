import {ApplicationError} from './application-error';

export class DuplicateEntityError extends Error implements ApplicationError {
    public static readonly type = 'DuplicateEntityError';
    public readonly type = DuplicateEntityError.type;
    public readonly entityId: string;

    public constructor(entityId: string) {
        super();
        this.entityId = entityId;
    }
}
