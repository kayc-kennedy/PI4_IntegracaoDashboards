#### Esse arquivo tem o intuito de documentar a criação do banco de dados utilizando Docker

##### Para criação do container contendo o banco de dados Oracle, foi usado o seguinte comando: 

```
docker run --name oracle-11g-pi4 -d -p 49161:1521 -e ORACLE_ALLOW_REMOTE=true oracleinanutshell/oracle-xe-11g
```

##### O usuário/schema utilizado no projeto é:

```
CREATE USER pi4 IDENTIFIED BY oracle;
```
