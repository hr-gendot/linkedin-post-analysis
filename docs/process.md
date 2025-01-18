# LinkedIn Post Analysis Process

## Required Fields
- Title/Hook
- Description (1-4 lines summarizing content)
- Purpose/Value (business/reader value)
- Author
- Type (Image/Video/Text)
- Reactions
- Comments
- Timestamp

## Process Steps

1. Data Collection
```sql
SELECT Title/Hook, Author, Type, Reactions, Comments, Timestamp
FROM queue
ORDER BY Timestamp DESC
```

2. Enrichment
- Add Description: Summarize main points
- Add Purpose/Value: Define clear value proposition
- Validate metrics

3. Data Entry Format
```markdown
| Title/Hook | Description | Purpose/Value | Author | Type | Reactions | Comments | Timestamp |
|------------|-------------|---------------|--------|------|-----------|-----------|------------|
```

4. Update Process
- Create new file: `data/enriched_posts_YYYY_MM_DD.md`
- Keep format consistent
- Sort by timestamp
- Link in README

## Quality Checks
1. Descriptions are clear and concise
2. Value proposition is explicit
3. Metrics are accurate
4. Formatting is consistent

## Regular Tasks
Daily:
- Add new posts
- Update metrics
- Validate format

Weekly:
- Review performance
- Update analysis
- Check data consistency