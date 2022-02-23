import React from 'react'
import { View, Text, Dimensions, PixelRatio } from 'react-native'
import Video from 'react-native-video'

const App = () => {
  const winHeight = Dimensions.get("window").height;
  const winsize = Dimensions.get("window").width;
  let maxValue = winsize > winHeight ? winsize : winHeight;
  let pixelRatio = PixelRatio.get();
  let maxResolution = maxValue * pixelRatio;
  console.log("winsize", winsize);
  console.log("winHeight", winHeight);
  console.log("pixelRatio", pixelRatio);
  console.log("maxResolution", maxResolution);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
      {/* <Video source={{ uri: "https://travelxp.s.llnwi.net/watch1/5f0077b80816af68744e16ca/manifest_v2.m3u8" }}   // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref
        }}
        controls={true}
        style={{ flex: 1 }} /> */}
        <Text>winsize: {winsize}</Text>
        <Text>winHeight: {winHeight}</Text>
        <Text>pixelRatio: {pixelRatio}</Text>
        <Text>resolution: {winsize * pixelRatio}x{winHeight * pixelRatio}</Text>
        {/* <Text>winsize{winsize}</Text> */}
    </View>
  )
}

export default App
