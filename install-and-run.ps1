chcp 65001 > $null

# Előbb pontok – ezzel lefoglaljuk a progress bar helyét
for ($i = 0; $i -lt 8; $i++) {
    Write-Host "."
}

# Majd kezdődhet a valódi kimenet
Write-Host "`n=== Telepítés indul ===`n"

# --- LOG FUNKCIÓK ---
$ScriptRoot = $PSScriptRoot
$logDir = Join-Path $ScriptRoot "logs"
$logFile = Join-Path $logDir "install-log.txt"
if (-Not (Test-Path $logDir)) {
    New-Item -ItemType Directory -Path $logDir | Out-Null
}
"--- Telepítési napló: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') ---" | Out-File $logFile -Encoding utf8

function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    "$timestamp $Message" | Out-File -FilePath $logFile -Append -Encoding utf8
}

# --- Telepítő futtatása: letölt + telepít, logol, exitCode-ot ellenőriz ---
function Install-Exe {
    param (
        [string]$Name,
        [string]$DownloadUrl,
        [string]$LocalFileName,
        [string]$SilentArgs,
        [string]$PostInstallCheckPath = ""
    )

    $tempPath = "$env:TEMP\$LocalFileName"

    if (-Not (Get-Command $Name -ErrorAction SilentlyContinue)) {
		Write-Host "`n$Name nincs telepítve. Letöltés URL: $DownloadUrl"
        Write-Log "$Name nincs telepítve. Letöltés URL: $DownloadUrl"
        try {
            Invoke-WebRequest -Uri $DownloadUrl -OutFile $tempPath -ErrorAction Stop
            Write-Host "`nLetöltés befejezve: $LocalFileName"
            Write-Log "Letöltés sikeres: $tempPath"
        } catch {
            Write-Host "`nHiba: $Name letöltése sikertelen"
            Write-Log "Letöltési hiba: $_"
            return
        }

        Write-Host "`nTelepítés: $Name"
        Write-Log "Telepítés: $tempPath $SilentArgs"

        try {
            if ($tempPath -like "*.msi") {
                $process = Start-Process -FilePath "msiexec.exe" `
                    -ArgumentList "/i `"$tempPath`" $SilentArgs" `
                    -Verb RunAs -Wait -PassThru
            } else {
                $process = Start-Process -FilePath $tempPath `
                    -ArgumentList $SilentArgs `
                    -Verb RunAs -Wait -PassThru
            }

			Write-Host "`n$Name telepítő befejeződött. ExitCode: $($process.ExitCode)"
            Write-Log "$Name telepítő befejeződött. ExitCode: $($process.ExitCode)"

            $installed = $false
            if ($PostInstallCheckPath -and (Test-Path $PostInstallCheckPath)) {
                $installed = $true
				Write-Host "`n$Name megtalálva: $PostInstallCheckPath"
                Write-Log "$Name megtalálva: $PostInstallCheckPath"
            } elseif (Get-Command $Name -ErrorAction SilentlyContinue) {
                $installed = $true
				Write-Host "`n$Name elérhető Get-Command alapján"
                Write-Log "$Name elérhető Get-Command alapján"
            }

            if ($process.ExitCode -eq 0 -and $installed) {
                Write-Host "`n$Name sikeresen telepítve"
                Write-Log "$Name sikeresen telepítve"
            } else {
                Write-Host "`nHiba: $Name telepítése sikertelen vagy nem elérhető azonnal"
                Write-Log "Hiba: $Name telepítése sikertelen vagy nem elérhető azonnal"
            }

        } catch {
            Write-Host "`nHiba: $Name telepítése közben"
            Write-Log "Telepítés kivétel: $_"
        }

    } else {
        Write-Host "`n$Name már telepítve van"
        Write-Log "$Name már telepítve van"
    }
}

