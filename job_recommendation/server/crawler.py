# load the library
from bs4 import BeautifulSoup as Soup
import urllib, requests, re, pandas as pd

def visible(element):
    if element.parent.name in ['style', 'script', '[document]', 'head', 'title']:
        return False
    elif re.match('<!--.*-->', str(element.encode('utf-8'))):
        return False
    return True


f = open("debug.txt", 'w+')
# input 
keywords = ['data', 'science']
locations = ['new', 'york']
job_type = 'fulltime'
sort_by = 'date'  # sort by data

q = "+".join(word for word in keywords)
loc = "+".join(word for word in locations)

home_url = "http://www.indeed.com"
base_url = 'http://www.indeed.com/jobs?q=' + q + '&l=' + loc + '&jt=' + job_type + '&sort=' + sort_by + '&start='

job_listings = []
for page in range(1, 2):
    job_index = (page - 1) * 10
    
    search_url = base_url + str(job_index)  # get full url
    print(search_url)
    search_soup = Soup(urllib.urlopen(search_url), "lxml")
    
    elements = search_soup.find_all('div', attrs={"class": re.compile(".*row.*result")})

    # elements = search_soup.find_all('div', attrs={"class": "row result"})
    # print("total", len(elements), "joblistings")
    # elements += search_soup.find_all('div', attrs={"class": " row result"})
    # print("total", len(elements), "joblistings")
    # elements += search_soup.find_all('div', attrs={"class": "lastRow row result"})
    # print("total", len(elements), "joblistings")
    # f.write(str(elements))
    print("total", len(elements), "joblistings")
    # get info of each job
    for elem in elements:
        comp_name = elem.find('span', attrs={'class': 'company'}).getText().strip()
        # print(comp_name)
        job_title = elem.find('a', attrs={'data-tn-element': 'jobTitle'}).attrs['title']
        # print(job_title)
        job_link = home_url + elem.find('a', attrs={'data-tn-element': 'jobTitle'}).attrs['href']
        # print(job_link)
        job_addr = elem.find('span', attrs={'class': 'location'}).getText().strip()
        # print(job_addr)
        
        # add a job info to our data frame
        current_job = {'comp_name': comp_name, 'job_title': job_title,'job_link': job_link, 'job_location': job_addr}
        # f.write(str(current_job))
        job_listings.append(current_job)

# get bag of words
for i in range(0,len(job_listings)):  # get all joblisting details
# for i in range(1,2):  # get all joblisting details (
    job_url = job_listings[i]['job_link']
    print("job_url:", job_url)
    if job_url != None:
        job_soup = Soup(urllib.urlopen(job_url), "lxml")
        details = job_soup.findAll(string=visible)
        job_listings[i]['details'] = details
        # f.write(str(details))

        # for ele in detail_elements:
        #     details = ele.getText()
        #     print(details)
        #     f.write(details.encode('utf-8').strip())


f.close()









