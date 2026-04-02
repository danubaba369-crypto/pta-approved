
import json
import re

raw_text = """
*HONOR*
X7b 8/256 blk@40000 Rs.

*NOTHING PHONE*
Non active
Nothing Phone 2Pro 8/128 blk/white @94000 Rs.
Nothing Phone 2A 12/256 blk @129500 Rs.
Nothing Phone 3A 12/256 wht/blk@141000 Rs.
Nothing Phone 3A Pro 12/256 blk/gry@169000 Rs.

*Samsung*
A07 4/64 blk/voilt/grn@26300Rs.
A07 4/128 green/blk/viol@31500 Rs.
A07 6/128 geeen/blk/viol@36500 Rs.
A17 6/128 blue/blk/grey@52000 Rs.
A17 8/256 blk/blu/gry@59800 Rs.
A26 8/256 wht/blk @74000 Rs.
A36 8/256 Rs.
wht/lime/prpl@100500Rs.
A54 8/256 mint@85000 Rs.
A56 12/256 olive/gry/blk/pink @126500 Rs.
A56 8/256 gry/olive/blk@116500 Rs.
S24 Fe 8/256 blk/grey/blu@170000 Rs.
S25 fe 8/256 icyblue/black/@183000 Rs.
White @182000 Rs.
S25 fe 8/512 icyblu/jet blk/navy/wht@207000 Rs.
S24 ultra 12/1TB Violet/Blu @335000 Rs.
*S26 12/256 white @290000* Rs.
*S26 12/512* Rs.
*voilet skyblue white*@350000 Rs.
*S26 PLUS 12/256* Rs.
*voilet  white*@350000 Rs.
*S26 PLUS  12/512* Rs.
*voilet  white @395000* Rs.
*S26 ULTAR 12/256* Sky   blue @435000 Rs.
*S26 ULTRA 12/512*  Sky blue  *pre booking*
@500000 Rs.
 black @490000  Rs.
S25 12/512 icy/mint/Silver/navy@258000 Rs.
S25 ultra 12/512 silverblue/blk@
353000  Gry/white@355000 Rs.
*S25 Ultra 12/256 jet-black*@330,000 Rs.
Flip 5 8/512 Crm/Lvndr @222500 Rs.
Fold 5 12/512 cream @327500 Rs.
Fold 6 12/512 Navy@490000 Rs.

*Regular Stock*
*S26Ultra 12/512* volt@473000  Rs. Blu@470500 blk/wht@465000Rs.

*S26Ultra 12/256*
Volt@410500 blu@408000 blk/wht 4040000Rs.

*S26 plus 12/512*
Viot@389500 blu/blk/wht@385500 Rs.

*S26 plus 12/256*
Volt@347000 blu/blk/wht @343500 Rs.

*S26 12/512*
Volt@338500 blu/blk/wht@335000 Rs.

*S26 12/256*
Volt@285000 blu/blk/wht@282000 Rs.

*SAMSUNG ECO*
Tab A11 4/64 Silv @46000 Rs.
Tab S10Fe 8/128 slvr/gry/blue@108000 Rs.
Tab S10 lite 6/128 gry/sil@92000  Rs.
Watch 8 classic BT 46mm @96500 Rs.
Watch 8 BT 44mm @76500 Rs.
Fit 3 blk @10000 Rs.
Buds 3fe blk @29000 Rs.
Buds Core blk/wht@13000  Rs.

*Xiaomi*
Redmi A5 4/64 blu/blk/grn/gld@24800
Redmi A5 4/128 blk@28300
Redmi 15c 4/128 blk/grn@33100
Redmi 15c 6/128 blk/grn/orng/blu@34000
Redmi 15 8/128 prpl/blk/gry@45500
*Redmi Note 15 8/128 blk/blu/Grn @65500*
*Redmi Note 15 8/256 blk/blue/Grn @70500*
*Redmi Note 15pro 8/256 blk/blu/titn @89000*
*Redmi note 15pro 12/512 blk @107500*
Redmi note 14 8/128 grn/blk/blue@50900
Redmi note 14 8/256 grn/blu/blk@53900
Redmi 14 pro 8/256 prpl/blk@71500
Redmi note 13 pro+ 12/512 prpl@130000

*INFINIX*
Smart 10 4/64 gld/sil@26400
Smart 10 Plus 4/128 sil@29500
Hot 60i 6/128 blu/sil@38000
Hot 60i 8/256 blu/prpl/sil@42300
Hot 60 Pro 8/128 blu/sil@48600
Hot 60pro plus volt/Slv @61900
Note 50 grey@69100
Note 50pro 12/256 Gry @84500
Note 60 8/256 titanium @85000
Note 60pro 8/256 blue/tiatanium @95000

*Techno*
Spark 20 Pro+ 8/256@50400

*NOKIA*
105c blk@2900
106 blk/grn/red @4000
110 black @ 4850
5710 blk @14200 

*OPPO*
A5i 4/64 red@28500
A6x 4/64 prpl/blu@29800
A6x 4/128 blu/prpl@35900
A6k 6/128 blu/violet @47900
A6s pro 8/256 blue/forest @95000

*VIVO*

Y04 4/64 gld/grn@29800 act
Y04 4/128 gld/grn@33400 act
Y05 4/64 platinum/blk/blu@30500 act
Y05 4/128 platinum/blk/blu@34100 act
*Y11d 4/128 blk/gld@39200*
*Y11d 6/128 blk/gld@47200*
Y21d 6/128 red@44900
Y21d 8/128 grn/red/prpl@50800
V60 12/256 gry/gld@133500
*V70 12/256 gry/blk@151000*
*V70 12/512 gry/blk@163800*
X200FE 12/512 blu/blk @196800
X200 Pro 16/512 titanium @270000 *act*
X200 Pro 16/512 titanium @298000 *non*
X300 Pro 16/512 Brown@312000

*REALME*
Airox charger@500
Note 60x 3/64 grn/blk @23200
Note 60X 4/64 Grn/blk@27800
Note 60x 4/128 Grn/blk @29600
Note 70 4/128 gld/blk@33200
Note 70 6/128 gld/blk@35200
*C85 pro 8/128 prpl/grn@56200* non
*15 pro 5G 12/512 silver/grn@ 145500* non
*15 pro 5G 12/512 silver/grn@ 144500* act

*ITEL*
Itel Buds Air Pro @3000
A100c 2/64 blk/gld@17600
A100c 4/64 grn/blk/gld@21200
 *City 200 4/128 black @26500*
City 100 6/128 tita/blu@26500
P65 4/128 titanium/black @26000
Super 26 ultra 8/256 gold/blk@45500
"""

