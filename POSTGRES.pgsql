CREATE TABLE Users (
  UserId SERIAL PRIMARY Key,
  UserName VARCHAR (20)
);

ALTER TABLE Users ADD COLUMN password VARCHAR(100) NOT NULL;

CREATE TABLE Stores (
  StoreId SERIAL PRIMARY KEY,
  UserId INT REFERENCES Users(UserId),
  StoreName VARCHAR(50)
)

CREATE TABLE ItemList (
  Id SERIAL PRIMARY KEY,
  StoreId INT REFERENCES Stores(StoreId),
  ItemName VARCHAR(30),
  checked BOOLEAN DEFAULT false
);

INSERT INTO Users (UserName, password)
VALUES ('Nancy', 'testPassword2');

ALTER TABLE ShoppingList RENAME TO ItemList;

UPDATE ItemList SET checked = TRUE WHERE UserId = 2 AND StoreId = 1 AND Id = 4