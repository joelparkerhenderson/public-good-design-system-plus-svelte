# Clipboard

- Uses `navigator.clipboard.writeText` for async copy
- `$state()` tracks copied status, auto-resets after 2s
- `data-copied` attribute for CSS feedback
- Callbacks: `onsuccess`, `onerror`
