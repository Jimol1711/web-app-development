import pymysql

def getArtesano():
    artesano = pymysql.connect(
        db = 'artesano_db'
        
    )