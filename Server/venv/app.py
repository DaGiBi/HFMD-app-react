from datetime import datetime
from flask import Flask, jsonify, send_file
from flask import request
import requests
import os
from tensorflow.python.keras.models import load_model
import numpy as np
import json
import base64
import io
from pymongo import MongoClient, errors
# import pymongo
# from flask_pymongo import PyMongo

from bson import Binary, ObjectId

import tensorflow as tf
from flask_cors import CORS
APP_ROOT = os.path.abspath(os.path.dirname(__file__))

client = MongoClient('mongodb://localhost:27017/')
db = client['hfmd-db']
users_collection = db['hfmd_db_collection']

model =  tf.keras.models.load_model('venv/VGG16vgg16_model.h5')


with open('venv/labels.json', 'r') as f:
    category_names = json.load(f)
    img_classes = list(category_names.values())

# Pre-processing images
def config_image_file(_image_path):
    predict = tf.keras.preprocessing.image.load_img(_image_path, target_size=(224, 224))
    predict_modified = tf.keras.preprocessing.image.img_to_array(predict)
    predict_modified = predict_modified / 255
    predict_modified = np.expand_dims(predict_modified, axis=0)
    return predict_modified


# Predicting
def predict_image(image):
    result = model.predict(image)
    print(result)
    return np.array(result[0])


# Working as the toString method
def output_prediction(filename):
    _image_path = f"{filename}"
    img_file = config_image_file(_image_path)
    results = predict_image(img_file)
    probability = np.max(results)
    index_max = np.argmax(results)
    print(img_classes)
    return {
            "prediction": str(img_classes[index_max]),
            "probability": str(probability)
        }


app = Flask(__name__)
CORS(app)
app.config['TESTING'] = True
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/hfmd-db'
# mongo = PyMongo(app)


# Test route
@app.route('/test', methods=['POST'])
def test():
    return 222
    # online_users = mongo.db.users.find({"online": True})
    # return render_template("index.html",
    #     online_users=online_users)

@app.route('/api/predict', methods=['POST'])
def get_disease_prediction1():
    # start_path = 'venv/images' # current directory
    # for path,dirs,files in os.walk(start_path):
    #     for filename in files:
    #         print (os.path.join(path,filename))
    data = request.form.get('image')
    date= datetime.now()
    name = request.form.get('name')
    password = request.form.get('password')
    
    user = db.hfmd_db_collection.find_one({'name': name})
    if not user:
        return 'User not found', 404

    # print('1')
    if data:
        # Remove the data URL prefix
        image_data = data.replace('data:image/png;base64,', '')
        # Decode the base64 data
        print('1')
        decoded_image = base64.b64decode(image_data)
        # Save the image to disk or process it further
        try:
            with open('venv/images/image.png', 'wb') as f:
                f.write(decoded_image)
                print('Image saved successfully')
                with open("venv/images/image.png", 'rb') as f:
                    image_data = f.read()
                    binary_data = Binary(image_data)
                    print("121")

                new_image= {
                        'data': binary_data,
                        'date': date
                    }
                
                # Append the new image to the user's images array
                user['images'].append(new_image)
                
                # Update the user document in the database
                db.hfmd_db_collection.update_one({'name': name}, {'$set': {'images': user['images']}})
                
                print("Image added to user successfully")
            
                result = output_prediction('venv/images/image.png')
                return jsonify(result)
        except OSError as e:
            print(f'Error saving image: {e}')
    else:
        return 'No image found in request', 400



