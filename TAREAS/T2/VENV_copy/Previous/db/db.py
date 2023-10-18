import pymysql
import json

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('db/querys.json', 'r') as querys:
	QUERY_DICT = json.load(querys)

# conexión a la base de datos

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

# funciones para insertar y obtener datos

def agregar_artesano(comuna_id,descripcion,nombre,email,celular):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["insert_artesano"], (comuna_id,descripcion,nombre,email,celular))
	conn.commit()

def fetch_newest():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_new_to_old"])
	listado = cursor.fetchall()
	return listado

def fetch_newest5():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_newest_5"])
	listado = cursor.fetchall()
	return listado

def fetch_next_newest5():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_next_newest_5"])
	listado = cursor.fetchall()
	return listado

def fetch_next_newest5_by_comuna():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute(QUERY_DICT["select_next_newest_5_by_comuna"])
	listado = cursor.fetchall()
	return listado

def agregar_artesano(comuna_id,description,nombre,email,phone):