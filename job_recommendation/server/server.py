# server.py
from flask import Flask, render_template, request, abort, jsonify, Response, send_file

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello World~!"


@app.route("/get_recommendation", methods=['POST'])
def get_recommendation():
    resume_file = request.files['file']
    print(type(resume_file.file))
    print(resume_file.content_type)
    response = {'message': 'resume received. file name = {}'.format(resume_file.filename)}
    return Response(response=response, status=200, mimetype="application/json")

if __name__ == "__main__":
    app.run(debug=True)