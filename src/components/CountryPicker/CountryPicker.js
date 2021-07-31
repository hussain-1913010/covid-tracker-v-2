import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./CountryPicker.css";
import { fetchCountries } from "./../../api";



const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [setFetchedCountries]);

    
    return (
            <FormControl className="form_control">
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {
                        fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)
                    }
                </NativeSelect>
            </FormControl>
    );
};

export default CountryPicker;