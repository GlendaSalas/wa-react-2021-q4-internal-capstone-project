# Deliverable 3 - (Due Date: Monday, November 29th)
Related topics: Fetching a Real API, React Router, Global State Management

In this assignment you will continue working on your Ecommerce Store. It should contain the following:

- Home Page (with API integration)
- Product List Page (with API integration)
- Product Detail Page (with API integration)
- Search Results Page (with API integration)

Before you start

Merge your branch from the previous deliverable into main in your own GitHub repo

Create a new branch with the name “feat/deliverable3” derived from main on your repo

Read carefully all the instructions and notes for this deliverable

Start working on the requirements specified below

## Requirements
Refactor your App to use React Router to navigate across your pages. You should remove all the conditional rendering logic and update your “onClick” event handlers that you previously implemented so you can navigate through your pages using the React Router Link Component.

Update your Home Page according to the following requirements:

2.1 The route for this page should be / and /home

2.2 Refactor your Featured Banners Slider to fetch data from the API using this custom hook.

2.3 Refactor your Product Categories Carousel or Grid according to the following requirements:

2.3.1 Fetch data from this endpoint: https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=[[at(document.type%2C "category")]]&lang=en-us&pageSize=30

**IMPORTANT**: You have to replace the {apiRef} on the query params of the URL with the latest value for this particular API. Please check the sample custom hook so you can implement something similar to fetch from this endpoint.

2.3.2 Each category should have a link to the Product List Page including a query param in the URL to filter the products by that category.

2.4 Refactor your Featured Products Grid according to the following requirements:

2.4.1 Fetch data from this endpoint: https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=[[at(document.type%2C "product")]]&q=[[at(document.tags%2C ["Featured"])]]&lang=en-us&pageSize=16

**IMPORTANT**: You have to replace the {apiRef} on the query params of the URL with the latest value for this particular API. Please check the sample custom hook so you can implement something similar to fetch from this endpoint.

2.4.2. Each element on this grid should have at least the main image of the product, its name, category, price, “Add to cart” button, and a link to its detail page.

2.4.3. You should show 16 products maximum on this grid and it is not necessary to implement pagination controls.

Update your Product List Page according to the following requirements:

3.1. The route for this page should be /products and /products?category={categorySlug}

3.2. Refactor your Product Categories Sidebar according to the following requirements:

3.2.1. Fetch data from this endpoint: https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=[[at(document.type%2C "category")]]&lang=en-us&pageSize=30

**IMPORTANT**:You have to replace the {apiRef} on the query params of the URL with the latest value for this particular API. Please check the sample custom hook so you can implement something similar to fetch from this endpoint.

3.2.2. You should be able to filter your products by category according to the category filtering behavior from the previous deliverable.

3.2.3. If there is a filter applied, you should show a “Clear filters” button that will remove all the active filters and update the grid to show all the products.

3.3. Refactor your Products Grid according to the following requirements:

3.3.1. Fetch data from this endpoint: https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=[[at(document.type%2C "product")]]&lang=en-us&pageSize=12

**IMPORTANT**: You have to replace the {apiRef} on the query params of the URL with the latest value for this particular API. Please check the sample custom hook so you can implement something similar to fetch from this endpoint.

3.3.2. Each element on this grid should have at least the main image of the product, its name, category, price, “Add to cart” button, and a link to its detail page.

3.3.3. Create the Pagination Controls dynamically, you should show 12 products maximum per page.

Create the Product Detail Page according to the following requirements:
4.1. The route for this page should be /product/{productId}

4.2. Fetch data for the selected product from this endpoint: https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=[[%3Ad+%3D+at(document.id%2C+"{productId}")+]]

IMPORTANT: You have to replace the {apiRef} on the query params of the URL with the latest value for this particular API and {productId} with the id of the selected product. Please check the sample custom hook so you can implement something similar to fetch from this endpoint.

4.3. This page should include the following blocks:

4.3.1. A Gallery to display the images of the selected product. You can use this library (or any other) and customize its appearance to match the look and feel of your application.

4.3.2. A Label to display the name of the selected product.

4.3.3. A Label to display the current price of the selected product.

4.3.4. A Label to display the SKU of the selected product.

4.3.5. A Label to display the category name of the selected product.

4.3.6. A List of Labels to display the tags of the selected product.

4.3.7. A Paragraph to display the description of the selected product.

4.3.8. A Number Input to select the number of items to be added to the cart.

4.3.9. An Add to Cart Button.

4.3.10. A Table or List to display the specs of the selected product.

Create the Search Results Page according to the following requirements:
5.1. The route for this page should be /search?q={searchTerm}

5.2. You can consume this endpoint to get the products matching your search term: https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=[[at(document.type%2C "product")]]&q=[[fulltext(document%2C "{searchTerm}")]]&lang=en-us&pageSize=20

**IMPORTANT**: You have to replace the {apiRef} on the query params of the URL with the latest value for this particular API and {searchTerm} with the search term that the user entered. Please check the sample custom hook so you can implement something similar to fetch from this endpoint.

5.3. This page should contain the following blocks:

5.3.1. A List to display the products that match your search term. For each element on this grid, you should show at least the main image of the product, its name, category, price, short description, and “Add to Cart” button.

5.3.2. Pagination Controls created dynamically to switch between results pages in case there are more than 20 search results.

5.3.3. A Custom Message that will be rendered only when there are no results matching the searchTerm.

Update your Header to include a search input and a button that after clicking on it, redirects to the Search Results Page for the search term that you entered.

### Notes
You should implement functional components with hooks.

Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. Please don’t use any components library such as Bootstrap or Material UI.

We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!

Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).

Please make sure that no warnings or errors are logged in the browser console.

You don’t have to implement the “Add to cart” logic yet.

If you want to dive deeper into how to consume the REST API please check the official documentation of the Prismic CMS which is the platform that we’re using for this project.

## Evaluation Criteria
Navigation to all pages (Home Page, Product Page, Product Detail Page, Search Results Page) works correctly using React Router (20 points)

Featured Banners Slider, Product Categories Carousel/Grid, and Featured Products Grid on the Home Page are working correctly fetching data from the API (5 points)

Product Category Sidebar on the Product List Page is filtering Products Grid correctly interacting with the API (25 points)

Products List Grid is fetching data from the API and Pagination Controls are working correctly (15 points)

Product Detail Page is fetching data correctly from the API for the selected product and all the required blocks are working properly (15 points)

Search Results Page is connected to the search input in the header and is consuming the API to filter only the results that match the search term value from the query param (10 points)

Pagination Controls and Custom Message in Search Results Page are generated dynamically and are working correctly (10 points)

### Bonus
React Context and useReducer or Redux are implemented to manage the global state of your application (15 points)

Abort Controller is implemented correctly for all your fetch requests (15 points)

Loading indicator appears on all the components that consume an API (10 points)

PropTypes are implemented correctly for all your components (10 points)

## Submitting your Deliverable

Once you’ve covered all the requirements specified above and completed all the bullets on the Evaluation Criteria section, push your changes to your branch and open a PR that can be merged into your main branch of your own GitHub repository.

Deploy your app into a hosting service such as Netlify, Firebase, Heroku, GitHub Pages, etc.

Fill this Google Form to submit your project before November 29th at 8:00 AM (CST)

