import AuthContent from '../components/Auth/AuthContent';
import {loginUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {useContext, useState} from "react";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    const signInHandler = async ({email, password}) => {
        setIsAuthenticating(true);
        try {
            const token = await loginUser(email, password);
            authCtx.authenticate(token);
        } catch (err) {
            Alert.alert(
                'Authentication Failed',
                'Invalid credentials, try again'
            )
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message='Logging you in...'/>
    }

    return <AuthContent isLogin onAuthenticate={signInHandler}/>;
}

export default LoginScreen;
