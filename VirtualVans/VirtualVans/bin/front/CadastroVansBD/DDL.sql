--Table das VANS

CREATE TABLE Vans (
    id_van INTEGER PRIMARY KEY AUTOINCREMENT,
    identificacao TEXT UNIQUE,
    placa TEXT NOT NULL UNIQUE,
    modelo TEXT,
    motorista TEXT NOT NULL,
    lugares INTEGER NOT NULL CHECK (lugares >0),
    contato TEXT NOT NULL UNIQUE
);