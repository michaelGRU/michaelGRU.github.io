from pyvis.network import Network
import networkx as nx
import matplotlib.pyplot as plt

G = nx.Graph()
G.add_edges_from(
    [
        ("my skills", "programming"),
        ("programming", "Python"),
        ("programming", "R"),
        ("programming", "SQL"),
        ("programming", "Unix Shell"),
        ("programming", "HTML/CSS/JS"),
        ("Unix Shell", "Bash"),
        ("Unix Shell", "Zsh"),
        ("SQL", "PostgreSQL"),
        ("SQL", "SQL Server"),
        ("my skills", "visualization"),
        ("visualization", "Gephi"),
        ("visualization", "Tableau"),
        ("my skills", "applied mathematics"),
        ("applied mathematics", "matrix algebra"),
        ("applied mathematics", "differential equations"),
        ("applied mathematics", "statistics"),
        ("statistics", "Machine Learning"),
        ("statistics", "probability distributions"),
        ("Machine Learning", "supervised"),
        ("Machine Learning", "unsupervised"),
        ("my skills", "social sciences"),
        ("social sciences", "social processes"),
        ("social sciences", "classical theories"),
        ("social sciences", "social network analysis"),
        ("social network analysis", "Gephi"),
        ("social network analysis", "stochastic modeling"),
        ("statistics", "stochastic modeling"),
        
        ("programming", "MATLAB"),
        ("programming", "Java")
    ]
)


nt = Network(height="100%", width="100%")

nt.add_node("my skills", color="rgba(255,0,0, 0.8)", shape="star")
nt.add_node("social sciences", color="#add8e6")
nt.add_node("applied mathematics", color="#add8e6")
nt.add_node("programming", color="#add8e6")
nt.add_node("visualization", color="#add8e6")

nt.add_node("Python", shape="image", 
            image="icon/python.png",
            size=10)

nt.add_node("R", shape="image", 
            image="icon/R.png",
            size=10)
nt.add_node("Bash", shape="image", 
            image="icon/linux.png",
            size=15)

nt.add_node("Zsh", shape="image", 
            image="icon/mac.png",
            size=9)


nt.add_node("PostgreSQL", shape="image", 
            image="icon/postgre.png",
            size=12)
nt.add_node("SQL Server", shape="image", 
            image="icon/sqlserver.png",
            size=17)

nt.add_node("SQL", shape="image", 
            image="icon/db.png",
            size=10)

nt.add_node("Unix Shell", shape="image", 
            image="icon/terminal.png",
            size=10)
nt.add_node("MATLAB", shape="image", 
            image="icon/matlab.png",
            size=10)
nt.add_node("HTML/CSS/JS", shape="image", 
            image="icon/web.png",
            size=10)

nt.add_node("Java", shape="image", 
            image="icon/java.png",
            size=15)

nt.add_node("Java", shape="image", 
            image="icon/java.png",
            size=15)

nt.add_node("differential equations", shape="image", 
            image="icon/calculus.png",
            size=15)
nt.add_node("matrix algebra", shape="image", 
            image="icon/matrix.png",
            size=15)

nt.add_node("probability distributions", shape="image", 
            image="icon/distribution.png",
            size=15)

nt.add_node("statistics", shape="image", 
            image="icon/probability.png",
            size=15)
nt.add_node("Machine Learning", shape="image", 
            image="icon/ml.png",
            size=15)

nt.add_node("supervised", shape="image", 
            image="icon/super.png",
            size=12)
nt.add_node("unsupervised", shape="image", 
            image="icon/unsuper.png",
            size=12)

nt.add_node("stochastic modeling", shape="image", 
            image="icon/mcmc.png",
            size=10)

nt.add_node("social network analysis", shape="image", 
            image="icon/sna.png",
            size=15)

nt.add_node("Tableau", shape="image", 
            image="icon/tableau.png",
            size=15)

nt.add_node("Gephi", shape="image", 
            image="icon/gephi.png",
            size=10)
nt.add_node("classical theories", shape="image", 
            image="icon/socio.png",
            size=15)
nt.add_node("social processes", shape="image", 
            image="icon/process.png",
            size=15)


nt.force_atlas_2based()

nt.from_nx(G)
nt.show("network_viz.html")

