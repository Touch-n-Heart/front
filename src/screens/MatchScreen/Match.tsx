import React, { useState } from "react";
import { View, Image } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem, CardActions } from "../../components";
import styles from "../../assets/styles";
import DEMO from "../../assets/data/demo";
import { LinearGradient } from 'expo-linear-gradient'

export const MatchScreen = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const logoStyle = [
    {
      width: 120,
      height: 50,
    },
  ];

  return (
    <LinearGradient
      colors={['#F4FDFF', '#FFFEF8']}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={[styles.middle, { top: 30 }]}>
          <Image source={require("../../assets/touch-match.png")} style={logoStyle} />
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (
            <Card key={item.id} style={[{ top: 40 }]}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
        <View style={[styles.middle, { top: 540 }]}>
          <CardActions />
        </View>
      </View>
    </LinearGradient >
  );
};
