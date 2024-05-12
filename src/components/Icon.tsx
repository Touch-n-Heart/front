import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IconT } from "../src/types";

const Icon = ({ color, name, size, style, url }: IconT) => (
  <Ionicons name={name} src={url} size={size} color={color} style={style} />
);

export default Icon;
