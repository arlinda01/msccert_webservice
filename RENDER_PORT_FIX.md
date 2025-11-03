# 🔧 RENDER PORT BINDING FIX

## Problem

You received this error on Render:
```
Timed out: Port scan timeout reached, no open ports detected.
Bind your service to at least one port.
```

## Root Cause

Gunicorn wasn't binding to the `PORT` environment variable that Render provides. Render assigns a random port and expects your app to bind to `$PORT`.

---

## ✅ Solution (Already Applied)

I've updated the following files:

### 1. `render.yaml` - Updated
```yaml
startCommand: gunicorn --bind 0.0.0.0:$PORT backend.wsgi:application
```

### 2. `DEPLOYMENT_GUIDE.md` - Updated
- Updated Start Command in deployment steps
- Added troubleshooting section for this exact error

### 3. `backend/start.sh` - Created
Alternative start script with proper port binding (optional)

---

## 🚀 How to Fix on Render (Right Now)

Since your service is already created on Render, you need to update the Start Command:

### Option 1: Via Render Dashboard (Fastest)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click on your `msccert-backend` service
3. Go to **"Settings"** tab
4. Scroll down to **"Build & Deploy"** section
5. Find **"Start Command"**
6. Replace with:
   ```
   gunicorn --bind 0.0.0.0:$PORT backend.wsgi:application
   ```
7. Click **"Save Changes"**
8. Go to **"Manual Deploy"** → Click **"Deploy latest commit"**

### Option 2: Push Updated Code (Recommended)

If you haven't pushed the fixes yet:

```bash
# Add the updated files
git add render.yaml DEPLOYMENT_GUIDE.md backend/start.sh RENDER_PORT_FIX.md

# Commit the changes
git commit -m "Fix Render port binding issue"

# Push to GitHub
git push origin main
```

Render will automatically redeploy with the correct start command from `render.yaml`.

---

## 🧪 Verify the Fix

After deploying, check:

1. **Render Logs:**
   - Go to your service → **"Logs"** tab
   - Look for: `Listening at: http://0.0.0.0:XXXXX` (XXXXX = random port)
   - Should see: `Your service is live 🎉`

2. **Health Check:**
   - Render should show a green checkmark ✅
   - Service should be in **"Live"** status

3. **Test API:**
   - Open: `https://your-backend.onrender.com/api/`
   - Should return JSON response, not an error

---

## 📝 What Changed

### Before (Wrong) ❌
```bash
gunicorn backend.wsgi:application
# This binds to 127.0.0.1:8000 (localhost only)
# Render can't access it from outside
```

### After (Correct) ✅
```bash
gunicorn --bind 0.0.0.0:$PORT backend.wsgi:application
# This binds to all network interfaces (0.0.0.0)
# Uses Render's dynamic port ($PORT)
# Render can now access it
```

---

## 🔍 Additional Gunicorn Options (Optional)

For better performance, you can use:

```bash
gunicorn --bind 0.0.0.0:$PORT --workers 2 --timeout 120 backend.wsgi:application
```

Explanation:
- `--bind 0.0.0.0:$PORT` - Bind to all interfaces on Render's port
- `--workers 2` - Use 2 worker processes (good for free tier)
- `--timeout 120` - 2-minute timeout for long requests (PDF generation)

This is already included in `backend/start.sh` if you want to use it.

---

## 🆘 Still Not Working?

### Check Build Logs

If deployment fails during build:

1. Go to Render → Your service → **"Logs"**
2. Look for errors during:
   - `pip install -r requirements.txt`
   - `python manage.py collectstatic`
   - `python manage.py migrate`

### Common Issues

1. **Missing `gunicorn` in requirements.txt:**
   ```
   # Should be in backend/requirements.txt
   gunicorn
   ```

2. **Wrong Root Directory:**
   - Should be set to `backend` in Render settings

3. **Environment Variables Missing:**
   - Make sure `DJANGO_SECRET_KEY` is set
   - Check all required env vars in DEPLOYMENT_GUIDE.md

---

## 📚 Next Steps

After fixing the port binding:

1. ✅ Verify backend is live
2. ✅ Update `ALLOWED_HOSTS` environment variable with your Render URL
3. ✅ Deploy frontend to Netlify
4. ✅ Update `FRONTEND_URL` and `CORS_ALLOWED_ORIGINS` on Render
5. ✅ Test complete flow (create certificate, scan QR code)

---

## 💡 Prevention

This fix is now permanent because:
- `render.yaml` has the correct start command
- Future deployments will use the correct command automatically
- Documentation updated to prevent this issue

---

**Need more help?** Check `DEPLOYMENT_GUIDE.md` for the complete deployment process!
