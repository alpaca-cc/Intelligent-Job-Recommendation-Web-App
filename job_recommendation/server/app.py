# server.py
from flask import Flask, render_template, request, abort, jsonify, Response, send_file
import parse_resume as pr
import ranker as rk
import sys
import json
from pprint import pprint

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route('/')
def index():
    return render_template("index.html")

# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def catch_all(path):
#     return render_template("index.html")


@app.route("/hello")
def hello():
    return "Hello World3~!"


def prepare_results(results, json_file):
    with open(json_file) as f:
        data = json.load(f)
    json_list = []
    for result in results:
        for entry  in result:
            json_list.append(data[entry[0]])
    return json.dumps(json_list)
    # print(data[0])
    # for result_list in results:




@app.route("/get_recommendation", methods=['POST'])
def get_recommendation():
    # print("reached endpoint...\n")
    try:
        resume_file = request.files['file']
        filename = resume_file.filename
        selected_area = request.form['area'].lower()
        cfg = "./indeed/{}/config.toml".format(selected_area)
        print(filename)
        sys.stdout.flush()
        resume_file.save(".//server_files//" + filename, buffer_size=16384)
        resume_file.close()
        pr.run_parse_resume("./server_files/" + filename)
        # print(len(query))
        # print(cfg)
        results = rk.run_ranker(cfg, "./server_files/resume-query.txt", 20)
        print(results)
        sys.stdout.flush()
        json_file = "./indeed/{}/jobs.json".format(selected_area)
        json_list = prepare_results(results, json_file)
        # print(json_list)
        # response = {'message': 'resume received. file name = {}'.format(filename)}
        # print ("up here")
        return Response(response=json_list, status=200, mimetype="application/json")
    except:
        # print ("here!")
        response = json.dumps([])
        return Response(response=response, status=200, mimetype="application/json")


if __name__ == "__main__":
    app.run()