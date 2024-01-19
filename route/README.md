# API EndPoints

---

**GET** /api/all
This endpoint gets all info in the database, I mean everything in the axia database.

**GET** /api/myData
This endpoint gets a specific info user database. A query data should be parsed to get info from the user database.

_Request:_
![Alt text](image-6.png)
_Response:_
![Alt text](image-7.png)

**GET** /api/investmentPackage
This endpoint gets info in the package database. A query data should be parsed to get information from the Package database.

_Request:_
![Alt text](image-8.png)

_Response:_
![Alt text](image-9.png)

**POST** /api/signup
This endpoint is responsible for signups into the axia database. it also validates input data and returns results to the frontend for display. Below is Snippet of the request and response in postman App.

_Request:_
![Alt text](image.png)
_Respose:_
![Alt text](image-1.png)

**POST**/api/login
This endpoint is responsible for login into the axia database. it also validates user input and returns results to the frontend for display. Below is Snippet of the request and response in postman App.

_Request:_
![Alt text](image-2.png)

_Response:_
![Alt text](image-3.png)

**DELETE** /api/delete
This endpoint is responsible for deleting accounts from axia database. it also validates user before deletion.

_Request:_
![Alt text](image-4.png)

_Response:_
![Alt text](image-5.png)

**PUT** /api/investment
This endpoint is responsible for subscription of investment packages. The investment _package_ and _duration_ are parsed to the backend as query params.
example:
http://xx.com/investment/?package=Auto_Trading_&duration=1
