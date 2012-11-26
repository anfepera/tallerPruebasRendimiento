DROP TABLE registro_viajes;
CREATE TABLE registro_viajes (
documentoPasajero VARCHAR(10) PRIMARY KEY,
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
hora VARCHAR(50),
minutos INTEGER,
nombreEstacionOrigen VARCHAR(50),
nombreEstacionDestino VARCHAR(50));


					

