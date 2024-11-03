DROP TABLE IF EXISTS task;

DROP TYPE IF EXISTS current_status;

CREATE TYPE current_status AS ENUM ('in-prograss', 'completed');

CREATE TABLE task (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    create_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    name TEXT NOT NULL,
    status current_status DEFAULT 'in-prograss' NOT NULL,
    description TEXT NOT NULL,
    due_date date NOT NULL,
    project_id bigint references projects (id) default null,
    collaborators TEXT DEFAULT ARRAY[]::VARCHAR[] NOT NULL
);
