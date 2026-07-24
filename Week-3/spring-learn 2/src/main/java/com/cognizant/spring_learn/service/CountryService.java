
package com.cognizant.spring_learn.service;
import com.cognizant.spring_learn.exception.CountryNotFoundException;
import jakarta.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.util.CountryUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    @Autowired
    private CountryUtil countryUtil;

    public Country getCountry() {
        return countryUtil.getCountry();
    }
    private final List<Country> countries = new ArrayList<>();

    @PostConstruct
    public void init() {

        Country india = new Country();
        india.setCode("IN");
        india.setName("India");

        Country usa = new Country();
        usa.setCode("US");
        usa.setName("United States");

        Country uk = new Country();
        uk.setCode("GB");
        uk.setName("United Kingdom");

        Country japan = new Country();
        japan.setCode("JP");
        japan.setName("Japan");

        countries.add(india);
        countries.add(usa);
        countries.add(uk);
        countries.add(japan);
    }

    public List<Country> getAllCountries() {
        return countries;
    }
    public Country getCountryByCode(String code) {

        for (Country country : countries) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        throw new CountryNotFoundException("Country with code '" + code + "' not found.");
    }
    public Country addCountry(Country country) {
        countries.add(country);
        return country;
    }

    public Country updateCountry(String code, Country updatedCountry) {
        for (int i = 0; i < countries.size(); i++) {
            if (countries.get(i).getCode().equalsIgnoreCase(code)) {
                countries.set(i, updatedCountry);
                return updatedCountry;
            }
        }
        throw new CountryNotFoundException("Country with code " + code + " not found");
    }

    public void deleteCountry(String code) {
        boolean removed = countries.removeIf(
                country -> country.getCode().equalsIgnoreCase(code));

        if (!removed) {
            throw new CountryNotFoundException("Country with code " + code + " not found");
        }
    }
}
