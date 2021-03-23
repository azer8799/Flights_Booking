import React,{useState} from 'react';   
import { Text, View, TouchableOpacity, Image,TextInput } from 'react-native';
import styles from './style.js';

const Book =(props)=>{
   
    const People=props.navigation.getParam('Passengers', 'no-passengers');
    const Cost=props.navigation.getParam('cost', 'no-cost');
   
  
        return(
            <View style={styles.container}>
            <Text style={{color:'#e68d09',fontSize:30,marginBottom:30,fontWeight:'bold'}}>Passenger Details</Text>
                <Text >Number of passengers:{People}</Text>
                <Text > Totalcost:{Cost*People}</Text>
                <TextInput 
                        style={styles.input}            
                        placeholder='Name' 
                        placeholderTextColor='grey'        
                />
                <TextInput 
                        style={styles.input}            
                        placeholder='Age' 
                        placeholderTextColor='grey'        
                />
                 <TextInput 
                        style={styles.input}            
                        placeholder='Passport' 
                        placeholderTextColor='grey'        
                />
                <TouchableOpacity style={styles.submitButton}onPress={()=>props.navigation.navigate('ConformationPage')}>
                 <Text>Proceed to Pay</Text>
             </TouchableOpacity>
            </View>
        );
};
export default Book;
