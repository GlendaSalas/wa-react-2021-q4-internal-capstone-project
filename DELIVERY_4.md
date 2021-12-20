## Deliverable 4 - (Due Date: Monday, December 6th)

**Related topics:** React Router, Global State Management, Design Patterns, Best Practices & Performance Optimizations

In this assignment, you will continue working on your Ecommerce Store. It should contain the following:

- Product Detail Page (with “Add to Cart” functionality)
- Shopping Cart Page
- Checkout Page

### Before you start

1. Merge your branch from the previous deliverable into main in your own GitHub repo
2. Create a new branch with the name “feat/deliverable4” derived from main on your repo
3. Read carefully all the instructions and notes for this deliverable
4. Start working on the requirements specified below

### Requirements

1. If you don’t have it already, add a “Shopping Cart Icon” to your header. You can create this icon as a separate component so you can add the logic to display a badge with the number of items that you have added to your cart. This icon will also serve as a link to navigate to the “Shopping Cart Page” after clicking on it.
2. Modify the **Product Detail Page** according to the following requirements:

- 2.1. Implement the Add to Cart functionality for the selected product.
- 2.2. You should be able to add multiple items to your cart using the quantity selector. Please don’t forget to validate that you don’t exceed the stock units available for the selected product.
- 2.3. After clicking on the **“Add to Cart”** button the items should be added to your cart and the badge on the “Shopping Cart Icon” in the header should be updated to display the current quantity of items in the cart.
- 2.4. The **“Add to Cart”** button should be hidden or disabled when the **stock** units available for the selected product is zero. So you shouldn’t be able to add to cart a product that is not available in the stock.

3. Create the **Shopping Cart Page** according to the following requirements:

- 3.1. The route for this page should be **/cart**
- 3.2. This page should contain a table to display the items added to the cart and you should build it considering the following:
- 3.2.1. There should be a row in this table per item/product in the cart.
- 3.2.2. Each row should show the main image of the product, its name, unit price, a quantity selector, subtotal (unit price x quantity) and a “remove from cart icon”.
- 3.2.3. At the bottom of the table there should be a label to display the **cart total** (sum of the subtotal’s column in the table) and a **“Proceed to checkout”** button that will serve as a link to navigate to the “Checkout Page” after clicking on it.
- 3.2.4. You should be able to modify the quantity of items that you want using the quantity selector. Please don’t forget to validate that you don’t exceed the **stock** units available for the selected product.
- 3.2.5. After updating the quantity the subtotal for the product and the cart total labels should be updated.

4. Create the **Checkout Page** according to the following requirements:

- 4.1. The route for this page should be **/checkout**
- 4.2. This page should contain the following blocks:
- 4.2.1. A **Form** to capture the customer information for their order considering the following:
- 4.2.1.1. A text input to capture the name of the customer
- 4.2.1.2. A text input to capture the email of the customer
- 4.2.1.3. A text input to capture the post/zip code of the customer
- 4.2.1.4. A textarea to capture the order notes
- 4.2.2. An **order summary table** to display the items added to the cart and you should build it considering the following:
- 4.2.2.1. There should be a row in this table per item/product in the cart.
- 4.2.2.2. Each row should only show the name of the product, number of items added to cart and the subtotal (unit price x quantity).
- 4.2.2.3. At the bottom of the table there should be a label to display the **cart total** (sum of the subtotal’s column) and two buttons, one for **“Place order”** and the other for **“Go back to cart”**
- 4.2.3. You don’t have to implement the logic for the “Place order” button yet.
- 4.2.4. After clicking on the “Go back to cart” button, you should be able to navigate to the “Shopping Cart Page”.

### Notes

- You should implement functional components with hooks.
- Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. **Please don’t use any components library such as Bootstrap or Material UI.**
- We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!
- Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).
- Please make sure that no warnings or errors are logged in the browser console.

### Evaluation Criteria

- After clicking on the “Add to Cart” button on the Product Detail Page, the number of items selected are correctly added to the cart and the badge for the Shopping Cart Icon in the Header is updated correctly (25 points)
- The logic to update the quantity for a product on the “Shopping Cart Page” is implemented correctly (10 points)
- The logic to remove a product from the cart on the “Shopping Cart Page” is implemented correctly (10 points)
- The form on the “Checkout Page” is displayed correctly (10 points)
- The Order Summary table on the “Checkout Page” is displayed correctly (15 points)
- The “Add to Cart” functionality is implemented correctly using React Context or Redux across all pages (30 points)

### Bonus

- PropTypes are implemented correctly for all your components (10 points)
- Error Boundaries are applied correctly at least for 1 component within the app (15 points)
- useMemo and useCallback hooks are implemented correctly to improve performance if needed (20 points)

### Submitting your Deliverable

- Once you’ve covered all the requirements specified above and completed all the bullets on the Evaluation Criteria section, push your changes to your branch and **open a PR that can be merged into your main branch of your own GitHub repository.**
- Deploy your app into a hosting service such as Netlify, Firebase, Heroku, GitHub Pages, etc.
- Fill [this Google](https://forms.gle/izrwauRzrBjjdnpPA) Form to submit your project before **December 6th at 8:00 AM (CST)**