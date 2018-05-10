
import textract
import metapy


def process_pdf(path):
    text = textract.process(path)
    return text


def preprocess_resume_text(text):
    content_list = text.splitlines()
    # content_list = content_list.remove('')
    print(content_list)
    # print (content_list)


def metapy_process(text, n):
    doc = metapy.index.Document()
    doc.content(text)
    tok = metapy.analyzers.ICUTokenizer(suppress_tags=True)
    tok = metapy.analyzers.ListFilter(tok, "supporting_files/stopwords.txt", metapy.analyzers.ListFilter.Type.Reject)
    tok = metapy.analyzers.LengthFilter(tok, min=1, max=30)
    tok = metapy.analyzers.LowercaseFilter(tok)
    tok = metapy.analyzers.Porter2Filter(tok)
    ana = metapy.analyzers.NGramWordAnalyzer(n, tok)
    tok.set_content(doc.content())
    ngram = ana.analyze(doc)

    tokens, counts = [], []
    for token, count in ngram.items():
        counts.append(count)
        tokens.append(token)
    return tokens

if __name__ == "__main__":
    # text = process_pdf('files/resume.pdf')
    text = process_pdf('files/resume3.docx')
    preprocess_resume_text(text)
    text = unicode(text, 'utf-8')
    # type(text)
    # tokens = metapy_process(text, 3)
    # print(tokens)

    # print (text)