package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	public static void displayDate() {

		ApplicationContext context =
				new ClassPathXmlApplicationContext("date-format.xml");

		SimpleDateFormat dateFormat =
				context.getBean("dateFormat", SimpleDateFormat.class);

		System.out.println("Current Date : " + dateFormat.format(new Date()));

		((ClassPathXmlApplicationContext) context).close();
	}

	public static void main(String[] args) {

		SpringApplication.run(SpringLearnApplication.class, args);

		displayDate();
	}
}