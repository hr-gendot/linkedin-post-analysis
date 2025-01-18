# Data Schema

## Post Object
```json
{
  "id": "string",
  "author": "string",
  "authorProfileUrl": "string",
  "content": "string",
  "reactions": "string",
  "comments": "string",
  "type": "string",
  "timestamp": {
    "utc": "string",
    "local": "string"
  },
  "url": "string"
}
```

## Analysis Categories

### Content Types
- Text
- Image
- Video
- Mixed Media

### Engagement Metrics
- Reactions
- Comments
- Engagement Rate (Reactions + Comments / Views)

### Content Categories
- AI/ML
- Leadership
- Marketing
- Career Development
- Tech News
- Industry Analysis
- How-to
- Opinion
- Case Study

### Required Analysis Files
1. queue_[DATE].md - Raw queue data
2. author_analysis_[DATE].md - Author performance
3. content_analysis_[DATE].md - Content metrics