@app.route('/api/test', methods=['POST'])
def get_disease_prediction():
    # start_path = 'venv/images' # current directory
    # for path,dirs,files in os.walk(start_path):
    #     for filename in files:
    #         print (os.path.join(path,filename))
    data = request.form.get('image')
    date= datetime.now()
    name = request.form.get('name')
    password = request.form.get('password')
    location = request.form.get('location')
       
    
    # Return a JSON response with the ID of the inserted document
    # return jsonify({'id': str(result.inserted_id)})

    # print('1')
    if data:
        # Remove the data URL prefix
        image_data = data.replace('data:image/png;base64,', '')
        # Decode the base64 data
        print('1')
        decoded_image = base64.b64decode(image_data)
        # Save the image to disk or process it further
        try:
            with open('venv/images/image.png', 'wb') as f:
                f.write(decoded_image)
                print('Image saved successfully')
                with open("venv/images/image.png", 'rb') as f:
                    image_data = f.read()
                    binary_data = Binary(image_data)
                    print("121")

                user= {
                    'name': name,
                    'password': password,
                    'location': location,
                    'images': [
                        {
                            'data': binary_data,
                            'date': date
                        }
                    ]
                }
                result1 = db.hfmd_db_collection.insert_one(user)
                print(str(result1.inserted_id))
                result = output_prediction('venv/images/image.png')
                return jsonify(result)
        except OSError as e:
            print(f'Error saving image: {e}')
        
    else:
        return 'No image found in request', 400



@app.route('/image', methods=['GET'])
def get_image():
     
    name = request.args.get('name')
    # Query the user document by name
    user = users_collection.find_one({'name': name })

    # Get the URL of the first image in the images array
    url = user['images'][0]['data']

    return url

@app.route('/images', methods=['GET'])
def get_images():
    name = request.args.get('name')
    # Retrieve the image data for the requested object ID
    
    
    data = db.hfmd_db_collection.find_one({'name': name},{'_id': 0,'images': 1})
                                          
    #                                     #   , {'_id': 0, 'images': 1}
    #                                     # )
    # # Iterate through the array of image data and decode each image
    # # images = data['images']
    # # print(data)
    images = []
    for image in data['images']:

        # decoded_image = base64.b64decode(image['data'])
        # image['data'] = decoded_image
        base64_data = base64.b64encode(image['data']).decode('utf-8')
        # images.append(image)
        # binary_data = image['data']
        # ['$binary']
        # decoded_data = base64.b64decode(binary_data['base64'])
        # print(index)
        # print(val)
        # binary_data = val[index]['data']
        # print(binary_data)
        # decoded_data = base64.b64decode(binary_data['base64'])
        images.append({
            'data': base64_data,
            'date': image['date']
        })
        # decoded_images.append({
        #     # 'data': decoded_data
        #     # ,
        #     # 'date': image['date']['$date']
        # })

    # Create a JSON response object containing the image data
    # print("done")
    # print(len(images))
    response = {
        'images': images
    }
    # return images
    return jsonify(response)


@app.route('/countMonth')
def get_data():
    db = client['hfmd-db'] # replace 'mydatabase' with your database name
    data = db['hfmd_db_collection']
    pipeline = [
        {
            '$group': {
                '_id': {'$substr': ['$date', 0, 7]}, # group by year and month
                'count': {'$sum': 1} # count the number of images in each group
            }
        }
    ]
    result = list(data.aggregate(pipeline))
    return jsonify(result)

@app.route('/api/createUser', methods=['POST'])
def insertUser():
    name = request.form.get('userName')
    # date= datetime.now()
    # name = request.form.get('name')
    password = request.form.get('userPassword')
    location = request.form.get('location')
    
    user= {
                    'name': name,
                    'password': password,
                    'location': location,
                    'images': []
            }
    result1 = db.hfmd_db_collection.insert_one(user)
    print(str(result1.inserted_id))
    return "done"   
    
@app.route('/api/getLocation', methods=['GET'])
def getAddress():
    url = "https://nominatim.openstreetmap.org/reverse?lat=3.0709604&lon=101.4834197&zoom=10&format=json"
    print("in")
    response = requests.get(url)
    if isinstance(response, list):
            response = response[0]
    return (response)
    if response.status_code == 200:
        data = response.json(url)
        return(data)
    else:
        print("Error fetching data from OpenStreetMap API")





@app.route("/")
def hello_world():
    return "<p>Hellodd, sa!</p>"
# Run Server
if __name__ == '__main__':
    app.run(port=5000 , debug= True)  # ni memang letak ip address sendiri , check kat cmd




