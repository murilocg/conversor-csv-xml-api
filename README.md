# Conversor from CSV to XML

On some occasions, we need to parse a file from one type to another. This REST API converts CSV files into XML files, allowing the user to create your own rules to validate each field from the CSV.

## Requirements
- AWS CLI (Latest)
- NodeJS (12.x)

## Starting the application
To start the application execute the command `yarn && yarn start`. The application will start in the port 4000 by default.

## Examples of use

To convert a file, you'll need to do a POST on the path http://localhost:4000/converter of the API. The body of the post needs to have the following structure:
```json
{
    "source": {
        "type": "fs",
        "path": "/database",
        "fileName": "test.csv"
    },
    "rules": [
        {
            "field": "Age",
            "operator": "lte",
            "value": 26
        },{
             "field": "Name",
             "operator": "notNull"
        }
    ]
}
```
The field 'source' specifies which type of file handler will be used. Currently, we've two types: 'fs' and 's3'. The second field, 'rules', specifies the validations that we want to each column.

## Sources types

Source | Description
--- | ---
fs | File handler to the local file system. This type needs to receive the parameters "path" and "fileName" .
s3 | Reads and writes files into s3 buckets. This type needs to receive the fields "bucketKey" and "fileKey".

### Example FS
```json
{
    "source": {
        "type": "fs",
        "path": "/database",
        "fileName": "test.csv"
    },
    "rules": [
        {
            "field": "Age",
            "operator": "lte",
            "value": 26
        },{
             "field": "Name",
             "operator": "notNull"
        }
    ]
}
```
### Example S3
```json
{
    "source": {
        "type": "s3",
        "bucketKey": "s3-bucket-example-converter",
        "fileKey": "test.csv"
    },
    "rules": [
        {
            "field": "Age",
            "operator": "lte",
            "value": 26
        },{
             "field": "Name",
             "operator": "notNull"
        }
    ]
}
```

## Rules Types
To apply the rules you'll need specify in which column, which operator, and the value, in most cases.

Rule | Description
--- | ---
gt |  Validates if the value of the field is greater than a limit, need to provide the "value".
gte | Validates if the value of the field is greather or equals to a limit, need to provide the "value".
lt | validates if the value of the field is less than a limit, need to provide the "value".
lte | validates if the value of the field is less or equals to a limit, need to provide the "value".
eq | validates if the value of the field is equals to a value, need to provide the "value".
contains | validates if the value of the field contains a value, need to provide the "value".
ew |  validates if the value of the field ends with a value, need to provide the "value".
sw |  validates if the value of the field starts with a value, need to provide the "value".
notNull | validates if the value of the field is not null.
