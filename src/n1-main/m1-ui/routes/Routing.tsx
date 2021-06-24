import React from 'react';
import { Route } from 'react-router-dom';
import { CreateAccount } from '../common/CreateAccount';
import { Login } from '../common/Login';
import { NotFound } from '../common/NotFound';
import { Profile } from '../common/Profile';
import { RecoveryPassword } from '../common/RecoveryPassword';
import { SetNewPassword } from '../common/SetNewPassword';
import { ShowComponents } from '../common/ShowComponents';

export const Routing=()=>{
    return(
        <div>

                        <Route path={'/login'} render={Login}/>
                        <Route path={'/create'} render={CreateAccount}/>
                        <Route path={'/profile'} render={Profile}/>
                        <Route path={'/404'} render={NotFound}/>
                        <Route path={'/recovery'} render={RecoveryPassword}/>
                        <Route path={'/newPas'} render={SetNewPassword}/>
                        <Route path={'/showComp'} render={ShowComponents}/>






            {/*<Login/>*/}
            {/*<CreateAccount/>*/}
            {/*<Profile/>*/}
            {/*<NotFound/>*/}
            {/*<RecoveryPassword/>*/}
            {/*<SetNewPassword/>*/}
            {/*<ShowComponents/>*/}
        </div>
    )
}