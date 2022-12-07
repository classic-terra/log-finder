export interface LogFragment {
    type: string;
    attributes: Attributes;
}
export interface Attribute {
    key: string;
    value: string;
}
export type Attributes = Attribute[];
export type LogFinderFn = (log: LogFragment, match: LogFragment['attributes']) => void;
export type LogFinderMapper = (log: LogFragment) => void;
export type LogFinderRuleItem = string | ((value: string) => boolean);
export interface LogFinderRule {
    type: string;
    attributes: LogFinderRuleItem[][];
    strict?: boolean;
    matchUntil?: string;
    chunkBy?: true;
}
export type ReturningLogFinderResult<T> = {
    fragment: LogFragment;
    match: LogFragment['attributes'];
    height?: number;
    transformed?: T;
    chunk?: Record<string, LogFragment['attributes'][]>;
};
export type ReturningLogFinderTransformer<T> = (fragment: LogFragment, match: LogFragment['attributes']) => T;
export type ReturningLogFinderMapper<T> = (event: LogFragment) => ReturningLogFinderResult<T>[];
