export interface AppStateChange {
    foo?:string;
}

export interface AppState {
    getFoo():string;

    mutate(change:AppStateChange):AppState;
}
