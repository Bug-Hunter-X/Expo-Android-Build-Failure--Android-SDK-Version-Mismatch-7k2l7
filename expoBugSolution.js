The solution involves a script that automatically detects the installed Android SDK version and updates the `gradle.properties` file to match.  This prevents the build failure caused by the version mismatch.   Here's a basic example using bash (adapt as needed for your OS):

```bash
#!/bin/bash

# Get the installed Android SDK version
installedSDK=$(sdkmanager --list | grep "Android SDK Build-Tools" | awk '{print $1}' | tail -n 1 | sed 's/\(Android SDK Build-Tools \)//')

# Update gradle.properties
sed -i "s/android.buildToolsVersion=.*/android.buildToolsVersion=${installedSDK}/" android/app/build.gradle

# Optional: Print confirmation
echo "Updated android.buildToolsVersion to: ${installedSDK}"

# Rebuild app using expo
expo build:android
```

This script first identifies the latest installed Android SDK Build-Tools version. Then, it updates the `android.buildToolsVersion` property in the `android/app/build.gradle` file to reflect the installed version. Finally, it attempts to build the app using expo build:android.

**Important:**  Adapt the script and file paths to match your project structure if necessary. Remember to ensure that the Android SDK Build-Tools corresponding to your `android.buildToolsVersion` are actually installed using Android Studio's SDK Manager.