specs_templates = {
    "Samsung": "Experience the ultimate in mobile technology with the {name}. Featuring a stunning {display} display, powerful {processor}, and advanced {camera} system. This PTA Approved official stock device includes Galaxy AI features like Circle to Search and Live Translate. Perfect for photography enthusiasts and power users in Pakistan.",
    "Nothing": "Revolutionary design meets pure performance. The {name} features the iconic Glyph Interface, a high-refresh {display}, and a clean Nothing OS experience. Capture every moment with its 50MP dual lens system and enjoy all-day battery life. One of the most unique smartphones available in Pakistan.",
    "Xiaomi": "Unleash the power of {name}. Equipped with a {display} and the super-fast {processor} chipset. With its {camera} camera and Titan Durability, this device is built to last. Ideal for gamers and tech lovers looking for the best value in Pakistan.",
    "Infinix": "Premium features at an unbeatable price. The Infinix {name} offers a 144Hz AMOLED fluidity, One Tap AI keys, and a massive 5160mAh battery. Official warranty stock with professional-grade photography capabilities.",
    "Techno": "Spark your creativity with {name}. Featuring a Pro-grade camera system and sleek ergonomic design. This PTA Approved device is optimized for performance and style.",
    "Default": "Discover the {name}. A premium PTA Approved device with official warranty support. Featuring a vibrant display, reliable performance, and a sleek design tailored for the modern user in Pakistan."
}

def get_product_specs(brand, name):
    # Basic spec inference for SEO unique content
    if "S25 Ultra" in name or "S26 Ultra" in name:
        return {"display": "6.9-inch Dynamic LTPO AMOLED 2X", "processor": "Snapdragon 8 Elite", "camera": "200MP Quad Pro-grade"}
    if "S24 Ultra" in name:
        return {"display": "6.8-inch Dynamic AMOLED 2X", "processor": "Snapdragon 8 Gen 3", "camera": "200MP Quad"}
    if "Nothing Phone 2" in name or "Nothing Phone 3" in name:
        return {"display": "6.7-inch Flexible AMOLED", "processor": "Dimensity 7200 Pro", "camera": "50MP Dual"}
    if "Redmi Note 15" in name:
        return {"display": "6.77-inch AMOLED 120Hz", "processor": "Snapdragon 6s Gen 3", "camera": "108MP Advanced"}
    if "Hot 60" in name:
        return {"display": "6.78-inch 144Hz AMOLED", "processor": "Helio G200", "camera": "50MP AI"}
    return {"display": "High-resolution", "processor": "Next-gen", "camera": "Universal"}

