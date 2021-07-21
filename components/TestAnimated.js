import React from 'react'
import { StyleSheet, View, Animated } from 'react-native'

class TestAnimated extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            topPosition: new Animated.Value(0)
        }
    }

    componentDidMount() {
        /*
        Animated.timing(
            this.state.topPosition,
            {
                toValue: 100,
                duration: 3000 // ms
            }
        ).start()
         */
        Animated.spring(
            this.state.topPosition,
            {
                toValue: 100,
               speed: 4,
                bounciness: 30
            }
        ).start()
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Animated.View style={ [styles.animation_view, {top: this.state.topPosition}] }>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation_view: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    }
})

export default TestAnimated
