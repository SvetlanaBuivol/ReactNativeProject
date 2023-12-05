import React from 'react';
import { TouchableOpacity } from 'react-native';
import { globalStyles } from "../../assets/styles/styles";
import LeftIcon from "../../assets/svgs/Svgs/LeftIcon";
import LogOutIcon from "../../assets/svgs/Svgs/LogOutIcon";
import { useDispatch } from 'react-redux';
import { logoutUserAsync } from '../../redux/auth/authOperations';

const headerOptions = ({ navigation, title }) => {
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            await dispatch(logoutUserAsync())
            navigation.navigate('Login')
        } catch (error) {
            console.error(error)
     }
    }
    return {
        title: title,
        ...globalStyles.subTitle,
        headerLeft: title === 'Публікації' ? null : () => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')} style={{marginLeft: 16}}>
                <LeftIcon/>
            </TouchableOpacity>
        ),
        headerRight: title === 'Публікації' ? () => (
            <TouchableOpacity onPress={handleLogout} style={{marginRight: 16}}>
                <LogOutIcon />
            </TouchableOpacity>
        ) : null
    }
};

export default headerOptions;