public class SearchTest {

    public static void main(String[] args) {

        // Unsorted array for Linear Search
        Product[] products = {
                new Product(103, "Shoes", "Fashion"),
                new Product(101, "Laptop", "Electronics"),
                new Product(105, "Book", "Education"),
                new Product(104, "Watch", "Accessories"),
                new Product(102, "Mobile", "Electronics")
        };

        // Sorted array for Binary Search
        Product[] sortedProducts = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Education")
        };

        int searchId = 104;

        System.out.println("===== Linear Search =====");

        Product result1 = SearchAlgorithms.linearSearch(products, searchId);

        if (result1 != null) {
            System.out.println(result1);
        } else {
            System.out.println("Product not found");
        }

        System.out.println();

        System.out.println("===== Binary Search =====");

        Product result2 = SearchAlgorithms.binarySearch(sortedProducts, searchId);

        if (result2 != null) {
            System.out.println(result2);
        } else {
            System.out.println("Product not found");
        }
    }
}