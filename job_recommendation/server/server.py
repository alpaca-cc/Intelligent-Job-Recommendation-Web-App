# server.py
from flask import Flask, render_template

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return "Welcome to Job Recommender"

@app.route("/hello")
def hello():
    return "Hello World~!"


@app.route("/get_recommendation", methods=['POST'])
def get_recommendation():


if __name__ == "__main__":
    app.run()