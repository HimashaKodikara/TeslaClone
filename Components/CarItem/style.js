import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
     },
     titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
     },
     title:{
       fontSize:40,
       fontWeight:'bold',
     },
     subtitle:{
       fontSize:16,
       color:"#5c5c62"
     },CTA:{
          textDecorationLine:'underline',
     },image:{
       width:'100%',
       height:Dimensions.get('window').height,
       resizeMode: "cover",
       position:"absolute"
     },buttoncontaine:{
       position:'absolute',
       bottom:10,
       width:'100%'
     }
});

export default styles;