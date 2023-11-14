import { useEffect } from 'react';
import { Container, LoginIcon } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';

export default function Preload() {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                //validar o token
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <LoginIcon size="large" color="#fff" />
        </Container>
    )
}