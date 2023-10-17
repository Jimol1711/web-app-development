from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("templates/index/index.html")

@app.route("/agregar-artesano", methods=("GET", "POST"))
def registrar_artesano():
    return render_template("templates/agregar-artesano.html")

@app.route("/register_artesano", methods=("GET", "POST"))
def agregar_artesano():
    if request.method == 'POST':
        region = request.form.get("region")
        comuna = request.form.get("comuna")
        tipos_artesania = request.form.getlist('tipo_artesania')
        description = request.form.get("descripcion_artesania")
        foto1 = request.form.get("imgs1")
        foto2 = request.form.get("imgs2")
        foto3 = request.form.get("imgs3")
        name = request.form.get("name")
        email = request.form.get("email")
        phone = request.form.get("phone")
