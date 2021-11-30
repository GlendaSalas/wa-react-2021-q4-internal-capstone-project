# Deliverable 2 - (Due Date: Monday, November 22nd)
Related topics: React lifecycle & Hooks

In this assignment, you will continue working on your Ecommerce Store. It should contain the following:

Home Page (prototype from previous deliverable)

Product List Page (prototype)

Before you start

Merge your branch from the previous deliverable into main in your own GitHub repo

Create a new branch with the name “feat/deliverable2” derived from main on your repo

Read carefully all the instructions and notes for this deliverable

Start working on the requirements specified below

Requirements

Add a button with the text “View all products” below your Featured Products Grid on the Home Page.

Create a new component for your Product List that returns this React element for now: <h1>This is the Product List Page</h1>

Modify your App component to implement a conditional rendering logic to navigate through your pages. In this case, you will only need to be able to navigate from Home Page to Product List Page and from Product List Page to Home Page.

Add an event handler to your “View all products” button so you can navigate to your Product List Page when you click on it.

Test your conditional rendering logic to navigate to the Product List Page. After clicking on the “View all products” button, you should see the following message “This is the Product List Page” replacing the Home Page.

Add an event handler to your Ecommerce logo in the header so you can navigate to your Home Page when you click on it.

Test your conditional rendering logic to navigate to the Home Page. After clicking on the Ecommerce logo in the header, you should see your Home Page content, replacing the Product List Page.

Modify your Product List Page component to contain the following blocks:

8.1 A Sidebar (left or right side, is up to you), it should contain a list of categories from this mock file. The elements in this list will work as filters for your products, so, you should render the name of each category and attach to it an empty handler for the onClick event.

8.2 A Grid of Products from this mock file. For each element on this grid, you should show at least the main image of the product, its name, category, and price.

Add an event handler to the categories in your sidebar, so when you click on each of them, the products in the grid are filtered. The behavior of this filters should be the following:

9.1 By default each category filter should be disabled.

9.2 When you click on the category filter for the first time, that filter will be enabled and applied to the product grid.

9.3 When the filter is active/enabled, you should apply some styling to the selected category so it’s easier to distinguish between active and inactive states.

9.4 You can have multiple filters enabled at the same time, so when this happens, the products that will be shown in the grid should have at least one of the categories from the active filters.
9.5 To disable a filter, you will have to click on it and it should be removed from the active filters.
Add pagination controls to the bottom of your list. For now, you just need to create the UI for these elements, you don’t need to implement the pagination logic on your grid yet.

## Notes
You won’t need to implement React Router library to navigate through your pages yet, you will only need to implement some conditional rendering logic to show the component for the page that you want to see.

You should implement functional components with hooks

Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. Please don’t use any components library such as Bootstrap or Material UI.

We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!

Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).

Please make sure that no warnings or errors are logged in the browser console.

## Evaluation Criteria

Navigation from Home Page to Product List Page works correctly (15 points)

Navigation from Product List Page to Home Page works correctly (15 points)

The Sidebar with the list of categories is rendered correctly using the data from the mock file (10 points)

The Products Grid is rendered correctly using the data from the mock file (25 points)

Filtering behaviors are implemented correctly according to the requirements (30 points)

Pagination controls are rendered correctly (5 points)
