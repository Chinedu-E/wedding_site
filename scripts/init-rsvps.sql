-- Run this in Supabase (Dashboard → SQL Editor) to create the rsvps table for the RSVP flow.

CREATE TABLE IF NOT EXISTS rsvps (
  id    BIGSERIAL PRIMARY KEY,
  code  VARCHAR(20) NOT NULL UNIQUE,
  name  VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps (created_at DESC);

-- Optional: allow service role to manage rsvps (default in Supabase). If you use RLS:
-- ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Service role can manage rsvps" ON rsvps FOR ALL USING (auth.role() = 'service_role');
