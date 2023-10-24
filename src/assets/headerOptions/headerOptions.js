import React from 'react';
import { TouchableOpacity } from 'react-native';
import { globalStyles } from "../styles/styles";
import LeftIcon from "../../components/Svgs/LeftIcon";
import LogOutIcon from "../../components/Svgs/LogOutIcon";

const headerOptions = ({ navigation, title }) => {
    return {
        title: title,
        ...globalStyles.subTitle,
        headerLeft: title === 'Публікації' ? null : () => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')} style={{marginLeft: 16}}>
                <LeftIcon/>
            </TouchableOpacity>
        ),
        headerRight: title === 'Публікації' ? () => (
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginRight: 16}}>
                <LogOutIcon />
            </TouchableOpacity>
        ) : null
    }
};

export default headerOptions;