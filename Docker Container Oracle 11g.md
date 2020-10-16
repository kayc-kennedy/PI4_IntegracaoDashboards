#### Esse arquivo tem o intuito de documentar a criação do banco de dados utilizando Docker

##### Para criação do container contendo o banco de dados Oracle, foi usado o seguinte comando: 

```
docker run --name oracle-11g-pi4 -d -p 49161:1521 -e ORACLE_ALLOW_REMOTE=true oracleinanutshell/oracle-xe-11g
```

##### O usuário/schema utilizado no projeto é:

```
CREATE USER pi4 IDENTIFIED BY oracle;
```

##### Permissões concedidas

```
$ docker exec -it 3e bash
# su - oracle
$ sqlplus / as sysdba

GRANT RESOURCE, CONNECT TO pi4;
GRANT SELECT ON V_$SESSION TO pi4;
GRANT SELECT ON DBA_TABLES TO pi4;
GRANT CREATE SESSION TO pi4;
GRANT SELECT ON DBA_TAB_COLUMNS TO pi4;
GRANT SELECT ON DBA_CONSTRAINTS TO pi4;
GRANT SELECT ON DBA_TRIGGERS TO pi4;
GRANT SELECT ON DBA_INDEXES TO pi4;
GRANT SELECT ON DBA_VIEWS TO pi4;
GRANT SELECT ON DBA_IND_COLUMNS TO pi4;
GRANT SELECT ON DBA_OBJECTS TO pi4;
GRANT EXP_FULL_DATABASE TO pi4;
GRANT IMP_FULL_DATABASE TO pi4;
GRANT CREATE ANY DIRECTORY TO pi4;
GRANT SELECT ON DBA_PROCEDURES TO pi4;
GRANT CREATE ANY VIEW TO pi4;
GRANT CREATE ANY JOB TO pi4;
GRANT SELECT ON SCHEDULER$_JOB TO pi4;
GRANT CREATE JOB TO pi4;
GRANT EXECUTE ON UTL_FILE TO pi4;
GRANT EXECUTE ON DBMS_CRYPTO TO pi4;
GRANT EXECUTE ON UTL_SMTP TO pi4;
GRANT EXECUTE ON UTL_TCP TO pi4;
GRANT EXECUTE ON UTL_HTTP TO pi4;
GRANT EXECUTE ON DBMS_ALERT TO pi4;
GRANT CREATE MATERIALIZED VIEW TO pi4;
```
