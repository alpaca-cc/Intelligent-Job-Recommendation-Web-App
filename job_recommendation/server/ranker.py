import metapy
from tqdm import *

def load_ranker(cfg_file):
    """
    Use this function to return the Ranker object to evaluate.

    The parameter to this function, cfg_file, is the path to a
    configuration file used to load the index. You can ignore this, unless
    you need to load a ForwardIndex for some reason...
    """
    return metapy.index.OkapiBM25(k1=1.29, b=0.745, k3=500)
    # return PL2Ranker()
    # return metapy.index.PivotedLength(0.33)

def get_results(cfg_file, queries):
    ranker = load_ranker(cfg_file)
    idx = metapy.index.make_inverted_index(cfg_file)
    query = metapy.index.Document()
    top_k = 10

    results = []
    # with open(query_path, 'r') as query_file:
    #     queries = query_file.readlines()

    for line in tqdm(queries):
        line = unicode(line, 'utf-8')
        query.content(line.strip())
        results.append(ranker.score(idx, query, top_k))
    # with open('./supporting_files/results', 'w+') as rs_f:
    #     rs_f.write(str(results))
    return results

def run_ranker(cfg_file, query_file):
    results = get_results('./supporting_files/config.toml', queries)
    return results

if __name__ == "__main__":
    results = get_results('./supporting_files/config.toml', './supporting_files/resume-queries.txt')
    print(results)

