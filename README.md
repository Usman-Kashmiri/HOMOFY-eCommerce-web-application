

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

