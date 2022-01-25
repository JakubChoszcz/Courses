cURL -X GET http://localhost:3000/

cURL -X GET http://localhost:3000/ -v

curl -X POST  http://localhost:3000/login -b cookie-file.txt -H "Content-Type: application/json" -d "{\"email\":\"test@test.com\", \"password\":\"password\"}"