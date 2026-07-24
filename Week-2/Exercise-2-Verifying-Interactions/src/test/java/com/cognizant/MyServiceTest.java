package com.cognizant;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testMultipleReturns() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method with multiple return values
        when(mockApi.getData())
                .thenReturn("First Call")
                .thenReturn("Second Call");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Verify first call
        assertEquals("First Call", service.fetchData());

        // Verify second call
        assertEquals("Second Call", service.fetchData());
    }
}