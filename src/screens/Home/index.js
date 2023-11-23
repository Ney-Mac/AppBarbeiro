import { useState } from 'react';
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTItle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg'

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);

    const handleLocationFinder = async () => {
        setCoords(null);

        let result = await request(
            Platform.OS === 'ios' ?
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            :
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted') {

            Geolocation.getCurrentPosition((info) => {
                setCoords(info.coords);
                getBarbers();
            });

        } else {
            console.log('Negado');
        }
    }

    const getBarbers = () => {
        
    }

    return (
        <Container>
            <Scroller>
                
                <HeaderArea>
                    <HeaderTItle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTItle>
                    <SearchButton onPress={() => { navigation.navigate('Search'); }}>
                        <SearchIcon width="26" height="26" fill="#fff" />
                    </SearchButton>
                </HeaderArea>
            
                <LocationArea>
                    <LocationInput
                        placeholder='Onde você está?'
                        placeholderTextColor="#fff"
                        value={locationText}
                        onChange={text => setLocationText(text)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width={24} height={26} fill="#fff" />
                    </LocationFinder>
                </LocationArea>



            </Scroller>
        </Container>
    )
}