from fastapi import FastAPI,Request
from mockdata import products
from dtos import ProductDTO
app = FastAPI()

@app.get("/")
def home():
    return "Welcome to FastAPI Series!"

#in fastapi we dont use same routers
@app.get("/connect")
def connect():
    return "You can contact us any time."

@app.get("/products")
def get_products():
    return products 

#path params & query params
#path params -> fix dynamic values 
@app.get("/product/{product_id}")
def get_one_product(product_id:int):
    ## if product avaliable with the id, return product,else return error message.
    for oneProduct in products:
        if oneProduct.get("id") == product_id:
            return oneProduct  
    return{
        "error":"product not Found for this ID"
    }

#Query params-> we dont know how many dynamic values
@app.get("/greet")
def greet_user(request:Request):
    query_params = dict(request.query_params)
    return{
        "greet":f"Hello How are you {query_params.get("name")},your age is {query_params.get("age")}?"
    }
#http://127.0.0.1:8000/greet?name=jyo&age=22

## HTTP METHODS ->
#1. GET - to get something from server
#2. POST - to sent something
#3. PUT{data_id} - to update Data
#4. DELETE{data_id} - to delete something 

# -> all together this are called CRUD
# -> HOW TO VALIDATE DATA - DTOS

@app.post("/create_product")
def create_product(product_data:ProductDTO):
    product_data = product_data.model_dump() #convert pydantic to  normal disct
    products.append(product_data)

    return {"status":"Product Created Successfully...","data":products} 

@app.put("/update_product/{product_id}")
def update_product(product_data:ProductDTO, product_id:int):

    for index, oneProduct in enumerate(products):
        if oneProduct.get("id") == product_id:
            products[index] = product_data.model_dump()
            return {"status":"Product Updated Sucessfully..","product":product_data}

    return{
        "error":"Product not Found for this ID."
        }

@app.delete("/delete_product/{product_id}")
def delete_product(product_id:int):
    for index, oneProduct in enumerate(products):
        if oneProduct.get("id") == product_id:
            deleted_product = products.pop(index)
            return{"status":"Product Deleted Successfully..", "product":deleted_product}
    return {
        "error":"Product not Found for this ID."
    }


#how to call different HTTP methods -> POSTMAN to test api calling
#ways to send data in any endpoints -> body,headers-request headers, query params

#pydantic -> a module helps in data validation
