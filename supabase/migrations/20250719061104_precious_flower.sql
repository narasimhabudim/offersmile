-- Offer A Smile Foundation Database Schema
-- Run these commands in your Supabase SQL editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  location text NOT NULL,
  image text NOT NULL,
  participants integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create volunteers table
CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  date_of_birth date NOT NULL,
  address text NOT NULL,
  whatsapp_preference boolean DEFAULT false,
  email_preference boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  query_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read events" ON events FOR SELECT TO anon USING (true);
CREATE POLICY "Public can read gallery" ON gallery FOR SELECT TO anon USING (true);

-- Create policies for authenticated users (admin)
CREATE POLICY "Authenticated can manage events" ON events FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated can manage gallery" ON gallery FOR ALL TO authenticated USING (true);
CREATE POLICY "Authenticated can read volunteers" ON volunteers FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can read inquiries" ON inquiries FOR SELECT TO authenticated USING (true);

-- Create policies for public form submissions
CREATE POLICY "Public can insert volunteers" ON volunteers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Public can insert inquiries" ON inquiries FOR INSERT TO anon WITH CHECK (true);

-- Insert sample data
INSERT INTO events (title, description, date, location, image, participants) VALUES
('Blankets Distribution', 'Distribution of blankets for elderly people during winter season', '2024-01-25', 'Old Age Home, Bangalore', 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 25),
('Monthly Groceries Support', 'Providing required monthly groceries for an old age home', '2024-02-19', 'Community Center, Rajajinagar', 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 15),
('Nutrition Program', 'Distributing fruits and medicines for orphanage children', '2024-03-12', 'Children''s Home, Bangalore', 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 30);

INSERT INTO gallery (title, description, image_url) VALUES
('Education Support Program', 'Providing educational materials to underprivileged children', 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'),
('Healthcare Initiative', 'Free medical checkup camp in rural areas', 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'),
('Food Distribution', 'Distributing meals to homeless individuals', 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'),
('Community Outreach', 'Engaging with local communities for awareness programs', 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'),
('Skill Development', 'Teaching vocational skills to empower individuals', 'https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'),
('Environmental Care', 'Tree plantation and environmental awareness campaigns', 'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop');