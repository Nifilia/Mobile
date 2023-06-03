import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 54,
    },
    image: {
        color: colors.blue,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16
    }
})