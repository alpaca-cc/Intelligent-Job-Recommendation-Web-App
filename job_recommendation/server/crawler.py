# load the library
from bs4 import BeautifulSoup as Soup
import urllib, re
import json


def visible(element):
    if element.parent.name in ['style', 'script', '[document]', 'head', 'title']:
        return False
    elif re.match('<!--.*-->', str(element.encode('utf-8'))):
        return False
    return True


def run_crawler(keywords, start_page, end_page):
    # f = open("debug.txt", 'w+')
    f_data = open("./indeed/indeed.dat", 'w+')
    # input
    keywords = keywords
    # locations = ['new', 'york']
    locations = []
    # job_type = 'fulltime'
    job_type = ''
    sort_by = 'date'  # sort by date
    q = "+".join(word for word in keywords)
    loc = "+".join(word for word in locations)

    home_url = "http://www.indeed.com"
    base_url = 'http://www.indeed.com/jobs?q=' + q + '&l=' + loc + '&jt=' + job_type + '&sort=' + sort_by + '&start='

    job_listings = []
    for page in range(start_page, end_page):
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

    id = 0
    # get docs. each doc corresponds to one job listing
    for i in range(0,len(job_listings)):  # get all joblisting details
    # for i in range(1,2):  # get all joblisting details (
        try:
            job_url = job_listings[i]['job_link']
            print("job_no:", id)
            if job_url != None:
                job_soup = Soup(urllib.urlopen(job_url), "lxml")
                details_elem = job_soup.find('td', attrs={'class': 'snip'})
                if details_elem != None:
                    details = details_elem.findAll(string=visible)
                else:
                    del job_listings[i]
                    continue
                # details = job_soup.findAll(string=visible)
                try:
                    content = ""
                    for elem in details:
                        elem = elem.encode('utf-8')
                        content += elem
                    content = content.splitlines()
                    content = ' '.join(content)
                    # details  = '.'.join(details)
                    # details = details.splitlines()
                    job_listings[i]['id'] = id
                    job_listings[i]['details'] = content
                    doc = str(job_listings[i]['job_title']) + "." + str(content) + '\n'
                except:
                    del job_listings[i]
                    print ("error!")
                f_data.write(doc)
                id += 1
        except:
            print("loop error")
            break
            
            # for key, val in job_listings[i].items():
            #     # print key
            #     f.write(str(key) + ": " + str(val) + '\n')
            # f.write('\n')

            # for ele in detail_elements:
            #     details = ele.getText()
            #     print(details)
            #     f.write(details.encode('utf-8').strip())
    f_data.close()
    f.close()
    with open('./supporting_files/jobs.json', 'w+') as fout:
        # print("here")
        json.dump(job_listings, fout)
        fout.close()


if __name__ == "__main__":
    run_crawler(['software', 'programming'], 1, 10)









