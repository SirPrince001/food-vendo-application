# Food Ordering API

 ## Register New vendor
 > this route allows you to create and register new vendor

 - **ENDPOINT:** `/api/v1/vendorsignup` 
 - **METHOD:** `POST`
 - **BODY:**

 ```json
 {
    
    "businessName":"emyjakata1",
    "name":"emeka",
    "email":"emyjakata11@gmail.com",
    "password":"emyjakata1",
    "phone":23480979654
 }
 ```

 - *Response:*

 ```json
 {
     "status": "Successful",
    "responseMessage": {
        "data": {
            "dateTimeCreated": "2020-08-14T08:42:51.568Z",
            "role": "Vendor",
            "_id": "5f3653191069c5071906c7f7",
            "businessName": "emyjakata1",
            "name": "emeka",
            "email": "emyjakata11@gmail.com",
            "phone": 23480979654,
            "__v": 0
        }
    }
 }
```

## Register New Customer
 > this route allows to create and register new Customer

 - **ENDPOINT:** `/api/v1/signup`
 - **METHOD:** `POST`
 - **BODY:**
 ```json
 {
    "name":"urumsinachi",
    "email":"urumsinachi@gmail.com",
    "password":"urumsinachi",
    "phone":2348097965490
 }
 ```
 - *Response:*
 ```json
 {
      "status": "Succesful",
    "response": {
        "customerData": {
            "dateTimeCreated": "2020-08-14T08:42:51.568Z",
            "role": "Customer",
            "_id": "5f3654a31069c5071906c7f8",
            "name": "urumsinachi",
            "email": "urumsinachi@gmail.com",
            "phone": 2348097965490,
            "__v": 0
        }
    }
 }
 ```

 ## Login User for both vendor and customer
  > this route allows both Vendor and Cusomer to sign in using email and password,then       generate token for login user

  - **ENDPOINT:** `/api/v1/login`
  - **METHOD:** `POST`

  - **BODY:** 
  ```json
   {
      "email":,
      "password":
  } 
  ```
  - *Response for Customer Login:*
 ```json
    {
      "status": "Login Successful",
     "customer": {
        "dateTimeCreated": "2020-08-14T08:42:51.568Z",
        "role": "Customer",
        "_id": "5f3654a31069c5071906c7f8",
        "name": "urumsinachi",
        "email": "urumsinachi@gmail.com",
        "password": "$2a$12$Z.p7aOEkYngIheJ5ciA4H.PJYVsjxzNnnhcolvfXaVq/UiY3YxuxC",
        "phone": 2348097965490,
        "__v": 0
    },
    "customer_Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzY1NGEzMTA2OWM1MDcxOTA2YzdmOCIsIm5hbWUiOiJ1cnVtc2luYWNoaSIsImVtYWlsIjoidXJ1bXNpbmFjaGlAZ21haWwuY29tIiwicGhvbmUiOjIzNDgwOTc5NjU0OTAsInJvbGUiOiJDdXN0b21lciIsImlhdCI6MTU5NzM5ODQ5MX0.OuHLDOaZZAybln03W0FesgkD30uhoVZD8m3t6q6lZSY"
 }
 
 
 

  - *Response for Vendor Login:*
 {
      "status": "Login Successful",
     "customer": {
        "dateTimeCreated": "2020-08-14T08:42:51.568Z",
        "role": "Vendor",
        "_id": "5f3653191069c5071906c7f7",
        "businessName": "emyjakata1",
        "name": "emeka",
        "email": "emyjakata11@gmail.com",
        "password": "$2a$12$eZOkJqvD07cy8BbIDvU2oeCj3bYuiK3LkfZ4lywkfUmsbZSNqrqqC",
        "phone": 23480979654,
        "__v": 0
    },
    "customer_Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzY1MzE5MTA2OWM1MDcxOTA2YzdmNyIsIm5hbWUiOiJlbWVrYSIsImVtYWlsIjoiZW15amFrYXRhMTFAZ21haWwuY29tIiwicGhvbmUiOjIzNDgwOTc5NjU0LCJyb2xlIjoiVmVuZG9yIiwiaWF0IjoxNTk3Mzk4OTI0fQ.q5pX4bsRbYG52-J8KK1-PcjCeTtoUDen37q6rzQUTYg"
 }
 ```

  ## Create Menu by Vendor
   > this route allows only vendor to create menu of food

   - **ENDPOINT:** `/api/v1/create-menu"`
   - **METHOD:** `POST`
   - **BODY:**
   ```Json
   {
       "name":"Nivea Cream For Men",
       "description":"Helps keep the body radiating for 24hrs",
       "quantity":50,
       "price":2500
   }
  ```
  - *Response*
  ```json
  {
       "status": "Successful",
     "menu": {
        "dateTimeCreated": "2020-08-14T09:48:04.973Z",
        "vendorId": [],
        "_id": "5f36651df026a4100ec78154",
        "name": "Nivea Cream For Men",
        "description": "Helps keep the body radiating for 24hrs",
        "price": "2500",
        "quantity": 50,
        "__v": 0
    }
  
  }
  ```

  ## Update Menu by ID*
   > this route allows only vendor with token to edit and update Menu

   **ENDPOINT:** `/api/v1/update-menu/:id`

   **METHOD:** `POST`

   **BODY:**
   ```json
   {
       "name":"Nivea Cream For Men and Women",
       "description":"Helps keep the body radiating for 24hrs and also smooth the skin",
       "quantity":150,
       "price":250000
   }
   ```
   - *Response*
   ```json
   {
       "status": "Successful",
    "updated_menu": {
        "dateTimeCreated": "2020-08-14T11:35:17.947Z",
        "vendorId": [],
        "_id": "5f367fbf3133892e15d81de2",
        "name": "Nivea Cream For Men and Women",
        "description": "Helps keep the body radiating for 24hrs and alsom smooth the skin",
        "price": "250000",
        "quantity": 150
    }
    ```
   }











