CREATE TABLE planet(
	id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(255) NULL,
	population BIGINT NOT NULL);

GO

INSERT INTO planet (name, population)
VALUES
('Moon', 50),
('Mars', 431),
('Ceres', 1),
('Europa', 41),
('Earth', 9800000001);

CREATE TABLE spaceship(
  id INT NOT NULL IDENTITY(1,1)
		PRIMARY KEY,
	max_capacity INT NOT NULL,
	planet VARCHAR(255) NULL,
	utilization INT NOT NULL);

GO

INSERT INTO spaceship (max_capacity, planet, utilization)
VALUES
(60, 'Mars', 60);
