import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "../Icon";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from "../../assets/styles";

const CardActions = () => {
  const likeStyle = [{
    backgroundColor: LIKE_ACTIONS,
    marginRight: 60
  }]
  const dislikeStyle = [{
    backgroundColor: DISLIKE_ACTIONS,
    marginLeft: 60
  }]

  return (
    <View style={styles.actionsCardItem}>
      <TouchableOpacity style={[styles.button, dislikeStyle]}>
        <Icon name="close" color={WHITE} size={32} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, likeStyle]}>
        <Icon name="heart" color={WHITE} size={28} />
      </TouchableOpacity>
    </View>
  )
}

export default CardActions