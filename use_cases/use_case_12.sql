-- Get pending tasks for staff with ID 5
SELECT 
    t.task_id,
    t.application_id,
    t.task_type,
    t.due_date,
    t.created_at,
    c.first_name || ' ' || c.last_name AS customer_name
FROM loan_application_tasks t
JOIN loan_applications a ON t.application_id = a.application_id
JOIN customers c ON a.customer_id = c.customer_id
WHERE t.assigned_to = 5
  AND t.status = 'pending'
ORDER BY t.due_date ASC;