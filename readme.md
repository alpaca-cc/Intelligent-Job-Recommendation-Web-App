# Intelligent Job Recommendation Web App


#### 1. An overview of the function of the code (i.e., what it does and what it can be used for). 


This project is a simple web application that allows users to upload a resume, then get recommendations of jobs from indeed according to the information provided in the resume. In this way it will minimize the effort from users and save their time. It is a simple yet highly automated recommending system and gives our users customized recommendations. The job listings could be set up to updated periodically so that the recommendation will be updated over time.


#### 2. Documentation of how the software is implemented with sufficient detail so that others can have a basic understanding of your code for future extension or any further improvement. 

The web app is implemented using Flask as back-end and npm, webpack, react as front-end.
	
For recommendation, it used metapy package to build a simple search and rank system. The user's resume is parsed and used as the query. One resume is one query. The job description, summary and so on for the job listings are used as the documents to be ranked. One job listing is one document. For the analyzer, a unigram word analyzer with icu-tokenizer, lowercase, length, stopwords remover (list), empty sentence, porter2-stemmer filters is used. A bm25 ranker with k1=1.29, b=0.745, k3=500 is used as the ranking function. Currently, the first 20 job listings with the highest rank are shown to the users as their recommendation based their resume. User also have to select a field of interest in order to get job listings from this particular field. Currently, 10 different fields are supported.

For further improvement and future extension, we think we can evaluate and improve the recommender. For example, we can add feedback to the recommender based on user activities such as clicking on the recommended job listings. We could also make the system more automatic by grabbing keywords from user's resume instead of asking the user to select a field. Right now, the crawling process took some time, so if we use keywords from user's resume and crawl indeed in real-time, it would take too long to crawl a sufficient amount of job listings and compute rankings to show to the user. Moreover, other informations such as locations, job types and so could also be included in the system. But to have a highly automatic system, we have to come up with a way to get these information.


#### 3. Documentation of the usage of the software including either documentation of usages of APIs or detailed instructions on how to install and run a software, whichever is applicable. 

The applicaiton has a structure as follows:

	server/ -- app.py
           	   crawler.py
           	   parse_resume.py
           	   ranker.py
           	   scheduler.py
        	-- files/
        	-- indeed/
        	-- server_files/
            
	static/ -- index.html
           	   package-lock.json
           	   package.json
           	   webpack.config.js
        	-- dist/
        	-- scripts/
           
This web app contains two main parts in two folders under 'job_recommendation/', a server folder 'server/' and a website folder 'static/'.

The server folder contains scripts used to run the website, process resume sent from the client, parse and run a ranker, and a crawler and a scheduler that can be used to run periodically (currently set to once per week) to get job listings from indeed. We used Flask to implement our server, Metapy to handle the ranking. The other folder contains supporting files for the server.
	
files/ folder are some sample resumes we used to test.

indeed/ folder contains data and their corresponding config files for different fields. We had 10 fields in total, which are: advertisement(ad), art(art), business(bu), chemistry(ch), electrical engineering(ee), management(ma), material engineering(me), marketing(mk), product manager(pm) and software programming(sp). Each folder contains the first 10 pages of recent job postings in this field.

server_files/ is a folder for the server (app.py) to store received and parse files.

The static folder contains the web pages that will be shown to the users. We used npm, webpack and react for this part. The react script are in static/scripts/ and the entry point is index.jsx inside this folder. 

To run the application, you first need to prepare a python virtual environment (or just install all the necessary packages without setting up a venv, which would also work, but just less organized). We used Anaconda for the package and environment management. The main packages we used are: python 2.7.14, textract (for resume parsing), metapy. If you run into import error, you can add the require package with 

	pip install package_name

With the environment prepared, to run the web application, go into static/ and run:

	npm install

then go into server/ and run:

	python app.py

to start the server. Then, open a web browser and go to http://localhost:5000/ which should lead you to the main page where you can upload your resume.


#### 4. Brief description of contribution of each team member in case of a multi-person team.

Chen Chen: Implemented server, interaction of frontend and backend, resume parsing; gathered indeed data; built ranking function.

Siyang Liu: Implemented indeed crawler, scheduler; constructed job recommendation list page.

Hanyu Zhang: Implemented front end website layout, resume upload.