# Expo Android Build Failure: Android SDK Version Mismatch

This repository demonstrates a common but difficult-to-diagnose error when building Android apps with Expo CLI. The problem arises from an inconsistency between the Android SDK version specified in your project's `gradle.properties` file and the Android SDK version installed on your system.  The error messages are often unhelpful, leading to debugging frustration.

## Problem

The Expo CLI might fail to build an Android app due to a mismatch between the required and installed SDK versions. This results in vague error messages, making it hard to pinpoint the cause. 

## Solution

This repository provides a solution focusing on ensuring the correct Android SDK version is both specified in your project and actually installed. A common mistake is leaving the default SDK version in `gradle.properties` which might not match your current setup. This example checks for the installed SDK version and updates the project file accordingly.

## Setup and Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Try building the Android app (this will likely fail initially due to the mismatch).
4. Review and run the provided solution to fix the SDK version.