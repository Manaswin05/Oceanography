@echo off
echo ========================================
echo Marine Research Portal - Startup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Python is not installed!
    echo Please install Python from https://www.python.org/
    echo.
    pause
    exit /b 1
)

echo [1/3] Checking npm dependencies...
if not exist "node_modules\" (
    echo Installing npm dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: Failed to install npm dependencies
        pause
        exit /b 1
    )
) else (
    echo npm dependencies already installed.
)
echo.

echo [2/3] Checking Python dependencies...
if not exist "backend_taxonomy\venv\" (
    echo Python virtual environment not found.
    echo Please run: cd backend_taxonomy ^&^& pip install -r requirements.txt
    echo.
)

echo [3/3] Starting servers...
echo.
echo Backend will run on: http://127.0.0.1:8000
echo Frontend will run on: http://127.0.0.1:5500
echo.
echo Press Ctrl+C to stop both servers
echo ========================================
echo.

REM Start both servers using concurrently
call npm start

pause
