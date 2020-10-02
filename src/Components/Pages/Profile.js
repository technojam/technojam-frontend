import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import "../Styles/Profiles.css";
const Profile = () => (
   <View className="container">
      <View className="header" />
      <Image className="avatar" source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
      <View className="body" >
         <View className="bodyContent">
            <Text className="name">Honey Sharma</Text>
            <Text className="info">Aspiring Software Developer/Android Developer</Text>
            <Text className="description">
               Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>
         </View>
      </View>
   </View>
);

export default Profile;

