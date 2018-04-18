CREATE TABLE planet(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NULL,
	population BIGINT NOT NULL);

INSERT INTO planet (name, population)
VALUES
('Moon', 50),
('Mars', 431),
('Ceres', 1),
('Europa', 41),
('Earth', 9800000001);

CREATE TABLE spaceship
(id BIGINT AUTO_INCREMENT
		PRIMARY KEY,
	max_capacity INT NOT NULL,
	planet VARCHAR(255) NULL,
	utilization INT NOT NULL);

INSERT INTO spaceship (max_capacity, planet, utilization)
VALUES
(60, 'Mars', 60);
