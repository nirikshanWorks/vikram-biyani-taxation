import re

file_path = r'c:\Users\kansh\Downloads\Manorama_Krishirakshak_Magazine (1).html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Using regex to match the style attribute with the base64 image
pattern = r'style="position:absolute;inset:0;background:url\(\'data:image/jpeg;base64,[^\']+\'\)"'
new_content = re.sub(pattern, '', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Done removing background style.")
