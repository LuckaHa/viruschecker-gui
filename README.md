# viruschecker-GUI

GUI for Virus Checker using Vue.js

I. First, you need to run Virus Checker:

1. Compile project in project compiler (after every change in project):
	gradlew.bat clean shadowJar

2. DRIVER
Load VM. In the location of driver (driver-0.23.0-all.jar) open cmd and write:
	java -jar driver-0.23.0-all.jar -a
Now driver runs on VM on port 8080. 
The same should run on host on port 8080. 
You will see the json: {"driverVersion":..., "antiviruses:"...}

3. GATEWAY
If the code was recompiled, you need to create file 'driverUrls.txt' again.
On host in the location of file 'driverUrls.txt' run:
	java -jar gateway-0.23.2-all.jar driverUrls.txt
Gateway runs at http://127.0.0.1:8080/
Then you can call GET /driversInfo potom like this: http://127.0.0.1:8080/driversInfo

4. CLIENT/WEB APP
In the folder viruschecker/client-web/build/libs/ open cmd and run:
	java -jar client-web-0.23.2-all.jar http://localhost:8080
	192.168.1.1	

II. Then start this GUI:
1. Install:
	npm install --save axios vue-axios
	
2. In folder where project viruschecker-gui is run:
	npm install
	npm run serve -- --port 3000