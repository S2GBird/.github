# Nuthatch API
Contains information about birds including minimum and maximum length, common name, scientific name, region, family, order, and status. Region is currently limited to North America and Western Europe. 

# Endpoints
`GET` **/v2/birds**

Gets bird list v2

# Query String Parameters

| Name  | Description | Data Type |
| ----- | ----------- | --- |
| page  | which page to fetch | integer |
| pageSize  | size of page to fetch (max 100; default 25) | integer |
| name | common name| string |
| sciName | scientific name | string |
| order | scientific order | string |
| family | scientific family | string |
|status | conservation status | string |
|region | geographical region (only North America and Western Europe avaiable) | string |
| hasImg | filter by only birds that have images | boolean
| operator | operator to use (AND/OR; default AND) | 


# Sample Request
```
curl -X 'GET' \
  'https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=1&operator=AND' \
  -H 'accept: application/json' \
  -H 'API-Key: YOUR_API_KEY_HERE'
```

# Sample Response
```
{
  "entities": [
    {
      "images": [
        "https://images.unsplash.com/photo-1643650997626-0124dbb98261",
        "https://images.unsplash.com/photo-1644610901347-b05ec91bb9b2",
        "https://images.unsplash.com/photo-1641995171363-9bc67bfb1b7c"
      ],
      "lengthMin": "47",
      "lengthMax": "51",
      "name": "Black-bellied Whistling-Duck",
      "id": 1,
      "sciName": "Dendrocygna autumnalis",
      "region": [
        "North America"
      ],
      "family": "Anatidae",
      "order": "Anseriformes",
      "status": "Low Concern"
    }
  ],
  "total": 995,
  "page": 1,
  "pageSize": 1
}
```

## Response Definitions

| Response Item | Description | Data Type |
| --- | --- | --- |
| images | link to image of bird | string |
| lengthMin | minimum length of bird from tip of the bill to tip of the tail | integer |
| lengthMax | maximum length of bird from tip of the bill to tip of the tail | integer |
| name | commenly used name of bird (e.g., rock pigeon) | string |
| id | identification number from database | integer |
| sciName | scientific name of bird (e.g., columba livia) | string |
| region | region bird resides in (i.e., North America, Western Europe) | string |
| family | lower classification of birds by nature or characteristics (e.g., Anatidae are Anseriform birds that spend more time in the water than land, and they migrate.)| string |
| order | higher classification of bird by nature or characteristics (e.g., Anseriform birds are medium to large birds that inhabit aquatic environments and are herbivorous.) | string |
| status | conservation status of bird (i.e., low concern, declining, restriced range, red watch list) | string |

# Try it out
Here is the link to the [Swagger](https://nuthatch.lastelm.software/swagger.html). 


Get an API key to authorize the use of the server and try out different parameters to view responses. 