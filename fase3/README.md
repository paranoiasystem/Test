# Fase3

## Istruzioni per la compilazione

Per compilare ed eseguire il progetto bisogna avere NodeJS installato, poi bisogna installare le dipendenze:

```
$ npm install
```

per compilare il progetto usare il seguente comando:

```
$ npm run compile
```

per eseguirlo usare il comando:

```
$ npm start
```

in alternativa è possibile compilare ed eseguire il progetto usando il seguente comando:

```
$ npm run buildandrun
```

## Esempi di chiamate

Nella seguente directory è presente un file Insomnia.json, che può essere usato per testare velocemente il progetto tramite questo software https://insomnia.rest/, altrimenti ecco l'elenco completo delle chiamate tramite curl:

### Elenco chiamate curl

#### Creation of a student
```
curl --request POST \
  --url http://localhost:3000/api/v1/students \
  --header 'content-type: application/json' \
  --data '{
	"firstname": "Marco",
	"lastname": "Ferraioli",
	"birthdate": "1993-07-30T00:00:00.000Z",
	"grades": [
		"30",
		"18",
		"26"
	]
}'
```

#### Get student by ID
```
curl --request GET \
  --url http://localhost:3000/api/v1/students/:id
```

#### Get all students

```
curl --request GET \
  --url http://localhost:3000/api/v1/students
```

#### Update student

```
curl --request PUT \
  --url http://localhost:3000/api/v1/students/:id \
  --header 'content-type: application/json' \
  --data '{
	"grades": [
		"30",
		"18",
		"26",
		"25",
		"24"
	]
}'
```

#### Delete student by ID

```
curl --request DELETE \
  --url http://localhost:3000/api/v1/students/:id
```
