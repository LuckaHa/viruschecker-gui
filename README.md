# viruschecker-GUI

GUI for Virus Checker using Vue.js

First, you need to run Virus Checker

1. Ak boli zmeny v kóde, kompilovať projekt - do compilera v projekte:
	gradlew.bat clean shadowJar

2. DRIVER
Spustiť VM. Na mieste, kde je driver (driver-0.23.0-all.jar) otvoriť cmd a zadať:
	java -jar driver-0.23.0-all.jar -a
Teraz beží driver na VM na  porte 8080. 
To isté by malo byť na hostovi na porte 8080. 
Zobrazí sa tam json: {"driverVersion":..., "antiviruses:"...}

3. GATEWAY
Ak bol kód prekompilovaný treba znova vytvoriť súbor 'driverUrls.txt'.
Na hoste v tom istom priečinku ako je 'driverUrls.txt' spustiť:
	java -jar gateway-0.23.2-all.jar driverUrls.txt
Gateway beží na http://127.0.0.1:8080/
GET /driversInfo potom zavoláme takto http://127.0.0.1:8080/driversInfo

4. CLIENT/WEB APP
V priečinku viruschecker/client-web/build/libs/ otvoriť cmd a spustiť:
	java -jar client-web-0.23.2-all.jar http://localhost:8080
	192.168.1.1	

Then start this GUI
1. Install:
	npm install --save axios vue-axios
	
2. In folder where project viruschecker-gui is run:
	npm install
	npm run serve -- --port 3000