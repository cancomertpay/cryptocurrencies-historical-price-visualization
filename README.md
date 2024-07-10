# Cryptocurrency Dashboard Application

## Overview

Welcome to the Cryptocurrency Dashboard Application! This web application provides users with tools to visualize and analyze historical price data for various cryptocurrencies. Users can explore trends, perform detailed analyses, and view specific cryptocurrency details in a modal interface.

## Features

- Date Range Selection: Choose a start and end date to filter cryptocurrency data.
- Data Visualization: Visualize price trends using interactive line charts.
- Detailed Analysis: Calculate highest average daily price difference and identify lowest/highest prices within the selected date range.
- Modal Popup: Click on a cryptocurrency card to open a modal displaying detailed data in a sortable datatable.
- Logging: Record user-selected date ranges using JSON-Server for analytics and tracking.

## Technologies Used

- React: Front-end library for building user interfaces.
- Next.js: React framework optimized for server-side rendering, static site generation, and building modern web applications.
- Tailwind CSS: Utility-first CSS framework for styling.
- Chart.js: Simple yet flexible JavaScript charting for data visualization.
- React Chart.js 2: React components for Chart.js integration.
- JSON-Server: Lightweight, local JSON data server for logging.
- Docker: Containerization platform for easy deployment and scaling of applications.

## Usage

1. Set Date Range: Use the Date Picker component to select a desired start and end date.
2. Explore Data: Navigate through the dashboard to explore cryptocurrency data visualized in charts.
3. Detailed View: Click on any cryptocurrency card to open a modal and view detailed data in a sortable datatable.

## Attention
I host two different JSON-Servers on render.com: one for the log API at https://log-api-7cgr.onrender.com, and the other at https://case-study-api.onrender.com. These are the APIs currently used in the application and are functioning smoothly. However, render.com has a notice that 'Your free instance will spin down with inactivity, which can delay requests by 50 seconds or more.' This means that if the application doesn't send requests to the API for a long time, there may be delays in response times. This is not an issue directly related to the frontend application. Thank you for your understanding.
