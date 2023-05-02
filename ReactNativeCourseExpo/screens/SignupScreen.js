import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../util/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    const signupHandler = async ({email, password}) => {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (err) {
            Alert.alert(
                'Authentication Failed',
                'Could not create user, check your input and try again.'
            )
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message='Creating user...'/>
    }

    return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
