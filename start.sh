#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "========================================"
echo "Marine Research Portal - Startup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}ERROR: Node.js is not installed!${NC}"
    echo "Please install Node.js from https://nodejs.org/"
    echo ""
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null; then
    echo -e "${RED}ERROR: Python is not installed!${NC}"
    echo "Please install Python from https://www.python.org/"
    echo ""
    exit 1
fi

# Set python command
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
else
    PYTHON_CMD="python"
fi

echo -e "${YELLOW}[1/3] Checking npm dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    echo "Installing npm dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}ERROR: Failed to install npm dependencies${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}npm dependencies already installed.${NC}"
fi
echo ""

echo -e "${YELLOW}[2/3] Checking Python dependencies...${NC}"
if [ ! -d "backend_taxonomy/venv" ] && [ ! -d "backend_taxonomy/.venv" ]; then
    echo -e "${YELLOW}Python virtual environment not found.${NC}"
    echo "Please run: cd backend_taxonomy && pip install -r requirements.txt"
    echo ""
else
    echo -e "${GREEN}Python environment detected.${NC}"
fi
echo ""

echo -e "${YELLOW}[3/3] Starting servers...${NC}"
echo ""
echo -e "${BLUE}Backend will run on: http://127.0.0.1:8000${NC}"
echo -e "${BLUE}Frontend will run on: http://127.0.0.1:5500${NC}"
echo ""
echo -e "${GREEN}Press Ctrl+C to stop both servers${NC}"
echo "========================================"
echo ""

# Start both servers using concurrently
npm start
