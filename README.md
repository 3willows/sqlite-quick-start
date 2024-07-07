A qucik start example from:-

(1) Express [official example](https://expressjs.com/en/guide/database-integration.html#sqlite)

(2) This SO [Q&A](https://stackoverflow.com/questions/67822346/how-can-i-extract-data-from-sqlite-in-a-server-page-and-use-the-data-in-a-diffe)

(3) Perplexity AI instructions on creating the author.db file (scarily good)!

1. Create the database on the command line
```bash
sqlite3 author.db
```

2. Create the table:
```sql
CREATE TABLE author (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    birth_year INTEGER,
    nationality TEXT,
    biography TEXT
);
```
3. Insert some sample data:
```sql
INSERT INTO author (name, birth_year, nationality, biography) VALUES
('Jane Austen', 1775, 'British', 'English novelist known for her six major novels...');
```

4. Verify the data:
```sql
SELECT * FROM author;
```
5. Exit SQLite:

```sql
.quit
```