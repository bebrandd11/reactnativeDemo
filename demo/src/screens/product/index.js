import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Product = (props) => {
    return (
        <View>
            <Text>{props.data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Product;