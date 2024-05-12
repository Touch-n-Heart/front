import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import { CardItem, Icon } from "../../components";
import DEMO from "../../assets/data/demo";
import styles, { DARK_GRAY } from "../../assets/styles";
import { LinearGradient } from 'expo-linear-gradient'

export const PlaygroundScreen = () => (
  <LinearGradient
    colors={['#F4FDFF', '#FFFEF8']}
    style={styles.bg}
  >
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={styles.title}>Playground</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={DEMO}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <CardItem
              image={item.image}
              name={item.name}
              isOnline={item.isOnline}
              hasVariant
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </LinearGradient>
);
