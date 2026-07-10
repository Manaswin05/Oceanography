# 🚀 Quick Start Guide

Get the Marine Research Portal up and running in minutes!

## Prerequisites

- Python 3.8 or higher
- Web browser (Chrome, Firefox, Edge, Safari)
- Text editor or IDE (VSCode recommended)

## Step-by-Step Setup

### 1. Open Two Terminals

You'll need two terminal windows:
- **Terminal 1**: For the backend server
- **Terminal 2**: For the frontend server

---

### 2. Start the Backend (Terminal 1)

```bash
# Navigate to backend directory
cd backend_taxonomy

# Create conda environment (first time only)
conda create -n taxonomy python=3.10 -y
conda activate taxonomy

# Install dependencies (first time only)
pip install -r requirements.txt

# Start the FastAPI server
python -m uvicorn api:app --reload
```

✅ **Backend Ready!** You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

Test it: Open `http://127.0.0.1:8000/docs` in your browser

---

### 3. Start the Frontend (Terminal 2)

**Option A: Using VSCode Live Server (Recommended)**

1. Install "Live Server" extension in VSCode
2. Right-click on `frontend_taxonomy/index.html`
3. Select "Open with Live Server"
4. Browser will open automatically at `http://127.0.0.1:5500`

**Option B: Using Python**

```bash
# Navigate to frontend directory
cd frontend_taxonomy

# Start simple HTTP server
python -m http.server 5500
```

Then open: `http://127.0.0.1:5500/index.html`

**Option C: Direct Open**

Simply double-click `frontend_taxonomy/index.html` to open in your browser.

---

### 4. Test the Application

1. **Open the Portal:** `http://127.0.0.1:5500/index.html`

2. **Test Taxonomical Analysis:**
   - Click "Access Tool" on Taxonomical Analysis card
   - Enter sample data:
     - Sequence: `ATCGATCGATCGATCG`
     - Filter ID: `sample-001`
     - Reads: `15000`
   - Click "Submit for Analysis"
   - View results!

3. **Test Ocean Data:**
   - Click "Oceanographic Features" → "Access Tool"
   - Fill in the form with sample ocean data
   - Submit and see prediction

4. **Test Image Analysis:**
   - Click "Otolithographical Analysis" → "Access Tool"
   - Upload any image
   - Select analysis type
   - Click "Analyze Image"

---

## Troubleshooting

### ❌ "Connection refused" or "Failed to fetch"

**Problem:** Frontend can't connect to backend

**Solution:**
1. Verify backend is running: `http://127.0.0.1:8000`
2. Check terminal 1 for errors
3. Ensure no firewall is blocking port 8000

---

### ❌ "Model not found" error

**Problem:** ML model files are missing

**Solution:**
1. Ensure `taxonomy_model.h5` exists in `backend_taxonomy/`
2. Create `artifacts/` folder if missing:
   ```bash
   cd backend_taxonomy
   mkdir artifacts
   ```
3. Place all `.pkl` files in `artifacts/`

---

### ❌ Backend won't start - "Port already in use"

**Problem:** Port 8000 is occupied

**Solution:**
```bash
# Option 1: Kill process on port 8000 (Windows)
netstat -ano | findstr :8000
taskkill /PID <process_id> /F

# Option 2: Use different port
python -m uvicorn api:app --reload --port 8001
# Then update frontend API URLs to http://127.0.0.1:8001
```

---

### ❌ Frontend shows blank page

**Problem:** File path or server issue

**Solution:**
1. Check browser console (F12) for errors
2. Verify you're accessing `index.html` not just directory
3. Try different browser
4. Clear browser cache

---

## File Structure Overview

```
Your workspace/
├── backend_taxonomy/           ← Start backend here
│   ├── api.py
│   ├── taxonomy_model.h5
│   ├── artifacts/
│   └── requirements.txt
│
└── frontend_taxonomy/          ← Start frontend here
    ├── index.html             ← Main page
    ├── taxonomy.html          ← DNA analysis
    ├── oc.html               ← Ocean data
    ├── otolithography.html   ← Image analysis
    └── stream.html           ← Datasets
```

---

## Key URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend Portal | http://127.0.0.1:5500 | Main application |
| Backend API | http://127.0.0.1:8000 | REST API server |
| API Docs (Swagger) | http://127.0.0.1:8000/docs | Interactive API testing |

---

## Next Steps

✅ Basic setup complete! Now you can:

1. **Customize the frontend:**
   - Edit HTML files for different UI
   - Modify colors in CSS variables
   - Add new features

2. **Enhance the backend:**
   - Replace mock prediction functions
   - Add database integration
   - Implement authentication

3. **Deploy to production:**
   - Use Docker for containerization
   - Deploy to cloud (AWS, Azure, Heroku)
   - Set up CI/CD pipeline

---

## Common Commands Reference

### Backend Commands
```bash
# Activate environment
conda activate taxonomy

# Start server
python -m uvicorn api:app --reload

# Check dependencies
pip list

# Update dependencies
pip install -r requirements.txt --upgrade
```

### Frontend Commands
```bash
# Python HTTP server
python -m http.server 5500

# Node.js HTTP server (if installed)
npx http-server -p 5500
```

---

## Need Help?

- 📖 Full documentation: See `README.md`
- 🐛 Found a bug? Check the Troubleshooting section
- 💡 Feature request? Open an issue

---

**Happy Researching! 🌊🐠**
