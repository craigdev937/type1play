import express from "express";
import { Players } from "../models/PlayersModel";

class PlayerClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const player = Players.create({
                first: req.body.first,
                last: req.body.last,
                age: req.body.age,
                info: req.body.info
            })
            await player.save();
            res.status(res.statusCode)
                .json(player);
        } catch (error) {
            res.status(res.statusCode)
                .json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await Players
                .find()
                .then((players) => res.status(res.statusCode)
                .json(players));
        } catch (error) {
            res
                .status(res.statusCode)
                .json(res.statusMessage);
            next(error);
        }
    };

    GetOne: express.Handler = async (req, res, next) => {
        try {
            const player = await Players.findOne({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            res
                .status(res.statusCode)
                .json(player);
        } catch (error) {
            res
                .status(res.statusCode)
                .json(res.statusMessage);
            next(error);
        }
    };

    Update: express.Handler = async (req, res, next) => {
        try {
            const player = await Players.findOneOrFail({
                where: {
                    id: parseInt(req.params.id)
                }
            });
                player.first = req.body.first;
                player.last = req.body.last;
                player.age = req.body.age;
                player.info = req.body.info;
            await player.save();
            res
                .status(res.statusCode)
                .json(player);
        } catch (error) {
            res
                .status(res.statusCode)
                .json(res.statusMessage);
            next(error);
        }
    };

    Delete: express.Handler = async (req, res, next) => {
        try {
            const player = await Players.findOneOrFail({
                where: {
                    id: Number(req.params.id)
                }
            });
            await player.remove();
            res
                .status(res.statusCode)
                .json("The Player was Deleted!");
        } catch (error) {
            res
                .status(res.statusCode)
                .json(res.statusMessage);
            next(error);
        }
    };
};

export const PLAYER: PlayerClass = new PlayerClass();



