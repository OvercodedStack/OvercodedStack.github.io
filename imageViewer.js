// Image Viewer Modal Functionality
function openImageViewer(imageSrc, imageTitle) {
    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.cssText = `
        display: flex;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
        animation: fadeIn 0.3s ease-in;
    `;

    // Create modal content container
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        position: relative;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 20px;
        max-width: 90vw;
        max-height: 90vh;
        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        overflow: auto;
        animation: slideIn 0.3s ease-out;
    `;

    // Create image element
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageTitle;
    img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        border-radius: 10px;
        display: block;
        margin: 0 auto;
    `;

    // Create title element
    const title = document.createElement('h2');
    title.textContent = imageTitle;
    title.style.cssText = `
        color: white;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 0;
        font-size: 1.3em;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    `;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        right: 20px;
        top: 20px;
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        font-size: 2em;
        padding: 5px 15px;
        cursor: pointer;
        border-radius: 10px;
        transition: all 0.3s ease;
    `;
    closeBtn.onmouseover = function() {
        this.style.background = 'rgba(255, 255, 255, 0.3)';
    };
    closeBtn.onmouseout = function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
    };
    closeBtn.onclick = closeImageViewer;

    // Assemble modal
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Handle click outside modal to close
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeImageViewer();
        }
    };

    // Handle escape key to close
    document.addEventListener('keydown', handleEscapeKey);
}

function closeImageViewer() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        closeImageViewer();
    }
}

// Add keyframe animations if they don't exist
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
