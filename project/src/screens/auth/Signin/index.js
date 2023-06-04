import React, { useState } from "react";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from 'react-native-safe-area-context';

const Signin = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title="Sign In"/>
                <Input label="Email" placeholder="example@gmail.com"/>
                <Input isPassword label="Password" placeholder="********"/>
                <Button style={styles.button} onPress={() => console.log('Clicked')} title="Sign Up"/>
                <Seperator text="Or sign in with"/>
                <GoogleLogin/>
                <Text style={styles.footerText}> Don't have an account? <Text onPress={onSignup} style={styles.footerLink}>Sign Up</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default Signin;