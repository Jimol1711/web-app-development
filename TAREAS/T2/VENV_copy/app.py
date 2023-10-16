from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("templates/index.html")

@app.route("/register_artesano", methods=["GET", "POST"])
def register():