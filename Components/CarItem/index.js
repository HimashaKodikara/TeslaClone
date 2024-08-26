import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import StyledButton from '../Stylebutton';
import styles from './style';


const CarItem = (props) => {

    const {name,tagline,image,taglinCTA} = props.car;
    return(
        <View style ={styles.carContainer}>
        <ImageBackground source={image} 
         style={styles.image}/>
            <View style={styles.titles}>
               <Text style={styles.title}>{name}</Text>
               <Text style={styles.subtitle}> {tagline }
               {' '}
               <Text style={styles.CTA}>
                   {taglinCTA}
               </Text>
               </Text>
            </View>
   <View style={styles.buttoncontaine}>
   <StyledButton type="primary"
            content={"Custom Order"}
             onPress={() => {
                 console.warn("Custom oreder was pressed");
             }}/>
             
             
            <StyledButton type="secondary"
            content={"Existing Inventory"}
             onPress={() => {
                 console.warn("Existing Inventory was pressed");
             }}/>
   </View>
           
        </View>
  

    );
};
export default CarItem;