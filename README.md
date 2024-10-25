# Kumachi Coffee Website using MEVN stack
This is a dynamic web app we made for Kumachi, a coffee and pastry shop, built using MEVN stack as a final group project for the WCSERVER course.

## Running the Web Application
1. Navigate to the **backend** and **kumachi** folders, and ensure all dependencies are installed by running:
   ```
   cd backend
   npm install
   cd ../kumachi
   npm install
   ```
2. Turn on **mongod** located in:
   ```
   C:\Program Files\MongoDB\Server\Version Number\bin
   ```
3. Navigate to the **backend** folder and start the server by running:
   ```
   node index.js
   ```
4. Navigate to the **kumachi** folder and start the web app by running:
   ```
   npm run serve
   ```
5. The web app will be running at http://localhost:8080

## Background
Kumachi is a web application that is designed to market and build the online presence of a local coffee shop located in Pandacaqui, Mexico, Pampanga. Our goal is to help Kumachi increase its marketing reach and build their brand identity by creating a digital platform that showcases their unique ambiance and offerings. The web app will feature a user-friendly interface that engages with users, allowing them to explore the menu, add items to their cart, and order for pick-up.

To emphasize, one of the key features of the app is the integrated add-to-cart system, which enables customers to easily browse, add, edit, and remove their orders as they wish. In line with this, the system will notify users when their orders are ready for pick-up which make it a convenient way to order Kumachi's products. Moreover, in the product page, users are also able to click on products, showing a detailed modal view with ratings, which provides users more information about the item before making a purchase. 


## Problems/Issues
These challenges affect Kumachi's visibility and customer reach, it is hard for them to attract new customers and keep current ones, especially those who prefer the ease of online ordering.
- Weak Marketing Strategies
They need strong marketing methods, limiting their potential for visibility in the competitive market. It is challenging to promote their internet presence,  which hinders their capacity to connect with potential customers.
- Small Marketing Budget
With a limited budget for advertising, Kumachi finds it difficult to compete with larger coffee chains that spend a lot on marketing. This financial constraint stops them from running effective campaigns or promotions that could attract attention.
Dependence on Walk-In Customers
By mostly depending on customers who come in, Kumachi might miss out on people who like to order online. This reliance weakens them to changes in how many people walk in, especially during slow times or bad weather.
- Social Media Engagement Challenges
If Kumachi doesn't have a strong social media presence, it may struggle to interact with customers, promote new products, or hold events. This can lead to missed opportunities to reach a broader audience.
- Online Order Management Issues
Kumachi may experience operational issues, such as inventory management or making sure orders are ready for pickup on time, if it does not have a reliable system in place for processing online orders. These problems may result in dissatisfied clients and negative evaluations.

## Objectives of the Project
		
This project aims to build a web application for Kumachi Coffee and Pastries by utilizing the MEVN stack, which stands for MongoDB, Express.js, VueJS, and Node,js. Through this app, the business will reach more customers, streamline their ordering process, and promote or showcase their business and products in a more effective and engaging way. Specifically, the project objectives are the following:

1. Create an online ordering system to streamline processes
- Implement a feature that allows customers to easily select items they want to buy and add them to their cart. This will help them create their orders online before picking them up in store, streamlining the ordering process and reducing wait times.

2. Create cart management capabilities for customers
- Provide customers with tools to manage their orders by editing quantities or removing products from their cart before placing the order. This ensures customers have control over their orders, reducing mistakes and improving the user experience.

3. Include detailed product information
- Allow customers to click on products to view detailed information, such as descriptions, pricing, and ratings. This helps customers make informed choices before adding items to their cart, which can lead to better purchasing decisions and fewer order cancellations.

4. Order confirmation system
- After placing an order, customers will be directed to an order confirmation page. This will provide a clear summary of their purchase and give them confidence that their order has been successfully placed.

5. Enable product ratings
- Add a feature where customers can rate products after trying them. This will help Kumachi gather valuable feedback and also guide future customers when deciding what to order.

6. Utilize the MEVN stack for efficient development
- The front-end will use Vue.js for an interactive user experience, and the back-end will manage orders and product data efficiently.

7. Ensure user-friendliness and responsive design
- Design a simple and clear interface that allows customers to easily explore Kumachi’s menu, browse featured products, and access contact information. This will make it easy for users to navigate the site and find what they need.