def generate_json(text):
    current_brand = "Unknown"
    current_category = "Mobiles"
    # Mapping of base_name -> product_object
    products_map = {}
    lines = text.split('\n')
    base_id = 100
    
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Detect brand markers
        brand_match = re.search(r'\*([A-Z0-9\s]+)\*', line, re.IGNORECASE)
        if brand_match:
            brand_val = brand_match.group(1).strip().upper()
            if "SAMSUNG ECO" in brand_val:
                current_brand = "Samsung"
                current_category = "Accessories"
            else:
                current_brand = brand_match.group(1).strip().capitalize()
                if "Nothing" in current_brand: current_brand = "Nothing"
                current_category = "Mobiles"
            continue
            
        if '@' in line:
            parts = line.split('@')
            full_name_raw = parts[0].strip().replace('*', '')
            price_content = parts[1].strip().replace('*', '').split('Rs.')[0].strip()
            
            price_match = re.search(r'(\d+[\d,]*)', price_content)
            if price_match:
                price = price_match.group(1).replace(',', '')
                
                # Split by colors if multiple found
                colors = []
                low_name = full_name_raw.lower()
                if any(c in low_name for c in ['blk', 'black']): colors.append('Black')
                if any(c in low_name for c in ['wht', 'white']): colors.append('White')
                if any(c in low_name for c in ['grn', 'green', 'mint']): colors.append('Green')
                if any(c in low_name for c in ['viol', 'voilt', 'violet', 'purple']): colors.append('Violet')
                if any(c in low_name for c in ['blu', 'blue', 'navy', 'icy', 'sky']): colors.append('Blue')
                
                # Clean model name for grouping (Remove RAM, colors, etc)
                name_parts = full_name_raw.split()
                model_parts = []
                storage_parts = []
                for p in name_parts:
                    lp = p.lower()
                    if '/' in p:
                        storage_parts.append(p)
                        continue
                    if lp in ['blk', 'wht', 'blue', 'grn', 'gery', 'volt', 'grey', 'blu', 'violet', 'mint', 'pink', 'gold', 'sil', 'slv', 'titanium', 'act', 'non', 'white', 'black', 'green', 'violet', 'navy', 'silver', 'cream', 'lavender', 'icy', 'sky', 'active']:
                        continue
                    model_parts.append(p)
                
                base_model_name = " ".join(model_parts)
                storage_val = storage_parts[0] if storage_parts else "Default"
                
                # Deduplicate brand in name
                display_base_name = base_model_name
                if base_model_name.lower().startswith(current_brand.lower()):
                    group_key = base_model_name.strip()
                else:
                    group_key = f"{current_brand} {base_model_name}".strip()
                
                # Image Logic
                brand_cap = current_brand.capitalize()
                brand_path = brand_cap
                model_prefix = brand_cap
                if brand_cap == "Itel":
                    brand_path = "itel"
                    model_prefix = "itel"
                elif brand_cap == "Xiaomi":
                    if "Redmi" in base_model_name: model_prefix = ""

                # Prevent brand doubling in image URL (e.g., NothingNothingPhone)
                clean_model_for_url = base_model_name
                if base_model_name.lower().startswith(current_brand.lower()):
                    # Strip brand from start of model name before adding prefix
                    clean_model_for_url = base_model_name[len(current_brand):].strip()
                
                model_url_slug = "".join(filter(str.isalnum, clean_model_for_url))
                img_path = f"https://www.whatmobile.com.pk/admin/images/{brand_path}/{model_prefix}{model_url_slug}-b.jpg"
                
                # Override image for specific models
                if "a07" in group_key.lower():
                    img_path = "https://images.priceoye.pk/samsung-galaxy-a07-pakistan-priceoye-capqs-500x500.webp"
                elif "phone 2a" in group_key.lower():
                    img_path = "https://www.whatmobile.com.pk/admin/images/Nothing/NothingPhone2a-b.jpg"
                elif "phone 2pro" in group_key.lower():
                     img_path = "https://www.whatmobile.com.pk/admin/images/Nothing/NothingPhone2-b.jpg" # Use Phone 2 as fallback

                if group_key not in products_map:
                    # Create base product
                    spec_vals = get_product_specs(current_brand, base_model_name)
                    template = specs_templates.get(current_brand, specs_templates["Default"])
                    description = template.format(name=group_key, **spec_vals)
                    
                    products_map[group_key] = {
                        "id": str(base_id + len(products_map)),
                        "name": group_key,
                        "brand": current_brand,
                        "price": price, # Will be lowest price
                        "originalPrice": str(int(int(price) * 1.15)),
                        "condition": "New",
                        "category": current_category,
                        "description": description,
                        "image": img_path,
                        "variants": []
                    }
                
                # Add variants (one per color or just one if no colors)
                items_to_create = colors if colors else ["Default"]
                for color in items_to_create:
                    variant_img = img_path
                    if "a07" in group_key.lower():
                        if color == "Green": variant_img = "https://images.priceoye.pk/samsung-galaxy-a07-pakistan-priceoye-b4qxt-500x500.webp"
                        elif color == "Violet": variant_img = "https://images.priceoye.pk/samsung-galaxy-a07-pakistan-priceoye-zrvwn-500x500.webp"
                    
                    products_map[group_key]["variants"].append({
                        "color": color if color != "Default" else "Standard",
                        "storage": storage_val,
                        "price": price,
                        "originalPrice": str(int(int(price) * 1.15)),
                        "image": variant_img
                    })
                    
                    # Update base price if this variant is cheaper
                    if int(price) < int(products_map[group_key]["price"]):
                        products_map[group_key]["price"] = price

    return list(products_map.values())

all_new_products = generate_json(raw_text)

# Integration: Overwrite existing products as per user request
final_list = all_new_products

with open('/Users/macbook/Documents/PTA Approved/data/products.json', 'w') as f:
    json.dump(final_list, f, indent=2)

print(f"Successfully consolidated into {len(all_new_products)} base products in data/products.json")
