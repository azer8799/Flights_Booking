import React,{useState} from 'react';   
import { Text, View, TouchableOpacity, Image,TextInput } from 'react-native';
import styles from './style.js';

const Confirm = (props)=>{
       return(
        <View style={styles.container}>
             <Text style={{marginBottom:20}}>Your Ticket is Booked</Text>
            <Text style={{marginBottom:20}}>Your Ref id is: AD10156</Text>
          
            <TouchableOpacity style={styles.submitButton} onPress={()=>props.navigation.navigate('Home')}>
                 <Text>Thankyou</Text>
             </TouchableOpacity>
           </View>
       );
};
export default Confirm;