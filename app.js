// ==================== CREATE APP STRUCTURE ====================
function createAppStructure() {
  const root = document.getElementById('app-root');
  
  root.innerHTML = `
    <!-- Dark Mode Toggle -->
    <div class="dark-mode-toggle" id="darkModeToggle">
        <i class="fas fa-moon"></i>
        <span>Dark Mode</span>
    </div>

    <div class="container">
        <div class="header">
            <div class="logo">
                <i class="fas fa-crop-alt"></i>
                <h1>Image Resizer by SoURoV</h1>
            </div>
            <p>Professional Image Resizing Tool — Resize to any dimension instantly</p>
        </div>

        <div class="main-grid">
            <!-- Upload Section -->
            <div class="card">
                <div class="card-header">
                    <h2><i class="fas fa-cloud-upload-alt"></i> Upload Image</h2>
                    <p>Support: JPG, PNG, WEBP (Max 15MB)</p>
                </div>
                <div class="card-body">
                    <div class="upload-area" id="uploadArea">
                        <div class="upload-icon">
                            <i class="fas fa-images"></i>
                        </div>
                        <h3>Click or Drag & Drop</h3>
                        <p>Choose your image file to get started</p>
                        <input type="file" id="fileInput" accept="image/jpeg, image/png, image/webp, image/jpg">
                    </div>
                    <div id="previewContainer" style="display: none;">
                        <div class="preview-container">
                            <img id="originalImage" class="preview-image" alt="Original">
                            <div class="info-chip">
                                <i class="fas fa-info-circle"></i>
                                <span id="originalDimensions">0 × 0 px</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Controls Section -->
            <div class="card" id="controlsCard" style="display: none;">
                <div class="card-header">
                    <h2><i class="fas fa-sliders-h"></i> Resize Settings</h2>
                    <p>Enter your custom dimensions</p>
                </div>
                <div class="card-body">
                    <div class="aspect-ratio-group">
                        <button class="lock-btn locked" id="aspectLockBtn">
                            <i class="fas fa-lock"></i>
                            <span>Aspect Locked</span>
                        </button>
                        <div class="ratio-info" id="ratioInfo">
                            <i class="fas fa-chart-line"></i> Original: <span id="aspectRatioValue">--:--</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <label><i class="fas fa-arrows-alt-h"></i> Width (pixels)</label>
                        <input type="number" id="widthInput" placeholder="Enter width" value="800" min="10">
                    </div>
                    <div class="input-group">
                        <label><i class="fas fa-arrows-alt-v"></i> Height (pixels)</label>
                        <input type="number" id="heightInput" placeholder="Enter height" value="600" min="10">
                    </div>
                    <div class="input-group">
                        <label><i class="fas fa-file-image"></i> Download Format</label>
                        <select id="formatSelect">
                            <option value="image/png">PNG (Transparent support)</option>
                            <option value="image/jpeg">JPEG (Smaller size)</option>
                            <option value="image/webp">WebP (Modern & lightweight)</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" id="resizeBtn">
                        <i class="fas fa-sync-alt"></i> Apply Resize
                    </button>
                    <button class="btn btn-success" id="downloadBtn">
                        <i class="fas fa-download"></i> Download Image
                    </button>
                </div>
            </div>
        </div>

        <!-- Result Section -->
        <div id="resultSection" style="display: none;">
            <div class="card">
                <div class="card-header">
                    <h2><i class="fas fa-magic"></i> Preview Result</h2>
                    <p>Your resized image is ready</p>
                </div>
                <div class="card-body">
                    <div class="result-card">
                        <h3><i class="fas fa-eye"></i> Resized Preview</h3>
                        <canvas id="resizedCanvas" class="result-canvas"></canvas>
                        <div class="dimension-badge">
                            <i class="fas fa-expand-alt"></i>
                            <span id="resizedDimensions">0 × 0 px</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tool Description Section -->
        <div class="description-section">
            <div class="card">
                <div class="card-header">
                    <h2><i class="fas fa-info-circle"></i> Features & How to Use</h2>
                    <p>All features explained</p>
                </div>
                <div class="card-body">
                    <div class="feature-grid">
                        <div class="feature-item"><i class="fas fa-arrows-alt"></i><span>Resize to any dimension</span></div>
                        <div class="feature-item"><i class="fas fa-moon"></i><span>Dark/Light mode</span></div>
                        <div class="feature-item"><i class="fas fa-file-image"></i><span>PNG, JPG, WebP support</span></div>
                        <div class="feature-item"><i class="fas fa-lock"></i><span>Aspect ratio lock</span></div>
                        <div class="feature-item"><i class="fas fa-tachometer-alt"></i><span>Fast & browser-based</span></div>
                        <div class="feature-item"><i class="fas fa-lock"></i><span>100% private (no server upload)</span></div>
                        <div class="feature-item"><i class="fas fa-mobile-alt"></i><span>Mobile friendly</span></div>
                    </div>
                    
                    <h3 style="margin: 1rem 0 0.8rem 0; color: var(--text-primary); font-size: 1rem;"><i class="fas fa-play-circle"></i> How to use?</h3>
                    <div class="howto-steps">
                        <div class="step"><div class="step-number">1</div><p>Upload your image (click or drag & drop)</p></div>
                        <div class="step"><div class="step-number">2</div><p>Enter desired width & height</p></div>
                        <div class="step"><div class="step-number">3</div><p>Use aspect lock to maintain proportions</p></div>
                        <div class="step"><div class="step-number">4</div><p>Select format & download</p></div>
                    </div>
                    
                    <div style="margin-top: 1rem; padding: 0.8rem; background: var(--upload-bg); border-radius: 0.8rem; text-align: center;">
                        <p style="font-size: 0.8rem; color: var(--text-muted);">
                            <i class="fas fa-shield-alt"></i> Your image never uploads to any server — everything happens in your browser
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="custom-footer">
            <div class="footer-social">
                <a href="https://facebook.com/sourovxray" target="_blank" rel="noopener noreferrer" style="color: #1877f2;"><i class="fab fa-facebook"></i></a>
                <a href="https://instagram.com/sourovxray" target="_blank" rel="noopener noreferrer" style="color: #e4405f;"><i class="fab fa-instagram"></i></a>
                <a href="https://t.me/sourovxray" target="_blank" rel="noopener noreferrer" style="color: #0088cc;"><i class="fab fa-telegram"></i></a>
                <a href="https://twitter.com/sourovxray" target="_blank" rel="noopener noreferrer" style="color: #1da1f2;"><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/sourovff" target="_blank" rel="noopener noreferrer" class="github-icon" style="color: #333;"><i class="fab fa-github"></i></a>
                <a href="https://wa.me/8801789538134" target="_blank" rel="noopener noreferrer" style="color: #25d366;"><i class="fab fa-whatsapp"></i></a>
            </div>
            
            <p class="footer-text">© <span id="currentYear"></span> SOUROV RAY | STATUS: <span class="status-online">● ONLINE</span></p>
            
            <p class="footer-copyright">
                <i class="fas fa-copyright"></i> — Developed with 
                <i class="fas fa-heart heart-icon"></i> by 
                <strong class="brand-gradient">SoURoV RaY</strong>
            </p>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="toast">
        <i class="fas fa-check-circle"></i>
        <span id="toastMessage">Success!</span>
    </div>
  `;
}

