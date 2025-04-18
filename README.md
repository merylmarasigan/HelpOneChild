# Help One Child CarePortal Voting Platform

This project creates a tablet-friendly voting platform for Help One Child's fundraising events in partnership with CarePortal. During four consecutive fundraisers (May 6-9, 2025), donors will engage with CarePortal's platform by reviewing and voting on 3-5 care requests per event. Each request will showcase a compelling story about families in need - from a mother needing beds to a grandmother requiring assistance with utilities. The platform will display these requests in a format resembling CarePortal, allow simple voting without login requirements, prompt users for optional email signups afterward, and track results to announce which family's needs will be met at each event. This initiative aims to familiarize donors with the CarePortal experience and encourage continued engagement beyond the fundraisers.

## ROADMAP
- [ ] Create a voting platform for Care Portal fundraising events
- [ ] Set up UI that resembles CarePortal branding and styling
- [ ] Implement tablet-friendly interface to display 3-5 care requests per event
- [ ] Display request information (request number, timeline/urgency, purpose statement, description)
- [ ] Create simple voting mechanism (no login required)
- [ ] Add post-voting prompt for users to sign up for updates
- [ ] Set up Google Sheets integration to store voting results
- [ ] Develop results display to show which request won
- [ ] Test application thoroughly before the May 6-9 events

## SCHEMA
- Care Request
  - Request ID
  - Timeline/Urgency (normal, high, urgent)
  - Purpose Statement
  - Description
  - Vote Count
- User Email (optional, collected post-voting)

## DEVELOPER
### April 18, 2025
- No log in at the beginning, want to keep experience super smooth
- Focus on mobile/tablet friendly design for event use
- Mirror CarePortal's branding rather than Help One Child
- Deadline: Complete by end of April for May 6-9 events