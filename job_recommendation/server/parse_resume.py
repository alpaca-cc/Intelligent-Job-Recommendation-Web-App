
import textract
# text = textract.process('files/resume.pdf')
# print (text)

if __name__ == "__main__":
    text = textract.process('files/resume.pdf')
    print (text)