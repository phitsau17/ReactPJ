import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({route,navigation}) => {

  // 2. Get the param
  const {itemId,otherParam}= route.params;

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Detail Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>

          <Text>{'\n'}</Text>

          <Button
            title='Go to Details...Again'
            onPress={()=>
              navigation.push('Details',{
                itemId : Math.floor(Math.random()*100),
                otherParam : 'anything can find you'
              })
            }
          />

          <Button
            title='Go to Home'
            onPress={()=>
              navigation.push('Home')
            }
          />

          <Button
            title='Go Back'
            onPress={()=>
              navigation.goBack()
            }
          />

        </View>
      )
}

export default DetailsScreen