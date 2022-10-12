#!/bin/bash

if [[ -z $1 ]]
then
  echo Please provide an element as an argument.
else
  PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

  if [[ $1 == ?(-)+([0-9]) ]]
  then
    ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE atomic_number = $1;")
  else
    ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE symbol = '$1' OR name = '$1';")
  fi

  if [[ -z $ATOMIC_NUMBER ]]
  then
    echo I could not find that element in the database.
  else
    ELEMENT=$($PSQL "SELECT e.atomic_number, symbol, name, type, atomic_mass, melting_point_celsius, boiling_point_celsius FROM elements AS e INNER JOIN properties AS p ON e.atomic_number = p.atomic_number INNER JOIN types AS t ON p.type_id = t.type_id WHERE e.atomic_number = $ATOMIC_NUMBER;")

    echo "$ELEMENT" | while IFS="|" read ATOMIC_NUMBER SYMBOL NAME TYPE ATOMIC_MASS MELTING_POINT BOILING_POINT
    do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT celsius and a boiling point of $BOILING_POINT celsius."
    done
  fi
fi