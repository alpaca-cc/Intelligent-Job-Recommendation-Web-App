from crontab import CronTab

cron = CronTab(user=True)
job = cron.new(command='python crawler.py')
# job1 = cron.new(command='python crawler.py software programming')
# job2 = cron.new(command='python crawler.py electrical engineering')
# job3 = cron.new(command='python crawler.py chemistry')
# job4 = cron.new(command='python crawler.py mechanical engineering')
# job5 = cron.new(command='python crawler.py business')
# job6 = cron.new(command='python crawler.py management')
# job7 = cron.new(command='python crawler.py marketing')
# job8 = cron.new(command='python crawler.py advertising')
# job9 = cron.new(command='python crawler.py arts')
# job10 = cron.new(command='python crawler.py product manager')

job.dow.on('SUN')
# job1.dow.on('SUN') 
# job2.dow.on('SUN') 
# job3.dow.on('SUN') 
# job4.dow.on('SUN') 
# job5.dow.on('SUN') 
# job6.dow.on('SUN') 
# job7.dow.on('SUN') 
# job8.dow.on('SUN') 
# job9.dow.on('SUN') 
# job10.dow.on('SUN') 

cron.write() 
print cron.render()
job_standard_output = job.run()
# job_standard_output1 = job1.run()
# job_standard_output2 = job2.run()
# job_standard_output3 = job3.run()
# job_standard_output4 = job4.run()
# job_standard_output5 = job5.run()
# job_standard_output6 = job6.run()
# job_standard_output7 = job7.run()
# job_standard_output8 = job8.run()
# job_standard_output9 = job9.run()
# job_standard_output10 = job10.run()





# test
# cron = CronTab(user=True)  
# job = cron.new(command='python test_schedule.py')  
# job.minute.on(1) 


# cron.write() 
# print cron.render()

# job_standard_output = job.run()