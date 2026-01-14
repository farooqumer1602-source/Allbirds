// All Products 

const Products = [
     {id:1, image:"https://www.allbirds.com/cdn/shop/files/A12270_26Q1_Mens-Varsity-Parchment-Blizzard-Sole_PDP_LEFT.png?v=1765307399&width=1024", name:"Men's Varsity", color:"Parchment", price:120, gender:"male"},
     {id:2, image:"https://www.allbirds.com/cdn/shop/files/A12523_26Q2_Varsity-Cruiser-Light-Burnt-Olive-Light-Gum-Sole_PDP_LEFT.png?v=1765308146&width=1024", name:"Men's Varsity CRUISER", color:"Light Burnt Olive", price:123,gender:"male"},
     {id:3, image:"https://www.allbirds.com/cdn/shop/files/A11959_25Q3_Tree_Runner_NZ_Medium_Grey_Blizzard_Sole_PDP_LEFT-2000x2000.png?v=1751898984&width=1024", name:"Men's Tree Runner NZ", color:"Blizzard/Dark Navy", price:100,gender:"male"},
     {id:4, image:"https://www.allbirds.com/cdn/shop/files/A12587_26Q1_Tree-Glider-Mushroom-Light-Mushroom_PDP_LEFT_82f54d05-e967-45f0-9956-264c9bee1244.png?v=1765239879&width=1024", name:"Men's Tree Glider", color:"Mushroom", price:140 , gender:"male"},
     {id:5, image:"https://www.allbirds.com/cdn/shop/files/A12506_26Q1_Trail-Runner-Deep-Red-Dark-Anthracite_PDP_LEFT_875428f9-f820-4a33-8cd5-01b830f99546.png?v=1765239238&width=1024", name:"Men's Trail Runners", color:"Deep Red", price:145 , gender:"male"},
     {id:6, image:"https://www.allbirds.com/cdn/shop/files/A12456_26Q1_Golf-Dasher-Blizzard-Burnt-Olive-Medium-Gm_PDP_LEFT_b0afba41-32ae-4837-8cd2-0458cac0c22b.png?v=1765238044&width=1024", name:"Men's Golf Dasher", color:"Blizzard/Burnt Olive", price:150 , gender:"male"},
     {id:7, image:"https://www.allbirds.com/cdn/shop/files/A12335_26Q1_Cruiser-Verdant-Green-Blizzard-Sole_PDP_LEFT_129905ba-94b9-4762-bfd9-68d58131ed07.png?v=1765237313&width=1024", name:"Men's Cruiser", color:"Verdant Green", price:105 , gender:"male"},
     {id:8, image:"https://www.allbirds.com/cdn/shop/files/A12147_25Q4_Kiwi-Clog-Dark-Camel-Stony-Cream-Sole_PDP_LEFT.png?v=1761687788&width=1024", name:"Men's Kiwi Clog", color:"Dark Camel", price:110 , gender:"male"},
     {id:9, image:"https://www.allbirds.com/cdn/shop/files/A11703_25Q3_Wool-Cruiser-Light-Tan-Natural-White-Sole_PDP_LEFT__1_26303d40-1bb0-478c-861c-b2f65bad0654.png?v=1756337223&width=1024", name:"Men's Wool Cruiser", color:"Light Tan", price:105 , gender:"male"},
     {id:10, image:"https://www.allbirds.com/cdn/shop/files/A11660_25Q3_Wool-Cruiser-Waterproof-Dark-Grey-Light-Grey-Sole_PDP_LEFT.png?v=1757024728&width=1024", name:"Men's Wool Cruiser Waterproof", color:"Dark Grey", price:140 , gender:"male"},
     {id:11, image:"https://www.allbirds.com/cdn/shop/files/A12097_25Q4_Wool-Runner-NZ-Luxe-Gold-Stony-Cream-Sole_PDP_LEFT.png?v=1761692296&width=1024", name:"Men's Wool Runner NZ", color:"Luxe Gold", price:110 , gender:"male"},
     {id:12, image:"https://www.allbirds.com/cdn/shop/files/A12071_25Q4_Wool-Runner-NZ-Waterproof-Weathered-Brown-Weathered-Brown-Sole_PDP_LEFT.png?v=1757523475&width=1024", name:"Men's Wool Runner NZ Waterproof", color:"Weathered Brown", price:150 , gender:"male"},
     {id:13, image:"https://www.allbirds.com/cdn/shop/files/A12061_25Q3_Wool-Runner-NZ-Mid-Waterproof-Stony-Cream-Rugged-Beige-Stony-Cream-Sole_PDP_LEFT.png?v=1757723839&width=1024", name:"Men's Wool Runner NZ Mid Waterproof", color:"Stony Cream/Rugged Beige", price:160 , gender:"male"},
     {id:14, image:"https://www.allbirds.com/cdn/shop/files/A11636_25Q3_Wool-Cruiser-Slip-On-Dark-Grey-Light-Grey-Sole_PDP_LEFT__1.png?v=1754513141&width=1024", name:"Men's Wool Cruiser Slip On", color:"Dark Grey", price:100 , gender:"male"},
     {id:15, image:"https://www.allbirds.com/cdn/shop/files/A12686_25Q4_Featherbed-Insole-Medium-Grey_PDP_PAIR_TOP_3cb23599-960e-4fef-803d-3b856a75d3b4.png?v=1761879257&width=1280", name:"Men's Featherbed Insole - Cruiser", color:"", price:20 , gender:"male"},
     {id:16, image:"https://www.allbirds.com/cdn/shop/files/A12686_25Q4_Featherbed-Insole-Medium-Grey_PDP_PAIR_BOTTOM_fc0c2b02-fe34-42ad-b058-cbf1dc82176b.png?v=1761879300&width=1280", name:"Men's Featherbed Insole - Runner NZ", color:"", price:20 , gender:"male"},
     {id:17, image:"https://www.allbirds.com/cdn/shop/files/A12728_25Q4_Anytime-No-Show-Heel-Grip-Medium-Grey_PDP_F-2800x2800.png?v=1767746926&width=1280", name:"Anytime No Show Heel Grip Sock", color:"Natural Grey Heather", price:14 , gender:"male"},
     {id:18, image:"https://www.allbirds.com/cdn/shop/files/A12700_26Q1_Anytime-Ankle-Heathered-Blizzard-Verdant-Green-Sole_PDP_F.png?v=1766455348&width=1280", name:"Anytime Ankle Sock", color:"Blizzard/Verdant Green", price:16 , gender:"male"},
     {id:19, image:"https://www.allbirds.com/cdn/shop/files/A12164_25Q3_Anytime-Crew-Sock-Natural-Grey-Heather_PDP_F.png?v=1760457987&width=1280", name:"Anytime Crew Sock", color:"Natural Grey Heather/Natural White", price:18 , gender:"male"},

]

export default Products;