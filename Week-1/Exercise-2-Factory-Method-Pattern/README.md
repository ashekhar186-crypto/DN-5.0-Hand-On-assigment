# Week 1 - Exercise 2: Factory Method Pattern

## Objective

Implement the Factory Method Design Pattern to create different types of documents such as Word, PDF, and Excel documents.

## Scenario

A document management system needs to create different types of documents without exposing the object creation logic to the client. The Factory Method Pattern is used to achieve this.

## Files

* Document.java
* WordDocument.java
* PdfDocument.java
* ExcelDocument.java
* DocumentFactory.java
* WordFactory.java
* PdfFactory.java
* ExcelFactory.java
* FactoryTest.java

## Design Pattern Used

Factory Method Pattern

## Components

### Product

* Document

### Concrete Products

* WordDocument
* PdfDocument
* ExcelDocument

### Creator

* DocumentFactory

### Concrete Creators

* WordFactory
* PdfFactory
* ExcelFactory

### Client

* FactoryTest

## Expected Output

Opening Word Document

Opening PDF Document

Opening Excel Document

## Conclusion

The Factory Method Pattern was successfully implemented. The client creates document objects through factory classes instead of directly instantiating concrete document classes. This promotes loose coupling, scalability, and maintainability.
