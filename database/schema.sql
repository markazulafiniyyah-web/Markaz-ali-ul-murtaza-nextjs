CREATE TABLE IF NOT EXISTS hadith_books (
  slug text PRIMARY KEY,
  category text NOT NULL,
  count integer NOT NULL,
  english_name text NOT NULL,
  arabic_name text NOT NULL
);
CREATE TABLE IF NOT EXISTS hadith_chapters (
  book_slug text NOT NULL REFERENCES hadith_books(slug) ON DELETE CASCADE,
  chapter_id integer NOT NULL,
  english text NOT NULL,
  arabic text NOT NULL,
  PRIMARY KEY (book_slug, chapter_id)
);
CREATE TABLE IF NOT EXISTS hadith_records (
  id bigint PRIMARY KEY,
  book_slug text NOT NULL REFERENCES hadith_books(slug) ON DELETE CASCADE,
  number integer NOT NULL,
  chapter_id integer NOT NULL,
  arabic text NOT NULL,
  english_narrator text NOT NULL DEFAULT '',
  english_text text NOT NULL,
  UNIQUE (book_slug, number)
);
CREATE INDEX IF NOT EXISTS hadith_book_chapter_idx ON hadith_records(book_slug, chapter_id, number);
CREATE INDEX IF NOT EXISTS hadith_english_search_idx ON hadith_records USING gin(to_tsvector('english', english_text || ' ' || english_narrator));
CREATE TABLE IF NOT EXISTS hadith_translations (
  hadith_id bigint NOT NULL REFERENCES hadith_records(id) ON DELETE CASCADE,
  language varchar(8) NOT NULL,
  translated_text text NOT NULL,
  provider text NOT NULL,
  verified boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (hadith_id, language)
);
CREATE INDEX IF NOT EXISTS hadith_translation_language_idx ON hadith_translations(language, hadith_id);
