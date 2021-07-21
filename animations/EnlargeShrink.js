import React from 'react'
import {Animated, Dimensions} from 'react-native';

class EnlargeShrink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          viewSize: new Animated.Value(this._getSize())
        }
    }

    _getSize() {
        if( this.props.souldEnlarge) {
            return 80
        }
        return 40
    }

    // La méthode componentDidUpdate est exécuté chaque fois que le component est mise à jour.
    componentDidUpdate() {
        Animated.spring(
            this.state.viewSize,
            {
                toValue: this._getSize()
            }
        ).start()
    }

    render() {
        return(
            <Animated.View
            style={{width: this.state.viewSize, height: this.state.viewSize}}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default EnlargeShrink
