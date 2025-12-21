# Generate docs.txt for the Cloudflare worker
# Concatenates all markdown files from site/ into a single file

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptDir
$siteDir = Join-Path $repoRoot "site"
$outputFile = Join-Path $repoRoot "worker\src\docs.txt"

$output = ""

# Get all markdown files, excluding _sidebar.md and README.md
Get-ChildItem -Path $siteDir -Recurse -Filter "*.md" | Where-Object {
    $_.Name -ne "_sidebar.md" -and $_.Name -ne "README.md"
} | ForEach-Object {
    $relativePath = $_.FullName.Replace($siteDir + "\", "").Replace("\", "/")
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $output += "=== $relativePath ===`n$content`n`n"
}

# Write output file
Set-Content -Path $outputFile -Value $output -Encoding UTF8 -NoNewline

$charCount = $output.Length
$tokenEstimate = [math]::Round($charCount / 4)
Write-Host "Generated docs.txt"
Write-Host "  Characters: $charCount"
Write-Host "  Estimated tokens: $tokenEstimate"
Write-Host "  Output: $outputFile"
