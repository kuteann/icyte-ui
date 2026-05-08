$source = "C:\Users\kuteann\Downloads\ic-icon-v1.0\fonts\"
$dest = "C:\Icyte-ui\icyte-ui-workspace\public\assets\fonts\"

Get-ChildItem $source | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $dest -Force
    Write-Host "Copied $($_.Name)"
}
