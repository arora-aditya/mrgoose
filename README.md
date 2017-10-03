# mrgoose
Waterloop internal team management site

# API reference

## Members

### List Members

```
GET /api/member
```

#### Optional:
```
/api/member?search=[searchString]&sort=[key]&order=[1/-1]&page=[pageNumber]
```
#### Example Response
```json
[{
    "_id": "59d406ca56549426b127ea07",
    "username": "1234",
    "fullName": "Test User",
    "email": "test1@abc.ca",
    "bio": "WOW",
    "__v": 0,
    "teams": [],
    "joinDate": "2017-10-03T21:53:04.120Z"
  },
  {
    "_id": "59d406ca56549426b127ea07",
    "username": "1234",
    "fullName": "Test User",
    "email": "test1@abc.ca",
    "bio": "WOW",
    "__v": 0,
    "teams": [],
    "joinDate": "2017-10-03T21:53:04.120Z"
  }
]
```

### Get Member by Id

```
GET /api/member/{id}
```

#### Example Response
```json
{
  "_id": "59d406ca56549426b127ea07",
  "username": "1234",
  "fullName": "Test User",
  "email": "test1@abc.ca",
  "bio": "WOW",
  "__v": 0,
  "teams": [],
  "joinDate": "2017-10-03T21:53:04.120Z"
}
```

### Create new member

```
POST /api/member
```

#### Request Body
```json
{
  "username": "1234",
  "fullName": "Test User",
  "email": "test1@abc.ca",
  "bio": "WOW",
}
```

### Edit existing member

```
POST /api/member/{id}
```

#### Request Body
```json
{
  "bio": "new bio",
}
```

## Teams

### List Teams

```
GET /api/team
```

#### Optional:
```
/api/team?search=[searchString]&sort=[key]&order=[1/-1]&page=[pageNumber]
```
#### Example Response
```json
[{
  "_id": "59d40d046c61412805c1fb7d",
  "name": "another team",
  "description": "cooler team",
  "__v": 0,
  "members": [{
    "_id": "59d406ca56549426b127ea07",
    "username": "1234",
    "fullName": "Test User",
    "email": "test1@abc.ca",
    "bio": "WOW",
    "__v": 0,
    "teams": [],
    "joinDate": "2017-10-03T21:53:04.120Z"
  }]
}, {
  "_id": "59d40d89a1d7d0283a850aed",
  "name": "one team",
  "description": "cool team",
  "__v": 0,
  "members": []
}]
```

### Get Team by Id

```
GET /api/team/{id}
```

#### Example Response
```json
{
  "_id": "59d40d89a1d7d0283a850aed",
  "name": "one team",
  "description": "cool team",
  "__v": 0,
  "members": []
}
```

### Create new team

```
POST /api/team
```

#### Request Body
```json
{
  "name": "abc",
  "description": "xyz"
}
```

### Edit existing team

```
POST /api/team/{id}
```

#### Request Body
```json
{
  "description": "new desc",
}
```


