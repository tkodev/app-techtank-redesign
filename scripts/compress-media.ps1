$ffmpegPath = "ffmpeg"
$targetDir = Join-Path $PSScriptRoot "..\public\media\instagram"

# Find all mp4 files that are not already compressed
$videos = Get-ChildItem -Path $targetDir -Filter "*.mp4" -Recurse | Where-Object { $_.Name -notmatch "_compressed\.mp4$" }

Write-Host "Found $($videos.Count) videos to compress."

foreach ($video in $videos) {
    Write-Host "`nProcessing: $($video.FullName)"
    
    $webmPath = [System.IO.Path]::ChangeExtension($video.FullName, ".webm")
    $compressedMp4Path = [System.IO.Path]::Combine($video.DirectoryName, "$($video.BaseName)_compressed.mp4")

    # 1. Generate optimized WebM (VP9) - lower resolution, higher CRF
    Write-Host "Generating WebM..."
    $webmArgs = @("-y", "-i", $video.FullName, "-vf", "scale='w=min(1080,iw):h=min(1080,ih):force_original_aspect_ratio=decrease'", "-c:v", "libvpx-vp9", "-crf", "40", "-b:v", "0", "-c:a", "libopus", $webmPath)
    & $ffmpegPath $webmArgs

    # 2. Generate optimized MP4 (H.264) - lower resolution, higher CRF
    Write-Host "Generating optimized MP4..."
    $mp4Args = @("-y", "-i", $video.FullName, "-vf", "scale='w=min(1080,iw):h=min(1080,ih):force_original_aspect_ratio=decrease'", "-c:v", "libx264", "-preset", "medium", "-crf", "28", "-c:a", "aac", "-movflags", "+faststart", $compressedMp4Path)
    & $ffmpegPath $mp4Args

    # 3. Replace original MP4 with compressed MP4
    if (Test-Path $compressedMp4Path) {
        Write-Host "Replacing original MP4..."
        Remove-Item $video.FullName
        Rename-Item -Path $compressedMp4Path -NewName $video.Name
        Write-Host "Successfully processed $($video.BaseName)"
    } else {
        Write-Host "Error: compressed file not created for $($video.BaseName)"
    }
}

Write-Host "`nAll videos processed successfully!"
