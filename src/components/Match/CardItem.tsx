import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import CardActions from "./Actions"
import Icon from "../Icon";
import { CardItemT } from "../../src/types";
import styles, { WHITE } from "../../assets/styles";
import { LinearGradient } from 'expo-linear-gradient'

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const myStyles = StyleSheet.create({
    imageStyle: {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? 170 : 460,
      margin: hasVariant ? 0 : 20,
    },
    imageIntroStyle: {
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? 0 : 140,
      paddingLeft: 20,
      position: 'absolute',
      bottom: 0,
      left: 0,
      flexDirection: 'row',
    },
    imageIntroInfoStyle: {
      top: 24,
    },
    avatarStyle: {
      borderRadius: 40,
      backgroundColor: 'white',
      borderWidth: 4,
      borderColor: 'white',
      width: 80,
      height: 80,
      marginRight: 20,
      marginVertical: 15,
    },
    nameStyle: {
      paddingTop: hasVariant ? 10 : 0,
      paddingBottom: hasVariant ? 5 : 0,
      color: hasVariant ? "#363636" : WHITE,
      fontSize: 15,
      fontWeight: 600
    },
    awayStyle: {
      paddingTop: hasVariant ? 10 : 0,
      paddingBottom: hasVariant ? 5 : 0,
      color: hasVariant ? "#363636" : WHITE,
      fontSize: 15,
    }
  });

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <ImageBackground source={image} style={myStyles.imageStyle}>
        <LinearGradient
          colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.80)']}
          style={myStyles.imageIntroStyle}>
        </LinearGradient>
        <View style={myStyles.imageIntroStyle}>
          {/* AVATAR */}
          <Image source={image} style={myStyles.avatarStyle} />
          <View style={myStyles.imageIntroInfoStyle}>
            {/* NAME */}
            <Text style={myStyles.nameStyle}>{name}</Text>
            {/* PERSONALITY */}
            <Text style={myStyles.nameStyle}>Personality</Text>
            {/* AWAY */}
            <Text style={myStyles.awayStyle}>1.5km away</Text>
          </View>
        </View>
      </ImageBackground>

      {/* MATCHES */}
      {/* {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color={WHITE} size={13} /> {matches}% Match!
          </Text>
        </View>
      )} */}

      {/* NAME */}
      {/* <Text style={nameStyle}>{name}</Text> */}

      {/* DESCRIPTION */}
      {/* {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )} */}

      {/* STATUS */}
      {/* {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )} */}

      {/* ACTIONS */}
      {/* {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Icon name="star" color={STAR_ACTIONS} size={14} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={LIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Icon name="flash" color={FLASH_ACTIONS} size={14} />
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
};

export default CardItem;
