
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

def parse_list(text):
    current_brand = "Unknown"
    current_category = "Mobiles"
    products = []
    lines = text.split('\n')
    
    brand_regex = r'\*([A-Z\s]+|Xiaomi|Infinix|Techno|Nokia|Oppo|Vivo|Realme|Itel)\*'
    
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Detect brand markers like *SAMSUNG* or *Xiaomi*
        brand_match = re.search(brand_regex, line, re.IGNORECASE)
        if brand_match:
            brand_val = brand_match.group(1).strip().upper()
            if "SAMSUNG ECO" in brand_val or "SAMSNUG ECO" in brand_val:
                current_brand = "Samsung"
                current_category = "Accessories"
            else:
                current_brand = brand_match.group(1).strip().capitalize()
                current_category = "Mobiles"
            continue
            
        # Try to parse product line: Name/Variant @Price or Price@
        if '@' in line:
            parts = line.split('@')
            name_part = parts[0].strip().replace('*', '')
            price_content = parts[1].strip() if len(parts) > 1 else ""
            
            # Extract price from price_content
            price_match = re.search(r'(\d+[\d,]*)', price_content)
            if not price_match:
                # Check name_part for price if @ was at the end
                price_match = re.search(r'(\d+[\d,]*)', name_part)
                
            price = price_match.group(1).replace(',', '') if price_match else "0"
            
            # Extract RAM/ROM if present (e.g. 8/256)
            specs_match = re.search(r'(\d+/\d+)', name_part)
            specs = specs_match.group(1) if specs_match else ""
            cleaned_name = name_part.replace(specs, '').strip() if specs else name_part
            
            # Clean up known prefixes like brand name if repeated
            if cleaned_name.lower().startswith(current_brand.lower()):
                cleaned_name = cleaned_name[len(current_brand):].strip()

            product = {
                "name": f"{current_brand} {cleaned_name}".strip(),
                "brand": current_brand,
                "price": price,
                "originalPrice": str(int(int(price) * 1.1)), # Placeholder discount
                "condition": "New",
                "category": current_category,
                "description": f"Official {current_brand} product with authentic PTA approval and warranty support. {specs}",
                "image": "" # To be researched
            }
            products.append(product)

    return products

products = parse_list(raw_text)
# Assign realistic IDs starting from 100
for i, p in enumerate(products):
    p["id"] = str(100 + i)

print(json.dumps(products, indent=2))
