import React, { useContext } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { AuthProvider } from '../../contexts/Auth'

export default function Home(props: any) {

   const { signOut } = useContext(AuthProvider);


   return (
      <View>
         <Text>PÁGINA HOME</Text>

         <TouchableWithoutFeedback onPress={() => signOut()}>
            <View>
               <Text>LOGOUT</Text>
            </View>
         </TouchableWithoutFeedback>

      </View>
   )
}