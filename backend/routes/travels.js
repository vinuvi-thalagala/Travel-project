import { Router } from "express";
import Travel from "../models/Travel.js";

const router = Router();


router.route('/add').post(async (req, res) => {

    const {title , description} = req.body;

    const newTravel = new Travel ({

        title,
        description
    });

   await   newTravel.save().then(() => {
       console.log("Travel story  created successfully");
   }).catch((err) => {
    console.log(err)
   })
});

router.route('/').get(async (req, res) => {

    await Travel.find().then((travels) => {
        res.json(travels);
    }).catch((err) => {
        console.log(err);
    })
});

router.route('/update/:id').put(async (req, res) => {

    let travelId = req.params.id;

    const {title, description} = req.body;

    const updateTravel = ({
        title,
        description
    });

    const update =  await Travel.findByIdAndUpadate(travelId, updateTravel).then(() => {
        res.status(200).send({status : "Travle story updated successfully"}, update);
    }).catch((err) => {
        res.status(500).send({status : "error with updating travel story"});
    })
});

router.route('/delete/:id').delete(async (req, res) => {

    let travelId = req.params.id;

    await Travel.findByIdAndDelete(travelId).then(() => {
        res.status(200).send({status : "Travel story deleted successfully"})
    }).catch((err) => {
        res.status(500).send({status : "Error with deleting travle story "});
    })
});

router.route('/get/:id').get(async (req, res) => {

    let travelId = req.params.id;

    const travel = await Travel.findById(travelId).then(() => {
        res.json(travel);
    }).catch((err) => {
        res.json(err);
    })
});

export default router;