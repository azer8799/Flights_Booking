import React,{useState} from 'react';   
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style.js';
import flightsdata from './Flights.json';


const Result = (props)=>{
    const Date=props.navigation.getParam('Date', 'no-Date');
    const Source=props.navigation.getParam('source', 'no-source');
    const Destination=props.navigation.getParam('destination', 'no-destination');
    const Passengers=props.navigation.getParam('passengers', 'no-passengers');
    const [airline, setAirline] = useState('');
    const [cost, setCost] = useState('');
    const [plane, setplane] = useState('');
    

    const SearchByData = () =>{
        try{
                 let sourceFlights = flightsdata.filter(
                                             (flight => (flight.source === Source)&&
                                            (flight.date === Date)&&
                                            (flight.destination === Destination)&&
                                            (flight.seats >= Passengers)))  
                                            
                                            setAirline(sourceFlights[0].airline);
                                            setCost(sourceFlights[0].cost);
                                            setplane(sourceFlights[0].img);
                                            // console.warn(sourceFlights)
                                                
                                           
                                            

                //   let destinationFlights = flightsdata.filter(
                //                                 (flight => (flight.source === Destination)&&
                //                                 (flight.date === EndDate)&&
                //                                 (flight.destination === Source)&&
                //                                 (flight.seats >= Passengers)))   
                //                                 setAirlined(destinationFlights[0].airline);
                //                                 setCostd(destinationFlights[0].cost);
    }
    catch(error){
        props.navigation.navigate('Home');
        alert("Enter Valid Details")
    }
      
         
    };

        return(
            <View style={styles.container} onLayout={SearchByData}>
                    <Text style={{color:'#e68d09',fontSize:30,marginBottom:30,fontWeight:'bold'}}>Book your Journey</Text>
                     <Text>Airline: {airline}</Text>
                     <Text>Cost: {cost}</Text>
                     <Image
                        style={{width:50,height:50,marginBottom:20}}
                        source={{
                        uri: "https://cdn.businesstraveller.com/wp-content/uploads/2016/12/Air-India-B787-e1481083119162.png"
                        }}
                  />
                     <Text >Airline: {airline}</Text>
                     <Text >Cost: {cost}</Text>
                     <Image
                        style={{width:50,height:50,marginBottom:20}}
                        source={{
                        uri: "https://freepikpsd.com/wp-content/uploads/2019/10/air-india-flight-png-5-Transparent-Images.png"
                        }}
                  />
                <TouchableOpacity  style={styles.submitButton} onPress={()=>props.navigation.navigate('UserDetails',{Passengers, cost})}>
                 <Text>Book Flight</Text>
             </TouchableOpacity>
            </View>
        );
};

export default Result;
