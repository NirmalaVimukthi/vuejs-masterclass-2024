DROP TABLE IF EXISTS projects;

DROP TYPE IF EXISTS current_status;

CREATE TYPE current_status AS ENUM ('in-prograss', 'completed');

CREATE TABLE projects (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    create_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    status current_status DEFAULT 'in-prograss' NOT NULL,
    collaborators TEXT DEFAULT ARRAY[]::VARCHAR[] NOT NULL
);


    -- insert into projects (name,slug) values ('project one' , 'project-one');