# --- Git telepítése (v2.49.0) ---
Install-Exe -Name "git" `
    -DownloadUrl "https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/Git-2.49.0-64-bit.exe" `
    -LocalFileName "Git-2.49.0-64-bit.exe" `
    -SilentArgs "/VERYSILENT /NORESTART" `
    -PostInstallCheckPath "C:\Program Files\Git\cmd\git.exe"

# --- Node.js telepítése (v22.16.0) ---
Install-Exe -Name "node" `
    -DownloadUrl "https://nodejs.org/dist/v22.16.0/node-v22.16.0-x64.msi" `
    -LocalFileName "node-v22.16.0-x64.msi" `
    -SilentArgs "/quiet" `
    -PostInstallCheckPath "C:\Program Files\nodejs\node.exe"

# --- VSCode telepítése ---
Install-Exe -Name "code" `
    -DownloadUrl "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user" `
    -LocalFileName "VSCodeUserSetup.exe" `
    -SilentArgs "/verysilent /mergetasks=!runcode /norestart" `
    -PostInstallCheckPath "$env:LOCALAPPDATA\Programs\Microsoft VS Code\Code.exe"

# --- Repo klónozása hibakezeléssel ---
$repoName = "react-cypress-demo"
$repoUrl = "https://github.com/lifi8888/$repoName.git"

if (-Not (Test-Path -Path ".\$repoName")) {
    Write-Host "`nRepo klónozás: $repoUrl"
    Write-Log "Repo klónozása: $repoUrl"
    try {
        $gitPath = "C:\Program Files\Git\cmd\git.exe"
		if (-Not (Test-Path $gitPath)) {
			Write-Host "`nHiba: Git nincs telepítve a várt helyre: $gitPath"
			Write-Log "Hiba: Git nem található: $gitPath"
			exit 1
		}
		& "$gitPath" clone $repoUrl 2>&1 | Tee-Object -Variable gitOutput | Out-Null
        if (-Not (Test-Path -Path ".\$repoName")) {
            throw "Klónozás után a könyvtár nem jött létre."
        }
        Write-Host "`nRepo sikeresen klónozva: $repoName"
        Write-Log "Repo sikeresen klónozva"
    } catch {
        Write-Host "`nRepo klónozása sikertelen"
        Write-Log "Repo klónozása sikertelen: $_"
        Write-Host "`nGit output: $gitOutput"		
        Write-Log "Git output: $gitOutput"
        exit 1
    }
} else {
    Write-Host "`nRepo már létezik: $repoName"
    Write-Log "Repo már létezik: $repoName"
}

Set-Location $repoName
Write-Host "`nBeléptünk a könyvtárba: $repoName"
Write-Log "Beléptünk a könyvtárba: $repoName"

# --- .env fájl létrehozása ---
$envFile = ".env"
if (-Not (Test-Path -Path $envFile)) {
	Write-Host "`n.env fájl létrehozása"
    Write-Log ".env fájl létrehozása"
    @"
PORT=3008
BASE_URL=http://localhost:3008
"@ | Out-File -Encoding utf8 -FilePath $envFile
    Write-Host "`n.env fájl létrehozva"
	Write-Log ".env fájl létrehozva"
} else {
    Write-Host "`n.env fájl már létezik"
    Write-Log ".env fájl már létezik"
}

# --- npm install ---
Write-Host "`nnpm install..."
Write-Log "npm install futtatása"
npm install
Write-Host "`nnpm install befejezve"
Write-Log "npm install befejezve"

# --- run-tests.ps1 ---
Write-Host "`nTesztek futtatása..."
Write-Log "run-tests.ps1 futtatása"
.\run-tests-headless.ps1
Write-Host "`nTesztek futtatása befejeződött"
Write-Log "run-tests.ps1 befejeződött"

# --- Log megnyitása ---
Write-Host "`nTelepítés kész. Napló megnyitása..."
Write-Log "Telepítés kész. Napló megnyitása..."
Start-Process notepad.exe $logFile
