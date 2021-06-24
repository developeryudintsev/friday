import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import { CreateAccountReducer } from "../redux/CreateAccountReducer";
import { LoginReducer } from "../redux/LoginReducer";
import { NotFoundReducer } from "../redux/NotFoundReducer";
import { ProfileReducer } from "../redux/ProfileReducer";
import { RecoveryPasswordReducer } from "../redux/RecoveryPasswordReducer";
import { SetNewPasswordReducer } from "../redux/SetNewPasswordReducer";

let rootReducer = combineReducers({
    createAccount: CreateAccountReducer,
    login: LoginReducer,
    notFound: NotFoundReducer,
    profile: ProfileReducer,
    recoveryPassword: RecoveryPasswordReducer,
    setNewPassword: SetNewPasswordReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunk));