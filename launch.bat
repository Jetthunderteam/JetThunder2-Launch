@echo off
ECHO Starting Mongo!
start /b mongod --port 27017 --dbpath C:\data\db
start /b mongo

Echo Launching Application!
start /b java -jar target/launch-0.0.1.jar

::start /b mongod --port 27017 --dbpath C:\data\db --shutdown