// Call the function to build the app
createAppStructure();

// ==================== IMAGE RESIZER LOGIC ====================
(function() {
  // DOM Elements
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const previewContainer = document.getElementById('previewContainer');
  const originalImage = document.getElementById('originalImage');
  const originalDimensions = document.getElementById('originalDimensions');
  const controlsCard = document.getElementById('controlsCard');
  const widthInput = document.getElementById('widthInput');
  const heightInput = document.getElementById('heightInput');
  const resizeBtn = document.getElementById('resizeBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const resultSection = document.getElementById('resultSection');
  const resizedCanvas = document.getElementById('resizedCanvas');
  const resizedDimensions = document.getElementById('resizedDimensions');
  const formatSelect = document.getElementById('formatSelect');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const aspectLockBtn = document.getElementById('aspectLockBtn');
  const aspectRatioValue = document.getElementById('aspectRatioValue');

  // State
  let originalImageFile = null;
  let originalImgObj = new Image();
  let originalWidth = 0;
  let originalHeight = 0;
  let currentResizedBlob = null;
  let currentResizedWidth = 0;
  let currentResizedHeight = 0;
  let isAspectLocked = true;
  let isUpdating = false;

  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Dark Mode Functionality
  function initDarkMode() {
    const savedMode = localStorage.getItem('proresizer-darkmode');
    if (savedMode === 'enabled') {
      document.body.classList.add('dark');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
      updateGithubIconColor(true);
    }
  }

  function updateGithubIconColor(isDark) {
    const githubLink = document.querySelector('.github-icon');
    if (githubLink) {
      githubLink.style.color = isDark ? '#fff' : '#333';
    }
  }

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('proresizer-darkmode', isDark ? 'enabled' : 'disabled');
    darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i><span>Light Mode</span>' : '<i class="fas fa-moon"></i><span>Dark Mode</span>';
    updateGithubIconColor(isDark);
    showToast(isDark ? 'Dark mode activated' : 'Light mode activated', 'success');
  });

  // Show toast notification
  function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Update aspect ratio display
  function updateAspectRatioDisplay() {
    if (originalWidth && originalHeight) {
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const divisor = gcd(originalWidth, originalHeight);
      const ratioW = originalWidth / divisor;
      const ratioH = originalHeight / divisor;
      aspectRatioValue.textContent = `${ratioW}:${ratioH}`;
    }
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Calculate height based on width maintaining aspect ratio
  function calculateHeightFromWidth(width) {
    return Math.round((originalHeight / originalWidth) * width);
  }

  // Calculate width based on height maintaining aspect ratio
  function calculateWidthFromHeight(height) {
    return Math.round((originalWidth / originalHeight) * height);
  }

  // Handle width change with aspect lock
  function onWidthChange() {
    if (isUpdating) return;
    
    let newWidth = parseInt(widthInput.value);
    if (isNaN(newWidth) || newWidth < 10) return;
    
    if (isAspectLocked && originalWidth && originalHeight) {
      isUpdating = true;
      const newHeight = calculateHeightFromWidth(newWidth);
      heightInput.value = newHeight;
      isUpdating = false;
    }
    
    performResize();
  }

  // Handle height change with aspect lock
  function onHeightChange() {
    if (isUpdating) return;
    
    let newHeight = parseInt(heightInput.value);
    if (isNaN(newHeight) || newHeight < 10) return;
    
    if (isAspectLocked && originalWidth && originalHeight) {
      isUpdating = true;
      const newWidth = calculateWidthFromHeight(newHeight);
      widthInput.value = newWidth;
      isUpdating = false;
    }
    
    performResize();
  }

  // Toggle aspect lock
  function toggleAspectLock() {
    isAspectLocked = !isAspectLocked;
    
    if (isAspectLocked) {
      aspectLockBtn.classList.add('locked');
      aspectLockBtn.innerHTML = '<i class="fas fa-lock"></i><span>Aspect Locked</span>';
      showToast('Aspect ratio locked - proportions will be maintained', 'success');
      
      if (originalWidth && originalHeight) {
        const currentWidth = parseInt(widthInput.value);
        if (currentWidth && !isNaN(currentWidth)) {
          const newHeight = calculateHeightFromWidth(currentWidth);
          heightInput.value = newHeight;
          performResize();
        }
      }
    } else {
      aspectLockBtn.classList.remove('locked');
      aspectLockBtn.innerHTML = '<i class="fas fa-unlock"></i><span>Aspect Unlocked</span>';
      showToast('Aspect ratio unlocked - you can stretch the image', 'info');
    }
  }

  // Load image
  function loadImage(file) {
    if (!file) return;

    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (!allowed.includes(file.type)) {
      showToast('Only JPG, PNG, WebP formats are supported', 'error');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      showToast('File size must be less than 15MB', 'error');
      return;
    }

    originalImageFile = file;
    const reader = new FileReader();

    reader.onload = function(e) {
      originalImage.src = e.target.result;
      originalImgObj.src = e.target.result;
      
      originalImgObj.onload = function() {
        originalWidth = originalImgObj.width;
        originalHeight = originalImgObj.height;
        originalDimensions.textContent = `${originalWidth} × ${originalHeight} px`;
        updateAspectRatioDisplay();
        previewContainer.style.display = 'block';
        controlsCard.style.display = 'block';
        
        widthInput.value = originalWidth;
        heightInput.value = originalHeight;
        
        performResize();
        
        showToast('Image loaded successfully!', 'success');
      };
    };
    reader.readAsDataURL(file);
  }

  // Perform resize
  function performResize() {
    if (!originalImageFile) {
      showToast('Please upload an image first', 'error');
      return;
    }

    let targetWidth = parseInt(widthInput.value);
    let targetHeight = parseInt(heightInput.value);

    if (isNaN(targetWidth) || targetWidth < 10) {
      showToast('Width must be at least 10 pixels', 'error');
      return;
    }
    if (isNaN(targetHeight) || targetHeight < 10) {
      showToast('Height must be at least 10 pixels', 'error');
      return;
    }

    if (isAspectLocked && originalWidth && originalHeight) {
      const expectedHeight = calculateHeightFromWidth(targetWidth);
      if (Math.abs(targetHeight - expectedHeight) > 1) {
        targetHeight = expectedHeight;
        heightInput.value = targetHeight;
      }
    }

    const ctx = resizedCanvas.getContext('2d');
    resizedCanvas.width = targetWidth;
    resizedCanvas.height = targetHeight;
    ctx.drawImage(originalImgObj, 0, 0, targetWidth, targetHeight);
    
    currentResizedWidth = targetWidth;
    currentResizedHeight = targetHeight;
    resizedDimensions.textContent = `${targetWidth} × ${targetHeight} px`;
    resultSection.style.display = 'block';
    
    const selectedFormat = formatSelect.value;
    resizedCanvas.toBlob(function(blob) {
      if (blob) {
        currentResizedBlob = blob;
        showToast(`Resized to ${targetWidth}×${targetHeight}px`, 'success');
      } else {
        showToast('Failed to resize image', 'error');
      }
    }, selectedFormat, 0.92);
  }

  // Download image
  function downloadImage() {
    if (!currentResizedBlob) {
      showToast('Please resize the image first', 'error');
      return;
    }

    try {
      const url = URL.createObjectURL(currentResizedBlob);
      const link = document.createElement('a');
      link.href = url;
      
      const selectedFormat = formatSelect.value;
      let extension = 'png';
      if (selectedFormat === 'image/jpeg') extension = 'jpg';
      else if (selectedFormat === 'image/webp') extension = 'webp';
      
      let fileName = `resized_${currentResizedWidth}x${currentResizedHeight}.${extension}`;
      if (originalImageFile && originalImageFile.name) {
        const name = originalImageFile.name.replace(/\.[^/.]+$/, '');
        fileName = `${name}_${currentResizedWidth}x${currentResizedHeight}.${extension}`;
      }
      
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showToast(`Downloaded: ${fileName}`, 'success');
    } catch (error) {
      showToast('Download failed, please try again', 'error');
    }
  }

  // Event listeners
  uploadArea.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      loadImage(e.target.files[0]);
    }
  });

  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#667eea';
    uploadArea.style.background = 'rgba(102, 126, 234, 0.1)';
  });
  
  uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = 'var(--upload-border)';
    uploadArea.style.background = 'var(--upload-bg)';
  });
  
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = 'var(--upload-border)';
    uploadArea.style.background = 'var(--upload-bg)';
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      loadImage(e.dataTransfer.files[0]);
    }
  });

  resizeBtn.addEventListener('click', () => performResize());
  downloadBtn.addEventListener('click', () => downloadImage());
  formatSelect.addEventListener('change', () => {
    if (originalImageFile) performResize();
  });
  
  aspectLockBtn.addEventListener('click', toggleAspectLock);
  
  widthInput.addEventListener('input', onWidthChange);
  heightInput.addEventListener('input', onHeightChange);

  // Initialize
  initDarkMode();
  updateGithubIconColor(document.body.classList.contains('dark'));
})();