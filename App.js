import {
  View,
  Text,
  SafeAreaView,
  Vibration,
  StatusBar,
  TextInput,
  Dimensions,
  Animated,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  white: '#ffffff'
};

const timer = [...Array(13).keys()].map((i) => (i === 0 ? 1 : i * 5));
const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View style={[
        StyleSheet.absoluteFillObject,
        {
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 100,
        }
      ]}>
        <TouchableOpacity onPress={() => { }}>
          <View style={styles.roundButton} />
        </TouchableOpacity>
      </Animated.View>
      <View style={{
        position: 'absolute',
        top: height / 3,
        left: 0,
        right: 0,
        flex: 1,
      }}>
        <FlatList
          data={timer}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: ITEM_SPACING
          }}
          style={{flexGrow: 0}}
          decelerationRate ='fast'
          snapToInterval={ITEM_SIZE}
          keyExtractor={item => item.toString()}
          renderItem={({ item }) => {
            return (
              <View style={{ width: ITEM_SIZE, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text} >
                  {item}
                </Text>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  roundButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: colors.red,
  },
  text: {
    fontSize: ITEM_SIZE * 0.8,
    fontFamily: 'Menlo',
    color: colors.white,
    fontWeight: '900',
  }
})