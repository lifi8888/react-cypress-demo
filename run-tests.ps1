chcp 65001 > $null

# Beolvassa a .env fájlt és PowerShell változókat hoz létre
Get-Content ".env" | ForEach-Object {
    if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
        $name = $matches[1].Trim()
        $value = $matches[2].Trim()
        Set-Variable -Name $name -Value $value
    }
}

Write-Host "🌐 Várakozás a $BASE_URL elérésére..." -ForegroundColor Cyan

Start-Process powershell -ArgumentList 'npm start'

npx wait-on $BASE_URL

Write-Host "🚀 Tesztek indítása..." -ForegroundColor Green

npx cypress run

$latest = Get-ChildItem "$PSScriptRoot\test-report\*-report.html" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
Start-Process $latest.FullName