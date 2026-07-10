# 🚀 Startup Guide - Using Concurrently

## Quick Start (One Command!)

### Prerequisites
1. **Node.js** installed (for concurrently)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **Python 3.8+** installed
   - Download: https://www.python.org/
   - Verify: `python --version`

---

## Method 1: Automated Startup (Recommended)

### Windows

```bash
# Double-click start.bat
# OR run in terminal:
start.bat
```

### Linux/Mac

```bash
# Make script executable (first time only)
chmod +x start.sh

# Run the script
./start.sh
```

---

## Method 2: Manual NPM Commands

### Step 1: Install Dependencies (First Time Only)

```bash
# Install npm packages (concurrently)
npm install

# Install Python packages
cd backend_taxonomy
pip install -r requirements.txt
cd ..
```

### Step 2: Start Both Servers

```bash
# Start both backend and frontend with one command
npm start
```

That's it! Both servers will start with color-coded output:
- 🔵 **BACKEND** - Blue output (http://127.0.0.1:8000)
- 🟢 **FRONTEND** - Green output (http://127.0.0.1:5500)

---

## Available NPM Scripts

```bash
# Start both servers (recommended)
npm start

# Alternative: use dev command
npm run dev

# Start only backend
npm run backend-only

# Start only frontend
npm run frontend-only
```

---

## What Happens When You Run `npm start`

1. **Concurrently** starts two processes simultaneously:
   - Backend: `python -m uvicorn api:app --reload`
   - Frontend: `python -m http.server 5500`

2. Both servers display their logs in the same terminal with color-coding

3. Press **Ctrl+C** to stop both servers at once

---

## Sample Output

```
[BACKEND] INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
[BACKEND] INFO:     Started reloader process [12345]
[BACKEND] INFO:     Started server process [12346]
[BACKEND] INFO:     Waiting for application startup.
[BACKEND] INFO:     Application startup complete.
[FRONTEND] Serving HTTP on 0.0.0.0 port 5500 (http://0.0.0.0:5500/) ...
```

---

## Troubleshooting

### ❌ "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### ❌ "python: command not found"
**Solution:** Install Python from https://www.python.org/

### ❌ "concurrently: command not found"
**Solution:** Run `npm install` to install dependencies

### ❌ "Port 8000 already in use"
**Solution:** 
```bash
# Windows: Kill process on port 8000
netstat -ano | findstr :8000
taskkill /PID <process_id> /F

# Linux/Mac: Kill process on port 8000
lsof -ti:8000 | xargs kill -9
```

### ❌ "Port 5500 already in use"
**Solution:**
```bash
# Windows
netstat -ano | findstr :5500
taskkill /PID <process_id> /F

# Linux/Mac
lsof -ti:5500 | xargs kill -9
```

### ❌ Backend starts but shows "Model not found"
**Solution:** Ensure these files exist:
- `backend_taxonomy/taxonomy_model.h5`
- `backend_taxonomy/artifacts/kmer_index.pkl`
- `backend_taxonomy/artifacts/filter_encoder.pkl`
- `backend_taxonomy/artifacts/reads_scaler.pkl`
- `backend_taxonomy/artifacts/label_encoders.pkl`

---

## Stopping the Servers

Press **Ctrl+C** in the terminal where `npm start` is running.

Concurrently will automatically stop both servers.

---

## Advanced Configuration

### Customize Ports

Edit `package.json`:

```json
{
  "scripts": {
    "backend": "cd backend_taxonomy && python -m uvicorn api:app --reload --host 127.0.0.1 --port 8001",
    "frontend": "cd frontend_taxonomy && python -m http.server 5501"
  }
}
```

**Remember:** If you change ports, update the API URLs in frontend HTML files!

### Add More Processes

```json
{
  "scripts": {
    "start": "concurrently \"npm run backend\" \"npm run frontend\" \"npm run database\""
  }
}
```

### Customize Output Colors

```json
{
  "scripts": {
    "start": "concurrently --prefix-colors \"red,blue,green\" ..."
  }
}
```

---

## Benefits of Using Concurrently

✅ **Single Command** - Start everything with `npm start`

✅ **Color-Coded Output** - Easy to distinguish backend from frontend logs

✅ **Auto-Kill** - Press Ctrl+C once to stop everything

✅ **Named Processes** - Clear labels show which server logged what

✅ **Developer-Friendly** - Standard npm workflow

✅ **Cross-Platform** - Works on Windows, Mac, and Linux

---

## Project Structure Reminder

```
Taxonomical_Analysis/
├── package.json           ← npm configuration
├── start.bat              ← Windows startup script
├── start.sh               ← Linux/Mac startup script
├── backend_taxonomy/      ← Backend server
│   ├── api.py
│   └── requirements.txt
└── frontend_taxonomy/     ← Frontend files
    └── index.html
```

---

## Quick Reference

| Action | Command |
|--------|---------|
| Install dependencies | `npm install` |
| Start both servers | `npm start` |
| Start only backend | `npm run backend-only` |
| Start only frontend | `npm run frontend-only` |
| Stop servers | `Ctrl+C` |

---

## Next Steps After Startup

1. **Open your browser:** http://127.0.0.1:5500/index.html

2. **Test the API:** http://127.0.0.1:8000/docs (Swagger UI)

3. **Start developing!**

---

## CI/CD Integration

You can use this in your deployment scripts:

```yaml
# .github/workflows/deploy.yml
- name: Start servers
  run: npm start
```

---

## Docker Alternative

If you prefer Docker, see `DOCKER.md` (coming soon) for containerized deployment.

---

**Happy Coding! 🌊🐠**

For more details, see:
- `README.md` - Full project documentation
- `QUICKSTART.md` - Manual startup instructions
- `ARCHITECTURE.md` - System design
