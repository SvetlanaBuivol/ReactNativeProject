import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const LocationInput = ({ onLocationSelected }) => {
    return (
        <GooglePlacesAutocomplete
            placeholder="Місцевість..."
            onPress={(data, details = null) => {
                onLocationSelected(details);
            }}
            query={{
                key: 'AIzaSyAoEXZsOxIuBoEGcnHFmnEY8na8-zaW-gw',
                language: 'en',
            }}
            textInputProps={{
                autoCapitalize: 'none',
                autoCorrect: false,
            }}
        />
    )
}

export default LocationInput;