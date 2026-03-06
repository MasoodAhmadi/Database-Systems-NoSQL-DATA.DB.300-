-- Insert a new task for application with ID 101, assigned to staff with ID 5
INSERT INTO loan_application_tasks (
    application_id,
    assigned_to,
    task_type,
    due_date,
    created_by
)
VALUES (
    101,                    
    5,                      
    'initial_review',       
    CURRENT_DATE + INTERVAL '3 days', 
    'manager@bank.com'      
);