import React from 'react';
import { Text, View,StyleSheet,Dimensions} from 'react-native';
const screen = Dimensions.get('window')
function Tab1(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home (tab 1)</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:
    {
        alignItems:'center',
    },
    text:{
        marginTop:screen.height*0.5
    }
})
export default Tab1;