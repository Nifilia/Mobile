import React, { useContext } from "react";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";
import { UserContext } from "../../../../App";

const Profile = ({ navigation }) => {

    const num = 10;

    const { user, setUser } = useContext(UserContext);

    const onLogout = async () => {
        console.log(user);
        console.log("logout is clicked");
        await AsyncStorage.removeItem("auth_token");
        setUser(null);
    };
    
    const onSettingsPress = () => {
        navigation.navigate("Settings");
    };

    const onNewListingPress = () => {
        navigation.navigate("CreateListing");
    };
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title="Profile" showLogout onLogout={onLogout}/>
                    <Text style={styles.name}>Username</Text>
                    <Text style={styles.email}>Email</Text>
                    <ListItem title="My Listings" subtitle={`Already have ${num} listings`}/>
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress}/>
                </View>
               <Button onPress={onNewListingPress} title="Add New Listing"/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile)