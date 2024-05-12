import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { IconT } from "../types";

const Icon = ({ color, name, size, style }: IconT) => (
  <FontAwesome name={name} size={size} color={color} style={style} />
);

export default Icon;
