import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { styles } from "./styles";

const Signup = () => {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign up"/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder={"example@gmail.com"}/>
            <Input isPassword label="Password" placeholder="********"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree to the<Text style={styles.agreeTextBold}>Terms of Service</Text>And<Text style={styles.agreeTextBold}>Privacy Policy</Text></Text>
            </View>
            <Button style={styles.button} onPress={() => console.log('Clicked')} title="Sign Up"/>
            <Seperator text="Or Sign Up With"/>
            <GoogleLogin/>
            <Text style={styles.footerText}>Already have an account?<Text style={styles.footerLink}>Sign In</Text></Text>
        </View>
    )
}

export default Signup;