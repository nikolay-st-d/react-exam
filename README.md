# OMS - React course exam project

The project is an order management system (OMS) to manage manually created orders.

## Non-logged users can:
- view the Home page, Login and Register forms.

## Logged-in users can:
- View the Orders page (Dashboard), where all orders are displayed in a table, every order on a new row, along with View buttons for every order in the list to view the full details about an order.
Only orders created by the logged-in user are displayed. 
- Add new orders to the list from the Add Order button at the top-right of the orders list. When the button is clicked, a form is shown where the user enters the new order data.
- View order details. When the View button is clicked, the user is routed to the order details page, where all order records are displayed. At the bottom of the Order Details frame is the Notes module, where the user can add notes to an order.
- Add notes to an order. Notes can be only added, they cannot be edited or deleted to save the notes history. Every note is assigned to a particular order by the orderId property.

## Design
The OMS uses custom css styling with original responsive design to ensure users can use it in all types of devices. The CSS includes FontAwesome icons and fonts from Google Fonts.

## Test
The Softuni Practice server is included in the repo. The OMS uses the collections API with preceed data for esier testing. There are 3 orders assigned to user with email: admin@abv.bg and password: admin. Two notes are assigned to orders with Ids 1 and 2, they will be shown automatically along with the orders when the app is started nad the data are retrieved from the server.

## Screenshots
