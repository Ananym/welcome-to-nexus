#!/usr/bin/env python3
"""
Link checker for the welcome-to-nexus documentation.
Scans all markdown files for internal links and validates them against the actual file structure.
"""

import os
import re
from pathlib import Path

def find_all_md_files(root_dir):
    """Find all markdown files in the project."""
    md_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.md') and file != 'README.md':
                rel_path = os.path.relpath(os.path.join(root, file), root_dir)
                md_files.append(rel_path.replace('\\', '/'))  # Normalize to forward slashes
    return sorted(md_files)

def extract_internal_links(file_path):
    """Extract all internal markdown links from a file."""
    links = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all markdown links [text](path.md)
        pattern = r'\[([^\]]+)\]\(([^)]+\.md)\)'
        matches = re.findall(pattern, content)
        
        for text, link in matches:
            links.append({
                'text': text,
                'link': link,
                'line': None  # We could add line numbers if needed
            })
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
    
    return links

def check_links(root_dir):
    """Check all links in all markdown files."""
    print("Scanning file structure...")
    all_files = find_all_md_files(root_dir)
    print(f"Found {len(all_files)} markdown files:")
    for f in all_files:
        print(f"  {f}")
    
    print("\nChecking links...")
    broken_links = []
    all_links = []
    
    for md_file in all_files:
        file_path = os.path.join(root_dir, md_file)
        links = extract_internal_links(file_path)
        
        for link_info in links:
            link = link_info['link']
            all_links.append((md_file, link_info))
            
            # Check if the linked file exists
            if not os.path.exists(os.path.join(root_dir, link)):
                broken_links.append({
                    'source_file': md_file,
                    'link': link,
                    'text': link_info['text'],
                    'error': 'File does not exist'
                })
    
    print(f"\nFound {len(all_links)} total internal links")
    
    if broken_links:
        print(f"\n[ERROR] Found {len(broken_links)} broken links:")
        for broken in broken_links:
            print(f"  {broken['source_file']}: [{broken['text']}]({broken['link']}) - {broken['error']}")
    else:
        print("\n[OK] All links are valid!")
    
    return broken_links, all_links

if __name__ == "__main__":
    root_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"Checking links in: {root_dir}")
    
    broken_links, all_links = check_links(root_dir)
    
    if broken_links:
        print(f"\nSummary: {len(broken_links)} broken links found out of {len(all_links)} total links")
    else:
        print(f"\nSummary: All {len(all_links)} links are working correctly!")