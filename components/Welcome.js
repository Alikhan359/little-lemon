import { Pressable, StyleSheet, Text,View} from 'react-native';

import React from 'react'

export default function Welcome({navigation}) {
  return (
   <View style={styles.container}>
            <Text style={styles.headerText}>Welcome to  <Text style={{color: 'red',fontWeight: 700,}}>
                Little Lemon
            </Text></Text>
            <Text style={styles.regularText}>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. We would love
            to hear your experience with us!lkj
          </Text>
          <Pressable onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.menuBtn}>View Menu</Text>
          </Pressable>
          
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
 regularText: {
  textAlign: 'center',
  marginVertical: 25,
  fontSize: 18,
  padding: 15,
 },
 headerText: {
  textAlign: 'center',
},
menuBtn: {
 textAlign: 'center',
 backgroundColor: 'yellow',
 padding: 10,
 paddingTop: 5,
 paddingBottom: 5,
 fontSize: 18,
 width: 120,
 marginLeft: 'auto',
 marginRight: 'auto',
 marginBottom: 15,
},
 
});

