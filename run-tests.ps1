chcp 65001 > $null

Write-Host "🌐 Várakozás a localhost:3008 elérésére..." -ForegroundColor Cyan

Start-Process powershell -ArgumentList 'npm start'

npx wait-on http://localhost:3008

Write-Host "🚀 Tesztek indítása..." -ForegroundColor Green

npx cypress run

$latest = Get-ChildItem "$PSScriptRoot\test-report\*-report.html" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
Start-Process $latest.FullName