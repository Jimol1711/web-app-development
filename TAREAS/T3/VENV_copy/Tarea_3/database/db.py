import pymysql
import json

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('database/querys.json', 'r') as querys:
	QUERY_DICT = json.load(querys)

# -- conexión a la base de datos --

def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset=DB_CHARSET
	)
	return conn

# -- funciones para insertar y obtener datos --

def insert_artesano(comuna_id,descripcion,nombre,email,celular):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_artesano"], (comuna_id,descripcion,nombre,email,celular))
	conn.commit()

def insert_hincha(comuna_id,modo_transporte,nombre,email,celular,comentarios):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_hincha"], (comuna_id,modo_transporte,nombre,email,celular,comentarios))
	conn.commit()

def fetch_newest5_artesano(page):
	page = page * 5
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_newest_5_artesano"], (page))
	listado = cursor.fetchall()
	return listado

def fetch_newest5_hincha(page):
	page = page * 5
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_newest_5_hincha"], (page))
	listado = cursor.fetchall()
	return listado

def insert_artesano_tipo(artesano_id,tipo_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_artesano_tipo"], (artesano_id, tipo_id))
	conn.commit()

def insert_hincha_deporte(hincha_id,deporte_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_hincha_deporte"], (hincha_id, deporte_id))
	conn.commit()

def get_tipos_of_artesano(artesano_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_types_of_artesano"],(artesano_id))
	tipos = cursor.fetchall()
	return tipos

def get_deportes_of_hincha(hincha_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_deportes_of_hincha"],(hincha_id))
	deportes = cursor.fetchall()
	return deportes

def insert_img(route,foto,artesano_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_picture"],(route,foto,artesano_id))
	conn.commit()

def get_img(artesano_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_pictures_of_artesano"],(artesano_id))
	picture = cursor.fetchall()
	return picture

# WARNING: get_artesano_id gives the id of the last added artesano
def get_artesano_id():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_last_artesano_id"])
	artesano_id = cursor.fetchone()
	return artesano_id

# WARNING: get_hincha_id gives the id of the last added hincha
def get_hincha_id():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_last_hincha_id"])
	hincha_id = cursor.fetchone()
	return hincha_id

def get_artesano_by_email(email):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_artesano_by_email"], email)
	artesano = cursor.fetchone()
	return artesano

def get_hincha_by_email(email):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_hincha_by_email"], email)
	hincha = cursor.fetchone()
	return hincha

def get_artesano_by_phone(phone):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_artesano_by_phone"], phone)
	artesano = cursor.fetchone()
	return artesano

def get_hincha_by_phone(phone):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_hincha_by_phone"], phone)
	hincha = cursor.fetchone()
	return hincha

def get_region_id(region):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_region_id"], (region))
	region_id = cursor.fetchone()
	return region_id

def get_region_by_id(region_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_region_by_id"], (region_id))
	region = cursor.fetchone()
	return region

def get_comuna_id_by_region_id(region_id,comuna):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_comuna_id_by_region_id"], (region_id,comuna))
	comuna_id = cursor.fetchone()
	return comuna_id

def get_deporte_id(deporte):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_deporte_id"], tipo)
	deporte_id = cursor.fetchone()
	conn.commit()
	return deporte_id

def get_tipo_id(tipo):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_tipo_id"], tipo)
	conn.commit()

def get_comuna_by_id(comuna_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_comuna_by_id"], (comuna_id))
	comuna = cursor.fetchone()
	return comuna

def get_artesano_by_id(id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_artesano_by_id"],(id))
	artesano = cursor.fetchone()
	return artesano

def get_hincha_by_id(id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["get_hincha_by_id"],(id))
	hincha = cursor.fetchone()
	return hincha

def count_artesanos():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["count_artesanos"])
	conteo = cursor.fetchone()
	return conteo

def get_count_artesanos_by_tipo():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["count_artesanos_by_tipo"])
	count_artesanos = cursor.fetchall()
	return count_artesanos

def get_count_hinchas_by_deporte():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["count_hinchas_by_deporte"])
	count_hinchas = cursor.fetchall()
	return count_hinchas

# -- funciones para agregar el artesano y al hincha --

def agregar_artesano(comuna_id,descripcion,nombre,email,phone):
	_email_artesano = get_artesano_by_email(email)
	if _email_artesano is not None:
		return False, "El correo indicado está en uso."
	_phone_artesano = get_artesano_by_phone(phone)
	if _phone_artesano is not None:
		return False, "El número de celular indicado está en uso."
	insert_artesano(comuna_id,descripcion,nombre,email,phone)
	return True, None

def agregar_hincha(comuna_id,modo_transporte,nombre,email,celular,comentarios):
	_email_hincha = get_hincha_by_email(email)
	if _email_hincha is not None:
		return False, "El correo indicado está en uso."
	_phone_hincha = get_hincha_by_phone(celular)
	if _phone_hincha is not None:
		return False, "El número de celular indicado está en uso."
	insert_hincha(comuna_id,modo_transporte,nombre,email,celular,comentarios)
	return True, None

