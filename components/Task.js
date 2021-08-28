import React from 'react';
import { ViewBase, Text, StyleSheet, View } from 'react-native';

const Task = (props) => {
    return(
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Task;