# 🤝 Contributing to Marine Research Portal

Thank you for your interest in contributing to the Marine Research Portal! This document provides guidelines for contributing to this open-source project.

## 🌊 Project Overview

Marine Research Portal is a comprehensive web platform for marine biology research, featuring:
- Taxonomical analysis using DNA sequences
- Ocean environmental data collection and prediction
- Marine specimen image analysis
- Research dataset repository

## 🚀 Getting Started

### Fork and Clone

1. **Fork the repository**
   - Original repo: https://github.com/salil-kulkarni-03/Taxonomical_Analysis
   - Click "Fork" button on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Oceanography.git
   cd Oceanography
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/salil-kulkarni-03/Taxonomical_Analysis.git
   ```

4. **Verify remotes**
   ```bash
   git remote -v
   # origin    https://github.com/YOUR_USERNAME/Oceanography.git (fetch)
   # origin    https://github.com/YOUR_USERNAME/Oceanography.git (push)
   # upstream  https://github.com/salil-kulkarni-03/Taxonomical_Analysis.git (fetch)
   # upstream  https://github.com/salil-kulkarni-03/Taxonomical_Analysis.git (push)
   ```

### Setup Development Environment

1. **Install dependencies**
   ```bash
   # Node.js dependencies
   npm install
   
   # Python dependencies
   cd backend_taxonomy
   pip install -r requirements.txt
   cd ..
   ```

2. **Start development servers**
   ```bash
   npm start
   ```

## 📝 Contribution Workflow

### 1. Create a Feature Branch

```bash
# Sync with upstream
git checkout main
git fetch upstream
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments where necessary
- Test your changes thoroughly

### 3. Commit Your Changes

```bash
git add .
git commit -m "Add: brief description of your changes"
```

**Commit Message Guidelines:**
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Prefix with type:
  - `Add:` - New feature
  - `Fix:` - Bug fix
  - `Update:` - Update existing feature
  - `Refactor:` - Code refactoring
  - `Docs:` - Documentation changes
  - `Style:` - Code style changes (formatting)
  - `Test:` - Adding tests
  - `Chore:` - Maintenance tasks

**Examples:**
```bash
git commit -m "Add: ocean temperature prediction model"
git commit -m "Fix: CORS error in image upload endpoint"
git commit -m "Docs: update README with new API endpoints"
```

### 4. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template:
   - **Title:** Clear, concise description
   - **Description:** What changes you made and why
   - **Related Issues:** Link any related issues
   - **Testing:** How you tested your changes
   - **Screenshots:** If UI changes, add screenshots

## 🎯 Areas to Contribute

### High Priority

1. **Machine Learning Models**
   - Replace mock ocean prediction with real ML model
   - Implement computer vision model for image analysis
   - Improve taxonomy prediction accuracy

2. **Backend Features**
   - Add database integration (PostgreSQL/MongoDB)
   - Implement user authentication
   - Add data validation and sanitization
   - API rate limiting

3. **Frontend Features**
   - Add data visualization charts
   - Improve mobile responsiveness
   - Add loading animations
   - Implement error boundaries

4. **Testing**
   - Unit tests for backend endpoints
   - Frontend component tests
   - Integration tests
   - E2E tests

### Medium Priority

5. **Documentation**
   - API documentation improvements
   - Code comments
   - Tutorial videos
   - Use case examples

6. **DevOps**
   - Docker containerization
   - CI/CD pipeline
   - Deployment scripts
   - Monitoring setup

7. **Performance**
   - Backend optimization
   - Frontend bundle optimization
   - Caching strategies
   - Database query optimization

### Good First Issues

- Fix typos in documentation
- Add missing docstrings
- Improve error messages
- Add input validation
- Update dependencies
- Improve UI accessibility

## 🧪 Testing Guidelines

### Before Submitting PR

1. **Test locally**
   ```bash
   npm start
   ```

2. **Check backend endpoints**
   - Visit http://localhost:8000/docs
   - Test all API endpoints
   - Verify error handling

3. **Test frontend**
   - Open http://localhost:5500
   - Test all pages
   - Check browser console for errors
   - Test on different browsers

4. **Run linters** (if available)
   ```bash
   # Python
   flake8 backend_taxonomy/
   
   # JavaScript
   eslint frontend_taxonomy/
   ```

## 📋 Code Style Guidelines

### Python (Backend)

- Follow PEP 8
- Use type hints
- Add docstrings to functions
- Keep functions small and focused
- Use meaningful variable names

```python
def predict_ocean_data(data: OceanDataInput) -> dict:
    """
    Predict species observed based on ocean environmental data.
    
    Args:
        data: Ocean environmental parameters
        
    Returns:
        Dictionary with prediction and metadata
    """
    # Implementation
    pass
```

### JavaScript (Frontend)

- Use ES6+ features
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small
- Use async/await for promises

```javascript
async function analyzeImage(file, analysisType) {
    // Analyze uploaded marine specimen image
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: formData
        });
        return await response.json();
    } catch (error) {
        console.error('Analysis failed:', error);
    }
}
```

### HTML/CSS

- Use semantic HTML
- Follow BEM naming for CSS classes
- Ensure accessibility (ARIA labels)
- Mobile-first responsive design

## 🐛 Bug Reports

When reporting bugs, include:

1. **Description:** Clear description of the bug
2. **Steps to Reproduce:**
   ```
   1. Go to '...'
   2. Click on '...'
   3. See error
   ```
3. **Expected Behavior:** What should happen
4. **Actual Behavior:** What actually happens
5. **Screenshots:** If applicable
6. **Environment:**
   - OS: [e.g., Windows 11]
   - Browser: [e.g., Chrome 120]
   - Python version: [e.g., 3.10]
   - Node version: [e.g., 18.0]

## 💡 Feature Requests

When suggesting features:

1. **Description:** Clear description of the feature
2. **Use Case:** Why this feature would be useful
3. **Proposed Solution:** How it could be implemented
4. **Alternatives:** Other solutions you considered

## 🔍 Code Review Process

1. Maintainer will review your PR
2. May request changes or ask questions
3. Address feedback in new commits
4. Once approved, PR will be merged
5. Your contribution will be acknowledged!

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

All contributors will be:
- Listed in the contributors section
- Credited in release notes
- Added to the README

## 📧 Contact

- **Original Repository:** https://github.com/salil-kulkarni-03/Taxonomical_Analysis
- **Issues:** https://github.com/salil-kulkarni-03/Taxonomical_Analysis/issues
- **Discussions:** https://github.com/salil-kulkarni-03/Taxonomical_Analysis/discussions

## 🎉 Thank You!

Your contributions make this project better for everyone in the marine research community!

---

**Happy Contributing! 🌊🐠**
