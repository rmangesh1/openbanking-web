package eu.dnb.openbankingweb.controller;

import eu.dnb.openbanking.client.OpenBankingService;
import eu.dnb.openbanking.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by rmang on 12-03-2018.
 */
@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private OpenBankingService openBankingService;

    @GetMapping("/{customerId}")
    public Customer getCustomer(@PathVariable String customerId) {
        ResponseEntity<Customer> customerResponseEntity = openBankingService.getCustomer(customerId);
        return customerResponseEntity.getBody();
    }
}
