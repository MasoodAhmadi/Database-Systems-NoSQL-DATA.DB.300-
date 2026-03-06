BEGIN;

-- 1. Update the task status to 'completed'
UPDATE loan_application_tasks
SET status = 'completed',
    completed_at = CURRENT_TIMESTAMP
WHERE task_id = 42
  AND assigned_to = 5; 

-- 2. Add a comment to the task
INSERT INTO task_comments (task_id, comment, created_by)
VALUES (42, 'Income verified, credit score meets criteria. Approved.', 'officer@bank.com');

-- 3. Log the final decision for the application
INSERT INTO application_decision_log (application_id, decision, reason, decided_by)
VALUES (
    (SELECT application_id FROM loan_application_tasks WHERE task_id = 42),
    'approved',
    'All requirements satisfied',
    'officer@bank.com'
);

COMMIT;