def get_request(id,optional="DEBUG"):
    if not id or type(id) != type(""):
        return {"statusCode": 400, "body": "Not parameter passed"}

    key = {"id": {"S": id}}

    response = DyanamoDb.get_item(TableName=Table, Key=key)

    if "Item" in response.keys():
        Item =response["Item"]
        newit = parseRawResponse(Item)
        newit['weather'] = get_weather(Item)
        return {
            "statusCode": 200,
            "body": json.dumps(newit, indent=4),
        }
    else:
        return {"statusCode": 404, "body": "No User Found"}