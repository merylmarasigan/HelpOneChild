# Help One Child CarePortal Voting Platform

This project creates a tablet-friendly voting platform for Help One Child's fundraising events in partnership with CarePortal. During four consecutive fundraisers (May 6-9, 2025), donors will engage with CarePortal's platform by reviewing and voting on 3-5 care requests per event. Each request will showcase a compelling story about families in need - from a mother needing beds to a grandmother requiring assistance with utilities. The platform will display these requests in a format resembling CarePortal, allow simple voting without login requirements, prompt users for optional email signups afterward, and track results to announce which family's needs will be met at each event. This initiative aims to familiarize donors with the CarePortal experience and encourage continued engagement beyond the fundraisers.

## ROADMAP
- [X] Create a voting platform for Care Portal fundraising events
- [X] Set up UI that resembles CarePortal branding and styling
- [X] Implement tablet-friendly interface to display 3-5 care requests per event
- [X] Display request information (request number, timeline/urgency, purpose statement, description)
- [X] Create simple voting mechanism (no login required)
- [X] Add post-voting prompt for users to sign up for updates
- [ ] Set up Google Sheets integration to store voting results --> not able to integrate with google based on free version of supabase, decided to just have ability to download data from database as excel file (clients were okay with this approach)
- [X] Develop results display to show which request won
- [ ] Test application thoroughly before the May 6-9 events

## SCHEMA
- Care Request
  - `id serial not null,`
  - `title text null,`
  - `description text null,`
  - `urgency text null,`
  - `details jsonb null,`
  - `needs jsonb[] null,`
  - `votes integer null,`
  - `total_needs_cost integer null,`
  - `constraint test_reqs_pkey primary key (id)`
- User Email (optional, collected post-voting)
  -  `email text not null,`
  - `name text not null,`
  - `constraint test_user_pkey primary key (email)`

## DEVELOPER
### April 18, 2025
- No log in at the beginning, want to keep experience super smooth
- Focus on mobile/tablet friendly design for event use
- Mirror CarePortal's branding rather than Help One Child
- Deadline: Complete by end of April for May 6-9 events

### April 22, 2025
- implemented front end design for all pages
- connected to supabase
- implemented fetching Care requests from supabase database and displaying each one

### April 23, 2025
- implemented adding name and email to supabase database when user signs up
- implmented user input error checking when signing up for updates
- Implemented page redirects
- Incremented Care request's votes count on supabase db whenever 'YES, I CAN HELP!' is clicked for that request

### April 24, 2025
- added analytics page what shows ranking of requests by vote, also allowed to filter by date
- implemented ability to download care request and registered users data as csv file

### April 28,2025
- Made UI changes based on client feedback (note to self: need to swap logos once Valerie sends correct one)
