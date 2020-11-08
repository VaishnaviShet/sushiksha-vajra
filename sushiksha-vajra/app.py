from flask import Flask, render_template
import jinja2
import pyjokes
from joke_generator import joke_generator
import time

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html') #this is the home page

@app.route('/todo')
def todo():
    return render_template('index1.html') #it will lead to todo 

@app.route('/wordcounter')
def wordcounter():
    return render_template('index2.html') # it will lead to word counter

@app.route('/jokes')
def jokes():
    return render_template('index3.html') #it will lead ot joke


@app.route('/joke')
def getting_joke():
    new_joke = joke_generator.generate()
    return render_template('result3.html', new_joke=new_joke)

app.run(debug=True)