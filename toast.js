// === Toast Notification System ===
const toastContainer = document.getElementById("toastContainer");

/**
 * Display a toast notification
 * @param {string} message - The message to display
 * @param {string} type - "error" or "success"
 */
function showToast(message, type = "error") {
    const toast = document.createElement("div");
    toast.classList.add("toast", type);

    // Icon (easy to remove - just delete this block)
    const icon = document.createElement("span");
    icon.classList.add("toast-icon");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = type === "error" ? "!" : "\u2713";
    toast.appendChild(icon);

    // Message
    const messageSpan = document.createElement("span");
    messageSpan.classList.add("toast-message");
    messageSpan.textContent = message;
    toast.appendChild(messageSpan);

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("toast-close");
    closeBtn.setAttribute("aria-label", "Dismiss notification");
    closeBtn.textContent = "\u00d7";
    closeBtn.addEventListener("click", () => dismissToast(toast));
    toast.appendChild(closeBtn);

    toastContainer.appendChild(toast);

    // Auto-dismiss after 4 seconds
    setTimeout(() => dismissToast(toast), 4000);
}

/**
 * Dismiss a toast with animation
 * @param {HTMLElement} toast - The toast element to dismiss
 */
function dismissToast(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.add("hiding");
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 300); // Match animation duration
}
