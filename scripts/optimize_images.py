import os
from PIL import Image

# Setup paths
src_dir = r"C:\Users\anilm\.gemini\antigravity\brain\c170ca46-a6c0-4bd8-8d1c-58c8438d9b2b"
dest_dir = r"E:\Projects\Professional_Portfolio\public\images\projects"

os.makedirs(dest_dir, exist_ok=True)

# List of mappings: (source_filename_prefix, output_filename)
mappings = [
    ("url_shortener_poster", "url-shortener.webp"),
    ("neuro_sig_poster", "neuro-sig.webp"),
    ("dravidian_benchmark_poster", "dravidian-benchmark.webp"),
    ("code_isolation_poster", "code-execution.webp"),
    ("veritas_traceability_poster", "veritas-marketplace.webp"),
    ("support_automation_poster", "customer-support.webp"),
]

# Find files matching the prefixes
files = os.listdir(src_dir)

for prefix, out_name in mappings:
    matched_file = None
    for f in files:
        if f.startswith(prefix) and f.endswith(".png"):
            matched_file = f
            break
    
    if matched_file:
        src_path = os.path.join(src_dir, matched_file)
        dest_path = os.path.join(dest_dir, out_name)
        print(f"Compressing {matched_file} -> {out_name}...")
        
        try:
            with Image.open(src_path) as img:
                # Save with quality=85 for WebP compression
                img.save(dest_path, "WEBP", quality=85)
                file_size = os.path.getsize(dest_path)
                print(f"Successfully saved {out_name} ({file_size / 1024:.2f} KB)")
        except Exception as e:
            print(f"Error compressing {matched_file}: {e}")
    else:
        print(f"Warning: Could not find file matching prefix '{prefix}'")

# Also clean up the original bulky files in the public directory if they exist
old_bulky_files = [
    "distributed-code-engine.webp.png",
    "fraud-detection-system.webp.png",
    "realtime-chat-system.webp.png",
    "realtime-event-processing.webp.png",
    "smart-task-manager.webp.png"
]

for old_file in old_bulky_files:
    old_path = os.path.join(dest_dir, old_file)
    if os.path.exists(old_path):
        try:
            os.remove(old_path)
            print(f"Removed old heavy asset: {old_file}")
        except Exception as e:
            print(f"Could not remove {old_file}: {e}")
