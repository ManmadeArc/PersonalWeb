def validate_data(payload: dict, kind="CREATE"):
    item_configs = {
        "CREATE": {
            "id": (True, "S", "S"),
            "full_name": (True, "S", "S"),
            "personal_website": (True, "S", "S"),
            "city":(False,"S","S")
        },
        "UPDATE": {
            "id": (True, "S", "S"),
            "full_name": (False, "S", "S"),
            "personal_website": (False, "S", "S"),
            "city":(False,"S","S")
        }  
    }
    newObj = {}
    for key, (required, types, sval) in item_configs[kind].items():
        
        if   required and key in payload.keys() and type(payload[key]) == type(types):
            newObj[key] = {sval: payload[key]}
        elif (not required and not key in payload.keys()):
            continue
        elif ( not required and key in payload.keys()  and type(payload[key]) == type(types)):
            newObj[key] = {sval: payload[key]}
        else:
            return False
    return newObj