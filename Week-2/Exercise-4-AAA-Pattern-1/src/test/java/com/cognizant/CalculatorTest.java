package com.cognizant;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    private int a;
    private int b;

    @BeforeEach
    void setUp() {
        a = 5;
        b = 3;
        System.out.println("Setup");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Teardown");
    }

    @Test
    void testAddition() {

        // Arrange
        int expected = 8;

        // Act
        int actual = a + b;

        // Assert
        assertEquals(expected, actual);
    }
}
