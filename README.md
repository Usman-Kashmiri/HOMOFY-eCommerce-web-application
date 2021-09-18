

# HOMOFY   -AN ONLINE SHOPPING MART
HOMOFY is an eCommerce website for shopping comprising on the MYSQL, ReactJS, NodeJS and ExpressJS. It is a Final project for the course Database Management Systems CS-222

# ABSTRACT:

HOMOFY is an Ecommerce Website for shopping. It will use database to store different
products of an Online shopping like Clothing, Home appliances, Sports goods etc. It will store
information about price, colors, material and other information regarding products. Moreover, it
will also store information about admins and users.

Users are able to create account first, afterward they are able to continue their shopping.
While admins have the authority to manage the stock by adding/deleting the products in the stock
  


# TECHNOLOGIES USED:
## DATABASE USED:
- MYSQL
## TOOLS:
- MYSQL Workbench
- MYSQL command Line
## FRONTEND:
The frontend involves React JS and Bootstrap.
### In React JS we have used these Components:

- Header
- Carosel
- Card
- Footer

### Containers/pages:
- Home
- Admin
- SignInUp
- Login
- SignUp
- Dashboard
- Cart

## ROUTERS (for routing on containers (pages))

## HOOKS (to use functionalities of class components in functional components)
- useState (to use states)
- useEffect (to render components)
- useHistory (to route on pages on condition)

## API's USED:
- Fetch() 
- Axios

## BACKEND:
The backend of this project is implemented in Node JS and Express JS.
Brief explanation of all routes is given as follows:
The default route leads to the homepage.


## ./
This is the home route of this application which renders the home component and here all the
products of the website will be shown to the user.
## /adminlogin
This route will redirect to the Admin Login Component where an admin can login via his email
and password in order to add products or delete products.
## /userlogin
This route will redirect the user to the user login component where a user can login with his
credentials in order to make any order. This also authenticate the credentials of user whether he
or she has inserted the right credentials according to the database.
## /addproduct
This route is giving a response to admin, and redirects the admin to the component where the
admin can add any product by filling all the fields of the form of Add Product i.e Dashboard.
## /delproduct/:dProdName
This route is giving response to admin to delete any product by giving product name into the
particular field and that particular field passes through this route as params.
## /userSignin
This route will redirect the user to the Sign Up component where he can register himself by
giving specific records that would be saved in the database after completion of registration.
## /Cart
This route will redirect the user to the cart component when user wants to add some products to
the cart

## ER DIAGRAM

![ERD](https://user-images.githubusercontent.com/70211234/133906034-180007a8-69dd-4517-a435-1f079cb52ebe.jpg)


## Workbench Environment

![1 1](https://user-images.githubusercontent.com/70211234/133905600-416643c2-c3f6-47c3-b423-875283c01c46.jpg)


![2 1](https://user-images.githubusercontent.com/70211234/133905606-e4f2f63e-411e-417d-a993-04f9681d7cf4.jpg)

# ADMIN DB

![3](https://user-images.githubusercontent.com/70211234/133905622-e3b1ec05-b826-4e8a-b40c-deb02449a8a0.png)

# Customer DB

![4](https://user-images.githubusercontent.com/70211234/133905632-b3128f14-9c00-4b49-8857-2bf0a6c00d95.png)

# ORDER DB

![5](https://user-images.githubusercontent.com/70211234/133905641-da2065e5-106c-4601-84d3-e708fd08aa80.png)

# PRODUCT DB

![7](https://user-images.githubusercontent.com/70211234/133905651-05c22bc6-b6bc-466d-8fce-49f235c1eb7a.png)

# SHIPPER DB

![8](https://user-images.githubusercontent.com/70211234/133905662-5e9b636a-1ba9-407c-b772-7f90324e7611.png)


# SQL QUERRIES

![9](https://user-images.githubusercontent.com/70211234/133905667-2e5ce9bb-a86b-4e70-afbf-f0c670c7aec1.png)


![10](https://user-images.githubusercontent.com/70211234/133905680-8a733c97-97ba-414b-94fe-95f644afaa0c.png)

![11](https://user-images.githubusercontent.com/70211234/133905683-ddfc8438-bfe1-4c55-881d-a58878f01d03.png)


![12](https://user-images.githubusercontent.com/70211234/133905689-da5f442a-850f-4c41-81ce-c9c9feb5a0ae.png)


