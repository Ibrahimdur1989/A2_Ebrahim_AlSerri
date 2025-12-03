
# COMP3074 Assignment 2: Currency Converter App
#### Name: Ebrahim Al-Serri
#### Student ID:101085527
#### Instructor: Mohammad Kiani


# Project Description
This mobile application allows users to convert an amount from a base currency to a destination currency using the FreeCurrencyAPI service. The user enters a base currency, destination currency, and amount. The app validates the input and displays the converted result or an error message.

# Features of the App
* Convert an amount between two currencies.
* Input validation for currency code and amount.
* Error handling for invalid or missing input.
* Uses live exchange rates from FreeCurrencyAPI.
* Includes an About screen with student details.
* Navigation between Main and About screens.

# Screen Included 
* Main Screen - for entering amounts and converting.
* About screen - displays student and project details.

# How to Run the App 
1. Clone the repository
2. Run `npm install`
3. Add your FreeCurrencyAPI key inside screens/MainScreen.js
4. Run `npm start` or `npx react-native run-android`

# API Requirement
Register for a free API key here: 
https://freecurrencyapi.com 


# Tech Stack
Built with React Native (CLI) / Metro Bundler
Navigation: @react-navigation/native
API calls: fetch()