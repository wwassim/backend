const Sim = require("../models/Sim.js");

exports.createSim = async (quantite) => {
  try {
    // Find the biggest ICCID (if any)
    let maxNum = await Sim.findOne({})
      .sort({ iccid: -1 })
      .select("iccid")
      .limit(1)
      .exec();

    // Determine starting ICCID based on maxNum or 00000001
    let startingIccid = maxNum ? parseInt(maxNum.iccid) + 1 : 1;

    for (let i = 0; i < quantite; i++) {
      // Generate new ICCID with leading zeros
      const newNum = (startingIccid + i).toString().padStart(8, "0"); //20 chiffres

      const newSim = await Sim.create({
        iccid: newNum,
      });

      // console.log("Created new Sim:", newSim); // Log the created Sim for debugging
    }
  } catch (error) {
    console.error("Error creating Sims:", error);
    throw error;
  }
};
