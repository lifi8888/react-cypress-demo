# UTF-8 karakterkódolás
chcp 65001 > $null

# --- 1. Repo könyvtár elérése ---
$repoName = "react-cypress-demo"
$repoUrl = "https://github.com/lifi8888/$repoName.git"

if (-Not (Test-Path -Path ".\$repoName")) {
    Write-Host "Klónozás: $repoUrl" -ForegroundColor Cyan
    git clone $repoUrl
} else {
    Write-Host "Repo már létezik: $repoName" -ForegroundColor Green
}

Set-Location $repoName

# --- 2. .env fájl létrehozása, ha nem létezik ---
$envFile = ".env"
if (-Not (Test-Path -Path $envFile)) {
    Write-Host ".env fájl létrehozása..." -ForegroundColor Cyan
    @"
PORT=3005
BASE_URL=http://localhost:3005
"@ | Out-File -Encoding utf8 -FilePath $envFile
} else {
    Write-Host ".env fájl már létezik." -ForegroundColor Green
}

# --- 3. Függőségek telepítése ---
Write-Host "Függőségek telepítése (npm install)..." -ForegroundColor Yellow
npm install

# --- 4. Tesztek futtatása és riport megnyitása ---
Write-Host "Tesztek futtatása..." -ForegroundColor Magenta
.\run-tests.ps1
