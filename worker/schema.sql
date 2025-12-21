-- D1 Schema for NexusTK Item Database

DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    src TEXT,                    -- Image filename
    slot TEXT NOT NULL,          -- weapon, hand, coat, helm, etc.
    dura INTEGER DEFAULT 0,      -- Durability
    ac INTEGER DEFAULT 0,        -- Armor class (negative is better)
    vita INTEGER DEFAULT 0,      -- Vita bonus
    mana INTEGER DEFAULT 0,      -- Mana bonus
    hit INTEGER DEFAULT 0,       -- Hit bonus
    dam INTEGER DEFAULT 0,       -- Damage bonus
    might INTEGER DEFAULT 0,     -- Might stat bonus
    grace INTEGER DEFAULT 0,     -- Grace stat bonus
    will INTEGER DEFAULT 0,      -- Will stat bonus
    healing INTEGER DEFAULT 0,   -- Healing bonus
    protection INTEGER DEFAULT 0,-- Protection bonus
    path TEXT,                   -- Class requirement (Peasant = all classes)
    level INTEGER DEFAULT 0,     -- Level requirement
    mark INTEGER DEFAULT 0,      -- Mark requirement
    bod INTEGER DEFAULT 0,       -- Bind on drop (0/1)
    sex TEXT,                    -- Gender requirement (null = any)
    extinct INTEGER DEFAULT 0,   -- No longer obtainable (0/1)
    two_handed INTEGER DEFAULT 0,-- Two-handed weapon (0/1)
    how_to_obtain TEXT,          -- How to get the item
    special_info TEXT,           -- Special notes
    detailed_info TEXT,          -- Extended description
    req_might INTEGER,           -- Might requirement to equip
    s_min INTEGER,               -- Small damage min (weapons)
    s_max INTEGER,               -- Small damage max (weapons)
    l_min INTEGER,               -- Large damage min (weapons)
    l_max INTEGER                -- Large damage max (weapons)
);

-- Indexes for common query patterns
CREATE INDEX idx_items_slot ON items(slot);
CREATE INDEX idx_items_path ON items(path);
CREATE INDEX idx_items_level ON items(level);
CREATE INDEX idx_items_name ON items(name);
