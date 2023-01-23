export interface IAction {
    type: string,
    payload: string | number
}

type payloadCreatorType = (payload : string | number) => IAction;

type actionCreatorType = (type : string) => payloadCreatorType;

const createAction : actionCreatorType = (type) => (payload) => ({type,payload});

export const changeCountry = createAction("CHANGE_COUNTRY");
export const changeCount = createAction("CHANGE_COUNT");