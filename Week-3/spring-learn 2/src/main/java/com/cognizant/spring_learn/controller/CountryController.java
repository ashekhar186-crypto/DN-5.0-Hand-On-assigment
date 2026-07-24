package com.cognizant.spring_learn.controller;
import java.util.List;
import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/country")
    public Country getCountry() {

        LOGGER.info("START - Fetch Country");

        Country country = countryService.getCountry();

        LOGGER.info("END - Fetch Country");

        return country;
    }
    @GetMapping("/countries")
    public List<Country> getAllCountries() {

        LOGGER.info("Fetching all countries");

        return countryService.getAllCountries();
    }
    @GetMapping("/countries/{code}")
    public Country getCountryByCode(@PathVariable String code) {

        LOGGER.info("Fetching country with code: {}", code);

        return countryService.getCountryByCode(code);
    }
    @PostMapping("/countries")
    public Country addCountry(@RequestBody Country country) {
        LOGGER.info("Adding Country");
        return countryService.addCountry(country);
    }
    @PutMapping("/countries/{code}")
    public Country updateCountry(@PathVariable String code,
                                 @RequestBody Country country) {

        LOGGER.info("Updating Country");
        return countryService.updateCountry(code, country);
    }
    @DeleteMapping("/countries/{code}")
    public String deleteCountry(@PathVariable String code) {

        LOGGER.info("Deleting Country");
        countryService.deleteCountry(code);

        return "Country deleted successfully.";
    }
}