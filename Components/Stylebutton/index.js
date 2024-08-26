import React from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) =>{

   // const type = props.type;
   // const content = props.content;
   // const onPress = props.onPress;

    const {type,content,onPress} = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textcolor = type ==='primary' ? '#FFFFFF' :'#171A20';
    return(
        <View>
           <Pressable
               style={[styles.button,{backgroundColor :backgroundColor}]}
               onpress={() => onPress()}
                >
                   <Text style={[styles.text,{color:textcolor}]}>{content}</Text>
           </Pressable>
        </View>
    );
};

export default StyledButton;

