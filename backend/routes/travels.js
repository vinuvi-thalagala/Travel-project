import { Router } from "express";
import Travel from '../models/Travel.js';
const router =  Router();

router.route("/add").post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const newTravel = new Travel({
        title,
        description
    });

    newTravel.save(),then(() => {
        res.json("Travel added");
    }).catch((err) => {
        console.log(err);
    });
});

router.route("/").get((req, res) => {
    Travel.find()
        .then(foundTravels => res.json(foundTravels));
});

router.route("/update/:id").put((req, res) => {
    const id = req.params.id;
    Travel.findById(id);
    Travel.title = req.body.title;
    Travel.description = req.body.description;
    Travel.save();
}
);

router.route("/delete/:id").delete((req, res) => {
    const id = req.params.id;
    Travel.findByIdAndDelete(id);
});

export default router;