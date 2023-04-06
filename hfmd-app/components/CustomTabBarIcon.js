import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';


export default function CustomTabBarIcon(props){
    return <Ionicons name={props.name} size={30} style={{ marginBottom: -3 }} />;
  }