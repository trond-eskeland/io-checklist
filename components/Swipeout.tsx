import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';

export default function SwipeOut(props: {
  children: JSX.Element;
  onDelete: () => void;
  disabled?: boolean;
}) {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
    onCancel: () => void
  ) => {
    const opacity = dragX.interpolate({
      inputRange: [-20, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.swipedRow}>
        <View style={styles.swipedConfirmationContainer}>
          <Text style={styles.deleteConfirmationText}>Are you sure?</Text>
        </View>
        <Animated.View style={[{ opacity }]}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.button} onPress={() => props.onDelete()}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onCancel()}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  };

  if (props.disabled) {
    return <View style={styles.row}>{props.children}</View>;
  }
  const swipeable = useRef(null);
  return (
    <Swipeable
      ref={swipeable}
      rightThreshold={20}
      renderRightActions={(progress, dragX) =>
        renderRightActions(progress, dragX, () => swipeable?.current?.close())
      }>
      <View style={styles.row}>{props.children}</View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
  swipedRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5,
    marginHorizontal: 16,
    marginLeft: 48,
    height: '100%',
  },
  swipedConfirmationContainer: {
    flex: 1,
  },
  deleteConfirmationText: {
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF3B30',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: 16,
    marginLeft: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fcfcfc',
    fontWeight: 'bold',
    padding: 3,
  },
});
