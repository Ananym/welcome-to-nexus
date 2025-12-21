// Generate SQL import file from itemdb.json
// Run with: node generate-import.js

const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'itemdb', 'itemdb.json');
const outputPath = path.join(__dirname, 'import.sql');

const items = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Escape single quotes for SQL
function esc(val) {
    if (val === null || val === undefined) return 'NULL';
    if (typeof val === 'boolean') return val ? '1' : '0';
    if (typeof val === 'number') return val.toString();
    // Escape single quotes by doubling them
    return `'${String(val).replace(/'/g, "''")}'`;
}

let sql = '-- Auto-generated import from itemdb.json\n';
sql += '-- Run after schema.sql\n\n';

for (const item of items) {
    sql += `INSERT INTO items (
    name, src, slot, dura, ac, vita, mana, hit, dam,
    might, grace, will, healing, protection,
    path, level, mark, bod, sex, extinct, two_handed,
    how_to_obtain, special_info, detailed_info,
    req_might, s_min, s_max, l_min, l_max
) VALUES (
    ${esc(item.name)}, ${esc(item.src)}, ${esc(item.slot)}, ${esc(item.dura)}, ${esc(item.ac)},
    ${esc(item.vita)}, ${esc(item.mana)}, ${esc(item.hit)}, ${esc(item.dam)},
    ${esc(item.might)}, ${esc(item.grace)}, ${esc(item.will)}, ${esc(item.healing)}, ${esc(item.protection)},
    ${esc(item.path)}, ${esc(item.level)}, ${esc(item.mark)}, ${esc(item.bod)}, ${esc(item.sex)},
    ${esc(item.extinct)}, ${esc(item.two_handed)},
    ${esc(item.how_to_obtain)}, ${esc(item.special_info)}, ${esc(item.detailed_info)},
    ${esc(item.req_might)}, ${esc(item.s_min)}, ${esc(item.s_max)}, ${esc(item.l_min)}, ${esc(item.l_max)}
);\n`;
}

fs.writeFileSync(outputPath, sql);
console.log(`Generated ${outputPath} with ${items.length} items`);
