/* Metals (Thanks to DansTS) */

/* INGOTS */

// Titanium Ingot
IDRegistry.genItemID("ingotTitanium");
Item.createItem("ingotTitanium", "Titanium Ingot", {name: "ingot_titanium"});
Recipes.addFurnace(BlockID.oreTitanium, ItemID.ingotTitanium, 0);

// Alloy Ingot
IDRegistry.genItemID("ingotAlloy");
Item.createItem("ingotAlloy", "Alloy Ingot", {name: "ingot_advanced_alloy"});

// Steel Ingot
IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel", "Steel Ingot", {name: "ingot_steel"});

// Lead Ingot
IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead", "Lead Ingot", {name: "ingot_lead"});
Recipes.addFurnace(BlockID.oreLead, ItemID.ingotLead, 0);

// Alluminium Ingot
IDRegistry.genItemID("ingotAlluminium");
Item.createItem("ingotAlluminium", "Alluminium Ingot", {name: "ingot_aluminium"});
Recipes.addFurnace(BlockID.oreAlluminium, ItemID.ingotAlluminium, 0);

// Copper Ingot
IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper"});
Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);

// Red Copper Ingot
IDRegistry.genItemID("ingotCopperRed");
Item.createItem("ingotCopperRed", "Red Copper Ingot", {name: "ingot_red_copper"});
Recipes.addFurnace(ItemID.ingotCopper, ItemID.ingotCopperRed, 0);

// Tin Ingot
IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin Ingot", {name: "ingot_tin"});
Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);

// Solder Ingot
IDRegistry.genItemID("ingotSolder");
Item.createItem("ingotSolder", "Solder Ingot", {name: "ingot_solder"});
RecipiesManager.addShapeless({id: ItemID.ingotSolder, count: 2, data: 0}, [{id: ItemID.ingotTin, data: 0}, {id: ItemID.ingotLead, data: 0}]);


/* PLATES */

// Titanium Plate
IDRegistry.genItemID("plateTitanium");
Item.createItem("plateTitanium", "Titanium Plate", {name: "plate_titanium"});
RecipiesManager.addRecipeWithCraftingTool({id: ItemID.plateTitanium, count: 1, data: 0}, [{id: ItemID.ingotTitanium, data: 0}], ItemID.craftingHammer);

// Iron Plate
IDRegistry.genItemID("plateIron");
Item.createItem("plateIron", "Iron Plate", {name: "plate_iron"});
RecipiesManager.addRecipeWithCraftingTool({id: ItemID.plateIron, count: 1, data: 0}, [{id: 265, data: 0}], ItemID.craftingHammer);

// Aluminium Plate
IDRegistry.genItemID("plateAluminium");
Item.createItem("plateAluminium", "Aluminium Plate", {name: "plate_aluminium"});

// Steel Plate
IDRegistry.genItemID("plateSteel");
Item.createItem("plateSteel", "Steel Plate", {name: "plate_steel"});

// Lead Plate
IDRegistry.genItemID("plateLead");
Item.createItem("plateLead", "Lead Plate", {name: "plate_lead"});
RecipiesManager.addRecipeWithCraftingTool({id: ItemID.plateLead, count: 1, data: 0}, [{id: ItemID.ingotLead, data: 0}], ItemID.craftingHammer);

// Gold Plate
IDRegistry.genItemID("plateGold");
Item.createItem("plateGold", "Gold Plate", {name: "plate_gold"});
RecipiesManager.addRecipeWithCraftingTool({id: ItemID.plateGold, count: 1, data: 0}, [{id: 266, data: 0}], ItemID.craftingHammer);

// Alloy Plate
IDRegistry.genItemID("plateAlloy");
Item.createItem("plateAlloy", "Alloy Plate", {name: "plate_advanced_alloy"});

// Copper Plate
IDRegistry.genItemID("plateCopper");
Item.createItem("plateCopper", "Copper Plate", {name: "plate_copper"});
RecipiesManager.addRecipeWithCraftingTool({id: ItemID.plateCopper, count: 1, data: 0}, [{id: ItemID.ingotCopper, data: 0}], ItemID.craftingHammer);

// Tin Plate
IDRegistry.genItemID("plateTin");
Item.createItem("plateTin", "Tin Plate", {name: "plate_tin"});
RecipiesManager.addRecipeWithCraftingTool({id: ItemID.plateTin, count: 1, data: 0}, [{id: ItemID.ingotTin, data: 0}], ItemID.craftingHammer);


/* NUGGETS */

// Lead Nugget
IDRegistry.genItemID("nuggetLead");
Item.createItem("nuggetLead", "Lead Nugget", {name: "nugget_lead"});


/* DUSTS */

// Lead Dust
IDRegistry.genItemID("dustLead");
Item.createItem("dustLead", "Lead Dust", {name: "dust_lead"});

// Iron Dust
IDRegistry.genItemID("dustIron");
Item.createItem("dustIron", "Iron Dust", {name: "dust_iron"});


/* CABLES */

// Copper Cable
IDRegistry.genItemID("cableCopper0");
Item.createItem("cableCopper0", "Copper Cable", {name: "cable_copper", meta: 0});

// Copper Cable
IDRegistry.genItemID("cableLead0");
Item.createItem("cableLead0", "Lead Cable", {name: "cable_lead", meta: 0});


/* RODS */

// Iron Rod
IDRegistry.genItemID("rodIron");
Item.createItem("rodIron", "Iron Rod", {name: "rod_iron", meta: 0});

// Titanium Rod
IDRegistry.genItemID("rodTitanium");
Item.createItem("rodTitanium", "Titanium Rod", {name: "rod_titanium", meta: 0});


/* COILS */

// Copper Coil
IDRegistry.genItemID("coilCopper");
Item.createItem("coilCopper", "Copper Coil", {name: "coil_copper", meta: 0});









