from flask import Flask, request, render_template, redirect, url_for
from utils.validations import validate_artesano
from database.db import *
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/registro-artesano", methods=["GET", "POST"])
def registrar_artesano():
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
        #if validate_artesano(region,comuna,tipos_artesania,foto1,foto2,foto3,name,email,phone):
            #status, message = agregar_artesano()

    return render_template("agregar-artesano.html")

@app.route("/informacion-artesanos", methods=["GET"])
def ver_artesanos():
    return render_template("ver-artesanos.html")

if __name__ == "__main__":
    app.run(debug=True)