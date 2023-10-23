import re
import filetype

def validate_region(region):
    return region != "Seleccione una Región"

def validate_comuna(comuna):
    return comuna != "Seleccione una Comuna"

def validate_tipo_artesania(tipos_artesania):
    return len(tipos_artesania) >= 1 and len(tipos_artesania) <= 3

def validate_artesania_img(artesania_img1,artesania_img2,artesania_img3):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "pdf"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    if artesania_img1 is None and artesania_img2 is None and artesania_img3 is None:
        return False
    
    if artesania_img1.filename == "" or artesania_img2.filename == "" or artesania_img3.filename == "":
        return False
    
    ftype_guess1 = filetype.guess(artesania_img1)
    ftype_guess2 = filetype.guess(artesania_img2)
    ftype_guess3 = filetype.guess(artesania_img3)
    if ftype_guess1.extension not in ALLOWED_EXTENSIONS or ftype_guess2.extension not in ALLOWED_EXTENSIONS or ftype_guess3.extension not in ALLOWED_EXTENSIONS:
        return False
    
    if ftype_guess1.mime not in ALLOWED_MIMETYPES or ftype_guess2.mime not in ALLOWED_MIMETYPES or ftype_guess2.mime not in ALLOWED_MIMETYPES:
        return False
    
    return True

def validate_name(name):
    return name.length >= 3 and name.length <= 80 and name != None

def validate_email(email):
    regex = r'^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$'
    return re.match(regex, email)

    
def validate_phone(phone):
    regex = r'^9\d{8}$'
    return re.match(regex, phone)
    
def validate_artesano(region,comuna,tipos,img1,img2,img3,name,email,phone):
    return (validate_region(region) 
            and validate_comuna(comuna) 
            and validate_tipo_artesania(tipos) 
            and validate_artesania_img(img1,img2,img3) 
            and validate_name(name) 
            and validate_email(email) 
            and validate_phone(phone))