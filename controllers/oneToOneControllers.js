const oneToOne = require("../models/onetoone")

exports.getAllonetoones = async (req, res)=>{
    try{
        const oto = await oneToOne.find({});
        res.json(oto)
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.saveNewoneToOne = async (req, res)=>{
    try{
        const newOneToone = new oneToOne(req.body);
        await oneToOne.insertOne(newOneToone)
        res.status(200).json({"message" : "oneToOne saved successfully"})
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.deleteOnToOne = async (req, res) => {
    try{
        let deleted = await oneToOne.findOneAndDelete({"_id": req.params.id});
        if(!deleted){
            res.status(400).json({"message" : "oneToOne not deleted !!"})
        }
        else{
            res.status(200).json({"message" : "oneToOne deleted successfully !!"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.updateOneToOne = async (req, res) => {
    try{
        let updated = await oneToOne.findOneAndUpdate({"_id": req.params.id}, req.body);
        if(!updated){
            res.status(400).json({"message" : "oneToOne not updated !!"})
        }
        else{
            res.status(200).json({"message" : "oneToOne updated successfully !!"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}