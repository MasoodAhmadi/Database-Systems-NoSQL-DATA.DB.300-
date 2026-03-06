--Staff members(loan officers, underwriters, etc.)
CREATE TABLE staff(
    staff_id BIGSERIAL PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK(role IN('loan_officer', 'underwriter', 'manager', 'admin')),
    department VARCHAR(100),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Tasks assigned to staff for a loan application
CREATE TABLE loan_application_tasks(
    task_id BIGSERIAL PRIMARY KEY,
    application_id BIGINT NOT NULL REFERENCES loan_applications(application_id) ON DELETE CASCADE,
    assigned_to BIGINT NOT NULL REFERENCES staff(staff_id) ON DELETE CASCADE,
    task_type VARCHAR(50) NOT NULL CHECK(task_type IN('initial_review', 'risk_assessment', 'collateral_verification', 'final_approval')),
    status VARCHAR(20) NOT NULL CHECK(status IN('pending', 'in_progress', 'completed', 'rejected')) DEFAULT 'pending',
    due_date DATE,
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100)-- email of the staff who created the task
);

--Comments attached to tasks
CREATE TABLE task_comments(
    comment_id BIGSERIAL PRIMARY KEY,
    task_id BIGINT NOT NULL REFERENCES loan_application_tasks(task_id) ON DELETE CASCADE,
    comment TEXT NOT NULL,
    created_by VARCHAR(100) NOT NULL, --staff email
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Final decision log for audit trail
CREATE TABLE application_decision_log(
    decision_id BIGSERIAL PRIMARY KEY,
    application_id BIGINT NOT NULL REFERENCES loan_applications(application_id) ON DELETE CASCADE,
    decision VARCHAR(20) NOT NULL CHECK(decision IN('approved', 'rejected', 'pending_more_info')),
    reason TEXT,
    decided_by VARCHAR(100) NOT NULL, --staff email
    decided_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);