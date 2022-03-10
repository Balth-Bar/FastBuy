import React, { useState } from 'react';
import { Pressable, Animated } from 'react-native';

const AnimatedButton = ({ children, h, w, onPress }) => {
    const [animation] = useState(new Animated.Value(1));
    const pressIn = () => {
        Animated.spring(animation, {
            toValue: .8,
            useNativeDriver: false
        }).start();
    }

    const pressOut = () => {
        Animated.spring(animation, {
            toValue: 1,
            friction: 5,
            tension: 10,
            useNativeDriver: false
        }).start();
    }

    const animationStyle = {
        transform: [{ scale: animation }]
    }

    return (
        <Pressable
            onPress={() => {
                pressIn();
                onPress()
            }}
            onPressOut={() => {
                pressOut()
            }}
        >
            <Animated.View style={animationStyle}>
                {children}
            </Animated.View>

        </Pressable>
    );
}
export default AnimatedButton;