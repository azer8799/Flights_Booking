import React,{useState} from 'react';   
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style.js';



const Result = (props)=>{
    const Flights=props.navigation.getParam('plane', []);
    
    const [airline, setAirline] = useState('');
    const [cost, setCost] = useState('');
    const [plane, setplane] = useState('');    
    const [Passengers, setpassengers] = useState('');    


        return(
            <View style={styles.container} >
                    <Text style={{color:'#e68d09',fontSize:30,marginBottom:30,fontWeight:'bold'}} 
                    >Book your Journey</Text>
                    
                     {Flights && Flights.map((row, index) => (
                         <View>
           <Text>Airline: {row.airline}</Text>
           <Text>Cost: {row.cost}</Text>
           <Image
              style={{width:50,height:50,marginBottom:20}}
              source={{
              uri: "https://cdn.businesstraveller.com/wp-content/uploads/2016/12/Air-India-B787-e1481083119162.png"
              }}

        />
        </View>
        ))}
        
                    
                     
                <TouchableOpacity  style={styles.submitButton} onPress={()=>props.navigation.navigate('UserDetails',{Passengers, cost})}>
                 <Text>Book Flight</Text>
             </TouchableOpacity>
            </View>
        );
};

export default Result;
