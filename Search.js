import React,{useState} from 'react';   
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import styles from './style.js';

const Search = (props)=>{

    const [Date, setDate] = useState('');
    const [source, setSource] = useState('');
    const [destination, setdestination] = useState('');
    const [passengers, setpassengers] = useState('');


    return(
        <View style={styles.container}>
            <Text style={{color:'#e68d09',fontSize:50,marginBottom:30,fontWeight:'bold'}}>Flight Booking </Text>
            <TextInput    
               style={styles.input}   
                onChangeText={(Date) => setDate(Date)}
                value={Date}       
                placeholder='dd/mm/yyyy'
                placeholderTextColor='grey' 
             />
                    <TextInput 
                        style={styles.input}      
                        onChangeText={(source) => setSource(source)}
                        value={source}         
                        placeholder='Source'
                        placeholderTextColor='grey'        
                    />
                    <TextInput 
                        style={styles.input}   
                        onChangeText={(destination) => setdestination(destination)}
                        value={destination}           
                        placeholder='Destination' 
                        placeholderTextColor='grey' 
     
                    />
                    <TextInput 
                        style={styles.input}   
                        onChangeText={(passengers) => setpassengers(passengers)}
                        value={passengers}             
                        placeholder='Passengers' 
                        placeholderTextColor='grey'       
                    />
            
             <TouchableOpacity style={styles.submitButton} onPress={()=>props.navigation.navigate('FlightResult',{Date,source,destination,passengers})}>
                 <Text>Submit</Text>
             </TouchableOpacity>
        </View>
    );
};
export default Search;