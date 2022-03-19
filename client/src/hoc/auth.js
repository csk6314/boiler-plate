import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_action/user_action';

const Auth =  (SpecificComponent, option, adminRoute = null) => {

    // option => null, true, false
    // null => 아무나 출입 가능
    // true => 로그인한 유저만 출입이 가능
    // false => 로그인한 유저는 출입 불가

    const AuthenticationCheck = (props) => {
        
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
            dispatch(auth()).then(res=>{
                console.log(res);

                //로그인 안한상태
                if(!res.payload.isAuth) {
                    if(option) {
                        navigate('/login');
                    }
                } else {

                    //로그인 한 상태
                    if(adminRoute && !res.payload.isAdmin) {
                        navigate('/');
                    }else {
                        if(!option) {
                            navigate('/')
                        }
                    }
                }
            })      
        }, [dispatch,navigate]);

        return <SpecificComponent/>;
        
        
    }
    return AuthenticationCheck;
    
}
export default Auth;