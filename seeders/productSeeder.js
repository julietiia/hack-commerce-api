const { Product } = require("../models");

module.exports = async () => {
  const products = [
    //Chairs
    {
      name: "Floria Chair",
      price: "499",
      description:
        "Upholstered allover in rich textures, this armchair lends a luxurious interpretation of modernist silhouettes to your space. Tri-leg chair features cushions at seat and back, set on a wrapped and folded structure that feels so fresh and unexpected. This custom piece of furniture will be made to order just for you. ",

      productDetail:
        "Composition & Care: Polyester, pine wood, plywood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "70",
      image: ["floria_velvet_chair_b.webp", "floria_velvet_chair_d.webp"],
      highlight: true,
      categoryId: 1,
    },
    {
      name: "Charlotte Swivel Chair",
      price: "999",
      description:
        "Cozy swivel chair inspired by vintage library designs and finished with linen-blend upholstery. ",
      productDetail:
        "Composition & Care: 71% Viscose, 17% polyester, 12% linen. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "60",
      image: ["charlotte_chair_b.webp", "charlotte_chair_d.webp"],
      highlight: true,
      categoryId: 1,
    },
    {
      name: "Greta Chair",
      price: "699",
      description:
        "Refresh your seating spaces with this legless chair upholstered allover in sleek, brown-finished faux leather. Curving silhouette features cushy pintucked cushions filled with foam. Contemporary and cozy styling is perfect for snuggling into with your current read!",
      productDetail:
        "  Composition & Care: Foam, eucalyptus, polyurethane. Spot clean . Dimensions: 35l x 33w x 31h",
      stock: "67",
      image: ["greta_chair_b.webp", "greta_chair_d.webp"],
      highlight: true,
      categoryId: 1,
    },
    {
      name: "Felix Chair",
      price: "999",
      description:
        "Instantly upgrade your reading nook and living spaces with this cozy-meets-modern arm chair. Its integrated seat cushion offers a clean finish with a seat back that wraps around to its armrests at the sides. Features a layered upholstered base that lends a timeless, cloud-like look to your space.",
      productDetail:
        "Composition & Care: Polyester, poplar wood, plywood and spot clean .Dimensions: 35l x 33w x 31h",
      stock: "47",
      image: ["felix_chair_b.webp", "felix_chair_e.webp"],
      highlight: false,
      categoryId: 1,
    },
    {
      name: "Lennon Chair",
      price: "499",
      description:
        "Cozy-meets-modern arm chair featuring an integrated backrest and cushy seat that’s perfect for your reading nook. Complete with allover curving lines and an unglazed oak wood frame that brings a delicate touch to any space. Upholstered with high-performance fabric that can withstand stains, water and more.",
      productDetail:
        "Composition & Care: 95% Polyester, 5% polycarbonate, oak wood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "68",
      image: ["lennon_chair_b.webp", "lennon_chair_d.webp"],
      highlight: false,
      categoryId: 1,
    },
    {
      name: "Wally Chair",
      price: "899",
      description:
        "Inspired by ‘80s design, this chair features a wavy silhouette with two plush cushions that create a standout modern-minimalist seating option in your space. Upholstered in a poly blend fabric finished with bold colors we love.",
      productDetail:
        "Composition & Care: Polyether sulfone, nylon, steel, plywood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "45",
      image: ["wally_chair_b.webp", "wally_chair_d.webp"],
      highlight: true,
      categoryId: 1,
    },
    {
      name: "Alexia Chair",
      price: "599",
      description:
        "Elevate your reading nooks with this chair featuring a scalloped back rest for a fresh twist on seating essentials. Cushy lounge chair finished with luxuriously plush fabrics. This custom piece of furniture will be made to order just for you.",
      productDetail:
        " Composition & Care: Polyester, pine wood, plywood and spot clean .Dimensions: 35l x 33w x 31h",
      stock: "65",
      image: ["alexia_chair_b.webp", "alexia_chair_d.webp"],
      highlight: false,
      categoryId: 1,
    },
    {
      name: "Rhea Chair",
      price: "499",
      description:
        "Refresh your reading nooks and seating areas with this cushioned chair. Upholstered allover in printed polyester fabric, this chair features a circular structure with a cushioned seat and backrest that wraps around the front to form a cozy arm rest for additional support. Finished with clean, curving lines and a swivel base so you can rotate to the right position.",
      productDetail:
        "Composition & Care: Polyester fabric, eucalyptus, foam, iron. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "45",
      image: ["rhea_chair_d.webp", "rhea_chair_e.webp"],
      highlight: false,
      categoryId: 1,
    },

    //Sofas
    {
      name: "Benji Modular Sofa",
      price: "1999",
      description:
        "Your space, your way with this upholstered sofa in a modular silhouette upholstered in polyester with a plywood frame. Featuring 3 separate pieces that you can arrange together to perfectly suit your space and change it up at a moment’s notice..",
      productDetail:
        "Composition & Care: Polyester, pine wood, plywood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "50",
      image: ["benji_modular_sofa_b.webp", "benji_modular_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },
    {
      name: "Macy Modular Sofa",
      price: "799",
      description:
        "Create the coziest seating space fit to your space with this modular sofa that's customizable to fit your space. Upholstered in ribbed corduroy. This custom piece of furniture will be made to order just for you.",
      productDetail:
        "Composition & Care: Polyester, plywood, pine wood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "50",
      image: ["macy_modular_sofa_b.webp", "macy_modular_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },
    {
      name: "Corium Modular Sofa",
      price: "1099",
      description:
        "Create a cozy sanctuary with this luxe modular sofa. Contemporary design features a cushioned seat and backrest. Pair this cozy sofa with other pieces from our Corium seating collection to create a sectional-style sofa fit for your space. This custom piece of furniture will be made to order just for you.",
      productDetail:
        " Composition & Care: Polyester, plywood, pine wood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "40",
      image: ["corium_sofa_b.webp", "corium_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },
    {
      name: "Yoji Sofa",
      price: "999",
      description:
        "Inviting upholstered love seat that captures an approachable, modern look with curving lines all over and a wooden block base. Padded construction is topped with a single seat cushion that’s equal parts chic and comfy. Two people recommended for assembly. Contemporary design features a cushioned seat and backrest. Pair this cozy sofa with other pieces from our Corium seating collection to create a sectional-style sofa fit for your space. This custom piece of furniture will be made to order just for you.",
      productDetail:
        " Composition and care: Polyester, plywood, pine wood, rubberwood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "40",
      image: ["yoji_sofa_b.webp", "yoji_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },
    {
      name: "Isobel Sofa",
      price: "1399",
      description:
        "Upholstered sofa featuring a textural weave with four squared back cushions and a trio of round accent pillows for a geometric contrast we love. With a cushioned feel allover and arms that wrap around from back in an angular design. Available exclusively at Urban Outfitters. ",
      productDetail:
        "Composition & Care: Linen, pine wood, birch wood, plywood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "40",
      image: ["isobel_sofa_b.webp", "isobel_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },
    {
      name: "Juliette Velvet Sofa",
      price: "999",
      description:
        "Vintage-inspired elegance brings a major mood to your space with this velvet love seat. Two-seater sofa features all over velvet upholstery with a smooth seat and seamed, tufted back that offers a scalloped look, propped on small, round feet.",
      productDetail:
        " Composition & Care: Eucalyptus, foam, fabric, rubberwood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "40",
      image: ["juliette_sofa_b.webp", "juliette_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },
    {
      name: "Felix Sofa",
      price: "1099",
      description:
        "Curate a statement-making living space with this cozy-meets-modern sofa. Its integrated single-piece seat cushion offers a clean finish with a seat back that wraps around to its armrests at the sides. Features a layered upholstered base that lends a cloud-like look to your space.",
      productDetail:
        " Composition & Care: Polyester, poplar wood, plywood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "30",
      image: ["felix_sofa_b.webp", "felix_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },
    {
      name: "Floria Velvet Sofa",
      price: "999",
      description:
        "Upholstered allover in rich textures, this settee-style sofa lends a luxurious interpretation of modernist silhouettes to your space. Tri-leg chair features cushions at seat and back, set on a wrapped and folded structure that feels so fresh and unexpected.",
      productDetail:
        " Composition & Care: Polyester, pine wood, plywood. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "38",
      image: ["floria_sofa_b.webp", "floria_sofa_d.webp"],
      highlight: false,
      categoryId: 2,
    },

    //Tables
    {
      name: "Alana Coffee Table",
      price: "299",
      description: "Three-tiered coffee table in modern powder-coated metal.",
      productDetail: " Composition & Care: Metal and wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "60",
      image: ["alana_table_b.webp", "alana_table_d.webp"],
      highlight: false,
      categoryId: 4,
    },
    {
      name: "Emory Coffee Table",
      price: "599",
      description:
        "Refresh your living space with this colorful acrylic coffee table featuring a classic rectangular silhouette with an integrated shelf at the base for displaying your novels, throw blankets and trinkets.",
      productDetail: " Composition & Care: Acrylic. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "30",
      image: ["emory_table_b.webp", "emory_table_e.webp"],
      highlight: false,
      categoryId: 4,
    },
    {
      name: "Kane Coffee Table",
      price: "159",
      description:
        "Elevated essential coffee table crafted from powder-coated iron in statement finishes. Its classic silhouette features an ovular tabletop set on tubular legs with curving edges for a soft touch.",
      productDetail: " Composition & Care: Metal. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "40",
      image: ["kane_table_d.webp", "kane_table_f.webp"],
      highlight: false,
      categoryId: 4,
    },
    {
      name: "Daphne Dining Table",
      price: "999",
      description:
        "Industrial-modern dining table, crafted from concrete with a round tabletop set on a tapering pedestal base. Gives your space a sleek statement, perfect for framing colorful meals inside your space or out on your patio.",
      productDetail:
        " Composition & Care: Concrete, glass fiber. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "45",
      image: ["daphne_table_b.webp", "daphne_table_d.webp"],
      highlight: false,
      categoryId: 4,
    },
    {
      name: "Silas Coffee Table",
      price: "229",
      description:
        "Refresh your living space with this statement coffee table crafted from a blend of engineered and solid wood. Retro-mod design features a rectangular tabletop with rounded corners. Tabletop is set on a duo of curving legs with a shelf at the base to store books and blankets.",
      productDetail: "Composition & Care: MDF, solid wood. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "40",
      image: ["silas_table_b.webp", "silas_table_e.webp"],
      highlight: false,
      categoryId: 4,
    },
    {
      name: "Aria Coffee Table",
      price: "399",
      description:
        "Give your space an artistic flair with this coffee table, featuring a tempered glass top sitting on a wavy wood base that’s so next-level. Use it to show off your favorite art books or get creative by decorating the ridges with your favorite little trinkets.",
      productDetail:
        "Composition & Care: Eucalyptus wood, MDF, walnut wood veneer, tempered glass. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "40",
      image: ["aria_table_b.webp", "aria_table_d.webp"],
      highlight: false,
      categoryId: 4,
    },
    {
      name: "Silas Dining Table",
      price: "890",
      description:
        "Retro-mod dining table crafted from a blend of engineered and solid wood. Its square tabletop features rounded corners and is set on a statement base with oversized cutouts for a unexpected look we love.",
      productDetail:
        "Composition & Care: MDF, oak veneer, solid wood. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "30",
      image: ["silas_dining_table_b.webp", "silas_dining_table_e.webp"],
      highlight: false,
      categoryId: 4,
    },
    {
      name: "Ryan Coffee Table",
      price: "149",
      description:
        "Refresh your living space with this metal coffee table with removable wheels. With eye-catching powder-coated finishes, this table features a square tabletop with sleek and structural legs. Option to set on wheels so you can move it wherever you need additional surface area. With simple construction that offers a timeless piece to your home collection that can move with you as your spaces and styles evolve.",
      productDetail: "  Composition & Care: Metal. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "30",
      image: ["ryan_coffee_table_b.webp", "ryan_coffee_table_e.webp"],
      highlight: false,
      categoryId: 4,
    },

    //Storage and organization
    {
      name: "Low Storage Locker",
      price: "329",
      description:
        "School is back in session! Turn your storage space into an industrial centerpiece with this steel-crafted locker featuring a low-slung silhouette with a duo of doors that open to reveal one adjustable shelf and two hooks. Complete with colorful powder coated finishes for a playful pop. Equipped with a cord cutout at the back to cleanly store your media cords.",
      productDetail: " Composition & Care: Steel. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "15",
      image: ["low_storage_locker_b.webp", "low_storage_locker_d.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Ryan Storage Cart",
      price: "169",
      description:
        "Perfect to use for additional storage and organization in your dorm, kitchen and everywhere in between, this rolling storage cart features a trio of spacious, rectangular-shaped shelves to store your treats, appliances, towels and more. Made from powder-coated iron with eye-catching color-pop finishes and set on an optional wheeled base that can go anywhere or stay stationary. With simple construction that allows for easy building and disassembling, this storage cart offers a timeless piece to your home collection that can move with you as your spaces and styles evolve.",
      productDetail: "Composition & Care: Steel. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "25",
      image: ["ryan_storage_cart_b.webp", "ryan_storage_cart_d.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Alana Side Table",
      price: "179",
      description: "Three-tiered side table in modern powder-coated metal.",
      productDetail: "Composition & Care: Metal. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "20",
      image: ["alana_side_table_b.webp", "alana_side_table_e.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Hugo Desk",
      price: "329",
      description:
        "Refresh your workspace with a contemporary feel with this metal-crafted desk. Sleek silhouette features rounded edges for a soft touch and a duo of compartments below the tabletop to store your books, tech, writing utensils and more.",
      productDetail: "Composition & Care: Metal. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "27",
      image: ["hugo_desk_b.webp", "hugo_desk_d.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Silas Desk",
      price: "359",
      description:
        "Refresh your workspace with this statement desk. Crafted from a blend of engineered and solid wood, this desk features rounded edges for a soft touch. Its spacious tabletop is set on angled blocked legs for a retro-meets-modern feel we love.",
      productDetail:
        "Composition & Care: MDF, oak veneer, solid wood. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "25",
      image: ["silas_desk_b.webp", "silas_desk_d.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Alana Bookshelf",
      price: "499",
      description:
        "Powder-coated metal bookshelf with a modular look inspired by ‘60s décor. Featuring a variety of compartments with curving edges to store books, records set at a slant, trinkets and more, just the way you like. No two displays will ever be the same!",
      productDetail: "Composition & Care: Metal. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "15",
      image: ["alana_bookshelf_b.webp", "alana_bookshelf_d.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Mason Bookshelf",
      price: "499",
      description:
        "Our favorite Mason Bookshelf gets an industrial upgrade with this iron-crafted edition. With an arching frame, this bookshelf features four shelves that are perfect for displaying your plants, trinkets and novels. Complete with colorful powder-coated finishes for vibrant pop.",
      productDetail: "Composition & Care: Iron. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "15",
      image: ["mason_metal_bookshelf_b.webp", "mason_metal_bookshelf_d.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Arched Storage",
      price: "799",
      description:
        "Create a statement display with your novels, vinyl library and trinkets with this storage shelf. Complete with a trio of fixed shelves, this shelf features an engineered wood panel at the front with an arched cutout that transforms your displays into an artful accent. Equipped with a cord cutout in the back panel.",
      productDetail: "Composition & Care: MDF, oak veneer. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "20",
      image: ["arched_storage_shelf_b.webp", "arched_storage_shelf_d.webp"],
      highlight: false,
      categoryId: 5,
    },
    {
      name: "Ebba Bookshelf",
      price: "499",
      description:
        "Instantly upgrade your space with an artful display with this playfully modern bookshelf. Use it to store recent reads, favorite ceramics, plants, trinkets, art pieces and so much more with six unique cubbies in alternating circular and ovular shapes. Finished with a cord cutout in the back panel.",
      productDetail: "Composition & Care: MDF. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "30",
      image: ["ebba_bookshelf_b.webp", "ebba_bookshelf_d.webp"],
      highlight: false,
      categoryId: 5,
    },

    //Lightning
    {
      name: "Little Glass Lamp",
      price: "49",
      description:
        "Everyone’s favorite little glass table lamp from UO Home. Perfect for your nightstand or bookshelf display, this little glass table lamp features a shaped glass vessel with a standing construction and open top. Frosty glass shade emits a warm glow.",
      productDetail:
        "Composition & Care: Glass. Wipe clean. Light bulb and batteries are not included. Dimensions: 35l x 33w x 31h",
      stock: "30",
      image: ["little_glass_table_lamp_b.webp", "little_glass_table_lamp_d.webp"],
      highlight: false,
      categoryId: 3,
    },
    {
      name: "Cohen Table Lamp",
      price: "89",
      description:
        "Elevate your lighting with this retro-mod table lamp. Its polyresin-crafted base features a tiered, bubbling with colorful finishes that lend a playful pop to your space.",
      productDetail:
        "Composition & Care: Polyresin, glass. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "20",
      image: ["cohen_table_lamp_b.webp", "cohen_table_lamp_d.webp"],
      highlight: false,
      categoryId: 3,
    },
    {
      name: "Wally Sconce",
      price: "129",
      description:
        "Create a statement with your lighting with this retro wall sconce featuring a curved, structural silhouette topped with a spherical frosted glass shade. Plugs in to power on.",
      productDetail:
        "Composition & Care: Poly-resin, iron, glass. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "15",
      image: ["wally_sconce_lamp_b.webp", "wally_sconce_lamp_d.webp"],
      highlight: false,
      categoryId: 3,
    },
    {
      name: "Wiatt Floor Lamp",
      price: "169",
      description:
        "Create a contemporary light display in your space with this floor lamp. Crafted from iron, this floor lamp features a dome-shaped shade with an angular base that lends a fresh spin to your lighting essentials.",
      productDetail:
        "Composition & Care: 95% Iron, 5% other. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "22",
      image: ["wiatt_floor_lamp_b.webp", "wiatt_floor_lamp_d.webp"],
      highlight: false,
      categoryId: 3,
    },
    {
      name: "Wally Floor Lamp",
      price: "429",
      description:
        "Illuminate your space with retro-modern style with this floor lamp featuring a subtly curved silhouette with a spherical, frosted glass shade on either side of the base. Plugs in to power on.",
      productDetail:
        "Composition & Care: Poly-resin, iron, glass. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "12",
      image: ["wally_floor_lamp_b.webp", "wally_floor_lamp_d.webp"],
      highlight: false,
      categoryId: 3,
    },
    {
      name: "Ansel Glass Lamp",
      price: "99",
      description: "Ansel Glass Table Lamp.",
      productDetail:
        "Composition & Care: Polyester, pine wood, plywood. Spot clean .Dimensions: 35l x 33w x 31h",
      stock: "12",
      image: ["ansel_lamp_b.webp", "ansel_lamp_d.webp"],
      highlight: false,
      categoryId: 3,
    },
    {
      name: "Wally Table Lamp",
      price: "139",
      description:
        "Create an artful display out of your lighting with this retro-modern table lamp featuring a twisted modular silhouette with a duo of spherical frosted glass shades. Plugs in to power on.",
      productDetail: "Composition & Care: Poly-resin, iron, glass. Dimensions: 35l x 33w x 31h",
      stock: "18",
      image: ["wallie_lamp_b.webp", "wallie_lamp_e.jpeg"],
      highlight: false,
      categoryId: 3,
    },
    {
      name: "Alora Floor Lamp",
      price: "249",
      description:
        "Refresh your lighting with this groovy floor lamp. Crafted from iron with an oversized dome-shaped shade, this floor lamp features a wiggly base for a playfully modern look we love. Plugs in to power on.  ",
      productDetail: "Composition & Care: Iron. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "14",
      image: ["alora_floor_lamp_b.webp", "alora_floor_lamp_e.webp"],
      highlight: false,
      categoryId: 3,
    },

    //Deco
    {
      name: "Poppy Taper Candle",
      price: "25",
      description:
        "Make your space bloom with this 2-in-1 taper candle and incense holder by Areaware. Made using concrete and painted in vibrant hues, this heavyweight floral-shaped candle and incense holder infuses your space with a playful pop of whimsy. Perfect for dressing up your shelf displays and accent tables, turn the bud side up to burn your stick incense or bloom side up to burn your fave taper candle.",
      productDetail:
        "Composition & Care: Cement, paint, stainless steel plate, brass sleeve. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "200",
      image: ["areaware_candle_holder_b.webp", "areaware_candle_holder_f.webp"],
      highlight: false,
      categoryId: 6,
    },
    {
      name: "Varena Wall Mirror",
      price: "199",
      description:
        "Create a chic wall display with this oversized mirror featuring a curving, layered arch silhouette. Crafted with an iron frame in statement metallic finishes and backed with an engineered wood panel for easy hanging. ",
      productDetail: "Composition & Care: Iron, MDF. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "100",
      image: ["varena_wall_mirror_b.webp", "varena_wall_mirror_d.webp"],
      highlight: false,
      categoryId: 6,
    },
    {
      name: "Felix Storage",
      price: "12",
      description:
        "Collapsible storage crate in a versatile design that stacks neatly and comes in a color-pop finish that sets your space apart. With a retro look we love, featuring geometric cutouts, it’s perfect for storing art supplies, desk essentials, snacks, fruit and so much more!",
      productDetail: "Composition & Care: Plastic. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "90",
      image: ["felix_storage_b.webp", "felix_storage_d.webp"],
      highlight: false,
      categoryId: 6,
    },
    {
      name: "Squiggle Pillow",
      price: "39",
      description:
        "Add a retro finishing touch to your bed or sofa space with this throw pillow topped with rows of squiggles. Finished with a solid cotton canvas at the back for a cool-crisp touch.",
      productDetail: "Composition & Care: 100% Cotton. Spot clean. Dimensions: 35l x 33w x 31h",
      stock: "100",
      image: ["squiggle_pillow_b.webp", "squiggle_pillow_e.webp"],
      highlight: false,
      categoryId: 6,
    },
    {
      name: "Nala Multi-Hook",
      price: "34",
      description: "Wavy wall hook with seven sturdy hooks ready for hanging all your stuff.",
      productDetail: "Composition & Care: 100% Iron. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "150",
      image: ["nala_multihook_d.webp", "nala_multihook_b.webp"],
      highlight: false,
      categoryId: 6,
    },
    {
      name: "Checkerboard Rug",
      price: "189",
      description:
        "No-slip, polyester rug pad coated with high-grade, natural rubber derived from renewable resources. The tight-weave construction allows for air flow to make vacuuming easier. ",
      productDetail:
        "Composition & Care: Polyester, rubber. Wipe clean. Dimensions: 35l x 33w x 31h",
      stock: "90",
      image: ["checkerboard_rug_b.webp", "checkerboard_rug_f.webp"],
      highlight: false,
      categoryId: 6,
    },
    {
      name: "Moodcast Candle",
      price: "28",
      description:
        "Fill your space with the entrancing fragrances of this candle by Moodcast. Made from a coconut wax blend infused with a range of scent notes. Housed in an iridescent glass vessel.",
      productDetail: "Composition & Care: Coconut wax blend. Dimensions: 35l x 33w x 31h",
      stock: "200",
      image: ["moodcastcandle_b.webp", "moodcastcandle_d.webp"],
      highlight: false,
      categoryId: 6,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Product.");
};
