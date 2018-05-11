# server.py
from flask import Flask, render_template, request, abort, jsonify, Response, send_file
import parse_resume as pr
import ranker as rk


app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello World3~!"


@app.route("/get_recommendation", methods=['POST'])
def get_recommendation():
    # print("reached endpoint...\n")
    cfg = "./supporting_files/config.toml"
    resume_file = request.files['file']
    # resume_file.save(s, buffer_size=16384)
    filename = resume_file.filename
    # print(filename)
    resume_file.save(".//server_files//" + filename, buffer_size=16384)
    resume_file.close()
    query = pr.run_parse_resume("./server_files/" + filename)
    # print(query + "\n")

    results = rk.run_ranker(cfg, query, 10)
    # print(results)


    response = {'message': 'resume received. file name = {}'.format(filename)}
    return Response(response=response, status=200, mimetype="application/json")

if __name__ == "__main__":
    app.run()